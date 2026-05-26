const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const fs = require('fs');
const path = require('path');

// 📚 LAAD DE VRAGENLIJST UIT HET ANDERE BESTAND
const questionBankFile = path.join(__dirname, 'questions.js');
let questionBank = loadQuestionBank();
let questionBankMtimeMs = fs.statSync(questionBankFile).mtimeMs;

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(express.static('public'));

let rooms = {};
let leaderboard = {};
const ADMIN_PASSWORDS = ["awooDestiny23@!", "Summa_Desi", "Lynxies"];

// --- GLOBALE INSTELLINGEN ---
let globalSettings = {
    theme: 'desert', // Opties: 'desert', 'hacker', 'space', 'neon'
    maxPlayers: 6,    // Standaard max spelers
    questionsPerRound: 10 // Standaardwaarde: 10 vragen per potje
};

// Functie om gewijzigde vragen keihard op te slaan in je bestand!
function saveQuestionsToFile() {
    const fileContent = "const questionBank = " + JSON.stringify(questionBank, null, 4) + ";\n\nmodule.exports = questionBank;";
    fs.writeFileSync(questionBankFile, fileContent, 'utf8');
    questionBankMtimeMs = fs.statSync(questionBankFile).mtimeMs;
}

function loadQuestionBank() {
    delete require.cache[require.resolve(questionBankFile)];
    return require(questionBankFile);
}

function refreshQuestionBank() {
    const fileMtimeMs = fs.statSync(questionBankFile).mtimeMs;
    if (fileMtimeMs !== questionBankMtimeMs) {
        questionBank = loadQuestionBank();
        questionBankMtimeMs = fileMtimeMs;
    }
    return questionBank;
}

// --- PERSISTENT LEADERBOARD ---
const leaderboardFile = path.join(__dirname, 'leaderboard.json');
if (fs.existsSync(leaderboardFile)) {
    try { leaderboard = JSON.parse(fs.readFileSync(leaderboardFile, 'utf8')); } 
    catch (e) { leaderboard = {}; }
}
function saveLeaderboard() { fs.writeFileSync(leaderboardFile, JSON.stringify(leaderboard, null, 2)); }

// --- GET RANDOM QUESTION & SHUFFLE OPTIONS ---
function getRandomQuestion(cats) {
    const bank = refreshQuestionBank();
    let pool = [];
    cats.forEach(c => { if(bank[c]) pool = pool.concat(bank[c]); });
    if(pool.length === 0) pool = bank["HTML & CSS"]; // Fallback

    const originalQuestion = pool[Math.floor(Math.random() * pool.length)];
    
    // Maak een kopie zodat we de originele database niet wijzigen
    let shuffledQuestion = {
        q: originalQuestion.q,
        options: [...originalQuestion.options],
        answer: originalQuestion.answer 
    };

    const correctAnswerText = originalQuestion.options[originalQuestion.answer];

    // Hussel de opties door elkaar
    for (let i = shuffledQuestion.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestion.options[i], shuffledQuestion.options[j]] = [shuffledQuestion.options[j], shuffledQuestion.options[i]];
    }

    // Update de index van het juiste antwoord
    shuffledQuestion.answer = shuffledQuestion.options.indexOf(correctAnswerText);
    return shuffledQuestion;
}

// --- VEILIGE ROOM COPY VOOR ADMIN (Voorkomt crash!) ---
function getSafeRooms() {
    let safe = {};
    for (let id in rooms) {
        safe[id] = {
            categories: rooms[id].categories, status: rooms[id].status, countdown: rooms[id].countdown,
            players: Object.values(rooms[id].players).map(p => ({ name: p.name, progress: p.progress })),
            playerCount: Object.keys(rooms[id].players).length
        };
    }
    return safe;
}

function broadcastRooms() { io.emit('activeRoomsList', Object.keys(rooms)); }

