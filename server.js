const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const fs = require('fs');
const path = require('path');

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

let globalSettings = {
    theme: 'desert',
    minPlayers: 4,
    maxPlayers: 8,
    questionsPerRound: 10
};

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

const leaderboardFile = path.join(__dirname, 'leaderboard.json');
if (fs.existsSync(leaderboardFile)) {
    try { leaderboard = JSON.parse(fs.readFileSync(leaderboardFile, 'utf8')); }
    catch (e) { leaderboard = {}; }
}
function saveLeaderboard() { fs.writeFileSync(leaderboardFile, JSON.stringify(leaderboard, null, 2)); }

function getRandomQuestion(cats) {
    const bank = refreshQuestionBank();
    let pool = [];
    cats.forEach(c => { if (bank[c]) pool = pool.concat(bank[c]); });
    if (pool.length === 0) pool = bank["HTML & CSS"];

    const original = pool[Math.floor(Math.random() * pool.length)];
    const correctText = original.options[original.answer];
    const shuffled = { q: original.q, options: [...original.options], answer: original.answer };
    for (let i = shuffled.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled.options[i], shuffled.options[j]] = [shuffled.options[j], shuffled.options[i]];
    }
    shuffled.answer = shuffled.options.indexOf(correctText);
    return shuffled;
}

function getSafeRooms() {
    let safe = {};
    for (let id in rooms) {
        safe[id] = {
            categories: rooms[id].categories, status: rooms[id].status, countdown: rooms[id].countdown,
            countdownStarted: rooms[id].countdownStarted, creatorId: rooms[id].creatorId,
            players: Object.values(rooms[id].players).map(p => ({ name: p.name, progress: p.progress })),
            playerCount: Object.keys(rooms[id].players).length
        };
    }
    return safe;
}

function broadcastRooms() { io.emit('activeRoomsList', Object.keys(rooms)); }

function broadcastLobbyUpdate(roomName) {
    const room = rooms[roomName];
    if (!room) return;
    const lobbyPlayers = Object.values(room.players).map(p => ({ id: p.id, name: p.name, color: p.color }));
    io.to(roomName).emit('lobbyUpdate', {
        players: lobbyPlayers,
        creatorId: room.creatorId,
        countdownStarted: room.countdownStarted
    });
}

