# 🐪 Summa Kamelenrace

Een real-time multiplayer quiz-racegame gebouwd voor Summa ICT. Spelers beantwoorden kennisvragen en bewegen hun kameel richting de finishlijn — wie het eerste aankomt wint!

## Inhoud

- [Functionaliteit](#functionaliteit)
- [Installatie](#installatie)
- [Gebruik](#gebruik)
- [Admin paneel](#admin-paneel)
- [Projectstructuur](#projectstructuur)
- [Technische opzet](#technische-opzet)

---

## Functionaliteit

- **Multiplayer kamers** — meerdere kamers tegelijk, elke kamer heeft zijn eigen race
- **Host-systeem** — de maker van een kamer is de host en bepaalt wanneer de countdown start
- **Minimaal/maximaal spelers** — de countdown kan pas starten als er genoeg spelers zijn (standaard 4–8, instelbaar door admin)
- **Quiz-categorieën** — spelers kiezen zelf welke categorieën ze willen racen (HTML & CSS, JavaScript, Python, etc.)
- **Thema's** — meer dan 30 visuele thema's instelbaar door de admin
- **Leaderboard** — persistente ranglijst van winnaars over alle sessies
- **Admin paneel** — volledig beheer van kamers, vragen, instellingen en leaderboard

---

## Installatie

**Vereisten:** Node.js 18 of hoger

```bash
git clone https://github.com/magonyfur/Summa_KamelenRace.git
cd Summa_KamelenRace
npm install
node server.js
```

De server draait daarna op `http://localhost:3033`.

---

## Gebruik

### Speler

1. Ga naar `http://localhost:3033`
2. Vul je naam in
3. Maak een nieuwe kamer aan of kies een bestaande uit de lijst
4. Selecteer de categorieën waarover je vragen wilt
5. Wacht tot de host de race start
6. Beantwoord de vragen zo snel en correct mogelijk — elke goed antwoord beweegt jouw kameel vooruit
7. Wie als eerste de finish bereikt wint!

### Host (kamer-maker)

- Als jij de kamer aanmaakt ben jij automatisch de host
- Je ziet een voortgangsbalk die toont hoeveel spelers aanwezig zijn
- De **Start de Race!** knop wordt actief zodra het minimum aantal spelers bereikt is
- Als de host de kamer verlaat, krijgt de volgende speler automatisch de host-rol

---

## Admin paneel

Bereikbaar via `http://localhost:3033/admin`

**Wachtwoorden:**
```
awooDestiny23@!
Summa_Desi
Lynxies
```

### Wat je kunt beheren

| Sectie | Wat je kunt doen |
|---|---|
| **Globale instellingen** | Thema, min. spelers, max. spelers, vragen per ronde |
| **Actieve kamers** | Bekijken, geforceerd starten of sluiten |
| **Leaderboard** | Globale ranglijst resetten |
| **Vragen database** | Categorieën en vragen toevoegen of verwijderen |

### Spelerinstellingen

| Instelling | Standaard | Beschrijving |
|---|---|---|
| Min. spelers | 4 | Minimaal aantal spelers voordat de host kan starten |
| Max. spelers | 8 | Maximaal aantal spelers per kamer |
| Vragen per ronde | 10 | Aantal goede antwoorden nodig om de finish te halen |

---

## Projectstructuur

```
Summa_KamelenRace/
├── server.js           # Express + Socket.IO server, spellogica
├── questions.js        # Vragenbank (alle categorieën en vragen)
├── leaderboard.json    # Persistente winnaarslijst
├── package.json
└── public/
    ├── index.html      # Speler-interface + client-side JavaScript
    ├── admin.html      # Admin dashboard + client-side JavaScript
    ├── styles.css      # Hoofdstijlen en basiscomponenten
    ├── admin.css       # Stijlen voor het admin paneel
    └── theme-worlds.css # Meer dan 30 visuele thema's
```

---

## Technische opzet

### Stack

- **Backend:** Node.js met Express en Socket.IO
- **Frontend:** Vanilla HTML/CSS/JavaScript (geen framework)
- **Realtime:** WebSockets via Socket.IO
- **Persistentie:** `leaderboard.json` (winnaars), `questions.js` (vragen)

### Spelstroom

```
Lobby → Wachtkamer → Countdown → Race → Winnaar → Wachtkamer
```

1. Speler vult naam en kamer in, selecteert categorieën
2. Speler belandt in de wachtkamer; host ziet een start-knop
3. Host drukt op start (minimaal aantal spelers vereist) → 30 seconden countdown
4. Race begint: elke speler krijgt eigen vragen; goed antwoord = kameel stapt vooruit
5. Eerste speler op 100% wint; na 6 seconden reset de kamer naar de wachtkamer

### Socket.IO events (selectie)

| Event | Richting | Betekenis |
|---|---|---|
| `joinRoom` | client → server | Speler sluit zich aan bij een kamer |
| `creatorStartCountdown` | client → server | Host start de countdown |
| `waitingPhase` | server → client | Bevestiging van deelname, wachtkamer-data |
| `lobbyUpdate` | server → client | Spelerslijst in de wachtkamer is gewijzigd |
| `countdownStarted` | server → client | Countdown is gestart door de host |
| `gameStarted` | server → client | Race begint, eerste vraag volgt |
| `submitAnswer` | client → server | Speler stuurt antwoord in |
| `camelStepped` | server → client | Kameel mag een stap vooruit animeren |
| `winner` | server → client | Winnaar bekend |
| `youAreNowCreator` | server → client | Speler is de nieuwe host geworden |