// --- SOCKET LOGICA ---
io.on('connection', (socket) => {
    const bank = refreshQuestionBank();
    socket.emit('settingsUpdated', globalSettings);
    socket.emit('updateLeaderboard', leaderboard);
    socket.emit('activeRoomsList', Object.keys(rooms));
    socket.emit('availableCategories', Object.keys(bank)); // Stuur dynamische categorieën

    socket.on('checkRoom', (name) => { socket.emit('roomStatus', !!rooms[name]); });

    socket.on('joinRoom', ({ playerName, roomName, categories }) => {
        if (!rooms[roomName]) {
            rooms[roomName] = { 
                categories: categories, players: {}, hasWinner: false, 
                status: 'waiting', countdown: 30, timerId: null 
            };
            startTimer(roomName);
            broadcastRooms();
        }
        const room = rooms[roomName];
        if (room.status === 'playing') return socket.emit('errorMessage', 'Race al bezig!');
        if (Object.keys(room.players).length >= globalSettings.maxPlayers) {
          return socket.emit('errorMessage', `Kamer is vol! (Max ${globalSettings.maxPlayers})`);
        }
        
        socket.join(roomName);
        socket.roomId = roomName;
        room.players[socket.id] = { 
            id: socket.id, name: playerName, progress: 0, 
            color: '#'+Math.floor(Math.random()*16777215).toString(16), 
            currentQuestion: getRandomQuestion(room.categories) 
        };
        
        io.to(roomName).emit('updateGame', room.players);
        socket.emit('waitingPhase', { tijd: room.countdown, categories: room.categories });
        updateAdmin();
    });

    socket.on('submitAnswer', (idx) => {
        const room = rooms[socket.roomId];
        if (!room || room.status !== 'playing' || room.hasWinner) return;
        const p = room.players[socket.id];

        if (idx === p.currentQuestion.answer) {
            const stapGrootte = 100 / globalSettings.questionsPerRound;
            p.progress += stapGrootte; // 10 goede antwoorden = finish
            if (p.progress > 100) {
                p.progress = 100;
            }
            io.to(socket.roomId).emit('camelStepped', socket.id); 
            
            if (p.progress >= 100) {
                room.hasWinner = true;
                leaderboard[p.name] = (leaderboard[p.name] || 0) + 1;
                saveLeaderboard();
                io.emit('updateLeaderboard', leaderboard);
                io.to(socket.roomId).emit('winner', p.name);
                setTimeout(() => resetRoom(socket.roomId), 6000); 
            } else {
                p.currentQuestion = getRandomQuestion(room.categories);
                socket.emit('newQuestion', p.currentQuestion);
            }
        } else {
            socket.emit('errorMessage', 'Fout! Strafseconde... Je krijgt een nieuwe vraag.');
            p.currentQuestion = getRandomQuestion(room.categories);
            setTimeout(() => socket.emit('newQuestion', p.currentQuestion), 1500);
        }
        io.to(socket.roomId).emit('updateGame', room.players);
    });

    // --- ADMIN ---
    socket.on('adminLogin', (pass) => {
        if(ADMIN_PASSWORDS.includes(pass)) {
            const bank = refreshQuestionBank();
            socket.join('admins'); 
            // Hier sturen we nu ook de questionBank mee!
            socket.emit('adminData', { 
                rooms: getSafeRooms(), 
                leaderboard: leaderboard,
                questionBank: bank,
                settings: globalSettings
            }); 
        } else { 
            socket.emit('adminError', 'Fout wachtwoord!'); 
        }
    });

    socket.on('adminForceStart', (name) => { if(rooms[name]) { rooms[name].countdown = 0; } });
    socket.on('adminDeleteRoom', (name) => { 
        if(rooms[name]) { 
            clearInterval(rooms[name].timerId); 
            io.to(name).emit('errorMessage', 'Kamer gesloten door admin.'); 
            delete rooms[name]; broadcastRooms(); updateAdmin(); 
        } 
    });
    socket.on('adminResetLeaderboard', () => {
        leaderboard = {}; saveLeaderboard();
        io.emit('updateLeaderboard', leaderboard); updateAdmin();
    });
    
    // --- ADMIN: INSTELLINGEN & THEMA ---
    socket.on('adminUpdateSettings', (newSettings) => {
        globalSettings.theme = newSettings.theme || globalSettings.theme;
        globalSettings.maxPlayers = newSettings.maxPlayers || globalSettings.maxPlayers;
        globalSettings.questionsPerRound = newSettings.questionsPerRound || globalSettings.questionsPerRound;
        io.emit('settingsUpdated', globalSettings); // Stuur direct naar ALLE spelers
        updateAdmin();
    });

    // --- ADMIN: VRAGEN BEHEREN ---
    socket.on('adminAddCategory', (catName) => {
        refreshQuestionBank();
        if (!questionBank[catName]) {
            questionBank[catName] = [];
            saveQuestionsToFile();
            io.emit('availableCategories', Object.keys(questionBank));
            updateAdmin();
        }
    });

    socket.on('adminDeleteCategory', (catName) => {
        refreshQuestionBank();
        if (questionBank[catName]) {
            delete questionBank[catName];
            saveQuestionsToFile();
            io.emit('availableCategories', Object.keys(questionBank));
            updateAdmin();
        }
    });

    socket.on('adminAddQuestion', ({ category, questionObj }) => {
        // questionObj moet zijn: { q: "Vraag?", options: ["A", "B", "C", "D"], answer: 0 }
        refreshQuestionBank();
        if (questionBank[category]) {
            questionBank[category].push(questionObj);
            saveQuestionsToFile();
            updateAdmin();
        }
    });

    socket.on('adminDeleteQuestion', ({ category, index }) => {
        refreshQuestionBank();
        if (questionBank[category] && questionBank[category][index]) {
            questionBank[category].splice(index, 1);
            saveQuestionsToFile();
            updateAdmin();
        }
    });

    socket.on('disconnect', () => { leave(socket); });
    socket.on('leaveRoom', () => { leave(socket); });
});