io.on('connection', (socket) => {
    const bank = refreshQuestionBank();
    socket.emit('settingsUpdated', globalSettings);
    socket.emit('updateLeaderboard', leaderboard);
    socket.emit('activeRoomsList', Object.keys(rooms));
    socket.emit('availableCategories', Object.keys(bank));
    socket.emit('mySocketId', socket.id);

    socket.on('checkRoom', (name) => { socket.emit('roomStatus', !!rooms[name]); });

    socket.on('joinRoom', ({ playerName, roomName, categories }) => {
        if (!rooms[roomName]) {
            rooms[roomName] = {
                categories, players: {}, hasWinner: false,
                status: 'waiting', countdown: 10, timerId: null,
                creatorId: socket.id, countdownStarted: false
            };
            broadcastRooms();
        }
        const room = rooms[roomName];
        if (room.status === 'playing') return socket.emit('errorMessage', 'Race al bezig!');
        if (Object.keys(room.players).length >= globalSettings.maxPlayers)
            return socket.emit('errorMessage', `Kamer is vol! (Max ${globalSettings.maxPlayers})`);

        socket.join(roomName);
        socket.roomId = roomName;
        room.players[socket.id] = {
            id: socket.id, name: playerName, progress: 0,
            color: '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'),
            currentQuestion: getRandomQuestion(room.categories)
        };

        const isCreator = room.creatorId === socket.id;
        io.to(roomName).emit('updateGame', room.players);
        socket.emit('waitingPhase', { tijd: room.countdown, categories: room.categories, isCreator, countdownStarted: room.countdownStarted });
        broadcastLobbyUpdate(roomName);
        updateAdmin();
    });

    socket.on('creatorStartCountdown', () => {
        const room = rooms[socket.roomId];
        if (!room || room.status !== 'waiting' || room.countdownStarted) return;
        if (room.creatorId !== socket.id) return;

        const currentCount = Object.keys(room.players).length;
        if (currentCount < globalSettings.minPlayers) {
            socket.emit('notEnoughPlayers', { current: currentCount, min: globalSettings.minPlayers });
            return;
        }

        room.countdownStarted = true;
        io.to(socket.roomId).emit('countdownStarted', room.countdown);
        startTimer(socket.roomId);
        updateAdmin();
    });

    socket.on('submitAnswer', (idx) => {
        const room = rooms[socket.roomId];
        if (!room || room.status !== 'playing' || room.hasWinner) return;
        const p = room.players[socket.id];

        if (idx === p.currentQuestion.answer) {
            const step = 100 / globalSettings.questionsPerRound;
            p.progress = Math.min(100, p.progress + step);
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

    socket.on('adminLogin', (pass) => {
        if (ADMIN_PASSWORDS.includes(pass)) {
            const bank = refreshQuestionBank();
            socket.join('admins');
            socket.emit('adminData', { rooms: getSafeRooms(), leaderboard, questionBank: bank, settings: globalSettings });
        } else {
            socket.emit('adminError', 'Fout wachtwoord!');
        }
    });

    socket.on('adminForceStart', (name) => {
        if (rooms[name]) {
            if (!rooms[name].countdownStarted) {
                rooms[name].countdownStarted = true;
                io.to(name).emit('countdownStarted', rooms[name].countdown);
                startTimer(name);
            } else {
                rooms[name].countdown = 0;
            }
            updateAdmin();
        }
    });

    socket.on('adminDeleteRoom', (name) => {
        if (rooms[name]) {
            clearInterval(rooms[name].timerId);
            io.to(name).emit('errorMessage', 'Kamer gesloten door admin.');
            delete rooms[name]; broadcastRooms(); updateAdmin();
        }
    });

    socket.on('adminResetLeaderboard', () => {
        leaderboard = {}; saveLeaderboard();
        io.emit('updateLeaderboard', leaderboard); updateAdmin();
    });

    socket.on('adminUpdateSettings', (newSettings) => {
        globalSettings.theme = newSettings.theme || globalSettings.theme;
        if (newSettings.minPlayers) globalSettings.minPlayers = Math.max(1, parseInt(newSettings.minPlayers));
        if (newSettings.maxPlayers) globalSettings.maxPlayers = Math.max(globalSettings.minPlayers, parseInt(newSettings.maxPlayers));
        globalSettings.questionsPerRound = newSettings.questionsPerRound || globalSettings.questionsPerRound;
        io.emit('settingsUpdated', globalSettings);
        updateAdmin();
    });

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
            for (let id in r.players) io.to(id).emit('newQuestion', r.players[id].currentQuestion);
        }
    }, 1000);
}

function resetRoom(name) {
    if (!rooms[name]) return;
    rooms[name].hasWinner = false;
    rooms[name].status = 'waiting';
    rooms[name].countdown = 10;
    rooms[name].countdownStarted = false;

    for (let id in rooms[name].players) {
        rooms[name].players[id].progress = 0;
        rooms[name].players[id].currentQuestion = getRandomQuestion(rooms[name].categories);
    }

    io.to(name).emit('backToLobby', { tijd: 10, creatorId: rooms[name].creatorId });
    io.to(name).emit('updateGame', rooms[name].players);
    broadcastLobbyUpdate(name);
}

function leave(socket) {
    const name = socket.roomId;
    if (name && rooms[name]) {
        const wasCreator = rooms[name].creatorId === socket.id;
        delete rooms[name].players[socket.id];

        if (Object.keys(rooms[name].players).length === 0) {
            clearInterval(rooms[name].timerId);
            delete rooms[name];
            broadcastRooms();
        } else {
            if (wasCreator) {
                const nextPlayerId = Object.keys(rooms[name].players)[0];
                rooms[name].creatorId = nextPlayerId;
                io.to(nextPlayerId).emit('youAreNowCreator');
            }
            io.to(name).emit('updateGame', rooms[name].players);
            broadcastLobbyUpdate(name);
        }
        updateAdmin();
    }
}

function updateAdmin() {
    const bank = refreshQuestionBank();
    io.to('admins').emit('adminData', { rooms: getSafeRooms(), leaderboard, questionBank: bank, settings: globalSettings });
}

server.listen(3033, '0.0.0.0', () => {
    console.log("🚀 Server draait op https://race.magsec.nl");
    const bank = refreshQuestionBank();
    let total = 0;
    for (let cat in bank) total += bank[cat].length;
    console.log(`📚 ${total} vragen geladen.`);
});