function startTimer(name) {
    const r = rooms[name];
    r.timerId = setInterval(() => {
        r.countdown--;
        io.to(name).emit('timerUpdate', r.countdown);
        if (r.countdown <= 0) {
            clearInterval(r.timerId);
            r.status = 'playing';
            io.to(name).emit('gameStarted');
            for(let id in r.players) io.to(id).emit('newQuestion', r.players[id].currentQuestion);
        }
    }, 1000);
}

function resetRoom(name) {
    if(!rooms[name]) return;
    rooms[name].hasWinner = false; 
    rooms[name].status = 'waiting'; 
    rooms[name].countdown = 30; 
    
    // Kamelen netjes terug naar de startlijn (0%)
    for(let id in rooms[name].players) { 
        rooms[name].players[id].progress = 0; 
        rooms[name].players[id].currentQuestion = getRandomQuestion(rooms[name].categories);
    }
    
    io.to(name).emit('backToLobby', 60);
    io.to(name).emit('updateGame', rooms[name].players);
    startTimer(name);
}

function leave(socket) {
    const name = socket.roomId;
    if (name && rooms[name]) {
        delete rooms[name].players[socket.id];
        if (Object.keys(rooms[name].players).length === 0) { clearInterval(rooms[name].timerId); delete rooms[name]; broadcastRooms(); }
        else { io.to(name).emit('updateGame', rooms[name].players); }
        updateAdmin();
    }
}

function updateAdmin() { 
    const bank = refreshQuestionBank();
    io.to('admins').emit('adminData', { 
        rooms: getSafeRooms(), 
        leaderboard: leaderboard,
        questionBank: bank, // Zorgt dat de admin live updatet als je een vraag toevoegt!
        settings: globalSettings
    }); 
}

// DRAAIT OP POORT 3033 EN TELT ALLE VRAGEN
server.listen(3033, '0.0.0.0', () => {
    console.log("🚀 Server draait op https://race.magsec.nl");
    
    // Bereken het totaal aantal vragen in alle categorieën
    const bank = refreshQuestionBank();
    let totalQuestions = 0;
    for (let category in bank) {
        totalQuestions += bank[category].length;
    }
    
    console.log(`📚 Totaal aantal vragen succesvol geladen: ${totalQuestions} vragen!`);
});
