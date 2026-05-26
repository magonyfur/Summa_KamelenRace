const questionBank = {
    "HTML & CSS": [
        // Makkelijke vragen
        { q: "Waar staat de 'H' in HTML voor?", options: ["Hyper", "Home", "Host", "Hard"], answer: 0 },
        { q: "Welke HTML tag gebruik je voor een gewone alinea (paragraaf) tekst?", options: ["<alinea>", "<text>", "<p>", "<para>"], answer: 2 },
        { q: "Wat doet de <br> tag in HTML?", options: ["Maakt de tekst bruin", "Begint een nieuwe regel (line break)", "Maakt de tekst breder", "Sluit de website"], answer: 1 },
        { q: "Welke HTML tag gebruik je voor een afbeelding?", options: ["<image>", "<pic>", "<img>", "<picture>"], answer: 2 },
        { q: "Wat doet de <i> tag in HTML?", options: ["Maakt tekst vetgedrukt", "Maakt tekst schuingedrukt (italic)", "Onderstreept de tekst", "Verwijdert de tekst"], answer: 1 },
        { q: "Welke taal gebruik je om een website op te maken met kleuren en lay-out?", options: ["HTML", "Python", "CSS", "C++"], answer: 2 },
        { q: "Welke tag gebruik je voor een klikbare knop?", options: ["<click>", "<button>", "<press>", "<action>"], answer: 1 },
        { q: "Wat is de juiste CSS code om de achtergrondkleur blauw te maken?", options: ["background-color: blue;", "bg: blue;", "color: blue;", "background: blauw;"], answer: 0 },
        { q: "Hoe maak je tekst vetgedrukt in HTML?", options: ["<bold>", "<b> of <strong>", "<heavy>", "<text-weight>"], answer: 1 },
        { q: "Welke HTML tag gebruik je voor een link naar een andere pagina?", options: ["<a>", "<link>", "<href>", "<nav>"], answer: 0 },
        // Gevorderde vragen
        { q: "Wat betekent HTML voluit?", options: ["Hyper Text Markup Language", "High Tech Machine Learning", "Hyper Tool Multi Language", "Home Text Markup Logic"], answer: 0 },
        { q: "Welke tag gebruik je voor de allergrootste kop?", options: ["<head>", "<h6>", "<header>", "<h1>"], answer: 3 },
        { q: "Wat betekent CSS voluit?", options: ["Cascading Style Sheets", "Computer Style Symbols", "Creative Style System", "Coded Styling Sheets"], answer: 0 },
        { q: "Welk symbool gebruik je voor een ID in CSS?", options: [".", "#", "*", "@"], answer: 1 },
        { q: "Welk symbool gebruik je voor een Class in CSS?", options: [".", "#", "*", "@"], answer: 0 },
        { q: "De functie van 'z-index' in CSS is?", options: ["De breedte bepalen", "De transparantie instellen", "De stapelvolgorde (diepte) bepalen", "De tekstgrootte aanpassen"], answer: 2 },
        { q: "Welke tag gebruik je voor een ongeordende lijst (met bolletjes)?", options: ["<ol>", "<ul>", "<li>", "<list>"], answer: 1 },
        { q: "Wat doet 'display: flex;' in CSS?", options: ["Maakt tekst flexibel", "Activeert Flexbox voor makkelijke lay-outs en uitlijning", "Verbergt een element", "Maakt een 3D animatie"], answer: 1 },
        { q: "Waarvoor dient het 'alt' attribuut in een <img> tag?", options: ["Maakt de afbeelding groter", "Geeft alternatieve tekst voor screenreaders en voor als de afbeelding niet laadt", "Verandert de kleur", "Maakt de afbeelding klikbaar"], answer: 1 },
        { q: "Wat is CSS Grid?", options: ["Een nieuw soort internet", "Een 2D lay-out systeem voor het web", "Een grafische kaart", "Een datastructuur"], answer: 1 },
        { q: "Wat is het nut van media queries in CSS?", options: ["Muziek afspelen", "Verschillende stijlen toepassen op basis van de schermgrootte (voor mobiel/desktop)", "Plaatjes inladen", "Video's comprimeren"], answer: 1 },
        { q: "Wat is het verschil tussen 'em' en 'rem' in CSS?", options: ["rem is voor kleuren, em voor tekst", "em is relatief aan de direct parent, rem is relatief aan het root element (html)", "Geen verschil", "em is altijd precies 16 pixels"], answer: 1 }
    ],
    "JavaScript": [
        // Makkelijke vragen
        { q: "Welke tag gebruik je in HTML om JavaScript code toe te voegen?", options: ["<javascript>", "<script>", "<js>", "<code>"], answer: 1 },
        { q: "Hoe maak je een pop-up melding in JavaScript?", options: ["popup('Hallo');", "msg('Hallo');", "alert('Hallo');", "window('Hallo');"], answer: 2 },
        { q: "Is JavaScript exact hetzelfde als de programmeertaal Java?", options: ["Ja, het is gewoon een afkorting", "Nee, het zijn twee totaal verschillende programmeertalen", "Java is de oude versie van JavaScript", "JavaScript is alleen voor telefoons"], answer: 1 },
        { q: "Hoe maak je een variabele 'x' met de waarde 5 in moderne JavaScript?", options: ["variable x = 5;", "let x = 5;", "x := 5;", "int x = 5;"], answer: 1 },
        { q: "Hoe schrijf je commentaar op één regel in JavaScript?", options: ["// commentaar", "", "/* commentaar */", "# commentaar"], answer: 0 },
        { q: "Met welk teken eindig je in JavaScript normaal gesproken een regel code?", options: ["Een punt (.)", "Een komma (,)", "Een puntkomma (;)", "Een dubbele punt (:)"], answer: 2 },
        // Gevorderde vragen
        { q: "Wat doet 'console.log()'?", options: ["Slaat data op", "Print tekst (onzichtbaar voor de gewone gebruiker) in de console van de browser", "Start de server", "Maakt een bestand aan"], answer: 1 },
        { q: "Welk symbool is 'Strikt Gelijk Aan' (checkt waarde én type) in JS?", options: ["=", "==", "===", "!=="], answer: 2 },
        { q: "Wat is een 'Array'?", options: ["Een enkele variabele", "Een lijst met meerdere variabelen of waardes", "Een functie", "Een database"], answer: 1 },
        { q: "Hoe maak je een variabele aan die je later NIET meer kunt veranderen in JS?", options: ["var", "let", "const", "static"], answer: 2 },
        { q: "Wat is JSON?", options: ["Java Syntax Over Network", "JavaScript Output Node", "Java Source Open Network", "JavaScript Object Notation (een standaard dataformaat)"], answer: 3 },
        { q: "Wat is de output van de som 3 + '3' in JS?", options: ["6", "33", "undefined", "NaN"], answer: 1 },
        { q: "Wat doet setTimeout()?", options: ["Pauzeert de webserver", "Voert een stukje code uit ná een bepaalde ingestelde wachttijd", "Stelt de systeemtijd in", "Meet hoe lang je code erover doet"], answer: 1 },
        { q: "Wat is de 'DOM' in JavaScript?", options: ["Data Object Model", "Document Object Model (de boomstructuur van de HTML die JS kan aanpassen)", "Desktop Operating Mode", "Display Output Module"], answer: 1 },
        { q: "Wat is een 'Promise' in JavaScript?", options: ["Een commentaar-regel", "Een object dat de uiteindelijke voltooiing (of mislukking) van een asynchrone bewerking vertegenwoordigt", "Een oneindige loop", "Een netwerk-virus"], answer: 1 },
        { q: "Hoe schrijf je een 'Arrow Function' (pijlfunctie) in moderne JS?", options: ["function => {}", "() -> {}", "() => {}", "=> function()"], answer: 2 },
        { q: "Wat doet 'async / await'?", options: ["Maakt code hardwarematig sneller", "Verzorgt asynchrone (Promises) code zodat het veel makkelijker leest, alsof het synchrone code is", "Voorkomt hackers op je website", "Start een nieuwe thread in de CPU"], answer: 1 },
        { q: "Wat is de Event Loop in JavaScript?", options: ["Een oneindige for-loop bug", "Het systeem dat beslist wanneer asynchrone callbacks uitgevoerd mogen worden op de main thread", "Een CSS animatie", "Een relationele database tabel"], answer: 1 }
    ],
    "Python": [
        // Makkelijke vragen
        { q: "Wat is Python binnen de ICT?", options: ["Een dierentuin beheer-systeem", "Een zeer populaire en leesbare programmeertaal", "Een type harde schijf", "Een lange netwerkkabel"], answer: 1 },
        { q: "Welke functie gebruik je in Python om de gebruiker iets te laten typen/invoeren op het toetsenbord?", options: ["get()", "input()", "read()", "ask()"], answer: 1 },
        { q: "Naar wie of wat is de programmeertaal Python eigenlijk vernoemd?", options: ["Een wurgslang", "Een zeldzame vogel", "De Britse comedygroep 'Monty Python'", "De bedenker had een hond die zo heette"], answer: 2 },
        { q: "Hoe maak je een variabele met de tekst 'Hallo' in Python?", options: ["let groet = 'Hallo';", "groet = 'Hallo'", "string groet = 'Hallo';", "var groet = 'Hallo'"], answer: 1 },
        { q: "Hoe print je iets naar het scherm in Python?", options: ["console.log()", "echo()", "print()", "System.out.print()"], answer: 2 },
        { q: "Wat is de juiste manier om een lijst (List) met getallen te maken in Python?", options: ["lijst = (1, 2, 3)", "lijst = {1, 2, 3}", "lijst = [1, 2, 3]", "lijst = <1, 2, 3>"], answer: 2 },
        // Gevorderde vragen
        { q: "Hoe definieer je een nieuwe functie in Python?", options: ["function mijnFunc():", "def mijnFunc():", "create mijnFunc():", "func mijnFunc():"], answer: 1 },
        { q: "Wat is het Python equivalent van 'null' of 'undefined' uit andere talen?", options: ["Nil", "None", "Empty", "Zero"], answer: 1 },
        { q: "Welk datatype is { 'naam': 'Henk', 'leeftijd': 42 } in Python?", options: ["List", "Tuple", "Dictionary (dict)", "Set"], answer: 2 },
        { q: "Hoe converteer je de tekst '10' veilig naar een heel getal in Python?", options: ["Number('10')", "int('10')", "float('10')", "convert('10')"], answer: 1 },
        { q: "Wat is het grote verschil tussen een List en een Tuple in Python?", options: ["Een Tuple is altijd onzichtbaar", "Een List is read-only", "Een Tuple kan niet meer worden gewijzigd na creatie (het is immutable)", "Er is letterlijk geen verschil"], answer: 2 },
        { q: "Wat is 'pip' in de Python wereld?", options: ["Een ingebouwd geluidseffect", "De standaard pakketbeheerder om handige externe libraries/modules te downloaden", "Een rekensom-functie", "Een foutmelding"], answer: 1 },
        { q: "Hoe weet Python welke regels code bij een if-statement of in een functie horen?", options: ["Met accolades {}", "Met haakjes ()", "Door het inspringen van de regels (Indentation / Tab)", "Door een eind-tag </if> te gebruiken"], answer: 2 },
        { q: "Wat is het resultaat van 10 // 3 (Floor division) in Python?", options: ["3.333", "3", "1", "0"], answer: 1 },
        { q: "Waarvoor wordt het 'self' keyword gebruikt in Python classes?", options: ["Om de klasse direct af te sluiten", "Het verwijst naar de specifieke instantie (het object zelf) van de klasse", "Om een while-loop te breken", "Het is een verplichte bestandsnaam"], answer: 1 },
        { q: "Wat doet een 'lambda' functie in Python?", options: ["Start de webserver op", "Maakt een anonieme, kleine functie die op één enkele regel past", "Kopieert een complete lijst", "Versleutelt opgeslagen wachtwoorden"], answer: 1 },
        { q: "Wat is de speciale functie __init__ in een Python class?", options: ["Het sluit het draaiende programma af", "Het is de constructor-methode die volautomatisch wordt aangeroepen bij het maken van een nieuw object uit die class", "Het initialiseert de WiFi module", "Het wist alle opgeslagen variabelen"], answer: 1 }
    ],
    "Databases": [
        // Makkelijke vragen
        { q: "Waarvoor wordt een database voornamelijk gebruikt in de ICT?", options: ["Om het beeldscherm aan te sturen", "Om gestructureerd grote hoeveelheden data (zoals accounts) veilig op te slaan en razendsnel terug te vinden", "Om stroom te leveren aan de pc", "Om computervirussen te verwijderen"], answer: 1 },
        { q: "Wat is een 'Tabel' in een database?", options: ["Een letterlijk houten bureau", "Een verzameling van rijen en kolommen met data (denk aan een Excel-werkblad)", "Een type geheim wachtwoord", "Een speciaal soort internetkabel"], answer: 1 },
        { q: "Als je een nieuw account aanmaakt op een webshop, welk database commando gebeurt er dan op de achtergrond?", options: ["DELETE", "INSERT", "DROP", "SELECT"], answer: 1 },
        { q: "Wat betekent het om een 'back-up' van je database te maken?", options: ["De database veel sneller maken", "Een veilige reservekopie maken van al je gegevens voor het geval de server crasht of gehackt wordt", "De database compleet verwijderen", "De database updaten naar een nieuwe versie"], answer: 1 },
        // Gevorderde vragen
        { q: "Wat betekent de afkorting 'SQL'?", options: ["Simple Query Language", "Structured Query Language", "Strong Question Logic", "System Query Link"], answer: 1 },
        { q: "Welk SQL-commando gebruik je om specifieke data uit de database op te vragen?", options: ["GET", "EXTRACT", "PULL", "SELECT"], answer: 3 },
        { q: "Wat is een 'Primary Key' in een database tabel?", options: ["Het admin wachtwoord van de master database", "Een uniek veld (bijv. UserID) dat elke specifieke rij in een tabel uniek identificeert zodat er geen verwarring ontstaat", "De allergrootste tabel", "De eigenaar van het systeem"], answer: 1 },
        { q: "Welke van deze systemen is een bekende NoSQL database?", options: ["PostgreSQL", "SQLite", "MongoDB", "MariaDB"], answer: 2 },
        { q: "Waar staat de veelgebruikte afkorting 'CRUD' voor in app/database development?", options: ["Create, Read, Update, Delete", "Code, Run, Upload, Deploy", "Copy, Read, Undo, Draft", "Compile, Run, User, Data"], answer: 0 },
        { q: "Wat doet een 'Index' in een grote database (vergelijkbaar met de index achterin een dik leesboek)?", options: ["Verwijdert dubbele data automatisch", "Versnelt het zoeken naar specifieke data enorm", "Maakt automatische back-ups aan", "Beveiligt de tabellen met een pincode"], answer: 1 },
        { q: "Wat is een 'Foreign Key'?", options: ["Een gehackt wachtwoord uit een ander land", "Een veld in tabel A dat direct verwijst naar de Primary Key in tabel B (hiermee leg je wiskundige relaties tussen tabellen)", "Een veld dat absoluut niet leeg mag zijn", "Een extern IP-adres van een andere server"], answer: 1 },
        { q: "Welk SQL commando gebruik je om data te groeperen (vaak gebruikt in combinatie met functies zoals COUNT of SUM)?", options: ["ORDER BY", "COLLECT", "GROUP BY", "SORT BY"], answer: 2 },
        { q: "Waar staat de afkorting ACID voor binnen de theorie van betrouwbare databases?", options: ["Atomicity, Consistency, Isolation, Durability", "Active Code In Database", "Automated Crash Incident Defense", "Advanced Calculation In Data"], answer: 0 },
        { q: "Wat is 'Normalisatie' in relationeel database design?", options: ["Data zwaar versleutelen voor het darkweb", "Data efficiënt opsplitsen en verdelen over meerdere logische tabellen om dubbele informatie (redundantie) en update-fouten te voorkomen", "De database resetten naar de fabrieksinstellingen", "Wachtwoorden beveiligen met een salt"], answer: 1 },
        { q: "Wat is een 'Stored Procedure'?", options: ["Een verborgen map op de webserver", "Een opgeslagen, vooraf gecompileerde SQL code of functie binnen de database zélf, die je direct kunt aanroepen", "Een vaste back-up procedure", "Een betaalde database licentie"], answer: 1 }
    ],
    "Netwerken": [
        // Makkelijke vragen
        { q: "Wat is het 'Internet' eigenlijk in de basis?", options: ["Een grote magische computer in de Verenigde Staten", "Een gigantisch, wereldwijd netwerk van aan elkaar verbonden computers, servers en kilometerslange kabels", "Een onzichtbare datakolk in de lucht", "Een exclusief programma van Microsoft"], answer: 1 },
        { q: "Waar staat WiFi eigenlijk voor?", options: ["Wireless Fidelity", "Wireless Fiber", "Wired Filter", "Het staat officieel helemaal nergens voor (het is ooit simpelweg bedacht als een leuk klinkende merknaam)"], answer: 3 },
        { q: "Wat heb je thuis in de meterkast nodig om fysiek verbinding te maken met het internet van je provider (zoals Ziggo of KPN)?", options: ["Een gaming muis", "Een Modem / Router", "Een USB-stick van 64GB", "Een snelle Videokaart"], answer: 1 },
        { q: "Waarvoor gebruik je een UTP (Ethernet) netwerkkabel?", options: ["Om je laptop batterij razendsnel op te laden", "Om bekabeld, stabiel en vaak veel sneller internet/netwerk te krijgen dan via WiFi", "Om muziek in hoge kwaliteit te luisteren", "Om draadloos te printen vanaf je telefoon"], answer: 1 },
        { q: "Wat is een Web Browser?", options: ["Een agressieve virusscanner", "Een programma (zoals Google Chrome, Safari of Firefox) dat HTML-code omzet in de websites die je kunt bekijken", "Een onderdeel binnenin je computerkast", "Een synoniem voor een netwerkkabel"], answer: 1 },
        // Gevorderde vragen
        { q: "Wat is de extreem belangrijke functie van een DNS-server?", options: ["Host de mediabestanden van websites", "Werkt als het telefoonboek van het internet: het vertaalt voor mensen leesbare domeinnamen (zoals google.com) naar wiskundige IP-adressen", "Beveiligt thuisnetwerken tegen hackers", "Slaat alle verzonden e-mails op"], answer: 1 },
        { q: "Wat is de standaard netwerkpoort voor veilige en versleutelde HTTPS verbindingen?", options: ["80", "8080", "443", "22"], answer: 2 },
        { q: "Wat wordt in de IT bedoeld met 'localhost'?", options: ["De centrale zoek-server van Google", "Een netwerk-referentie (met IP 127.0.0.1) die altijd terugwijst naar de lokale computer waar je op dat moment op werkt", "Een zwaar gehackte server", "Het gehele publieke internet"], answer: 1 },
        { q: "Wat is het cruciale verschil tussen de netwerkprotocollen TCP en UDP?", options: ["TCP is uiterst betrouwbaar (checkt of elk pakketje is aangekomen), UDP is sneller maar checkt de aankomst niet (ideaal voor livestreams en snelle online games)", "TCP is volledig draadloos, UDP is uitsluitend bekabeld", "TCP is puur voor online games, UDP puur voor trage websites", "Er is geen wezenlijk verschil"], answer: 0 },
        { q: "Wat doet een DHCP-server in je thuis- of bedrijfsnetwerk?", options: ["Houdt actief hackers en virussen tegen", "Deelt volledig automatisch IP-adressen (en subnet/gateway info) uit aan elk apparaat dat met je netwerk verbindt", "Vertaalt direct webadressen naar IP's", "Zendt alleen WiFi signalen uit"], answer: 1 },
        { q: "Waarom stapt de wereld momenteel (vrij langzaam) over van IPv4 naar IPv6?", options: ["Omdat IPv6 verplicht is gesteld door de Europese Unie", "De wereldwijde pool van beschikbare IPv4 adressen (ongeveer 4,3 miljard stuks) is simpelweg vrijwel uitgeput", "Omdat IPv6 volledig gratis is in gebruik", "Omdat IPv4 technisch niet meer werkt via de nieuwste WiFi 6 routers"], answer: 1 },
        { q: "Wat is een MAC-adres?", options: ["Een speciaal IP-adres dat alleen voor Apple MacBooks wordt gebruikt", "Een uniek, in de fabriek permanent ingebakken fysiek hardware-adres van een specifieke netwerkkaart of netwerkchip", "Een WiFi wachtwoord", "Een modern routerings-protocol"], answer: 1 },
        { q: "Welke specifieke netwerkpoort wordt standaard gebruikt voor SSH (Secure Shell) om veilig op afstand in servers te werken?", options: ["21", "22", "80", "443"], answer: 1 },
        { q: "Wat is de functie van een Subnet Masker (Subnet Mask)?", options: ["Het beveiligt de router met zware encryptie", "Het bepaalt wiskundig welk specifieke deel van een IP-adres bedoeld is voor het 'netwerk' en welk deel voor de specifieke 'host/computer'", "Het blokkeert inkomende virussen", "Het maakt de kabelverbinding sneller"], answer: 1 },
        { q: "Wat betekent 'BGP' (Border Gateway Protocol)?", options: ["Een sterke hardware firewall", "Het 'postkantoor' protocol van het internet; het is verantwoordelijk voor het bepalen van de meest efficiënte routes tussen de grote wereldwijde netwerken (Autonomous Systems)", "Een lokaal, verouderd WiFi protocol", "Een supersnelle database verbinding"], answer: 1 }
    ],
    "Hardware & OS": [
        // Makkelijke vragen
        { q: "Welk hardware apparaat gebruik je doorgaans om teksten in te typen op de computer?", options: ["Een draadloze muis", "Een monitor", "Een toetsenbord (Keyboard)", "Een 3D printer"], answer: 2 },
        { q: "Waar staat de bekende 'USB' afkorting voor (zoals in een USB-stick of USB-kabel)?", options: ["Universal Serial Bus", "United States Bank", "Under Screen Button", "Ultra Speed Battery"], answer: 0 },
        { q: "Welk wereldberoemd besturingssysteem is gebouwd en wordt verkocht door Microsoft?", options: ["MacOS", "Windows", "Linux", "Android"], answer: 1 },
        { q: "Wat doet de harde schijf (HDD of SSD) in je computer?", options: ["Hij maakt een tikkend geluid", "Hij berekent wiskundige sommen", "Hij slaat al je documenten, foto's, spellen en het besturingssysteem permanent op, zelfs als je de stekker eruit trekt", "Hij geeft stroom aan je muis"], answer: 2 },
        { q: "Wat is de processor (CPU) van een computer?", options: ["Het scherm waarop je kijkt", "De behuizing van de computer", "De 'rekenkamer' of het brein van de computer dat alle taken en berekeningen razendsnel uitvoert", "De koelventilator"], answer: 2 },
        // Gevorderde vragen
        { q: "Wat is de hoofdfunctie van RAM-geheugen (Werkgeheugen)?", options: ["Bestanden permanent opslaan voor altijd, net als een harde schijf", "Het is tijdelijke, ultrasnelle data-opslag voor de CPU om bestanden, games en programma's in te openen waar je op DIT moment in werkt", "Grafische beelden renderen op je scherm", "Het internetverkeer regelen"], answer: 1 },
        { q: "Wat is Linux?", options: ["Een gecompileerde programmeertaal", "Een nieuwe webbrowser uit China", "Een extreem krachtig, gratis en open-source besturingssysteem dat vooral de basis vormt voor vrijwel alle servers wereldwijd", "Een dure game engine"], answer: 2 },
        { q: "Waar staat de term GPU voor in de hardware wereld?", options: ["Global Processing Unit", "Graphical Processing Unit (dit is de krachtige rekenchip op je Videokaart die beelden en pixels berekent)", "General Power Utility", "Gaming Performance Upgrade"], answer: 1 },
        { q: "Wat doet koelpasta (thermal paste) precies in een computerbuild?", options: ["Het smeert de draaiende ventilatoren zodat ze niet piepen", "Het verbetert de warmteoverdracht door de onzichtbare, microscopische lucht-kieren tussen de hete processor (CPU) en het koelelement op te vullen", "Het lijmt de processor muurvast aan het moederbord", "Het voorkomt direct kortsluiting met eventueel vocht"], answer: 1 },
        { q: "Wat is het BIOS of UEFI in een modern computersysteem?", options: ["Een gevaarlijk computervirus", "De opstart-showcase van Windows 11", "Het is firmware op het moederbord die álle aangesloten hardware test (POST) en initialiseert, vlak voordat hij het besturingssysteem laat starten", "Een verouderd type langzaam SSD geheugen"], answer: 2 },
        { q: "Wat betekent de populaire term NVMe?", options: ["New Video Memory Engine", "Non-Volatile Memory Express (een uiterst modern, razendsnel data-protocol en interface speciaal ontworpen om de maximale snelheid uit M.2 SSD's te halen)", "Network Virtual Machine", "Null Value Measurement"], answer: 1 },
        { q: "Wat is de cruciale functie van de PSU (Voeding)?", options: ["Gevaarlijke wisselstroom (AC) uit het stopcontact omzetten in lage, veilige en stabiele gelijkstroom (DC) voor al je gevoelige pc componenten", "Alleen ruwe data opslaan", "Processors actief koelen met water of koelvloeistof", "Je IP en netwerk instellen"], answer: 0 },
        { q: "Waar staat de afkorting PCIe voor op een moederbord?", options: ["Personal Computer Internet Ethernet", "Peripheral Component Interconnect Express (het fysieke, razendsnelle uitbreidingsslot op je moederbord voor o.a. zware videokaarten en WiFi-kaarten)", "Processor Core Intelligence", "Power Cable Interface"], answer: 1 },
        { q: "Wat is het technische verschil tussen ouderwetse HDD en moderne SSD opslag?", options: ["Een SSD heeft juist heel veel kleine, fragiele bewegende delen", "Een HDD gebruikt fysiek draaiende magnetische schijven met een leeskop (dus traag en gevoelig); een SSD gebruikt elektronisch flashgeheugen (geen bewegende delen, dus muisstil, zuinig en super snel)", "Een HDD is qua inlaadtijden altijd veel sneller dan een SSD", "Er is geen verschil in hardware, het is alleen een ander merk"], answer: 1 },
        { q: "Wat is 'Virtual Memory' (Pagefile of Swapspace)?", options: ["Betaalde opslag in een clouddienst", "Een door het OS gereserveerd stukje van je (tragere) opslagschijf (SSD/HDD) dat als tijdelijk 'nood-werkgeheugen' wordt gebruikt als het échte, fysieke RAM vol zit", "Heel duur, gespecialiseerd geheugen puur voor VR games", "Fictief, niet bestaand geheugen uit een bug"], answer: 1 }
    ],
    "Cybersecurity": [
        // Makkelijke vragen
        { q: "Mag je je wachtwoord zomaar delen met je allerbeste vriend(in) of partner?", options: ["Ja, tuurlijk, als ik hem/haar maar echt vertrouw", "Nee, een wachtwoord houd je áltijd en strikt voor jezelf, zonder uitzonderingen", "Alleen op een beveiligde schoolcomputer", "Ja, maar alleen als je het via Whatsapp of Snapchat stuurt"], answer: 1 },
        { q: "Wat is een voorbeeld van een echt goed, sterk wachtwoord?", options: ["123456", "MijnEigenNaam123", "Welkom2024", "Een lange en unieke zin (een zogenaamde wachtzin) met letters, cijfers en vreemde speciale tekens (!@#) erin"], answer: 3 },
        { q: "Je krijgt een paniekerig mailtje van 'Jouw Bank' met een rode link om direct in te loggen omdat je pinpas vandaag is geblokkeerd. Wat is de beste actie?", options: ["Ik klik heel snel op de link en log in om mijn pas te redden", "Ik stuur de mail in paniek door naar mijn vrienden", "Ik klik absoluut nergens op en log zelf in via de officiële, bekende website of bank-app (het is hoogstwaarschijnlijk 'phishing')", "Ik beantwoord de mail direct en stuur ze mijn pincode"], answer: 2 },
        { q: "Wat doet een Antivirus programma?", options: ["Het maakt de processor van de computer 10x sneller", "Het scant de bestanden op je computer continu en verwijdert direct schadelijke, kwaadaardige software (malware/virussen)", "Het bouwt volautomatisch nieuwe en veilige websites", "Het verbetert en verlengt het bereik van je WiFi signaal"], answer: 1 },
        // Gevorderde vragen
        { q: "Wat is 'Phishing' binnen cybersecurity?", options: ["Vissen in een vrolijke online multiplayer game", "Een vorm van social engineering: het stelen van wachtwoorden of data door mensen te misleiden met valse e-mails, berichtjes of identiek nagemaakte inlog-websites", "Een agressief virus dat onzichtbaar in de achtergrond draait op je RAM", "Een hele strenge firewall instelling van het bedrijf"], answer: 1 },
        { q: "Wat is Ransomware?", options: ["Levensgevaarlijke gijzelsoftware die binnendringt, je belangrijkste bestanden onleesbaar versleutelt (encryptie) en de ontsleutelcode pas vrijgeeft nadat je anoniem flink losgeld (vaak in Bitcoin) betaalt", "Een gratis, maar onbekend open-source antivirus programma", "Een fysiek type hardware om je bedrijfsnetwerk te beveiligen tegen indringers", "Een verouderd en kwetsbaar lokaal netwerkprotocol"], answer: 0 },
        { q: "Wat doet een Hardware of Software Firewall precies?", options: ["Het blust letterlijk een fysieke brand in de serverkast door zuurstof weg te trekken", "Het maakt de internetverbinding van je pc kunstmatig sneller door data te comprimeren", "Het fungeert als een strikte digitale poortwachter: het inspecteert al het inkomend én uitgaand netwerkverkeer en blokkeert of laat het door, puur op basis van vooraf ingestelde strenge beveiligingsregels", "Het zoekt en verwijdert direct alle virussen op je C-schijf"], answer: 2 },
        { q: "Wat is een DDoS (Distributed Denial of Service) aanval?", options: ["Het in hoge snelheid slim raden van een lang wachtwoord via een woordenboek-aanval", "Een website, netwerk of server volledig onbereikbaar maken (laten crashen) door deze op exact hetzelfde moment te overspoelen met extreem veel nep-verkeer uit een wereldwijd botnet (bestaande uit gehackte computers of slimme thermostaten)", "Een agressief virus handmatig installeren via een 'gevonden' USB stick op de parkeerplaats", "Het fysiek inbreken in een pand om een bedrijfs-laptop te stelen"], answer: 1 },
        { q: "Wat is SQL Injection (SQLi)?", options: ["Letterlijk een naald of boor in de platters van een defecte harde schijf steken om hem te vernietigen", "Een veelvoorkomende, gevaarlijke hack waarbij kwaadaardige database-commando's in de tekstvakken van een onbeveiligd webformulier worden ingetypt. Hierdoor kan de hacker de database manipuleren of alle geheime gebruikersdata (zoals onversleutelde wachtwoorden) inzien en stelen", "Een tool om een trage database drastisch te versnellen met extra geheugen", "Het volautomatisch back-uppen van de data naar een USB drive"], answer: 1 },
        { q: "Wat is 2FA (Two-Factor Authentication) of MFA (Multi-Factor Authentication)?", options: ["Voor de zekerheid altijd twee keer hetzelfde wachtwoord vlak achter elkaar intypen", "Het inlogproces zwaar beveiligen door altijd 2 compleet onafhankelijke bewijzen van je identiteit te vragen: iets wat je wéét (bijvoorbeeld je wachtwoord) én iets wat je fysiek hébt (bijvoorbeeld een code gegenereerd op je telefoon of in een authenticator app)", "Twee aparte accounts aanmaken voor dezelfde website als backup", "Twee fysieke firewalls strak achter elkaar zetten in het netwerk"], answer: 1 },
        { q: "Wat is een 'Man-in-the-Middle' aanval (MitM)?", options: ["Een bekende glitch of bug in een populaire online multiplayer game", "Een situatie waarbij een hacker zich stiekem digitaal nestelt of plaatst ín de communicatielijn tussen twee communicerende partijen (bijv. tussen jou en je bank, vaak op onbeveiligde openbare WiFi netwerken) met als doel om de verzonden data te lezen, te stelen of zelfs ongemerkt aan te passen", "Een server die midden in de nacht uit het niets vasthangt door overbelasting", "Een permanent geblokkeerde netwerkpoort op een router"], answer: 1 },
        { q: "Wat is het fundamentele technische verschil tussen Encryptie (Versleuteling) en Hashing?", options: ["Encryptie is extreem traag op de CPU, Hashing is juist super snel en efficiënt", "Encryptie is specifiek bedoeld als tweerichtingsverkeer en is altijd omkeerbaar (de data is weer te ontcijferen of decrypten als je in het bezit bent van de juiste sleutel). Hashing is daarentegen strikt éénrichtingsverkeer (de output is met geen mogelijkheid meer terug te rekenen naar de input, wat het perfect maakt voor het extreem veilig opslaan van wachtwoorden in een database)", "Er is geen verschil in werking, alleen in het land van herkomst", "Hashing wordt uitsluitend gebruikt om grote plaatjes en video's te beveiligen"], answer: 1 },
        { q: "Wat is de gevreesde 'Zero-day exploit'?", options: ["Een hack in een stokoud 0-bit of 8-bit retro systeem uit de jaren 80", "Een uiterst gevaarlijke cyberaanval die razendsnel misbruik maakt van een kritieke kwetsbaarheid of fout in software, die op dat exacte moment nog ONBEKEND is bij de fabrikant of de maker van die software (waardoor de maker letterlijk 'nul dagen' de tijd heeft gehad om een patch of fix uit te brengen)", "Een speciaal virus dat is geprogrammeerd om uitsluitend in de donkere uren van de nacht (tussen 00:00 en 06:00) geactiveerd te worden", "Een volkomen legale tool die door IT-beheerders wordt gebruikt om de schijven schoon te maken"], answer: 1 },
        { q: "Wat is XSS (Cross-Site Scripting)?", options: ["Een snelle methode om vervelende pop-up websites te forceren om te sluiten", "Een uiterst veelvoorkomende aanval waarbij een hacker erin slaagt om onzichtbaar kwaadaardige JavaScript code (vaak via een reactieveld of URL) te injecteren op een verder legitieme, vertrouwde website. Deze kwaadaardige code wordt vervolgens vrolijk uitgevoerd in de browser van elke nietsvermoedende onschuldige bezoeker die de pagina opent, waardoor de hacker bijvoorbeeld cookies of sessie-tokens kan stelen", "Een trage server instelling in Apache of Nginx", "Een zwaar verouderde HTML tag die niet meer gebruikt wordt in HTML5"], answer: 1 }
    ],
    "Git & Versiebeheer": [
        // Makkelijke & Gevorderde vragen samengevoegd
        { q: "Wat is de absolute hoofdfunctie van het programma Git?", options: ["Websites live en publiek hosten op het internet", "Het faciliteren van decentraal versiebeheer: het slaat de gehele geschiedenis van al je broncode op, zodat je letterlijk altijd terug in de tijd kunt naar eerdere versies, en je extreem makkelijk en veilig tegelijkertijd met andere programmeurs aan hetzelfde project kunt samenwerken", "Het scannen van virussen en malware verborgen in je broncode", "Je geschreven code sneller omzetten (compileren) naar machinetaal"], answer: 1 },
        { q: "Welk commando gebruik je in je command-line (terminal) om een online repository (zoals een open-source project op GitHub) in zijn geheel naar je lokale PC te downloaden?", options: ["git copy", "git pull", "git clone", "git download"], answer: 2 },
        { q: "Met welk cruciaal commando sla je je 'gestagede' (klaargezette) wijzigingen veilig lokaal op in de Git-historie, samen met een verplicht (en liefst duidelijk) log-berichtje?", options: ["git save", "git commit -m 'jouw duidelijke bericht hier'", "git push", "git store"], answer: 1 },
        { q: "Hoe stuur je jouw opgeslagen, lokale commits uiteindelijk definitief naar de externe (remote) server (bijv. GitHub/GitLab), zodat je collega's ze ook eindelijk kunnen zien en gebruiken?", options: ["git upload", "git send", "git push", "git sync"], answer: 2 },
        { q: "Wat is een 'Branch' (tak) in de Git wereld en waarom is het zo onmisbaar?", options: ["Het is gewoon een reguliere map (directory) in je Windows Verkenner", "Het is een afgescheiden, veilige, parallelle kopie en onafhankelijke afsplitsing van de codebase. In deze 'branch' kun je compleet veilig bouwen aan een nieuwe feature of experimenteren, zónder de werkende, stabiele hoofdcode (meestal de 'main' of 'master' branch genoemd) direct aan te passen of per ongeluk te breken", "Het is een vervelende foutmelding die optreedt in Git wanneer bestanden missen", "Het is de codenaam voor een nieuwe, experimentele programmeertaal van Microsoft"], answer: 1 },
        { q: "Wat is een 'Merge Conflict' in de harde dagelijkse praktijk van een developer?", options: ["De Git applicatie is gecrasht door een tekort aan RAM-geheugen op je computer", "Jij en een collega (die toevallig in een andere branch werkte) hebben exact dezelfde regel(s) code bewerkt. Wanneer je de branches nu wilt samenvoegen (mergen), stopt Git uit veiligheid, omdat het programma niet kan en mag gokken wélke versie van de regel code behouden moet blijven; jij of je collega moet dit nu handmatig en zorgvuldig oplossen", "Je internetverbinding is plotseling weggevallen tijdens het pushen van zware bestanden", "Je wachtwoord of SSH-key op GitHub is verlopen of fout ingevoerd"], answer: 1 },
        { q: "Wat doet het handige commando 'git stash' precies in je workflow?", options: ["Het verwijdert voorgoed en onherroepelijk al je onopgeslagen of verkeerde code", "Het verpakt al je huidige, niet-gecommitte (onopgeslagen) wijzigingen en zet deze tijdelijk heel veilig weg in een onzichtbaar lokaal kluisje (de stash). Hierdoor hou je een 100% schone werkmap over, wat ideaal is als je plotseling en met spoed van branch moet wisselen om bijvoorbeeld een live bug op te lossen, zonder dat je half-afgemaakt werk hoeft te committen", "Het uploadt je nog onaffe code onzichtbaar en verborgen naar een afgeschermde, beveiligde privé server", "Het forceert met brute rekenkracht een merge (samenvoeging) van letterlijk alle actieve branches in je lokale project"], answer: 1 },
        { q: "Wat is een 'Pull Request' (PR) of Merge Request (MR) in platforms als GitHub of GitLab?", options: ["Een totale en onverwachte crash van de externe host-server", "Een formeel en zeer zichtbaar verzoek of digitaal document (vaak voorzien van uitleg en screenshots) waarin je vraagt of jouw gepushte, afgewerkte branch-code gecontroleerd (gereviewed) mag worden door je (senior) collega's, vlak vóórdat deze officieel mag worden binnengehaald of 'gemerged' in de heilige main codebase", "Een vage, onduidelijke foutmelding die op je scherm plopt tijdens een git pull", "Een ingebouwd commando om andermans code of complete repositories sneller te downloaden zonder historie"], answer: 1 },
        { q: "Wat bevindt zich in de (normaal op je pc onzichtbare) map genaamd '.git' in de hoofdmap van je project?", options: ["Alleen een onversleuteld tekstbestand met je opgeslagen lokale wachtwoorden", "Dit is het hart en brein: de volledige, absolute en compacte interne database van Git. Het bevat de complete geschiedenis, alle ooit gemaakte commits, de versleutelde objecten en alle branches van je project", "Er zitten in deze map vaak gedownloade virussen of malware verborgen", "Dit is puur een tijdelijke opslagplaats voor internetbestanden van je web-browser"], answer: 1 },
        { q: "Met welk handige en specifieke commando zie je per codebestand exact, regel voor regel, wie (en wanneer) die specifieke regel in dat codebestand als laatste persoon heeft gewijzigd?", options: ["git history", "git who", "git blame", "git find"], answer: 2 }
    ],
    "Cloud & DevOps": [
        // Makkelijke & Gevorderde vragen
        { q: "Waar staat de afkorting 'AWS' in de wereld van moderne cloud computing voor?", options: ["Advanced Web Security", "Amazon Web Services (dit is momenteel met grote afstand de allergrootste en meest gebruikte cloud provider ter wereld, eigendom van Amazon)", "Automated Work System", "Apple Web Storage"], answer: 1 },
        { q: "Wat is 'Docker' en waarom heeft dit de IT-wereld veranderd?", options: ["Het is simpelweg de merknaam voor een fysieke, grote externe harde schijf", "Het is een revolutionaire, open-source tool en platform om applicaties, inclusief de letterlijk benodigde bibliotheken, configuraties en dependencies, strak te verpakken in uiterst lichte, geïsoleerde 'containers'. Het magische hieraan is dat zo'n container op de laptop van de developer exact hetzelfde en zonder problemen draait als later op de productie-server ('It works on my machine' is hiermee opgelost)", "Het is een onbekend besturingssysteem uit Rusland", "Het is een speciaal en zwaar geoptimaliseerd type relationele database"], answer: 1 },
        { q: "Waar staat de veelgebruikte afkorting 'CI/CD' voor in de moderne, snelle softwareontwikkeling (Agile/Scrum)?", options: ["Code Integration / Code Deployment", "Continuous Integration / Continuous Deployment (dit betreft de praktijk en de cultuur van het verregaand automatiseren van het softwareproces: na élke commit of push van de ontwikkelaar wordt de code volautomatisch getest op bugs, gebouwd/gecompileerd en (indien alles groen is) ook volautomatisch live gezet op de server)", "Central Interface / Central Database", "Computer Intelligence / Cyber Defense"], answer: 1 },
        { q: "Wat is de hoofdfunctie van een component genaamd 'Load Balancer' in je server infrastructuur?", options: ["Het enige doel is alle inkomende data versleutelen met SSL certificaten", "Het fungeert als een slimme verkeersagent: het neemt al het inkomend netwerkverkeer (de duizenden bezoekers van je website of app) en verdeelt dit intelligent en gelijkmatig over meerdere onderliggende, identieke servers (instances) om te voorkomen dat één specifieke server trage responstijden krijgt of door overbelasting crasht en uitvalt", "Het is bedoeld om het stroomverbruik en de koeling in de fysieke serverruimte te verminderen", "Het volautomatisch en wekelijks back-ups maken van je master-database"], answer: 1 },
        { q: "Wat wordt bedoeld met de steeds populairdere term 'Serverless Computing' (zoals AWS Lambda, Google Cloud Functions of Azure Functions)?", options: ["Dat je werkt aan je code zonder enige internetverbinding in the middle of nowhere", "Het is een cloud-computing model waarbij er voor de ontwikkelaar (onzichtbaar) geen vaste, fysieke servers meer klaarstaan om te onderhouden of te updaten (patchen). In plaats daarvan uploadt de developer letterlijk alleen een klein, los brok code. De cloud provider start vervolgens pas automatisch ergens op de achtergrond de benodigde rekenkracht en een container op, uitsluitend op het moment (en zo lang) dat die code door een event of API-call wordt getriggerd (je betaalt dus ook alleen per rekenseconde)", "Lokaal op je oude laptop programmeren zonder enige externe cloud", "Werken met een hele berg kleine, goedkope Raspberry Pi's die met draadjes aan elkaar zijn gelinkt in je woonkamer"], answer: 1 },
        { q: "Wat is het grote verschil tussen horizontale schaalbaarheid (scale-out) en verticale schaalbaarheid (scale-up) van je IT-infrastructuur?", options: ["Er is letterlijk geen verschil in de IT, het is alleen een andere benaming per fabrikant", "Horizontaal schalen betekent simpelweg méér lossere, kleinere servers (instances) kopiëren en toevoegen aan je netwerk-pool (vaak achter een load balancer). Verticaal schalen betekent daarentegen dat je de *enige bestaande* server moet uitschakelen, uit elkaar moet halen en moet upgraden om deze krachtiger te maken met meer RAM-geheugen, een zwaardere CPU of meer Opslag", "Horizontaal schalen is in de IT-wereld alleen bedoeld voor het creëren van meer opslagruimte, terwijl verticaal uitsluitend bedoeld is voor pure rekenkracht en videokaarten", "Verticaal opschalen is qua kosten altijd gigantisch veel goedkoper en makkelijker in de cloud dan horizontaal schalen"], answer: 1 }
    ],
    "Algoritmes & Datastructuren": [
        // Makkelijke & Gevorderde vragen
        { q: "Wat is de exacte definitie van een algoritme in de informatica?", options: ["Een fysiek, tastbaar computeronderdeel dat je op je moederbord klikt", "Een zeer gedetailleerd wiskundig stappenplan, een uiterst logische instructieset of een 'recept' om een specifiek, afgebakend probleem op te lossen of een bepaalde berekening vlekkeloos en foutloos uit te voeren met een voorspelbare uitkomst", "Een zeer agressief en snel verspreidend soort computervirus", "Een speciale, extra dikke en met goud afgeschermde netwerkkabel speciaal voor grote datacenters"], answer: 1 },
        { q: "Welke belangrijke fundamentele datastructuur werkt strikt en onverbiddelijk volgens het LIFO (Last In, First Out) principe?", options: ["De Queue (Wachtrij)", "De Array (Lijst)", "De Stack (Stapel, denk hierbij aan een letterlijke hoge stapel borden in de afwas waarbij je het bovenste bord er als eerste weer af pakt)", "De Tree (Boomstructuur)"], answer: 2 },
        { q: "Welke datastructuur werkt juist wél volgens het eerlijke FIFO (First In, First Out) principe?", options: ["De Stack", "De Hash Map", "De Queue (Wachtrij, denk hierbij aan een eerlijke, opeenvolgende rij mensen voor de kassa in een drukke supermarkt: wie het eerst aansluit, wordt het eerst geholpen)", "De Linked List (Gekoppelde Lijst)"], answer: 2 },
        { q: "Wat is de betekenis en functie van de bekende term 'Big O Notation' (geschreven als bijv. O(n) of O(n^2)) in het ontwerpen van software?", options: ["Het is simpelweg de totale fysieke bestandsgrootte in Megabytes van je opgeslagen code", "Het is een universele, gestandaardiseerde wiskundige notatie die door informatici wordt gebruikt om de theoretische worst-case efficiëntie, de snelheid (Time Complexity) of het geheugengebruik (Space Complexity) van een specifiek algoritme te beschrijven, in relatie tot de exponentiële toename van de hoeveelheid in te voeren data", "Een specifieke, veelvoorkomende error code in de C++ compiler", "Het beschrijft simpelweg het aantal fysieke regels code dat de programmeur in zijn script of functie heeft geschreven"], answer: 1 },
        { q: "Wat is Recursie tijdens het geavanceerd programmeren?", options: ["Een enorm irritante, maar veelvoorkomende bug in een simpele while-loop", "Een geavanceerde programmeertechniek waarbij een functie binnenin zijn eigen codebody *zichzelf* opnieuw aanroept met een kleinere dataset, net zolang totdat een verplichte 'base case' (stop-conditie) is bereikt om ongewenste oneindige iteraties en destructieve stack overflows (crashes) te voorkomen", "Het veilig, snel en permanent verwijderen of wipen van rest-bestanden op je harddrive", "Gegevens in een zeer grote database willekeurig of random door elkaar husselen en sorteren"], answer: 1 },
        { q: "Welk beroemd, elegant en veelgebruikt zoekalgoritme is extreem efficiënt met een logaritmische O(log n) complexiteit, maar stelt als absolute, harde eis dat de door te zoeken lijst vooraf 100% GESORTEERD moet zijn?", options: ["De Linear Search (Lijnair zoeken: één voor één elk item afgaan)", "De Binary Search (Binair zoeken: het algoritme zoekt continu in het exacte midden en hakt in elke iteratie de overgebleven lijst, op basis van 'groter dan' of 'kleiner dan', precies in tweeën totdat het specifieke item snel is gevonden)", "De Hash Search", "De Random Search (Willekeurig zoeken)"], answer: 1 }
    ],
    "C# & Java (OOP)": [
        // Makkelijke & Gevorderde vragen
        { q: "Wat is de absolute kern en het doel van een 'Class' (klasse) in Object Georiënteerd Programmeren (OOP)?", options: ["Een instelbare moeilijkheidsgraad in een open-world RPG game", "Het fungeert als het ultieme ontwerpsjabloon, of de abstracte 'blauwdruk', die definieert en dicteert welke specifieke eigenschappen (variabelen/velden) en functionele gedragingen (methodes/functies) alle toekomstige objecten (instances) van dat type in zich zullen dragen wanneer ze in het geheugen worden aangemaakt", "Een specifieke, open netwerkpoort voor onbeveiligde Java communicatie", "Een globaal, overal in de applicatie toegankelijke variabele in je hoofdscript"], answer: 1 },
        { q: "Wat wordt bedoeld met de extreem krachtige architectonische eigenschap 'Inheritance' (Overerving) binnen OOP?", options: ["Geld, royalty's of crypto verdienen via de open-source licentie van je code", "Het mechanisme waarbij je in je code een nieuwe, gespecialiseerde 'Child' (of Sub) klasse aanmaakt die direct en volautomatisch alle openbare velden, eigenschappen en actieve methodes van een al bestaande, bovenliggende 'Parent' (of Base) klasse in zich opneemt en overneemt, wat ontzettend veel fouten en overbodige code-herhaling (DRY-principe) voorkomt", "Je actieve broncode superveilig afschermen en beveiligen met zware cryptografische hashing", "Een schoonmaak-mechanisme dat oude, vervuilde legacy-code automatisch uit je live project detecteert en verwijdert"], answer: 1 },
        { q: "Wat is de specifieke rol en werking van een 'Constructor' methode in een Class?", options: ["Een extern, online AI programma dat geheel zelfstandig je onaffe code afschrijft, refactort en optimaliseert", "Een uiterst speciale methode (die over het algemeen exact, hoofdlettergevoelig, dezelfde naam draagt als de klasse zélf en geen return type heeft) die volledig automatisch en eenmalig door de compiler wordt aangeroepen op het exacte, eerste moment dat een daadwerkelijk object uit die klasse wordt ge-instantieerd (vaak via het 'new' keyword) in het RAM-geheugen, vaak om op dat moment de begin-variabelen direct goed in te stellen", "Een heel oud en traag type NoSQL database opstelling voor Java", "Een specifieke, fatale foutmelding die vaak optreedt bij het compileren en bouwen van een complexe applicatie (Build Error)"], answer: 1 },
        { q: "Wat houdt het veelbesproken OOP-concept 'Encapsulation' (Ingekapseldheid) precies in?", options: ["Al je overbodige code bestanden in mappen zippen, comprimeren en strak beveiligen met een heel sterk root-wachtwoord", "Het fundamentele en beschermende principe van het streng verbergen van de complexe interne werking of de kwetsbare status van een object (door het instellen van onderliggende variabelen en velden als strikt 'private' of 'protected'), en het toestaan van interactie en het wijzigen van die data van buitenaf uitsluitend via zeer strak gecontroleerde en gevalideerde 'public' methodes (vaak getters en setters genoemd)", "Het creëren van een onleesbare, lange codebrij door meerdere loops in andere loops te programmeren (geneste of geneste iteraties)", "Een speciale, ingebouwde functie (garbage collector) waarmee je complete, zware klassen of objecten tijdens de runtime op commando direct en permanent uit het geheugen kunt wegsnijden of verwijderen"], answer: 1 },
        { q: "Wat wordt er in talen als C# en Java specifiek bedoeld wanneer een veld of methode het 'static' keyword krijgt?", options: ["Dat dit specifieke element, de variabele of de methode in zijn geheel op het niveau van de abstracte architectuur toebehoort aan de Klasse zélf (die maar één enkele keer is opgeslagen in de heap van het geheugen), wat in de praktijk betekent dat je de klasse absoluut niet eerst als een functionerend object (instance) hoeft te 'newen' (aan te maken) in de code om de desbetreffende variabele of methode aan te kunnen roepen of te kunnen gebruiken in je script", "Dat dat blok code vanaf dat moment softwarematig is bevroren en beveiligd; het staat volledig stil, mag nooit meer draaien en de uitkomst ervan zal nooit veranderen", "Het is een signaal voor de compiler dat het om een strikte en onveranderlijke wiskundige constante (const) gaat", "Het is een beveiligingsmaatregel die per direct alle verdere toegang van externe of andere klassen-code tot dat specifieke onderdeel blokkeert en afwijst"], answer: 0 }
    ],
    "AI & Machine Learning": [
        // Makkelijke vragen
        { q: "Wat is ChatGPT of een tool zoals Google Gemini eigenlijk in de absolute basis?", options: ["Een goedkoop, ingehuurd team van mensen in een callcenter dat heel snel typt", "Een enorm krachtig en geavanceerd staaltje Kunstmatige Intelligentie (AI), aangedreven door een wiskundig taalmodel dat is getraind op miljarden zinnen tekst, waardoor het statistisch gezien uiterst menselijke teksten leert begrijpen en zelf kan schrijven en voorspellen", "Een gloednieuwe, fysieke en supersnelle speciale videokaart of chip in je nieuwste pc", "Een gesloten, enorme relationele database van Apple in Californië waar het systeem in kan zoeken"], answer: 1 },
        { q: "Als een AI beelden (zoals Midjourney of DALL-E), werkende code of complete, originele stukken tekst he-le-maal zelf, on-the-fly en vanaf de basis nieuw ontwerpt en genereert, hoe noemen we dit nieuwe, heersende type AI dan in de media?", options: ["Een Klassieke Zoekmachine (zoals Google in het jaar 2000)", "Een Geavanceerde Rekenmachine of Calculator", "Generatieve AI (Generative Artificial Intelligence)", "Een simpele, fysieke Chatbot Robot met spraakherkenning"], answer: 2 },
        // Gevorderde vragen
        { q: "Wat is nou precies de diepgaande technische essentie van de term 'Neuraal Netwerk' (Neural Network) binnen het veld van Machine Learning?", options: ["Een complex, anoniem en zwaar besloten communicatienetwerk (vaak geassocieerd met Tor) dat puur en alleen door professionele hackers en criminelen in het dark web wordt gebruikt voor het afschermen van signalen", "Het is een wiskundige en zeer complexe statistische rekenstructuur, in de software vaak heel diep opgebouwd in opeenvolgende, onzichtbare 'hidden layers', die qua design en architectuur conceptueel en losjes is geïnspireerd op hoe de biljoenen kleine synapsen en zenuw-neuronen elektrische signalen afvuren en verbindingen versterken in ons eigen, biologische menselijk brein", "Een speciaal, revolutionair en gloednieuw protocol (IEEE 802.11 AI) bedoeld voor ultrasnel, wrijvingsloos en veilig WiFi bereik in moderne, glazen kantoorpanden", "Een strak gecentraliseerde, zeer klassieke en gigantische relationele SQL-database ontworpen door Apple, die speciaal is verborgen in hun sterkst beveiligde, diep ondergrondse datacentra"], answer: 1 },
        { q: "Wat wordt er bedoeld, als kritiek, wanneer AI experts, onderzoekers of kritische journalisten in het nieuws waarschuwen dat een AI-model of LLM wel eens flink kan 'Hallucineren'?", options: ["Ze waarschuwen dat de AI software zojuist is gecorrumpeerd, stuk is, en daardoor helaas is veranderd in een kwaadaardig en gevaarlijk computervirus dat de host-computer zal vernietigen", "Dit fenomeen betekent dat het wiskundige taalmodel vol schijnbaar, menselijk zelfvertrouwen valse feiten, antwoorden, verzonnen logica of zelfs volstrekt niet-bestaande wetenschappelijke bronnen of boeken genereert (uit zijn duim zuigt), en deze vol overtuiging aan de gebruiker presenteert alsof het een feilloos, absoluut en in beton gegoten, controleerbaar feit is", "Dit betekent dat de AI is gehackt en daardoor plotseling ongevraagd begint met het genereren van uiterst willekeurige, drukke, knipperende en bizarre, psychedelische plaatjes of video's over je hele computerscherm", "Het betekent dat de fysieke of virtuele cloud-server (AWS/Azure) waarop het brein of de AI-node momenteel veilig is gehost op dat moment wegens een onverwacht stroomtekort spontaan crasht en herstart"], answer: 1 },
        { q: "Waarom en met welke harde wiskundige, architectonische reden worden GPU's (enorm krachtige videokaarten, veelal van NVIDIA) tegenwoordig zo gigantisch veel en gretig ingezet, opgekocht en gebruikt voor het trainen van gigantische AI in grote server-farms, in plaats van te steunen op de traditionele, klassieke en centrale CPU's (processoren) van Intel of AMD?", options: ["De enige simpele reden is omdat alle AI en Deep Learning modellen uitsluitend scherpe beelden, diepe kleuren, 3D modellen en complexe video's moeten maken voor hun grafische eind-output", "Omdat het proces van het effectief trainen van moderne, diepe AI (het constant bijstellen en updaten van de miljarden 'weights' in het netwerk) in feite letterlijk miljoenen en miljoenen uiterst simpele, gelijktijdige wiskundige matrix-vermenigvuldigingen en tensor-berekeningen vereist. En laten GPU-architecturen (door hun enorme formaat en uitgerust met duizenden, onafhankelijke kleine cores) nou nét extreem, belachelijk veel sneller ontworpen en gespecialiseerd zijn in exact dit soort specifieke, massaal-parallelle en gelijktijdige berekeningen dan CPU's (welke vaak maar 8 of 16 zeer snelle en brede cores bezitten voor het afhandelen van één zware taak tegelijk)", "Puur, alleen en uitsluitend omdat krachtige en snelle GPU's tegenwoordig, in de huidige globale hardware-markt, simpelweg heel veel massaler geproduceerd worden en daardoor financieel enorm veel goedkoper en logistiek gezien veel makkelijker en sneller in bulk te verkrijgen en te importeren zijn dan de veel te dure en veel te exclusieve server-CPU's", "Omdat CPU en processor chips qua fysiek, intern en minuscuul siliconen-ontwerp simpelweg geen enkele structurele mogelijkheid, transistoren of fysieke ruimte tot tijdelijke data-opslag, L-cache of instructies-pauze aan boord hebben om te kunnen leren"], answer: 1 },
        { q: "Wat betekent of beschrijft de veelgebruikte, algemene, brede, industrie-standaard term 'NLP' (Natural Language Processing) binnen de moderne informatica en Artificial Intelligence theorie?", options: ["Het is de officiële naam voor een oud, uiterst veilig en complex hardware-beveiligings, firewall- en netwerk encryptie protocol dat voornamelijk door de overheid wordt toegepast voor en door zeer oude routers", "Het is de enorme, fascinerende en zeer brede tak van de Artificial Intelligence (en taalkunde) technologie die zich op de voorgrond exclusief, specifiek en wiskundig bezighoudt met het succesvol laten analyseren, syntactisch ontleden, statistisch en diep begrijpen, semantisch interpreteren, perfect en contextueel vertalen en het succesvol manipuleren of genereren van natuurlijke, levende menselijke gesproken en geschreven taal (zoals Engels of Nederlands) door computers, machines en algoritmes", "Dit is de strikt gereserveerde afkorting voor een revolutionair, gloednieuw, superlicht, bliksemsnel opstartend en extreem veilig Linux Programma voor data-science en machine learning", "Het is simpelweg de correcte, wiskundig Engelse en logische term voor de term 'Non Linear Programming' (een wiskundige en economische theorie over asymmetrische krommes en parabolen in datasets)"], answer: 1 }
    ]
};

// =====================================================================
// PLAK DIT HELEMAAL ONDERAAN IN questions.js (Boven module.exports)
// =====================================================================

const extraVragen = {
    "HTML & CSS": [
        { q: "Wat is de functie van de <head> tag in HTML?", options: ["Het toont de grootste tekst op de pagina", "Het bevat onzichtbare meta-informatie, de paginatitel en links naar CSS bestanden", "Het is de hoofd-navigatiebalk", "Het sluit de website af"], answer: 1 },
        { q: "Welke CSS eigenschap gebruik je om de lettergrootte aan te passen?", options: ["text-size", "font-style", "text-style", "font-size"], answer: 3 },
        { q: "Wat is de standaard 'display' waarde van een 'div' element?", options: ["inline", "flex", "block", "grid"], answer: 2 },
        { q: "Welke HTML tag gebruik je voor een genummerde lijst (1, 2, 3...)?", options: ["<ul>", "<nl>", "<list>", "<ol>"], answer: 3 },
        { q: "Waar staat de afkorting 'RGB' voor in CSS kleuren?", options: ["Red Green Blue", "Random Generated Background", "Row Grid Block", "Real Graphic Bytes"], answer: 0 }
    ],
    "JavaScript": [
        { q: "Hoe selecteer je een HTML element met het id 'demo' in JavaScript?", options: ["document.select('demo')", "document.getElementById('demo')", "window.find('demo')", "html.get('demo')"], answer: 1 },
        { q: "Wat is een 'Boolean' in programmeertalen?", options: ["Een tekstvariabele", "Een kommagetal", "Een datatype dat alleen True (Waar) of False (Niet Waar) kan zijn", "Een loop die nooit stopt"], answer: 2 },
        { q: "Welk symbool gebruik je in JavaScript voor de logische 'EN' (AND) operator?", options: ["||", "&&", "++", "=="], answer: 1 },
        { q: "Wat is de uitkomst van 'Math.random()' in JavaScript?", options: ["Een willekeurig heel getal tussen 1 en 10", "Een willekeurig kommagetal tussen 0 en 1", "Een foutmelding", "Het kiest een willekeurige speler"], answer: 1 },
        { q: "Wat is een API?", options: ["Een soort appel", "Application Programming Interface (een brug waardoor twee applicaties met elkaar kunnen praten)", "Een database voor plaatjes", "Een fysieke serverkast"], answer: 1 }
    ],
    "Python": [
        { q: "Met welke functie bereken je in Python hoeveel tekens er in een woord zitten?", options: ["size()", "count()", "length()", "len()"], answer: 3 },
        { q: "Hoe schrijf je de boolean 'waar' in Python?", options: ["true", "True (met hoofdletter)", "TRUE", "1"], answer: 1 },
        { q: "Welk commando gebruik je in Python om wiskundige functies (zoals worteltrekken) in te laden?", options: ["include math", "require math", "import math", "load math"], answer: 2 },
        { q: "Wat doet de methode '.append()' bij een lijst in Python?", options: ["Sorteert de lijst", "Verwijdert het laatste element", "Voegt een nieuw element toe aan het einde van de lijst", "Maakt de lijst leeg"], answer: 2 },
        { q: "Hoe start je een for-loop die precies 10 keer draait in Python?", options: ["for i in range(10):", "for 1 to 10:", "loop(10):", "for(i=0; i<10; i++)"], answer: 0 }
    ],
    "Databases": [
        { q: "Wat doet het vernietigende SQL commando 'DROP TABLE'?", options: ["Het verwijdert alle data, maar bewaart de structuur", "Het wist de database en de server", "Het verwijdert de complete tabel inclusief de structuur en alle data permanent", "Het laat de tabel vallen naar een andere server"], answer: 2 },
        { q: "Wat doet het SQL commando 'UPDATE'?", options: ["Het updatet de server software", "Het wijzigt bestaande records/data in een tabel", "Het maakt een nieuwe tabel aan", "Het verwijdert oude data"], answer: 1 },
        { q: "Wat betekent de waarde 'NULL' in een database?", options: ["Het getal Nul (0)", "Een netwerkfout", "De absolute afwezigheid van enige data (het veld is leeg/onbekend)", "Een fout wachtwoord"], answer: 2 },
        { q: "Welk datatype gebruik je het best om een leeftijd op te slaan?", options: ["VARCHAR", "BOOLEAN", "INT (Integer)", "DATE"], answer: 2 },
        { q: "Wat is een 'Query'?", options: ["Een netwerkkabel", "Een formeel verzoek aan de database om data op te halen of te bewerken", "Een fout in je code", "Een back-up bestand"], answer: 1 }
    ],
    "Netwerken": [
        { q: "Wat betekent de afkorting 'HTTP'?", options: ["HyperText Transfer Protocol", "High Tech Transmission Program", "Host To Terminal Port", "Hyper Tool Transfer Panel"], answer: 0 },
        { q: "Wat is het fundamentele verschil tussen een Router en een Switch?", options: ["Een router is draadloos, een switch bekabeld", "Een router verbindt verschillende netwerken met elkaar (zoals thuis en internet), een switch verbindt apparaten binnen één lokaal netwerk", "Geen verschil", "Een switch is voor servers, een router voor pc's"], answer: 1 },
        { q: "Wat bedoelt men met de 'Bandbreedte' van een netwerk?", options: ["De fysieke dikte van de netwerkkabel", "De maximale snelheid waarmee data verwerkt kan worden door de CPU", "De maximale capaciteit of hoeveelheid data die per seconde over een verbinding kan worden verzonden", "Het bereik van je WiFi router in meters"], answer: 2 },
        { q: "Wat is een 'Ping'?", options: ["Een spelletje", "Een signaaltje dat wordt verstuurd naar een ander IP-adres om te meten of deze bereikbaar is, en hoe hoog de vertraging (latency) is", "Een WiFi storing", "Een type wachtwoord"], answer: 1 },
        { q: "In welke eenheid wordt netwerksnelheid meestal uitgedrukt bij consumenten (bijv. van Ziggo of KPN)?", options: ["MB/s (Megabytes per seconde)", "Mbps (Megabits per seconde)", "MHz (Megahertz)", "GB (Gigabytes)"], answer: 1 }
    ],
    "Hardware & OS": [
        { q: "Welk onderdeel wordt de 'Ruggengraat' van je computer genoemd, omdat alles er op wordt aangesloten?", options: ["De CPU", "De Voeding", "Het Moederbord", "De Harde Schijf"], answer: 2 },
        { q: "Wat is het doel van een 'Heatsink' (Koelblok) in een computer?", options: ["Het moederbord beschermen", "De hitte die de processor genereert absorberen en afvoeren naar de lucht via ventilatoren", "Zorgen dat de computer niet bevriest in de winter", "Stroom besparen"], answer: 1 },
        { q: "Wat is een 'Besturingssysteem' (Operating System)?", options: ["Een toetsenbord en muis", "De belangrijkste software die de hardware en andere programma's beheert (zoals Windows of MacOS)", "Een virusscanner", "De fysieke aanknop van je pc"], answer: 1 },
        { q: "Wat gebeurt er als je een computer 'Boot' (opstart)?", options: ["Hij installeert een virus", "Het besturingssysteem wordt geladen vanuit de opslagschijf naar het RAM-geheugen zodat je de pc kunt gebruiken", "Hij schoont de harde schijf op", "De CPU wordt overgeklokt"], answer: 1 },
        { q: "Wat is een 'Peripheral' (randapparaat)?", options: ["Een onderdeel IN de computer", "Een kabel", "Externe apparatuur die je aansluit op je pc, zoals een printer, muis of webcam", "Een stroomstoring"], answer: 2 }
    ],
    "Cybersecurity": [
        { q: "Wat is een 'Trojaans Paard' (Trojan) in de cyberwereld?", options: ["Een groot houten beeld", "Schadelijke software (malware) die zich vermomt als een betrouwbaar, legitiem programma om je systeem binnen te dringen", "Een type firewall", "Een veilig netwerkprotocol"], answer: 1 },
        { q: "Wat is 'Social Engineering'?", options: ["Het hacken van Facebook of Instagram", "Het psychologisch manipuleren van mensen om ze vertrouwelijke informatie (zoals wachtwoorden) te laten afgeven", "Een firewall instellen", "Software bouwen voor sociale media"], answer: 1 },
        { q: "Wat doet een 'Keylogger'?", options: ["Het is een veilige wachtwoordkluis", "Een kwaadaardig programma dat stiekem élke toetsaanslag op je toetsenbord registreert en doorstuurt naar een hacker", "Het formatteert je harde schijf", "Het genereert sterke wachtwoorden"], answer: 1 },
        { q: "Waarvoor dient 'Encryptie'?", options: ["Om het internet sneller te maken", "Om leesbare data wiskundig te versleutelen in een onleesbare code, zodat onbevoegden er niets mee kunnen", "Om virussen te scannen", "Om afbeeldingen scherper te maken"], answer: 1 },
        { q: "Wat is 'Malware'?", options: ["Een nieuw soort hardware", "Een samenvoeging van 'Malicious Software', de overkoepelende term voor alle schadelijke programma's (virussen, trojans, ransomware)", "Een besturingssysteem voor hackers", "Een beveiligingsbedrijf"], answer: 1 }
    ],
    "Cloud & DevOps": [
        { q: "Welk gigantisch bedrijf zit er achter het cloudplatform 'Azure'?", options: ["Google", "Amazon", "Microsoft", "Apple"], answer: 2 },
        { q: "Wat betekent de term 'Uptime' van een server?", options: ["De tijd die het kost om op te starten", "Het percentage van de tijd dat een server of dienst succesvol online en bereikbaar is (bijv. 99.9%)", "De downloadsnelheid", "De levensduur van de hardware"], answer: 1 },
        { q: "Wat is een 'Container' in de context van Docker?", options: ["Een grote metalen bak", "Een lichtgewicht, op zichzelf staand softwarepakketje met alles erin (code, runtime, tools) om de applicatie te draaien", "Een harde schijf in de cloud", "Een lege server"], answer: 1 },
        { q: "Wat is 'GitLab' of 'GitHub'?", options: ["Een offline tekstverwerker", "Een cloud-gebaseerd platform (hosting) om Git-repositories online op te slaan en samen te werken aan broncode", "Een firewall", "Een sociaal netwerk voor gamers"], answer: 1 }
    ],
    "Game Development": [
        { q: "Waar staat de afkorting 'NPC' voor in games?", options: ["New Player Character", "Non-Player Character (een personage in het spel dat door de computer/AI wordt bestuurd)", "No Playing Code", "Network Protocol Connection"], answer: 1 },
        { q: "Wat is de 'UI' (User Interface) in een game?", options: ["De game code", "Alle visuele elementen op het scherm waar de speler informatie uit haalt of op kan klikken (zoals de health-bar, knoppen, menu's)", "De videokaart", "De achtergrondmuziek"], answer: 1 },
        { q: "Wat is een 'Game Engine'?", options: ["Een speciaal toetsenbord", "Een software framework (zoals Unity of Unreal Engine) dat de basisbouwstenen levert (physics, rendering, audio) om games veel sneller te kunnen maken", "Een race-auto in een game", "Een online server"], answer: 1 },
        { q: "Wat is 'Spawning' in game development?", options: ["Een level verwijderen", "Het live in de spelwereld plaatsen of genereren van een nieuw object, speler of vijand", "Het opslaan van het spel", "De game pauzeren"], answer: 1 }
    ]
};

// MAGIC MERGE SCRIPT: Dit schiet de nieuwe vragen direct in je bestaande QuestionBank!
for (let category in extraVragen) {
    if (questionBank[category]) {
        // Categorie bestaat al? Voeg ze gewoon toe aan de lijst!
        questionBank[category].push(...extraVragen[category]);
    } else {
        // Nieuwe categorie? Maak hem aan!
        questionBank[category] = extraVragen[category]; 
    }
}

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 2
// =====================================================================

const extraVragenDeel2 = {
    "HTML & CSS": [
        { q: "Welke HTML tag gebruik je om een formulier te maken?", options: ["<input>", "<form>", "<textfield>", "<submit>"], answer: 1 },
        { q: "Wat doet de CSS eigenschap 'border-radius'?", options: ["Het maakt de randen van een element rond", "Het maakt de randen dikker", "Het geeft het element een schaduw", "Het verwijdert de randen"], answer: 0 },
        { q: "Welke HTML tag wordt gebruikt voor een tabel-rij?", options: ["<td>", "<table>", "<th>", "<tr>"], answer: 3 },
        { q: "Hoe verander je de muisaanwijzer in een handje als je over een knop gaat met CSS?", options: ["mouse: hand;", "pointer: finger;", "cursor: pointer;", "hover: click;"], answer: 2 },
        { q: "Welke tag gebruik je in HTML5 om een video af te spelen?", options: ["<media>", "<movie>", "<video>", "<play>"], answer: 2 },
        { q: "Wat betekent de CSS waarde 'display: none;'?", options: ["Het element wordt transparant maar neemt nog wel ruimte in", "Het element wordt volledig onzichtbaar en neemt géén ruimte meer in", "Het element mag niet geklikt worden", "Het element knippert"], answer: 1 }
    ],
    "JavaScript": [
        { q: "Hoe vraag je in JavaScript de lengte (aantal tekens) van een stuk tekst op?", options: ["tekst.size()", "tekst.length", "len(tekst)", "tekst.count"], answer: 1 },
        { q: "Wat doet de functie 'Math.floor(4.9)' in JavaScript?", options: ["Rondt af naar 5", "Geeft een error", "Rondt af naar beneden, dus 4", "Rondt af naar 4.5"], answer: 2 },
        { q: "Welk JavaScript commando gebruik je om een HTML element te zoeken via CSS-selectors (zoals classes of id's)?", options: ["document.search()", "document.findElement()", "document.querySelector()", "document.get()"], answer: 2 },
        { q: "Wat doet de array methode '.pop()'?", options: ["Voegt een element toe", "Verwijdert het LAATSTE element uit een array", "Verwijdert het EERSTE element uit een array", "Maakt een pop-up"], answer: 1 },
        { q: "Wat is het verschil tussen een 'while' loop en een 'for' loop?", options: ["Een while loop is sneller", "Een for loop draait oneindig, een while loop niet", "Een for loop gebruik je vaak als je weet hoe vaak je wilt loopen, een while loop zolang een conditie waar is", "Geen verschil"], answer: 2 },
        { q: "Wat doet het commando 'parseInt(\"10\")'?", options: ["Maakt van het getal 10 een tekst", "Zet de tekst \"10\" om in een echt wiskundig heel getal", "Controleert of 10 een wachtwoord is", "Geeft een error"], answer: 1 }
    ],
    "Python": [
        { q: "Met welk commando sluit je onmiddellijk een draaiende 'while' of 'for' loop af in Python?", options: ["stop", "exit", "break", "return"], answer: 2 },
        { q: "Hoe open je een bestand om eruit te lezen in Python?", options: ["read('bestand.txt')", "open('bestand.txt', 'r')", "file('bestand.txt')", "get('bestand.txt')"], answer: 1 },
        { q: "Wat doet de functie 'type()' in Python?", options: ["Typt automatisch tekst op het scherm", "Vertelt je welk datatype (zoals int, str, list) een variabele is", "Slaat je toetsaanslagen op", "Controleert op spelfouten"], answer: 1 },
        { q: "Wat retourneert de code 'len([1, 2, 3, 4])'?", options: ["10", "4", "1", "0"], answer: 1 },
        { q: "Wat is het doel van het 'return' keyword in een functie?", options: ["Het start de functie opnieuw", "Het geeft een waarde (het resultaat) terug aan het stuk code dat de functie aanriep", "Het verwijdert de functie uit het geheugen", "Het sluit Python af"], answer: 1 },
        { q: "Wat betekent het als je in Python schrijft: tekst = 'Hallo'[0:2] ?", options: ["Het pakt alleen de letter 'H'", "Het pakt de letters 'Ha' (slicing)", "Het geeft een error", "Het wist de tekst"], answer: 1 }
    ],
    "Databases": [
        { q: "Welk SQL commando gebruik je om een compleet nieuwe database aan te maken?", options: ["NEW DATABASE", "BUILD DATABASE", "CREATE DATABASE", "START DATABASE"], answer: 2 },
        { q: "Wat doet de SQL functie 'MAX()'?", options: ["Maakt de database groter", "Zoekt de hoogste (maximale) waarde in een specifieke kolom", "Verwijdert alles behalve het grootste bestand", "Telt alle rijen bij elkaar op"], answer: 1 },
        { q: "Wat is een 'Query String'?", options: ["Een soort netwerkkabel", "Een reeks tekens (vaak in een URL) die data naar de server of database stuurt, bijv: ?naam=Henk", "Een zware fout in de database", "Een beveiligd wachtwoord"], answer: 1 },
        { q: "Welk SQL commando gebruik je om tabellen te verwijderen, ZONDER de tabelstructuur zelf weg te gooien?", options: ["DROP TABLE", "DELETE TABLE", "TRUNCATE TABLE", "CLEAR TABLE"], answer: 2 },
        { q: "Waar staat de afkorting 'RDBMS' voor?", options: ["Random Data Base Management System", "Relational Database Management System", "Remote Data Backup System", "Rapid Data Base Method"], answer: 1 }
    ],
    "Netwerken": [
        { q: "Wat doet het commando 'ipconfig' (in Windows) of 'ifconfig' (in Linux/Mac)?", options: ["Het verwijdert je IP-adres", "Het toont al je huidige netwerkinstellingen (zoals je IP-adres en Subnet Masker)", "Het hackt een netwerk", "Het start de router opnieuw op"], answer: 1 },
        { q: "Wat is het grote verschil tussen HTTP en HTTPS?", options: ["HTTPS is voor mobieltjes", "HTTPS gebruikt encryptie (SSL/TLS) om data veilig over het internet te sturen, HTTP is onbeveiligd", "HTTP is sneller", "Er is geen verschil"], answer: 1 },
        { q: "Wat is een 'Port' (Poort) in de netwerkwereld?", options: ["Een fysiek gat in de muur", "Een digitaal 'kanaal' op een IP-adres waarmee specifieke netwerkdiensten (zoals webverkeer op poort 80) worden afgehandeld", "Een speciaal type router", "Een virus"], answer: 1 },
        { q: "Wat betekent de term 'Latency' in netwerken en gaming?", options: ["De grootte van een download", "De vertraging (vaak in milliseconden) tussen het zenden van een signaal en het ontvangen van de reactie", "De schermresolutie", "De sterkte van het WiFi signaal"], answer: 1 },
        { q: "Wat is een 'DNS MX-record'?", options: ["Een instelling die bepaalt naar welke server de e-mails voor een domeinnaam gestuurd moeten worden", "Een back-up van een website", "Een audiobestand", "Een database error"], answer: 0 }
    ],
    "Hardware & OS": [
        { q: "Waarvoor dient een 'Geluidskaart' (Audio Interface) in een pc?", options: ["Om de koelers stiller te maken", "Om digitale data om te zetten in analoge geluidssignalen voor je speakers/koptelefoon", "Om microfoons op te laden", "Om het beeldscherm aan te sturen"], answer: 1 },
        { q: "Wat betekent het als een CPU 'Quad-Core' is?", options: ["Hij gebruikt 4 watt stroom", "Hij is 4 keer zo groot als een normale CPU", "De processor heeft 4 onafhankelijke rekenkernen die tegelijkertijd taken kunnen uitvoeren", "Hij past op 4 verschillende moederborden"], answer: 2 },
        { q: "Wat is 'Mini-ITX'?", options: ["Een piepklein type SSD", "Een heel compact formaat (form factor) voor moederborden, vaak gebruikt in kleine pc's", "Een soort netwerkkabel", "Een virus voor kleine laptops"], answer: 1 },
        { q: "Wat is het voordeel van een AIO (All-In-One) Waterkoeler vergeleken met luchtkoeling?", options: ["Het is volledig stil", "Het koelt vaak efficiënter, neemt minder ruimte in rond de CPU en voert hitte via vloeistof af naar een radiator", "Het maakt je computer waterdicht", "Je hoeft er nooit stroom op aan te sluiten"], answer: 1 },
        { q: "Welke kabel wordt tegenwoordig het meest gebruikt om schermen met hoge resoluties en hoge framerates (zoals 144Hz) aan te sluiten?", options: ["VGA", "SCART", "DisplayPort (DP)", "USB 2.0"], answer: 2 }
    ],
    "Cybersecurity": [
        { q: "Wat is 'Dumpster Diving' in de context van hacken?", options: ["In afvalbakken van bedrijven zoeken naar weggegooide documenten met wachtwoorden of gevoelige informatie", "Een digitaal virus dat de prullenbak van Windows wist", "Het hacken van smart-prullenbakken", "Een manier om goedkope hardware te vinden"], answer: 0 },
        { q: "Wat is een 'Password Manager' (Wachtwoordbeheerder)?", options: ["Een persoon die op kantoor de wachtwoorden bewaart", "Een tool (zoals Bitwarden of 1Password) die al je unieke, complexe wachtwoorden veilig versleuteld opslaat in een kluis", "Een virus dat wachtwoorden steelt", "Een Excel bestand"], answer: 1 },
        { q: "Wat betekent 'Biometrische Authenticatie'?", options: ["Inloggen met een groen, milieuvriendelijk apparaat", "Inloggen met unieke fysieke kenmerken, zoals een vingerafdruk, gezichtsscan of irisscan", "Inloggen met twee wachtwoorden", "Inloggen via Bluetooth"], answer: 1 },
        { q: "Wat is een 'Worm' in cybersecurity?", options: ["Een fysiek beestje in de server", "Een gevaarlijk type malware dat zichzelf volautomatisch verspreidt over een netwerk, zónder dat de gebruiker ergens op hoeft te klikken", "Een trage verbinding", "Een bestand dat je data opeet"], answer: 1 },
        { q: "Wat is 'Tailgating' (of Piggybacking) in de beveiliging?", options: ["Dicht achter een auto rijden", "Als onbevoegde stiekem of soepeltjes meelopen met een medewerker door een beveiligde deur die net is geopend met een pasje", "Een kabel aftappen", "Een website hacken via de achterdeur"], answer: 1 }
    ],
    "Game Development": [
        { q: "Wat is 'Anti-Aliasing' in games?", options: ["Een techniek om cheaters te bannen", "Een grafische techniek die de lelijke, 'gekartelde' randjes van 3D-modellen vloeiender en zachter maakt op je scherm", "Het uitschakelen van de zwaartekracht", "Een soort multiplayer server"], answer: 1 },
        { q: "Wat wordt er bedoeld met 'Ray Tracing'?", options: ["Een racegame type", "Een uiterst zware, geavanceerde grafische techniek die de fysieke paden van lichtstralen simuleert voor fotorealistische reflecties en schaduwen", "Een tool om lijnen te tekenen", "Een debug methode"], answer: 1 },
        { q: "Wat is een 'Skybox' in een 3D game engine?", options: ["Een doos die uit de lucht valt", "Een grote kubus of bol om de spelwereld heen, waarop een plaatje (zoals wolken en bergen) is geprojecteerd om een oneindige achtergrond te simuleren", "Het hoofdkantoor van de game developers", "Een onzichtbare muur"], answer: 1 },
        { q: "Wat is een 'Game Loop'?", options: ["Een level dat je steeds opnieuw speelt", "Het kloppende hart van de code: een oneindige loop die continu input leest, de physics/logica updatet en het scherm opnieuw tekent (rendert)", "Een bug in de game", "De achtergrondmuziek"], answer: 1 }
    ],
    "Tech Geschiedenis & Trivia": [
        { q: "In welk jaar bracht Apple de allereerste iPhone uit?", options: ["2001", "2005", "2007", "2010"], answer: 2 },
        { q: "Welk iconisch bedrijf werd opgericht in een garage in 1998 door Larry Page en Sergey Brin?", options: ["Apple", "Microsoft", "Amazon", "Google"], answer: 3 },
        { q: "Hoe noemden we de vierkante, plastic schijfjes (van bijv. 1.44 MB) waarop we vroeger bestanden bewaarden vóór de USB-stick?", options: ["CD-ROM", "Floppy Disk (Diskette)", "Vinyl", "Punch cards"], answer: 1 },
        { q: "Wat maakte vroeger een heel specifiek, hard, piepend en krakend geluid voordat je op het internet kon?", options: ["Een inbel-modem (Dial-up)", "De harde schijf", "De printer", "De muis"], answer: 0 },
        { q: "Welke populaire gamereeks begon ooit als een mod voor het spel Half-Life?", options: ["Minecraft", "Counter-Strike", "Call of Duty", "Fortnite"], answer: 2 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 2: Voegt ook deze vragen automatisch toe aan je database!
for (let category in extraVragenDeel2) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel2[category]);
    } else {
        questionBank[category] = extraVragenDeel2[category]; 
    }
}

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 3 - NOG MEER VRAGEN!
// =====================================================================

const extraVragenDeel3 = {
    "HTML & CSS": [
        { q: "Wat is de functie van de 'nav' tag in HTML5?", options: ["Het is een oud type link", "Het groepeert de belangrijkste navigatielinks (menu's) van de website", "Het maakt de website sneller", "Het staat voor 'Naval' en wordt gebruikt voor blauwe thema's"], answer: 1 },
        { q: "Hoe maak je een 'Drop Shadow' (schaduw) achter een HTML-element via CSS?", options: ["shadow-element: 5px;", "box-shadow: 5px 5px 10px gray;", "background-shadow: on;", "filter: shadow;"], answer: 1 },
        { q: "Wat doet de 'vw' eenheid in CSS (bijv: width: 50vw;)?", options: ["Very Wide", "Viewport Width (percentage van de breedte van het scherm)", "Vertical Width", "Verwijdert de breedte"], answer: 1 },
        { q: "Welke HTML tag gebruik je om een drop-down lijst te maken?", options: ["<list>", "<dropdown>", "<select>", "<menu>"], answer: 2 },
        { q: "Wat is 'Bootstrap' in de context van webdesign?", options: ["Een fysieke server", "Een populair CSS-framework met kant-en-klare stijlen en componenten voor responsive design", "Een virus dat je pc opstart", "Een manier om websites te beveiligen"], answer: 1 }
    ],
    "JavaScript": [
        { q: "Wat doet de array methode '.filter()' in JavaScript?", options: ["Verwijdert de hele array", "Maakt een compleet nieuwe array met alleen de elementen die aan een bepaalde voorwaarde (test) voldoen", "Telt hoeveel elementen er zijn", "Vervangt tekst in de array"], answer: 1 },
        { q: "Wat is het verschil tussen 'let' en 'const' als je een variabele maakt?", options: ["Er is geen verschil", "let is voor tekst, const voor getallen", "Variabelen gemaakt met 'const' kunnen later NIET meer worden overschreven met een nieuwe waarde, 'let' wel", "const is sneller maar let is veiliger"], answer: 2 },
        { q: "Wat betekent de error 'ReferenceError: x is not defined' in de console?", options: ["De internetverbinding is weg", "Je probeert een variabele (x) te gebruiken die nog niet is aangemaakt of buiten je bereik (scope) ligt", "De server is gecrasht", "Er mist een puntkomma"], answer: 1 },
        { q: "Wat is het verschil tussen localStorage en sessionStorage in de browser?", options: ["Er is geen verschil", "localStorage is voor plaatjes, sessionStorage voor tekst", "Data in sessionStorage wordt direct gewist als je het tabblad sluit, localStorage blijft voor altijd bewaard (tenzij je het zelf wist)", "sessionStorage is sneller"], answer: 2 },
        { q: "Hoe voeg je twee strings (stukken tekst) aan elkaar vast in JavaScript?", options: ["Met het + symbool of template literals (`...`)", "Met het * symbool", "Met het - symbool", "Met de functie join()"], answer: 0 }
    ],
    "Python": [
        { q: "Hoe maak je een lijst (List) leeg in Python?", options: ["lijst.empty()", "lijst.clear()", "lijst.delete()", "lijst.remove_all()"], answer: 1 },
        { q: "Wat doet het commando 'tekst.upper()' in Python?", options: ["Maakt de tekst groter op het scherm", "Zet de hele tekst om naar HOOFDLETTERS", "Zet de tekst bovenaan de pagina", "Verwijdert kleine letters"], answer: 1 },
        { q: "Wat is een 'Set' in Python?", options: ["Een filmset", "Een verzameling van unieke elementen (waarin geen dubbele waardes voor mogen komen)", "Een lijst die je niet kunt aanpassen", "Een speciale string"], answer: 1 },
        { q: "Wat is de output van 10 % 3 (Modulo operator) in Python?", options: ["3.33", "3", "1 (de restwaarde na deling)", "0"], answer: 2 },
        { q: "Wat is het doel van een 'try...except' blok?", options: ["Om de code sneller te maken", "Om mogelijke errors netjes op te vangen en af te handelen zonder dat het hele script crasht", "Om hackers buiten te houden", "Om te testen of je internet hebt"], answer: 1 }
    ],
    "Databases": [
        { q: "Waarvoor dient het SQL keyword 'HAVING'?", options: ["Om te checken of een database vol is", "Hetzelfde als WHERE, maar dan speciaal gebruikt om te filteren op de uitkomst van aggregatiefuncties (zoals COUNT of SUM) bij een GROUP BY", "Om data te beveiligen", "Om tabellen te mixen"], answer: 1 },
        { q: "Welk SQL commando gebruik je om een nieuwe kolom toe te voegen aan een bestaande tabel?", options: ["ADD COLUMN", "ALTER TABLE", "UPDATE TABLE", "INSERT COLUMN"], answer: 1 },
        { q: "Wat is een 'Data Warehouse'?", options: ["Een fysieke opslagloods voor harde schijven", "Een gigantisch, centraal database-systeem dat speciaal is geoptimaliseerd voor het analyseren van enorme hoeveelheden historische bedrijfsdata", "Een netwerkkabel", "Een online backup van je telefoon"], answer: 1 },
        { q: "Wat betekent de foutmelding 'SQL Syntax Error'?", options: ["Je typt te snel", "Je hebt een typfout gemaakt of de regels van de SQL programmeertaal overtreden (bijv. een vergeten komma of verkeerd woord)", "De database is gehackt", "Je wachtwoord klopt niet"], answer: 1 },
        { q: "Welke poort wordt standaard vaak gebruikt door MySQL databases?", options: ["80", "443", "3306", "21"], answer: 2 }
    ],
    "Netwerken": [
        { q: "Waarvoor wordt het 'FTP' (File Transfer Protocol) voornamelijk gebruikt?", options: ["Om films te streamen", "Om bestanden (zoals website-code) via het netwerk of internet te uploaden en downloaden naar een server", "Om e-mails te sturen", "Om te videobellen"], answer: 1 },
        { q: "Wat is de taak van een 'Gateway' in je thuisnetwerk?", options: ["Het is je wachtwoord", "Het fungeert als de uitgang en ingang: het is het punt (vaak je router) waar jouw lokale netwerk verbindt met het grote internet", "Het blokkeert virussen", "Het maakt WiFi sneller"], answer: 1 },
        { q: "Wat betekent het als een server in een 'DMZ' (Demilitarized Zone) staat?", options: ["De server is fysiek vernietigd", "De server staat in een streng afgeschermd deel van het netwerk, apart van het interne bedrijfsnetwerk, maar wel bereikbaar vanaf het internet (voor de veiligheid)", "De server staat in een bunker", "De server heeft geen firewall nodig"], answer: 1 },
        { q: "Waarvoor staat de afkorting 'LAN'?", options: ["Local Area Network (een lokaal netwerk, bijv. thuis of in een kantoor)", "Large Area Network", "Light Access Node", "Logical Array Network"], answer: 0 },
        { q: "Wat is een 'Loopback' adres?", options: ["Een adres om e-mails terug te sturen", "Een IP-adres (zoals 127.0.0.1) waarmee een computer een netwerkverbinding met zichzelf kan maken om diensten te testen", "Een hacker-tool", "Een kapotte netwerkkabel"], answer: 1 }
    ],
    "Hardware & OS": [
        { q: "Wat betekent het als een CPU aan 'Thermal Throttling' doet?", options: ["Hij gaat sneller werken", "De processor wordt te heet en verlaagt daarom volautomatisch zijn eigen kloksnelheid om af te koelen en schade te voorkomen", "Hij trekt extra stroom", "Hij schakelt de videokaart uit"], answer: 1 },
        { q: "Wat is DDR (zoals in DDR4 of DDR5)?", options: ["Een game", "Een generatiestandaard voor supersnel RAM-geheugen (Double Data Rate)", "Een type processor van Intel", "Een type computermonitor"], answer: 1 },
        { q: "Wat is de functie van een 'Heatsink' op een processor?", options: ["Het verwarmt de pc in de winter", "Het vergroot de oppervlakte van de chip met metalen vinnen, zodat ventilatoren de hitte veel makkelijker kunnen wegblazen", "Het beschermt tegen virussen", "Het zorgt voor stroomvoorziening"], answer: 1 },
        { q: "Wat is de 'Command Prompt' (CMD) of PowerShell in Windows?", options: ["Een virus", "Een tekstgebaseerde interface waarmee je Windows kunt besturen via getypte commando's (vergelijkbaar met de Terminal in Linux/Mac)", "Een tool om foto's te bewerken", "Een internetbrowser"], answer: 1 },
        { q: "Wat wordt bedoeld met de 'Form Factor' van een moederbord?", options: ["De prijs van het bord", "De gestandaardiseerde fysieke afmetingen en indeling (zoals ATX, Micro-ATX, Mini-ITX) zodat het in een PC-behuizing past", "De kleur van het moederbord", "Het type software dat erop draait"], answer: 1 }
    ],
    "Cybersecurity": [
        { q: "Wat is een 'Brute Force' aanval?", options: ["Een fysieke aanval op een serverkast", "Een simpele hackmethode waarbij een script of bot letterlijk alle mogelijke combinaties van wachtwoorden razendsnel uitprobeert totdat het de juiste vindt", "Een virus via USB", "Het manipuleren van medewerkers"], answer: 1 },
        { q: "Wat is een 'Dictionary Attack'?", options: ["Iemand slaan met een woordenboek", "Een variant op brute force waarbij het script razendsnel lijsten met bekende, veelgebruikte woorden en wachtwoorden (uit datalekken) uitprobeert", "Een aanval op een vertaalwebsite", "Een netwerkstoring"], answer: 1 },
        { q: "Wat bedoelt men in de cybersecurity met 'Patching'?", options: ["Gaten in de serverruimte dichten", "Het zo snel mogelijk installeren van software-updates om nieuw ontdekte kwetsbaarheden en veiligheidslekken te repareren", "Het hacken van een systeem", "Het versleutelen van data"], answer: 1 },
        { q: "Waar staat de afkorting 'VPN' voor?", options: ["Visual Programming Node", "Virtual Private Network (een versleutelde tunnel over het openbare internet voor meer privacy en veiligheid)", "Very Personal Name", "Virtual Protocol Network"], answer: 1 },
        { q: "Wat is een 'Honeypot'?", options: ["Een pot honing", "Een opzettelijk kwetsbaar gemaakt systeem dat als lokaas dient om hackers aan te trekken, te bestuderen en te vertragen", "Een virus", "Een fysieke kluis voor harde schijven"], answer: 1 }
    ],
    "Tech Geschiedenis & Trivia": [
        { q: "Hoe heette het allereerste computervirus ooit (in 1971), dat de simpele boodschap 'I'm the [naam], catch me if you can!' achterliet?", options: ["The Creeper", "ILOVEYOU", "Stuxnet", "Mydoom"], answer: 0 },
        { q: "Hoe heette de enorme computer (ontwikkeld door o.a. Alan Turing) die tijdens de Tweede Wereldoorlog werd gebruikt om Duitse Enigma-codes te kraken?", options: ["De ENIAC", "De Bombe (of Colossus)", "De Apollo", "De Mark I"], answer: 1 },
        { q: "Welk iconisch videospel over vallende blokken werd in 1984 in de Sovjet-Unie bedacht door Alexey Pajitnov?", options: ["Pong", "Space Invaders", "Tetris", "Pac-Man"], answer: 2 },
        { q: "Voor hoeveel miljard dollar kocht Facebook (Meta) in 2012 de populaire foto-app Instagram?", options: ["Facebook heeft Instagram niet gekocht (het was andersom)", "1 miljard dollar", "10 miljard dollar", "100 miljard dollar"], answer: 1 },
        { q: "Wat was in 1999 de eerste massaal populaire en revolutionaire peer-to-peer file-sharing dienst (vooral gebruikt om illegaal MP3's te downloaden)?", options: ["Spotify", "Limewire", "Napster", "Napster (maar Kazaa bestond ook)"], answer: 2 } // Note: Napster was de bekendste pioniert in '99
    ],
    "Cloud & DevOps": [
        { q: "Wat is een 'Pipeline' in CI/CD?", options: ["Een olieleiding in een datacenter", "Een geautomatiseerde reeks van scripts en stappen die code neemt vanaf de commit, langs automatische tests, tot aan de live deployment op de server", "Een database tabel", "Een type netwerkkabel"], answer: 1 },
        { q: "Wat is 'Docker Compose'?", options: ["Een muziekprogramma", "Een tool (met een YAML bestand) om applicaties die uit meerdere Docker-containers bestaan (bijv. een webserver én een database) met één commando op te starten", "Een cloud provider", "Een virusscanner voor Docker"], answer: 1 },
        { q: "Wat is Amazon S3 (Simple Storage Service)?", options: ["Een type server", "Een extreem populaire en schaalbare cloud-opslagdienst van AWS, speciaal voor het opslaan en ophalen van losse bestanden (objects) zoals foto's, video's en back-ups", "Een relationele database", "Een netwerk switch"], answer: 1 },
        { q: "Wat wordt bedoeld met de 'Cloud'?", options: ["Weerdata analyseren", "Een wereldwijd netwerk van externe datacenters (servers) dat via het internet diensten levert zoals opslag, rekenkracht en databases, zodat je zelf geen fysieke servers hoeft te bezitten", "Een zwevende harde schijf", "Een satellietnetwerk"], answer: 1 }
    ],
    "Game Development": [
        { q: "Wat is een 'Vector3' in Unity of andere 3D engines?", options: ["Een wapen", "Een structuur die een positie of richting in 3D-ruimte aangeeft aan de hand van X, Y, en Z coördinaten", "Een type vijand", "Een kleurcode"], answer: 1 },
        { q: "Waarvoor dient het 'Transform' component in vrijwel elke game engine?", options: ["Om de game af te sluiten", "Het beheert en bewaart de exacte Positie, Rotatie en Schaal (grootte) van een object in de spelwereld", "Om muziek af te spelen", "Om de game te versnellen"], answer: 1 },
        { q: "Wat is 'Baking' (bijvoorbeeld Light Baking) in een game engine?", options: ["Een kook-game maken", "Het vooraf (tijdens het bouwen van de game) berekenen en opslaan van zware effecten (zoals schaduwen) als vaste plaatjes, om de videokaart van de speler te ontlasten tijdens het spelen", "Het spel opslaan", "Code comprimeren"], answer: 1 },
        { q: "Wat wordt bedoeld met de 'Z-as' in 3D-programmeren?", options: ["De tijd-as", "Meestal de as die de diepte bepaalt (vooruit en achteruit in de 3D wereld)", "De as voor omhoog en omlaag", "De as voor links en rechts"], answer: 1 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 3: Voegt ook DEZE vragen automatisch toe aan je database!
for (let category in extraVragenDeel3) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel3[category]);
    } else {
        questionBank[category] = extraVragenDeel3[category]; 
    }
}

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 4 - ULTIEME UITBREIDING!
// =====================================================================

const extraVragenDeel4 = {
    "HTML & CSS": [
        { q: "Welke HTML tag gebruik je voor de 'header' of koptekst van een tabel?", options: ["<head>", "<top>", "<th>", "<tr>"], answer: 2 },
        { q: "Hoe zorg je er in CSS voor dat een link geen lelijk streepje eronder heeft?", options: ["text-decoration: none;", "underline: false;", "link-style: none;", "border-bottom: 0;"], answer: 0 },
        { q: "Wat doet de CSS eigenschap 'text-transform: uppercase;'?", options: ["Maakt de tekst groter", "Zet de hele tekst om naar HOOFDLETTERS", "Maakt de tekst vetgedrukt", "Laat de tekst knipperen"], answer: 1 },
        { q: "Welke semantische HTML5 tag is speciaal bedoeld voor een onafhankelijk nieuwsartikel of blogpost?", options: ["<div>", "<post>", "<section>", "<article>"], answer: 3 },
        { q: "Wat is de standaardwaarde van de 'position' eigenschap in CSS?", options: ["absolute", "relative", "static", "fixed"], answer: 2 },
        { q: "Welke HTML tag gebruik je om tekst door te strepen (alsof het fout of verwijderd is)?", options: ["<strike> of <s>", "<line>", "<cut>", "<remove>"], answer: 0 }
    ],
    "JavaScript": [
        { q: "Welk operator-symbool gebruik je in JavaScript om te checken of iets NIET gelijk is aan iets anders?", options: ["<>", "!==", "not=", "!!="], answer: 1 },
        { q: "Welke methode gebruik je om een string (tekst) volledig om te zetten naar kleine letters?", options: ["toLower()", "lowerCase()", "toLowerCase()", "smallText()"], answer: 2 },
        { q: "Wat doet de array methode '.join('-')'?", options: ["Voegt twee arrays samen", "Plakt alle elementen uit de array aan elkaar als één lange tekst, gescheiden door een '-'", "Verwijdert het min-teken", "Telt de elementen af"], answer: 1 },
        { q: "Welk keyword gebruik je om een 'switch' statement te verlaten (stoppen) als je een match hebt gevonden?", options: ["exit", "return", "stop", "break"], answer: 3 },
        { q: "Welk 'event' wordt in de browser geactiveerd zodra de volledige HTML van de pagina is ingeladen?", options: ["onRender", "DOMContentLoaded (of load)", "pageReady", "onStart"], answer: 1 },
        { q: "Als je het datatype van 'NaN' (Not a Number) opvraagt in JavaScript, wat zegt de console dan opmerkelijk genoeg?", options: ["NaN", "undefined", "number", "string"], answer: 2 }
    ],
    "Python": [
        { q: "Met welke ingebouwde functie vind je snel het hoogste getal in een lijst met getallen?", options: ["top()", "high()", "max()", "peak()"], answer: 2 },
        { q: "Welk symbool gebruik je in Python om te controleren of twee waarden NIET gelijk aan elkaar zijn?", options: ["<>", "!==", "not=", "!="], answer: 3 },
        { q: "Welk keyword gebruik je om een compleet nieuwe 'Class' (klasse) te definiëren in Python?", options: ["create", "new", "class", "object"], answer: 2 },
        { q: "Wat is de functie van f-strings (bijv. f'Hallo {naam}') in moderne Python?", options: ["Het forceert een foutmelding", "Het is een makkelijke, leesbare manier om variabelen direct in een string (tekst) te injecteren", "Het zoekt naar bestanden", "Het maakt de tekst vetgedrukt"], answer: 1 },
        { q: "Wat doet de methode '.extend()' bij een Python lijst?", options: ["Maakt de lijst breder op het scherm", "Voegt meerdere elementen uit een andere lijst tegelijk toe aan het einde van de huidige lijst", "Verlengt de levensduur van de lijst", "Kopieert de lijst"], answer: 1 },
        { q: "Welk datatype wordt in Python gebruikt voor logische Waar/Niet Waar (True/False) waarden?", options: ["boolean (bool)", "integer (int)", "string (str)", "float"], answer: 0 }
    ],
    "Databases": [
        { q: "Welk SQL commando gebruik je om een eerdere, ongewenste aanpassing (transactie) in de database razendsnel terug te draaien?", options: ["UNDO", "REVERT", "ROLLBACK", "CTRL+Z"], answer: 2 },
        { q: "Welke clausule (clause) gebruik je in SQL om de opgevraagde resultaten netjes te sorteren (bijv. van A naar Z)?", options: ["SORT BY", "ORDER BY", "ARRANGE", "GROUP BY"], answer: 1 },
        { q: "Wat doet het SQL commando 'GRANT'?", options: ["Het vraagt om meer geheugen", "Het geeft specifieke rechten of toestemmingen aan een databasegebruiker", "Het verwijdert een gebruiker", "Het maakt een back-up"], answer: 1 },
        { q: "Wat betekent de conditie 'LIKE '%a'' in een SQL zoekopdracht?", options: ["Zoek alles wat exact 'a' is", "Zoek alle woorden die BEGINNEN met een 'a'", "Zoek alle woorden die EINDIGEN op een 'a'", "Zoek alle woorden waar ergens een 'a' in zit"], answer: 2 },
        { q: "Hoe voorkom je als developer de gevaarlijke 'SQL Injection' hacks?", options: ["Door de server in het weekend uit te zetten", "Door Prepared Statements (geparameteriseerde queries) te gebruiken, zodat gebruikers-input nooit als code wordt gezien", "Door de database een ander IP te geven", "Door geen wachtwoorden te gebruiken"], answer: 1 }
    ],
    "Netwerken": [
        { q: "Welke netwerkpoort wordt standaard gebruikt voor het DNS-protocol (Domeinnaam vertaling)?", options: ["21", "80", "53", "443"], answer: 2 },
        { q: "Wat beveiligt het bekende protocol 'WPA2' of 'WPA3'?", options: ["Je e-mailverkeer", "De fysieke netwerkkabels in de straat", "De draadloze WiFi verbinding van je router", "Je opgeslagen wachtwoorden in de browser"], answer: 2 },
        { q: "Op welke van de 7 lagen in het OSI-model opereren HTTP, FTP en webbrowsers?", options: ["Datalink Layer (Laag 2)", "Network Layer (Laag 3)", "Transport Layer (Laag 4)", "Application Layer (Laag 7)"], answer: 3 },
        { q: "Hoe lang (hoeveel bits) is een modern IPv6 netwerkadres?", options: ["32 bits", "64 bits", "128 bits", "256 bits"], answer: 2 },
        { q: "OpenVPN en IPsec zijn voorbeelden van veelgebruikte protocollen voor...", options: ["E-mail spam filters", "Het opzetten van veilige VPN tunnels", "Het renderen van websites", "Het opslaan van databases"], answer: 1 }
    ],
    "Hardware & OS": [
        { q: "Wat is de functie van de piepkleine (CR2032) batterij op je moederbord?", options: ["Stroom leveren als de stroom uitvalt", "De systeemklok (tijd) laten doorlopen en je BIOS/UEFI instellingen onthouden als de stekker eruit is", "De videokaart extra power geven", "Virussen buiten de deur houden"], answer: 1 },
        { q: "Wat is het belangrijkste verschil tussen een 32-bit en een 64-bit besturingssysteem?", options: ["64-bit kan dubbel zo heldere kleuren weergeven", "64-bit kan gigantisch veel meer RAM-geheugen (meer dan 4GB) direct aanspreken en gebruiken", "32-bit is sneller", "64-bit verbruikt geen stroom"], answer: 1 },
        { q: "Waar staat de afkorting 'UPS' (Uninterruptible Power Supply) voor in serverbeheer?", options: ["Een koeriersbedrijf", "Een enorme noodaccu die voorkomt dat servers direct uitvallen tijdens een stroomstoring, zodat ze veilig kunnen afsluiten", "Een extra snelle harde schijf", "Een processor upgrade"], answer: 1 },
        { q: "Wat doet een 'Driver' (stuurprogramma) op je computer?", options: ["Het bestuurt een racegame", "Het is een stukje software dat het besturingssysteem (zoals Windows) vertelt hoe het moet communiceren met een specifiek stuk aangesloten hardware (zoals een printer of videokaart)", "Het zoekt naar virussen", "Het bewaart je wachtwoorden"], answer: 1 },
        { q: "Wat is een 'Heatpipe' in een computerkoeler?", options: ["Een buisje voor de stroom", "Een holle, vaak koperen buis gevuld met een beetje vloeistof, die extreem efficiënt de hitte wegtrekt van de hete processor naar de koelvinnen", "Een kabel voor het internet", "Een ventilator"], answer: 1 }
    ],
    "Cybersecurity": [
        { q: "Wat is een 'Rootkit' in de wereld van malware?", options: ["Een tool om planten te kweken", "Een zeer gevaarlijk type malware dat zich extreem diep (op systeemniveau) in je OS nestelt om onzichtbaar te blijven voor virusscanners", "Een veilig netwerkprotocol", "Een type firewall"], answer: 1 },
        { q: "Wat doet 'Adware' voornamelijk op je computer of telefoon?", options: ["Het steelt je wachtwoorden direct", "Het bombardeert je continu met ongewenste, irritante reclames en pop-ups om geld te verdienen voor de maker", "Het wist je harde schijf", "Het repareert je netwerk"], answer: 1 },
        { q: "Wat is een 'Logic Bomb' (Logische Bom) in cybersecurity?", options: ["Een defect in je voeding", "Kwaadaardige code die onopvallend in een systeem slaapt en pas 'ontploft' (activeert) wanneer een hele specifieke voorwaarde is bereikt (bijv. op een bepaalde datum of als een medewerker ontslagen wordt)", "Een aanval via de cloud", "Een encryptie-methode"], answer: 1 },
        { q: "Wat is het (vaak illegale) 'Tor' netwerk (The Onion Router)?", options: ["Een netwerk voor online gamers", "Een speciaal netwerk dat internetverkeer willekeurig versleutelt en via talloze wereldwijde knooppunten (nodes) stuurt om de gebruiker maximale anonimiteit te bieden", "Een nieuw soort WiFi 6", "Een server van Microsoft"], answer: 1 },
        { q: "Wat is een 'Bug Bounty Program' bij grote techbedrijven?", options: ["Een virus dat je computer gijzelt", "Een officieel beloningsprogramma waarbij bedrijven hackers (white-hats) flink betalen als ze een beveiligingslek ontdekken en veilig melden, vóórdat criminelen het misbruiken", "Een wekelijkse update-cyclus", "Een kortingsactie voor software"], answer: 1 }
    ],
    "Git & Versiebeheer": [
        { q: "Welk commando gebruik je om snel te zien wélke bestanden je hebt gewijzigd, maar nog niet hebt opgeslagen (gecommit)?", options: ["git look", "git show", "git status", "git check"], answer: 2 },
        { q: "Wat betekent het om een repository op GitHub te 'Forken'?", options: ["Het project verwijderen", "Je maakt een compleet eigen, persoonlijke en onafhankelijke kopie van andermans repository op jouw eigen account, om er veilig aan te kunnen sleutelen", "Je blokkeert de code voor anderen", "Je stuurt de code via de mail"], answer: 1 },
        { q: "Met welk commando maak je direct een nieuwe branch aan én stap je er in één keer naartoe?", options: ["git checkout -b [naam]", "git new branch", "git switch new", "git create"], answer: 0 },
        { q: "Hoe ongedaan maak je lokaal je allerlaatste commit, zónder dat je je actieve wijzigingen in je codebestanden verliest?", options: ["git delete last", "git reset --soft HEAD~1", "git drop commit", "git revert all"], answer: 1 },
        { q: "Waarvoor gebruik je 'git push --tags'?", options: ["Om hashtags te sturen", "Om specifieke 'tags' (die je gebruikt om versie-releases of updates zoals 'v1.2' permanent te markeren) naar de externe server te sturen", "Om je code te versleutelen", "Om mappen te verwijderen"], answer: 1 }
    ],
    "Cloud & DevOps": [
        { q: "Wat is 'Terraform' in de DevOps wereld?", options: ["Een game over boeren", "Een enorm populaire, open-source tool van HashiCorp waarmee je veilig en voorspelbaar je cloud-infrastructuur kunt bouwen en beheren via code (Infrastructure as Code)", "Een database in de cloud", "Een virusscanner"], answer: 1 },
        { q: "Wat is het cloudplatform 'Azure' en van welk bedrijf is het?", options: ["Het cloudplatform van Google", "Het gigantische, wereldwijde cloud computing-platform van Microsoft", "Het cloudplatform van Amazon", "Een lokale opslagdienst van Apple"], answer: 1 },
        { q: "Wat is 'Jenkins' in softwareontwikkeling?", options: ["Een bekende hacker", "Een van de oudste en meest gebruikte open-source automatisering-servers om CI/CD pipelines (bouwen, testen, deployen) mee te draaien", "Een type firewall", "Een programmeertaal"], answer: 1 },
        { q: "Wat is een 'Hypervisor' (of VMM)?", options: ["Een extreem snelle processor", "Een stuk geavanceerde software/hardware dat het mogelijk maakt om meerdere gescheiden Virtuele Machines (VM's) veilig op één fysieke host-computer te laten draaien", "Een soort bril voor VR", "Een koelsysteem voor servers"], answer: 1 },
        { q: "Wat is het verschil tussen IaaS en SaaS in de cloud?", options: ["Geen verschil", "Bij IaaS huur je de naakte infrastructuur (servers/netwerken) en doe je alles zelf; bij SaaS huur je kant-en-klare online software in de browser (zoals Office 365) waar je geen omkijken naar hebt", "IaaS is voor consumenten, SaaS voor bedrijven", "IaaS is altijd lokaal"], answer: 1 }
    ],
    "Algoritmes & Datastructuren": [
        { q: "Wat is een 'Graph' (Graaf) in de datastructuren?", options: ["Een lijngrafiek in Excel", "Een netwerkachtige datastructuur bestaande uit knooppunten (Nodes/Vertices) die met elkaar verbonden zijn via lijnen (Edges), veel gebruikt voor routeplanners en sociale netwerken", "Een type harde schijf", "Een programmeerfout"], answer: 1 },
        { q: "Hoe werkt het bekende, maar erg trage sorteeralgoritme 'Bubble Sort'?", options: ["Het blaast de data op", "Het doorloopt de lijst keer op keer, vergelijkt steeds twee elementen die naast elkaar staan, en wisselt ze om als ze in de verkeerde volgorde staan (de zware waardes 'borrelen' zo naar het eind)", "Het hakt de lijst willekeurig in stukjes", "Het zoekt via het internet"], answer: 1 },
        { q: "Wat is de gemiddelde tijdscomplexiteit (Big O) van een Binary Search (Binair Zoeken)?", options: ["O(1) - Extreem snel", "O(n) - Lijnair", "O(log n) - Logaritmisch (zeer efficiënt voor grote datasets)", "O(n^2) - Heel traag"], answer: 2 },
        { q: "Wat is een 'Stack Overflow' error eigenlijk letterlijk?", options: ["Een populaire website voor developers", "Een fatale fout die optreedt wanneer het limiet van het gereserveerde computergeheugen (de call stack) wordt overschreden, bijvoorbeeld door een oneindige, recursieve loop", "Wanneer het internet wegvalt", "Een fout in je database verbinding"], answer: 1 }
    ],
    "Tech Geschiedenis & Trivia": [
        { q: "Wie hebben in de jaren '70 het bedrijf Microsoft opgericht?", options: ["Steve Jobs & Steve Wozniak", "Bill Gates & Paul Allen", "Larry Page & Sergey Brin", "Mark Zuckerberg"], answer: 1 },
        { q: "Wat was het allereerste product dat Apple ooit verkocht in 1976?", options: ["De iPod", "De Apple Macintosh", "De Apple I (een simpel moederbord gebouwd door Steve Wozniak, bedoeld voor hobbyisten)", "De iPhone"], answer: 2 },
        { q: "Welk bedrijf is de oorspronkelijke bedenker en ontwerper van de machtige programmeertaal Java in de jaren '90?", options: ["Microsoft", "Sun Microsystems (later overgenomen door Oracle)", "IBM", "Apple"], answer: 1 },
        { q: "Wat gebeurde er tijdens de beruchte 'Dot-com Bubble' (Internetzeepbel) rond het jaar 2000-2001?", options: ["Internet werd verboden in veel landen", "Talloze gloednieuwe internetbedrijfjes met onrealistische verwachtingen gingen massaal failliet nadat de zwaar overgewaardeerde aandelenkoersen wereldwijd gigantisch instortten", "Het internet viel wereldwijd 3 dagen uit", "Google werd opgericht"], answer: 1 },
        { q: "In welk jaar lanceerde Sony de immens populaire 'PlayStation 2', de best verkochte console aller tijden?", options: ["1996", "1998", "2000", "2004"], answer: 2 }
    ],
    "Game Development": [
        { q: "Wat is 'Baked Lighting' (Gebakken Belichting) in een game engine?", options: ["Licht dat heet wordt op je scherm", "Het proces waarbij complexe lichtinval en schaduwen vooraf tijdens de ontwikkelfase worden berekend en als vaste texture-plaatjes over de wereld worden gelegd, om enorm veel CPU/GPU rekenkracht te besparen tijdens het spelen", "Een bug in het licht", "Het aanzetten van de zon in-game"], answer: 1 },
        { q: "Wat is de definitie van 'Collision Detection' (Botsing detectie)?", options: ["Het detecteren van cheaters", "Het computationele proces in de physics engine dat continu in de gaten houdt en berekent of twee of meer fysieke objecten of hitboxes in de virtuele ruimte elkaar snijden, raken of overlappen", "Een error waarbij de server stopt", "Het laden van nieuwe textures"], answer: 1 },
        { q: "Wat is een 'Polygon' (Polygoon) in 3D graphics?", options: ["Een papegaai-personage", "De absolute bouwsteen van een 3D-model: een platte geometrische vorm (meestal een driehoek) bestaande uit hoekpunten (vertices) die verbonden zijn met lijnen (edges)", "Een kleur in een game", "Een wapen"], answer: 1 },
        { q: "Wat is een 'Texture' in de grafische wereld?", options: ["Een manier om tekst in beeld te zetten", "Een 2D afbeeldingsbestand dat als een soort 'velletje' of behang over het oppervlak van een leeg 3D-model wordt gewikkeld (ge-mapped) om het details, kleur en realisme te geven", "Een geluidsbestand voor voetstappen", "Een type code voor belichting"], answer: 1 }
    ],
    "Data Science & IoT": [
        { q: "Wat is een 'Actuator' in een Internet of Things (IoT) systeem?", options: ["De batterij", "Het absolute tegenovergestelde van een sensor: het is het hardware-onderdeel dat daadwerkelijk fysieke actie of beweging onderneemt op basis van een datacommand, zoals een klep openzetten of een motor laten draaien", "Een netwerkkabel", "Een waarschuwingslampje"], answer: 1 },
        { q: "Waarom is 'Data Cleaning' (Data Opschonen) vaak de zwaarste en meest tijdrovende taak voor een Data Scientist?", options: ["Omdat computers langzaam typen", "Omdat ruwe data uit de echte wereld vrijwel altijd gigantisch rommelig, corrupt, onvolledig, of dubbel is, en een AI of model keihard faalt ('Garbage in, Garbage out') als de data niet eerst wiskundig perfect rechtgetrokken wordt", "Omdat het gevaarlijk is om te doen", "Omdat de bestanden te groot zijn voor de harde schijf"], answer: 1 },
        { q: "Wat is een 'DataFrame' (zoals in de Python Pandas library)?", options: ["Een rand om je beeldscherm", "Een uiterst efficiënte en overzichtelijke 2D gelabelde datastructuur, sterk vergelijkbaar met een SQL tabel of een Excel werkblad, bestaande uit rijen en kolommen met mogelijk verschillende typen data", "Een speciale server voor data", "Een grafiek met bolletjes"], answer: 1 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 4: Voegt ook deze ultieme lading vragen automatisch toe aan je database!
for (let category in extraVragenDeel4) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel4[category]);
    } else {
        questionBank[category] = extraVragenDeel4[category]; 
    }
}    

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 5 - MAKKELIJK & EXTREEM MOEILIJK GEMIXT!
// =====================================================================

const extraVragenDeel5 = {
    "HTML & CSS": [
        // Makkelijk
        { q: "Welke HTML tag maakt een element een blokcitaat?", options: ["<quote>", "<cite>", "<blockquote>", "<text>"], answer: 2 },
        { q: "Wat is de juiste HTML tag voor het invoegen van een achtergrondmuziekje of geluid?", options: ["<sound>", "<audio>", "<mp3>", "<music>"], answer: 1 },
        // Moeilijk
        { q: "Wat is de 'specificity' (prioriteit) van een ID in CSS vergeleken met een Class?", options: ["Een Class is sterker dan een ID", "Een ID is sterker (100) dan een Class (10)", "Ze zijn exact even sterk", "Een ID werkt alleen in HTML, niet in CSS"], answer: 1 },
        { q: "Welke eenheid in CSS is gebaseerd op de lettergrootte van het root-element (<html>)?", options: ["em", "px", "rem", "vh"], answer: 2 }
    ],
    "JavaScript": [
        // Makkelijk
        { q: "Welk keyword gebruik je in JavaScript om een variabele te maken waarvan de waarde later nog mag veranderen?", options: ["const", "let", "static", "fixed"], answer: 1 },
        { q: "Hoe roep je in JavaScript een alert-box op met de tekst 'Error'?", options: ["alert('Error');", "msgBox('Error');", "warning('Error');", "prompt('Error');"], answer: 0 },
        // Moeilijk
        { q: "Wat is een 'Pure Function' in JavaScript?", options: ["Een functie zonder variabelen", "Een functie die altijd exact dezelfde output geeft bij dezelfde input, en géén side-effects heeft", "Een functie die alleen tekst teruggeeft", "Een functie die niet gehackt kan worden"], answer: 1 },
        { q: "Wat is de return-waarde van de expressie: typeof null?", options: ["null", "undefined", "object", "string"], answer: 2 } // Bekende historische bug in JS!
    ],
    "Python": [
        // Makkelijk
        { q: "Hoe controleer je in een Python if-statement of variabele 'a' groter is dan 'b'?", options: ["if a > b:", "if a bigger b:", "if (a <> b):", "if a => b:"], answer: 0 },
        { q: "Met welk symbool kan je in Python meerdere strings aan elkaar vastplakken (concatenation)?", options: ["&", "*", "+", "-"], answer: 2 },
        // Moeilijk
        { q: "Wat is een 'Generator' in Python?", options: ["Een tool om wachtwoorden te maken", "Een functie die 'yield' gebruikt in plaats van 'return' om waarden één voor één op te leveren (lazy evaluation), wat enorm veel RAM geheugen bespaart", "Een loop die nooit stopt", "Een grafische module"], answer: 1 },
        { q: "Wat doet de 'zip()' functie in Python?", options: ["Het pakt bestanden in tot een .zip archief", "Het combineert twee of meer iterables (zoals lijsten) element voor element tot een iterator van tuples", "Het wist de console", "Het versnelt de code"], answer: 1 }
    ],
    "Databases": [
        // Makkelijk
        { q: "Wat is 'phpMyAdmin'?", options: ["Een virus", "Een veelgebruikte, gratis webapplicatie om MySQL- of MariaDB-databases visueel en makkelijk te beheren", "Een programmeertaal", "Een hostingbedrijf"], answer: 1 },
        { q: "In een database met klantgegevens, welke kolom is waarschijnlijk de 'Primary Key'?", options: ["De Achternaam", "Het Klantnummer (ID)", "De Woonplaats", "Het Telefoonnummer"], answer: 1 },
        // Moeilijk
        { q: "Wat is het beruchte 'N+1 query probleem' in ORM's (Object-Relational Mappers)?", options: ["Wanneer de database crasht na 1 query", "Wanneer een applicatie 1 query uitvoert om N objecten op te halen, en daarna (per ongeluk) nog eens N áparte queries uitvoert om de gerelateerde data van elk los object op te halen (wat de database zwaar overbelast)", "Wanneer tabellen geen relaties hebben", "Wanneer data dubbel wordt opgeslagen"], answer: 1 },
        { q: "Welk type NoSQL database is specifiek ontworpen om gigantische netwerken van relaties (zoals vrienden van vrienden op Facebook) razendsnel te doorzoeken?", options: ["Document Database", "Key-Value Store", "Graph Database (Graafdatabase, bijv. Neo4j)", "Time-Series Database"], answer: 2 }
    ],
    "Netwerken": [
        // Makkelijk
        { q: "Wat heb je nodig om een draadloze muis of draadloze koptelefoon met je laptop te verbinden, zónder dat je internet nodig hebt?", options: ["WiFi", "Bluetooth", "NFC", "Een UTP-kabel"], answer: 1 },
        { q: "Wat gebeurt er als je 'Vliegtuigstand' aanzet op je telefoon?", options: ["Je telefoon gaat sneller werken", "Alle draadloze verbindingen (WiFi, Bluetooth, 4G/5G) worden uitgeschakeld om storingen met vliegtuigapparatuur te voorkomen", "Je batterij laadt direct op", "De telefoon reset zichzelf"], answer: 1 },
        // Moeilijk
        { q: "Op welke laag van het OSI-model functioneert een 'Switch' voornamelijk, en gebruikt het MAC-adressen om data te sturen?", options: ["Laag 1 (Fysieke Laag)", "Laag 2 (Datalink Laag)", "Laag 3 (Netwerk Laag)", "Laag 7 (Applicatie Laag)"], answer: 1 },
        { q: "Wat is 'Anycast' in netwerkroutering?", options: ["Een methode om radio uit te zenden", "Een netwerktechniek waarbij meerdere servers verspreid over de wereld exact hetzelfde IP-adres delen, en de gebruiker automatisch naar de geografisch dichtstbijzijnde server wordt gestuurd", "Een fout in de router", "Een verouderd type WiFi"], answer: 1 }
    ],
    "Hardware & OS": [
        // Makkelijk
        { q: "Welke bekende toetsencombinatie druk je meestal in om een vastgelopen programma geforceerd te kunnen afsluiten via Taakbeheer in Windows?", options: ["Alt + F4", "Ctrl + Alt + Del", "Ctrl + Shift + Esc", "Windows-toets + R"], answer: 1 },
        { q: "Wat is een 'Webcam'?", options: ["Een programma om websites mee te maken", "Een kleine videocamera die is aangesloten op je computer of is ingebouwd in je laptop, veel gebruikt voor videobellen (Teams/Zoom)", "Een virus dat je bespioneert", "Een soort opslagschijf"], answer: 1 },
        // Moeilijk
        { q: "Wat is het verschil tussen L1 en L3 Cache in een CPU?", options: ["L1 is voor beeld, L3 is voor geluid", "L1 is het allersnelste maar piepkleine geheugen ín de rekenkern zelf. L3 is iets trager en groter, en wordt vaak gedeeld door alle kernen van de processor.", "L3 is altijd sneller dan L1", "L1 is defect geheugen"], answer: 1 },
        { q: "Wat is 'DirectX' of 'Vulkan'?", options: ["Een type beeldschermkabel", "Een API (Application Programming Interface) die ontwikkelaars directe toegang geeft tot de hardware-versnelling van de videokaart (GPU) voor het renderen van zware 3D graphics", "Een anti-cheat software voor games", "Een besturingssysteem"], answer: 1 }
    ],
    "Cybersecurity": [
        // Makkelijk
        { q: "Waarom is het gevaarlijk om in te loggen op je bank op een gratis, openbaar WiFi-netwerk in een café of in de trein?", options: ["Omdat het internet daar heel langzaam is", "Hackers op hetzelfde netwerk kunnen jouw internetverkeer vrij eenvoudig afluisteren en onversleutelde wachtwoorden stelen", "Omdat je telefoon dan crasht", "Het is niet gevaarlijk, WiFi is altijd veilig"], answer: 1 },
        { q: "Wat is 'Spam'?", options: ["Een lekker stukje vlees", "Ongewenste, ongevraagde bulk-e-mails die massaal worden verstuurd, vaak met reclame of phishing-links", "Een type computervirus", "Een firewall instelling"], answer: 1 },
        // Moeilijk
        { q: "Wat is 'Cross-Site Request Forgery' (CSRF)?", options: ["Een aanval op de hardware", "Een hack waarbij een ingelogde gebruiker misleid wordt om onbewust een ongewenste actie (zoals geld overmaken) uit te voeren op een webapplicatie waar hij op dat moment al geauthenticeerd is", "Het hacken van wachtwoorden via brute-force", "Het platleggen van een website"], answer: 1 },
        { q: "Wat doet de 'Salt' precies in cryptografische wachtwoord-hashing?", options: ["Het maakt de hash korter", "Het is een willekeurige, unieke reeks tekens die aan het wachtwoord wordt geplakt vóórdat het gehasht wordt. Dit zorgt ervoor dat twee gebruikers met exact hetzelfde wachtwoord toch een compleet andere hash in de database krijgen", "Het versnelt het inloggen", "Het voorkomt dat gebruikers simpele wachtwoorden kiezen"], answer: 1 }
    ],
    "Git & Versiebeheer": [
        // Makkelijk
        { q: "Welk online platform met een beroemd 'katten-octopus' (Octocat) logo wordt door miljoenen developers wereldwijd gebruikt om Git-code te hosten?", options: ["GitLab", "Bitbucket", "GitHub", "SourceForge"], answer: 2 },
        { q: "Wat typ je om alle actieve wijzigingen in je huidige map klaar te zetten (te stagen) voor een commit?", options: ["git add all", "git add .", "git save *", "git stage now"], answer: 1 },
        // Moeilijk
        { q: "Wat doet het commando 'git rebase -i' (Interactive Rebase)?", options: ["Het herstart de git server", "Hiermee open je een teksteditor waarmee je eerdere, oude commits kunt bewerken, samenvoegen (squashen), hernoemen of zelfs permanent verwijderen voordat je ze deelt met het team", "Het formatteert je harde schijf", "Het kopieert de code naar een andere branch"], answer: 1 },
        { q: "Wat is een 'Git Hook'?", options: ["Een kapotte branch", "Een scriptje dat Git automatisch uitvoert vlak vóór of na een specifieke actie, bijvoorbeeld: check op spelfouten vlak vóórdat iemand mag committen", "Een hacker tool", "Een GUI voor Git"], answer: 1 }
    ],
    "Cloud & DevOps": [
        // Makkelijk
        { q: "Welke van deze bekende cloud providers heeft een logo met een glimlach (een pijltje van A naar Z)?", options: ["Google Cloud", "Microsoft Azure", "Amazon Web Services (AWS)", "IBM Cloud"], answer: 2 },
        { q: "Wat betekent het als software in de cloud 'Down' is?", options: ["Het wordt gedownload", "De servers zijn gecrasht of onbereikbaar, waardoor niemand de website of app op dat moment kan gebruiken", "Het is goedkoop", "Het is beveiligd"], answer: 1 },
        // Moeilijk
        { q: "Wat betekent de term 'Chaos Engineering' (zoals de beroemde Chaos Monkey van Netflix)?", options: ["Code schrijven zonder na te denken", "Het bewust en gecontroleerd kapot maken of willekeurig uitschakelen van live servers in de productie-omgeving, om te testen of het systeem zichzelf foutloos en zonder downtime weet te herstellen", "Het creëren van virussen", "Het gebruik van extreem veel verschillende programmeertalen in 1 project"], answer: 1 },
        { q: "Wat is 'Blue/Green Deployment'?", options: ["Een kleurenschema voor een website", "Een deployment-techniek waarbij je twee identieke productie-omgevingen hebt (Blue en Green). Je update de inactieve omgeving en switcht dan het netwerkverkeer soepeltjes over, om downtime (uitval) te minimaliseren", "Een type netwerkkabel", "Een DevOps team opsplitsen"], answer: 1 }
    ],
    "Algoritmes & Datastructuren": [
        // Makkelijk
        { q: "Welke datastructuur lijkt het allermeest op een wachtrij voor de achtbaan in de Efteling?", options: ["Een Stack (Stapel)", "Een Queue (Rij)", "Een Tree (Boom)", "Een Array"], answer: 1 },
        { q: "Wat gebeurt er bij een 'Infinite Loop' in je code?", options: ["De code stopt direct", "De code blijft zichzelf voor altijd en oneindig herhalen, waardoor het programma vastloopt of de browser crasht", "De code wordt sneller", "De code wist zichzelf"], answer: 1 },
        // Moeilijk
        { q: "Wat is de 'Towers of Hanoi' (Torens van Hanoi) in de informatica?", options: ["Een serverpark in Azië", "Een klassieke wiskundige puzzel met schijven, die op universiteiten vrijwel altijd wordt gebruikt als het perfecte voorbeeld om te leren hoe 'Recursieve' algoritmes werken", "Een type firewall", "Een database structuur"], answer: 1 },
        { q: "Wat is het doel van het 'A*' (A-Star) algoritme?", options: ["Het is een sorting algoritme", "Het is een van de meest gebruikte en efficiënte algoritmes voor 'pathfinding': het vinden van de allerkortste route van punt A naar B met obstakels (veel gebruikt in games)", "Het versleutelt data", "Het comprimeert bestanden"], answer: 1 }
    ],
    "C# & Java (OOP)": [
        // Makkelijk
        { q: "Welk leesteken ben je in C# en Java verplicht achter vrijwel elke normale regel code te zetten?", options: ["Een punt (.)", "Een dubbele punt (:)", "Een puntkomma (;)", "Een uitroepteken (!)"], answer: 2 },
        { q: "Wat betekent het als de code je vertelt: 'Hello World!'?", options: ["Dat is een computervirus", "Het is traditioneel het állereerste kleine programmaatje dat beginners schrijven in een nieuwe programmeertaal om te testen of alles werkt", "Dat de computer kapot is", "Dat is de naam van de bedenker van Java"], answer: 1 },
        // Moeilijk
        { q: "Wat is 'Reflection' in talen zoals C# of Java?", options: ["Het reflecteren van licht in een game", "Een geavanceerd proces waarbij een draaiend programma tijdens runtime zijn éigen structuur, metadata, klasses en methodes kan inspecteren, opvragen of zelfs dynamisch aanpassen", "Het kopiëren van code", "Een type error"], answer: 1 },
        { q: "Wat is het verschil tussen een 'Interface' en een 'Abstract Class' in Java/C#?", options: ["Er is geen verschil", "Een Abstract Class kan wél uitgewerkte (concrete) methodes en state (variabelen) bevatten, een Interface stelt van oudsher puur een leeg 'contract' op zonder implementatie", "Een Interface is sneller", "Een Abstract Class is alleen voor netwerken"], answer: 1 }
    ],
    "AI & Machine Learning": [
        // Makkelijk
        { q: "Welk 'slim' apparaatje, dat in veel huiskamers staat, luistert naar stemcommando's zoals 'Hey Google' of 'Alexa'?", options: ["Een slimme koelkast", "Een slimme speaker (Voice Assistant)", "Een slim horloge", "Een VR-bril"], answer: 1 },
        { q: "Waarvoor staat de 'A' in AI?", options: ["Automatic", "Anonymous", "Artificial (Kunstmatig)", "Advanced"], answer: 2 },
        // Moeilijk
        { q: "Wat is het primaire doel van de 'Loss Function' (Verliesfunctie) tijdens het trainen van een neuraal netwerk?", options: ["Het wist oude data", "Het berekent wiskundig de foutmarge: het verschil tussen de huidige voorspelde output van de AI en het daadwerkelijke, correcte antwoord. Dit getal gebruikt de AI vervolgens om zichzelf te verbeteren", "Het verlaagt het stroomverbruik", "Het voorkomt dat de AI gaat hallucineren"], answer: 1 },
        { q: "Wat is 'Backpropagation' (Terugpropagatie) in Deep Learning?", options: ["Het maken van een back-up", "Het algoritme/proces dat de berekende fout (Loss) vanaf de output-laag netjes terugvoert door het hele netwerk, om de gewichten (weights) van de neuronen aan te passen en het model zo te laten 'leren'", "Het terugdraaien van een software update", "Een type firewall"], answer: 1 }
    ],
    "Game Development": [
        // Makkelijk
        { q: "Welke wiskundige assen of dimensies gebruik je bij het maken van een '2D' (Tweedimensionale) game, zoals Mario?", options: ["Alleen de X-as", "De X en Y as (Lengte en Breedte)", "De X, Y en Z as", "Geen assen"], answer: 1 },
        { q: "Wat bedoelt een gamer met een 'Glitch' of 'Bug' in het spel?", options: ["Een cheatcode", "Een onbedoelde fout of weeffout in de code van de game, waardoor spelers bijvoorbeeld door muren kunnen lopen of in de lucht zweven", "Een heel moeilijk level", "De eindbaas"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Gimbal Lock' in 3D animatie en game development?", options: ["Een deurslot in een game", "Een zwaar wiskundig probleem (bij het gebruik van Euler rotaties) waarbij twee van de drie rotatie-assen perfect parallel aan elkaar komen te liggen, waardoor je plotseling de mogelijkheid verliest om in de derde dimensie te roteren", "Een type anti-cheat", "Een server beveiliging"], answer: 1 },
        { q: "Wat is een 'Draw Call' in game rendering?", options: ["Het geluid van een wapen", "Elke keer dat de CPU een commando naar de GPU (Videokaart) moet sturen om één specifiek object met materiaal op het scherm te tekenen. Te veel draw calls tegelijkertijd zorgt voor gigantische lag en lage FPS", "Het openen van het menu", "Het inladen van een save-game"], answer: 1 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 5: Voegt deze vragen automatisch toe aan de grote bak!
for (let category in extraVragenDeel5) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel5[category]);
    } else {
        questionBank[category] = extraVragenDeel5[category]; 
    }
}

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 6 - MAKKELIJK & MOEILIJK GEMIXT
// =====================================================================

const extraVragenDeel6 = {
    "HTML & CSS": [
        // Makkelijk
        { q: "Welke HTML-tag gebruik je om een witregel (line break) te forceren?", options: ["<br>", "<break>", "<space>", "<lb>"], answer: 0 },
        { q: "Hoe maak je de achtergrondkleur van een webpagina rood in CSS?", options: ["body { background-color: red; }", "color: red;", "bg: red;", "page { red }"], answer: 0 },
        // Moeilijk
        { q: "Wat is de standaardwaarde van de 'position' eigenschap in CSS?", options: ["absolute", "relative", "static", "fixed"], answer: 2 },
        { q: "Wat betekent het acroniem BEM in CSS architectuur?", options: ["Block Element Modifier", "Base Environment Module", "Better Exact Margin", "Basic Element Styling"], answer: 0 }
    ],
    "JavaScript": [
        // Makkelijk
        { q: "Welk keyword gebruik je om een constante variabele aan te maken (die je niet meer mag wijzigen)?", options: ["let", "var", "const", "constant"], answer: 2 },
        { q: "Hoe schrijf je 'Hallo Wereld' naar de developer console?", options: ["print('Hallo Wereld');", "console.log('Hallo Wereld');", "log.screen('Hallo Wereld');", "document.write('Hallo Wereld');"], answer: 1 },
        // Moeilijk
        { q: "Wat is de uitkomst van '0.1 + 0.2 === 0.3' in JavaScript?", options: ["true", "false (door afrondingsfouten met floating point getallen)", "undefined", "NaN"], answer: 1 },
        { q: "Wat is het verschil tussen 'null' en 'undefined'?", options: ["Er is geen verschil", "null is een foutmelding, undefined is een string", "'undefined' betekent dat een variabele is gedeclareerd maar geen waarde heeft, 'null' is een expliciet toegewezen lege waarde", "null is voor nummers, undefined voor tekst"], answer: 2 }
    ],
    "Python": [
        // Makkelijk
        { q: "Wat is de uitkomst van de som 'print(2 * 3)' in Python?", options: ["5", "6", "23", "Error"], answer: 1 },
        { q: "Met welk keyword maak je een nieuwe functie aan in Python?", options: ["function", "create", "def", "func"], answer: 2 },
        // Moeilijk
        { q: "Wat is de 'Global Interpreter Lock' (GIL) in standaard (CPython) Python?", options: ["Een wachtwoordmanager voor scripts", "Een beveiligingssysteem tegen hackers", "Een mechanisme dat voorkomt dat meerdere native threads tegelijkertijd Python-bytecodes uitvoeren, wat echte multithreading soms lastig maakt", "Een tool om databases te vergrendelen"], answer: 2 },
        { q: "Wat is een 'Docstring' in Python?", options: ["Een stuk touw", "Een speciaal soort string literal (vaak met \"\"\") bovenaan een module, klasse of functie om de code te documenteren", "Een fout in een tekst", "Een databasetabel"], answer: 1 }
    ],
    "Databases": [
        // Makkelijk
        { q: "Wat is een SQL 'Query' in Jip-en-Janneke taal?", options: ["Een foutmelding", "Een zoekopdracht of gericht verzoek aan de database om specifieke data op te halen of te wijzigen", "Een type server", "Een back-up bestand"], answer: 1 },
        { q: "Waar gebruik je de 'WHERE' clausule voor in SQL?", options: ["Om te bepalen op welke server de data staat", "Om resultaten te filteren op basis van een specifieke voorwaarde (bijv. leeftijd > 18)", "Om tabellen te verwijderen", "Om wachtwoorden te verbergen"], answer: 1 },
        // Moeilijk
        { q: "Wat betekent de 'I' in het ACID-principe van relationele databases?", options: ["Information", "Isolation (Transacties worden veilig geïsoleerd uitgevoerd alsof ze de enigen zijn)", "Integration", "Iteration"], answer: 1 },
        { q: "Wat is het doel van een 'Foreign Key' constraint?", options: ["Het beveiligen van data tegen hackers in het buitenland", "Het afdwingen van referentiële integriteit tussen twee tabellen, zodat je geen relaties naar onbekende records kunt maken", "Het genereren van unieke ID's", "Het encrypten van tabellen"], answer: 1 }
    ],
    "Netwerken": [
        // Makkelijk
        { q: "Wat is de hoofdfunctie van een 'Router' bij jou thuis?", options: ["Muziek afspelen", "Het scherm aansturen", "Verkeer sturen tussen jouw thuisapparaten en het grote internet", "Bestanden opslaan op de harde schijf"], answer: 2 },
        { q: "Wat betekent het als je apparaat 'offline' is?", options: ["Je batterij is leeg", "Je hebt geen verbinding met een netwerk of het internet", "Je beeldscherm staat uit", "Je hebt een virus"], answer: 1 },
        // Moeilijk
        { q: "Welk netwerkprotocol werkt standaard op poort 443?", options: ["HTTP", "FTP", "HTTPS", "SSH"], answer: 2 },
        { q: "Op welke laag van het OSI-model functioneert een standaard Router voornamelijk?", options: ["Laag 1 (Physical)", "Laag 2 (Data Link)", "Laag 3 (Network)", "Laag 7 (Application)"], answer: 2 }
    ],
    "Hardware & OS": [
        // Makkelijk
        { q: "Wat bewaar je primair op een Harde Schijf (HDD) of SSD?", options: ["Tijdelijke berekeningen", "Je bestanden, foto's, games en het complete besturingssysteem", "Stroom en elektriciteit", "Alleen je internetgeschiedenis"], answer: 1 },
        { q: "Welk onderdeel wordt ook wel de 'processor' genoemd?", options: ["De voeding", "Het beeldscherm", "De CPU (Central Processing Unit)", "De muis"], answer: 2 },
        // Moeilijk
        { q: "Wat houdt 'Hyper-Threading' (Intel) of 'SMT' (AMD) in bij een processor?", options: ["Het sneller laten draaien van de harde schijf", "Een technologie waarbij het besturingssysteem één fysieke CPU-core ziet als twee logische/virtuele cores, voor betere multitasking", "Een netwerkprotocol voor servers", "Een speciaal vloeistofkoelingssysteem"], answer: 1 },
        { q: "Wat is het kenmerk van een 'SoC' (System on a Chip), zoals in smartphones of de Apple M-chips?", options: ["Het is alleen voor games", "Alle belangrijke componenten (CPU, GPU, geheugen) zijn geïntegreerd op één enkele, super efficiënte chip", "Het heeft geen stroom nodig", "Het kan alleen Linux draaien"], answer: 1 }
    ],
    "Cybersecurity": [
        // Makkelijk
        { q: "Hoe noemen we een ethische hacker die bedrijven legaal helpt om veiliger te worden?", options: ["Black Hat hacker", "White Hat hacker", "Red Hat hacker", "Grey Hat hacker"], answer: 1 },
        { q: "Wat is de veiligste manier om al je tientallen verschillende wachtwoorden te onthouden?", options: ["Ze opschrijven op een post-it", "Overal hetzelfde wachtwoord gebruiken", "Een betrouwbare Password Manager gebruiken", "Ze opslaan in een Word-documentje"], answer: 2 },
        // Moeilijk
        { q: "Wat is een 'Rainbow Table' aanval?", options: ["Een visuele aanval met felle kleuren", "Een methode om wachtwoord-hashes razendsnel te kraken door een gigantische, vooraf berekende tabel met miljarden hashes te gebruiken", "Een DDoS aanval op een specifieke server", "Een SQL injectie"], answer: 1 },
        { q: "Wat is het concept van 'Least Privilege' in de beveiligingswereld?", options: ["Iedereen de hoogste rechten geven", "Een gebruiker, programma of proces alleen de absolute minimumrechten geven die nodig zijn om zijn/haar legitieme taak uit te voeren", "Geen wachtwoorden gebruiken", "Werken met goedkope hardware"], answer: 1 }
    ],
    "Tech Geschiedenis & Trivia": [
        // Makkelijk
        { q: "Wat is het bekendste en meest gebruikte besturingssysteem van Microsoft?", options: ["MacOS", "Linux", "Windows", "Android"], answer: 2 },
        { q: "Hoe noemden we het kleine, vierkante, plastic schijfje waarop we vroeger (vóór de USB stick) bestanden opsloegen?", options: ["CD-ROM", "Cassette", "Floppy Disk (Diskette)", "Punch card"], answer: 2 },
        // Moeilijk
        { q: "Welke bekende cryptomunt werd in 2008 gelanceerd door de mysterieuze, anonieme persoon (of groep) genaamd Satoshi Nakamoto?", options: ["Ethereum", "Dogecoin", "Bitcoin", "Litecoin"], answer: 2 },
        { q: "In 1997 versloeg een computer voor het eerst de regerend wereldkampioen schaken (Garry Kasparov). Hoe heette deze computer van IBM?", options: ["Deep Blue", "Watson", "AlphaGo", "HAL 9000"], answer: 0 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 6: Schiet de nieuwe mix direct je database in!
for (let category in extraVragenDeel6) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel6[category]);
    } else {
        questionBank[category] = extraVragenDeel6[category]; 
    }
}

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 7 - THE UNSTOPPABLE QUIZ!
// =====================================================================

const extraVragenDeel7 = {
    "HTML & CSS": [
        // Makkelijk
        { q: "Welke HTML tag gebruik je om tekst schuingedrukt (italic) te maken?", options: ["<italic>", "<i> of <em>", "<slant>", "<oblique>"], answer: 1 },
        { q: "Wat is het doel van de <title> tag in HTML?", options: ["Het toont een grote kop op de pagina", "Het bepaalt de tekst die bovenin het tabblad van je browser staat", "Het is de naam van het CSS bestand", "Het maakt een titel-animatie"], answer: 1 },
        { q: "Hoe maak je in CSS de tekstkleur wit?", options: ["color: white;", "text-color: white;", "font: white;", "foreground: white;"], answer: 0 },
        // Moeilijk
        { q: "Wat doet het attribuut 'target=\"_blank\"' in een <a> (link) tag?", options: ["Het opent de link in een nieuw, leeg tabblad of venster", "Het maakt de link onzichtbaar", "Het verwijdert de link", "Het blokkeert pop-ups"], answer: 0 },
        { q: "Wat betekent het als je '!important' achter een CSS-regel zet?", options: ["De tekst wordt dikgedrukt", "Deze styling krijgt de allerhoogste prioriteit en overschrijft bijna alle andere CSS-regels", "Het geeft een error", "Het is commentaar voor andere developers"], answer: 1 },
        { q: "Wat is de functie van de 'z-index' in CSS?", options: ["Het bepaalt de zoom-factor", "Het bepaalt de stapelvolgorde (welk element over de ander heen valt op de z-as)", "Het roteert een element", "Het verandert de breedte"], answer: 1 }
    ],
    "JavaScript": [
        // Makkelijk
        { q: "Met welk JavaScript commando toon je een simpele waarschuwings-popup aan de bezoeker?", options: ["alert('Hallo!');", "popup('Hallo!');", "warning('Hallo!');", "msg('Hallo!');"], answer: 0 },
        { q: "Welk symbool gebruik je in JavaScript om twee stukken tekst (strings) aan elkaar vast te plakken?", options: ["&", "+", "-", "*"], answer: 1 },
        // Moeilijk
        { q: "Wat doet de 'document.createElement()' functie in JavaScript?", options: ["Het verwijdert een element", "Het maakt dynamisch een geheel nieuw HTML-element aan in het geheugen", "Het maakt een CSS bestand aan", "Het start een 3D animatie"], answer: 1 },
        { q: "Wat is de uitkomst van 'typeof []' (het type van een lege array) in JavaScript?", options: ["array", "list", "object", "undefined"], answer: 2 }, // Beruchte JS eigenschap!
        { q: "Wat doet 'Promise.all()'?", options: ["Het belooft dat de code niet crasht", "Het wacht tot een hele lijst met meerdere Promises (asynchrone taken) allemaal zijn voltooid voordat het verder gaat", "Het weigert alle netwerkverzoeken", "Het verwijdert alle variabelen"], answer: 1 },
        { q: "Wat verwijst het keyword 'this' doorgaans naar in een standaard JavaScript methode?", options: ["Het verwijst naar de server", "Het verwijst naar het HTML document", "Het verwijst naar het specifieke object waartoe de methode behoort", "Het is een leeg object"], answer: 2 }
    ],
    "Python": [
        // Makkelijk
        { q: "Welk keyword gebruik je in Python om een functie een waarde te laten teruggeven?", options: ["give", "send", "return", "output"], answer: 2 },
        { q: "Hoe converteer je in Python het getal 5 naar de tekst '5'?", options: ["str(5)", "text(5)", "string(5)", "char(5)"], answer: 0 },
        // Moeilijk
        { q: "Wat doet het 'continue' keyword binnen een for-loop of while-loop?", options: ["Het stopt de loop volledig", "Het slaat de rest van de huidige iteratie over en springt direct naar de vólgende ronde van de loop", "Het pauzeert de code voor 1 seconde", "Het herstart het script"], answer: 1 },
        { q: "Wat is het doel van '**kwargs' in de parameters van een Python functie?", options: ["Het is een wiskundige berekening", "Het staat toe dat je een variabel, onbeperkt aantal 'keyword arguments' (als een dictionary) aan de functie kunt meegeven", "Het blokkeert argumenten", "Het versleutelt de input"], answer: 1 },
        { q: "Wat doet de list-methode '.insert(0, \"Appel\")'?", options: ["Verwijdert 'Appel' uit de lijst", "Voegt 'Appel' helemaal vooraan (op index 0) de lijst toe, en schuift de rest op", "Vervangt de hele lijst door 'Appel'", "Zoekt of 'Appel' in de lijst zit"], answer: 1 }
    ],
    "Databases": [
        // Makkelijk
        { q: "Wat is het verschil tussen een 'Rij' (Row) en een 'Kolom' (Column) in een database tabel?", options: ["Geen verschil", "Een Rij is een verticaal veld, een Kolom is horizontaal", "Een Rij bevat de gegevens van één specifiek record (bijv. één klant), een Kolom definieert het type data (bijv. 'Achternaam')", "Een Rij is voor nummers, een Kolom voor tekst"], answer: 2 },
        { q: "Welk SQL commando verwijdert data uit een tabel?", options: ["REMOVE", "TRASH", "DELETE", "ERASE"], answer: 2 },
        // Moeilijk
        { q: "Wat is het verschil tussen de SQL commando's 'UNION' en 'UNION ALL'?", options: ["Er is geen verschil", "UNION combineert resultaten en verwijdert dubbele rijen; UNION ALL combineert alles en laat de dubbele rijen gewoon staan", "UNION is sneller", "UNION ALL verwijdert de tabellen"], answer: 1 },
        { q: "Wat is een 'FULL OUTER JOIN'?", options: ["Een join die alleen getallen koppelt", "Een join die ALLE rijen uit zowel de linker- als de rechtertabel teruggeeft, met NULL-waarden waar geen match is gevonden", "Een join die tabellen verwijdert", "Een join die alleen werkende netwerken koppelt"], answer: 1 },
        { q: "Wat is het voordeel van een NoSQL database (zoals MongoDB) ten opzichte van een SQL database?", options: ["Het is altijd gratis", "Het heeft een flexibel (schemaless) design, waardoor je gemakkelijk verschillende soorten ongestructureerde documenten in één collectie kunt opslaan", "Het gebruikt geen geheugen", "Het is onmogelijk te hacken"], answer: 1 }
    ],
    "Netwerken": [
        // Makkelijk
        { q: "Wat is een 'IP-adres' in simpele bewoordingen?", options: ["Het wachtwoord van je WiFi", "Het digitale, unieke huisadres van een apparaat op een netwerk, zodat data weet waar het heen moet", "De naam van je provider", "Een virusscanner"], answer: 1 },
        { q: "Wat doet de 'Vliegtuigstand' op je telefoon met je netwerken?", options: ["Het maakt de telefoon sneller", "Het schakelt alle draadloze zend- en ontvangstfuncties (WiFi, Bluetooth, Mobiel netwerk) tegelijk uit", "Het wist al je contacten", "Het downloadt films voor onderweg"], answer: 1 },
        // Moeilijk
        { q: "Wat doet het netwerkcommando 'Traceroute' (of tracert)?", options: ["Het verwijdert je IP-adres", "Het laat exact de route en alle tussenliggende routers (hops) zien die een datapakketje aflegt van jouw PC naar de eindbestemming", "Het versnelt je internet", "Het blokkeert virussen"], answer: 1 },
        { q: "Wat is de functie van een 'VLAN' (Virtual LAN)?", options: ["Een netwerk voor Virtual Reality", "Een techniek om één fysiek netwerk via software op te splitsen in meerdere, gescheiden virtuele netwerken voor meer overzicht en veiligheid", "Een virus dat via LAN verspreidt", "Een heel traag netwerk"], answer: 1 },
        { q: "Wat is een DNS 'CNAME' record?", options: ["Een record voor e-mail", "Een Alias-record dat de ene domeinnaam direct laat doorverwijzen naar een ándere domeinnaam (bijv. www.site.nl naar site.nl)", "Een back-up record", "Een record dat IP's blokkeert"], answer: 1 }
    ],
    "Hardware & OS": [
        // Makkelijk
        { q: "Welk onderdeel van de computer functioneert als het 'Korte-termijn geheugen'?", options: ["De Harde schijf", "De USB-stick", "Het RAM-geheugen (Werkgeheugen)", "De Voeding"], answer: 2 },
        { q: "Wat is de functie van een ventilator (fan) in de computerkast?", options: ["Stof naar binnen blazen", "De hete lucht van de componenten (zoals de CPU of GPU) afvoeren om oververhitting te voorkomen", "Stroom opwekken", "Geluid maken voor de sfeer"], answer: 1 },
        // Moeilijk
        { q: "Wat wordt in de PC-wereld bedoeld met 'TDP' (Thermal Design Power)?", options: ["De grootte van de videokaart", "De maximale hoeveelheid warmte (in Watt) die een chip genereert en die het koelsysteem dus minimaal moet kunnen afvoeren", "De snelheid van de harde schijf", "De prijs van de processor"], answer: 1 },
        { q: "Wat is een hardware 'Bottleneck' in een computerbuild?", options: ["Een kapotte waterkoeling", "Wanneer één traag of verouderd component (bijv. een oude CPU) de prestaties van een veel sneller component (bijv. een gloednieuwe Videokaart) tegenhoudt en afremt", "Een virus in de hardware", "Een kabel die klem zit"], answer: 1 },
        { q: "Wat is de functie van 'RAID' (zoals RAID 0 of RAID 1) bij harde schijven?", options: ["Het is een merk harde schijf", "Een techniek waarbij meerdere harde schijven worden gecombineerd tot één virtuele schijf, voor hogere snelheid, automatische back-ups (spiegelen), of beide", "Het wist schijven permanent", "Het maakt schijven waterdicht"], answer: 1 }
    ],
    "Cybersecurity": [
        // Makkelijk
        { q: "Wat is het doel van een 'Virusscanner' of Anti-Malware software?", options: ["Om websites te bouwen", "Om schadelijke programma's, virussen en spyware op je computer te detecteren en te verwijderen", "Om je internet sneller te maken", "Om je schermresolutie te verhogen"], answer: 1 },
        { q: "Waarom is het gevaarlijk om op links in mails van onbekende afzenders te klikken?", options: ["Omdat je muis dan kapot gaat", "Het kan een 'Phishing' link zijn die je naar een nepsite leidt om je wachtwoord te stelen, of direct een virus installeert", "Omdat het je mail wist", "Omdat het altijd geld kost"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Hash Collision' in de cryptografie?", options: ["Een fysieke crash van een harde schijf", "Een (zeldzame) fout waarbij twee compleet verschillende stukken data of wachtwoorden wiskundig exact dezelfde Hash-output genereren", "Een aanval op een netwerk", "Een DDoS methode"], answer: 1 },
        { q: "Wat is 'Steganografie'?", options: ["Het stelen van harde schijven", "De techniek om een geheime boodschap, bestand of code fysiek of digitaal te verbergen bínnenin een ander, onschuldig ogend bestand (zoals een foto of audio-file)", "Een type firewall", "Het versleutelen van een wachtwoord"], answer: 1 },
        { q: "Wat doet 'Spyware'?", options: ["Het vernietigt je harde schijf direct", "Malware die zich onzichtbaar nestelt op je apparaat en stiekem je activiteiten, surfgedrag of toetsaanslagen bespioneert en doorstuurt", "Het blokkeert je netwerk", "Het is een legale antivirus"], answer: 1 }
    ],
    "Git & Versiebeheer": [
        // Makkelijk
        { q: "Waarvoor gebruik je het platform 'GitHub'?", options: ["Om spelletjes te spelen", "Om je code en Git-repositories veilig online op te slaan, te delen en er met andere developers aan samen te werken", "Om foto's te bewerken", "Om muziek te luisteren"], answer: 1 },
        { q: "Wat doe je met een 'git commit'?", options: ["Je verwijdert bestanden", "Je slaat de huidige staat van je wijzigingen permanent en veilig op in de lokale geschiedenis, samen met een klein log-berichtje", "Je downloadt nieuwe code", "Je wist de server"], answer: 1 },
        // Moeilijk
        { q: "Wat doet het commando 'git commit --amend'?", options: ["Het annuleert alle commits", "Het voegt je nieuwe wijzigingen toe aan je állerlaatste commit (of past het berichtje ervan aan) in plaats van een geheel nieuwe commit te maken", "Het formatteert de Git map", "Het pusht de code naar de server"], answer: 1 },
        { q: "Wat is de 'HEAD' in Git?", options: ["De baas van het project", "Een speciale pointer/referentie die altijd wijst naar de huidige branch of commit waarop je op dit exacte moment aan het werken bent in je werkmap", "De eerste commit ooit gemaakt", "Een error"], answer: 1 },
        { q: "Wat is het wezenlijke verschil tussen 'git clone' en 'git fork'?", options: ["Geen verschil", "Clone downloadt een repo naar je eigen pc. Fork is een GitHub/GitLab feature die een complete kopie van andermans repo maakt naar jóuw online account, zodat je veilig wijzigingen kunt voorstellen", "Clone is illegaal, fork is legaal", "Clone wist de historie"], answer: 1 }
    ],
    "Cloud & DevOps": [
        // Makkelijk
        { q: "Wat bedoelt men als men zegt: 'Mijn applicatie draait in de Cloud'?", options: ["Het is afhankelijk van het weer", "De applicatie en data staan niet op je eigen laptop, maar op grote, veilige servers ergens anders op de wereld (bijv. bij Amazon, Google of Microsoft) die je via internet benadert", "Het zweeft letterlijk in de lucht", "Het is een virus"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Canary Release' in DevOps deployments?", options: ["Het loslaten van vogels in het datacenter", "Een deployment strategie waarbij een nieuwe versie van de app eerst maar naar een heel klein percentage van de gebruikers (bijv. 5%) wordt uitgerold. Als er geen errors (alerts) zijn, wordt het langzaam uitgerold naar de rest", "Het verwijderen van oude code", "Een type encryptie"], answer: 1 },
        { q: "Wat doet de populaire DevOps tool 'Ansible'?", options: ["Het maakt graphics voor games", "Het is een krachtige IT-automatiseringstool (zonder agents) waarmee je software kunt installeren, configureren en beheren op honderden servers tegelijk via simpele scripts", "Het is een relationele database", "Het blokkeert DDoS aanvallen"], answer: 1 }
    ],
    "Algoritmes & Datastructuren": [
        // Makkelijk
        { q: "Wat is een algoritme?", options: ["Een fysieke computerchip", "Een exact en wiskundig stappenplan of recept om een specifiek probleem op te lossen of een taak uit te voeren", "Een type scherm", "Een netwerkkabel"], answer: 1 },
        // Moeilijk
        { q: "Wat is het concept achter het 'Merge Sort' sorteeralgoritme?", options: ["Het gooit de data willekeurig door elkaar", "Het is een 'Divide and Conquer' algoritme dat de lijst continu in helften opsplitst totdat ze uit 1 element bestaan, waarna het ze gesorteerd weer in elkaar voegt (merget)", "Het vergelijkt steeds twee elementen naast elkaar en schuift ze op", "Het wist de helft van de data"], answer: 1 },
        { q: "Wat is 'Graph Traversal' (bijvoorbeeld BFS of DFS)?", options: ["Het tekenen van een mooie grafiek", "Algoritmes die systematisch knooppunt voor knooppunt door een netwerk (Graaf) lopen, bijvoorbeeld om de kortste route of alle vrienden-connecties te vinden", "Het verwijderen van data", "Een virus"], answer: 1 }
    ],
    "Tech Geschiedenis & Trivia": [
        // Makkelijk
        { q: "Welk bedrijf begon ooit in een garage en verkocht zijn eerste computer (een simpel moederbord) onder de naam 'Apple I'?", options: ["Microsoft", "IBM", "Apple", "Google"], answer: 2 },
        // Moeilijk
        { q: "Wie is Alan Turing?", options: ["De uitvinder van de iPhone", "Een briljante Britse wiskundige die de Duitse Enigma-code kraakte in WOII en de theoretische basis legde voor de moderne computer en Kunstmatige Intelligentie", "De oprichter van Google", "De bedenker van het internet"], answer: 1 },
        { q: "Wat was de 'ENIAC' (uit 1945)?", options: ["Een ruimteschip", "De allereerste grootschalige, elektronische en programmeerbare digitale computer ter wereld (ter grootte van een grote kamer)", "Een vroege mobiele telefoon", "Een programmeertaal"], answer: 1 }
    ],
    "Web & App Development": [
        // Makkelijk
        { q: "Wat is de functie van een 'Hyperlink' op een webpagina?", options: ["Het maakt de tekst blauw", "Het zorgt ervoor dat je kunt klikken om te navigeren naar een andere webpagina of website", "Het is een virus", "Het sluit de browser"], answer: 1 },
        // Moeilijk
        { q: "Wat zijn 'Webhooks'?", options: ["Een kapotte kabel", "Een systeem waarbij de ene applicatie (bijv. een betaalprovider) volautomatisch een realtime HTTP POST-bericht (een seintje) naar een ándere applicatie (jouw webshop) stuurt, zodra er een bepaalde gebeurtenis (een betaling) plaatsvindt", "Een CSS framework", "Een hackmethode"], answer: 1 },
        { q: "Waar staat de afkorting 'SEO' voor in webdesign?", options: ["Secure Electronic Output", "Search Engine Optimization (alle technieken om een website structureel zo hoog mogelijk in de onbetaalde zoekresultaten van Google te laten ranken)", "System Execution Override", "Software Environment Object"], answer: 1 }
    ],
    "Game Development": [
        // Makkelijk
        { q: "Wat is de 'Camera' in een game engine?", options: ["Het onderdeel dat een foto maakt van je gezicht", "Het virtuele oog in de 3D of 2D wereld dat bepaalt exact wélk deel van het level wordt getekend en op het scherm van de speler verschijnt", "Een stukje code voor geluid", "Een vijand in het spel"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Particle System' (Deeltjessysteem) in een game engine?", options: ["Een netwerkprotocol", "Een grafisch systeem dat duizenden piepkleine 2D plaatjes (particles) tegelijk simuleert en animeert om vloeibare, chaotische effecten zoals vuur, rook, regen of explosies te maken", "Een AI voor vijanden", "Een tool om levels te ontwerpen"], answer: 1 },
        { q: "Wat is 'Inverse Kinematics' (IK) in 3D karakter-animatie?", options: ["Het achteruit spelen van een animatie", "Een wiskundige berekening waarbij de positie van het úiteinde van een keten (bijv. een voet of hand) bepaalt hoe de rest van de gewrichten (zoals de knie en heup) realistisch moeten buigen (bijv. om realistisch op ongelijke trappen te staan)", "Een techniek voor belichting", "Een physics error"], answer: 1 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 7: Dit zorgt dat de nieuwe vragen feilloos worden ingeladen!
for (let category in extraVragenDeel7) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel7[category]);
    } else {
        questionBank[category] = extraVragenDeel7[category]; 
    }
}

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 8 - THE INFINITE QUIZ!
// =====================================================================

const extraVragenDeel8 = {
    "HTML & CSS": [
        // Makkelijk
        { q: "Wat betekent de 'a' in de HTML <a> tag (zoals in <a href='...'>)?", options: ["Active", "Anchor (Anker)", "Array", "Application"], answer: 1 },
        { q: "Welke kleur krijg je als je de CSS hex-code '#000000' gebruikt?", options: ["Wit", "Rood", "Zwart", "Transparant"], answer: 2 },
        { q: "Welke kleur krijg je als je de CSS hex-code '#FFFFFF' gebruikt?", options: ["Zwart", "Blauw", "Groen", "Wit"], answer: 3 },
        // Moeilijk
        { q: "Wat doet de handige CSS-functie 'calc()'?", options: ["Het is een ingebouwde rekenmachine voor de gebruiker", "Hiermee kun je wiskundige berekeningen uitvoeren om CSS-waarden (zoals breedte) te bepalen, bijv: calc(100% - 50px)", "Het berekent hoeveel bezoekers er zijn", "Het converteert kleuren"], answer: 1 },
        { q: "Wat is het nut van CSS pseudo-elementen zoals '::before' en '::after'?", options: ["Hiermee kun je tijdlijnen maken", "Hiermee kun je via CSS visuele elementen (zoals icoontjes of tekst) vóór of ná de inhoud van een HTML-element toevoegen zonder de HTML aan te passen", "Hiermee maak je animaties sneller", "Hiermee laad je eerdere versies van de site"], answer: 1 },
        { q: "Wat is de 'fr' eenheid in CSS Grid (bijv: grid-template-columns: 1fr 2fr;)?", options: ["Frame Rate", "Fraction (Fractie/Deel): het verdeelt de beschikbare vrije ruimte in het grid wiskundig over de kolommen/rijen", "Front Row", "Fixed Ratio"], answer: 1 }
    ],
    "JavaScript": [
        // Makkelijk
        { q: "Wat is ALTIJD het index-nummer van het allereerste item in een JavaScript Array?", options: ["1", "0", "-1", "A"], answer: 1 },
        { q: "Met welk keyword schrijf je een 'Als dit, dan dat' logica in code?", options: ["loop", "function", "if / else", "switch"], answer: 2 },
        // Moeilijk
        { q: "Wat is het verschil tussen 'setTimeout()' en 'setInterval()' in JavaScript?", options: ["Geen verschil", "setTimeout voert de code één keer uit na een wachttijd; setInterval blijft de code oneindig herhalen met die vaste tussentijd", "setTimeout is voor seconden, setInterval voor minuten", "setInterval pauzeert de server"], answer: 1 },
        { q: "Wat is 'Event Delegation' in JavaScript?", options: ["Het blokkeren van events", "Een techniek waarbij je één EventListener op een parent-element zet, in plaats van losse listeners op alle child-elementen (erg efficiënt voor dynamische lijsten)", "Het versturen van data naar een API", "Een manier om de DOM te verwijderen"], answer: 1 },
        { q: "Wat is een 'Web Worker' in moderne browsers?", options: ["Een virus dat je CPU kaapt", "Een manier om zware JavaScript-taken op de achtergrond (in een aparte thread) te draaien, zodat de interface van je website niet vastloopt", "Een plugin voor Chrome", "Een server in de cloud"], answer: 1 }
    ],
    "Python": [
        // Makkelijk
        { q: "Hoe maak je in Python een tekst (string) aan die over meerdere regels is verdeeld?", options: ["Met een puntkomma (;)", "Door drie aanhalingstekens achter elkaar te gebruiken (''' of \"\"\")", "Door Enter te drukken", "Met de tag <multiline>"], answer: 1 },
        { q: "Wat doet de ingebouwde functie 'str(100)' in Python?", options: ["Het telt er 100 bij op", "Het zet het getal 100 om naar de tekstwaarde '100' (string)", "Het geeft een error", "Het slaat het getal op"], answer: 1 },
        // Moeilijk
        { q: "Wat is in Python het verschil tussen de operator '==' en het keyword 'is'?", options: ["Geen verschil", " '==' controleert of de waarden gelijk zijn; 'is' controleert of twee variabelen exact naar hetzelfde object in het geheugen wijzen", " 'is' controleert op spelfouten", " '==' werkt alleen op getallen"], answer: 1 },
        { q: "Wat is de uitkomst van lijst-slicing met 'mijn_lijst[::-1]' in Python?", options: ["Het wist het laatste element", "Het geeft een error", "Het keert de complete lijst of tekst volledig om (van achter naar voren)", "Het kopieert de lijst oneindig"], answer: 2 },
        { q: "Wat zijn 'Dunder' (Double Underscore) methods of Magic Methods in Python, zoals __str__ of __len__?", options: ["Geheime wachtwoorden", "Ingebouwde, speciale methodes in classes die standaard operators (zoals +, -, of print()) overschrijven en aanpassen voor jouw eigen objecten", "Foutmeldingen van de interpreter", "Functies die het netwerk uitschakelen"], answer: 1 }
    ],
    "Databases": [
        // Makkelijk
        { q: "Wat doet het sterretje (*) in de SQL query: SELECT * FROM klanten?", options: ["Het is een wiskundige vermenigvuldiging", "Het selecteert en toont álle kolommen van die tabel", "Het verwijdert de tabel", "Het filtert op favoriete klanten"], answer: 1 },
        { q: "Als een database crasht, ben je al je data kwijt. Tenzij je natuurlijk regelmatig een... hebt gemaakt?", options: ["Nieuwe tabel", "Schermafbeelding", "Back-up", "Kopie in Word"], answer: 2 },
        // Moeilijk
        { q: "Wat is het kritieke verschil tussen het SQL commando 'DELETE' en 'TRUNCATE'?", options: ["Geen verschil", "DELETE verwijdert de tabel zelf; TRUNCATE verwijdert een kolom", "DELETE kan specifieke rijen (WHERE) verwijderen en logt elke rij; TRUNCATE leegt de héle tabel razendsnel zonder individuele log-records en is niet te annuleren met een rollback", "TRUNCATE is alleen voor tekst"], answer: 2 },
        { q: "Wat is een 'B-Tree' (Balanced Tree) in de context van databases?", options: ["Een kerstboom in de kantoorruimte", "De meest gebruikte datastructuur onder de motorkap van database-indexen, waarmee de database razendsnel gegevens kan opzoeken en sorteren in logaritmische tijd", "Een relationele tabel-relatie", "Een back-up schema"], answer: 1 }
    ],
    "Netwerken": [
        // Makkelijk
        { q: "Waar staat 'WWW' voor aan het begin van een website-adres?", options: ["World Wide Web", "World Web Window", "Wide Web World", "Wild Web Workers"], answer: 0 },
        { q: "Wat betekent de bekende HTTP statuscode '404'?", options: ["Toegang verboden", "Website succesvol geladen", "Bestand of Pagina Niet Gevonden (Not Found)", "Server is gecrasht"], answer: 2 },
        // Moeilijk
        { q: "Wat is de zogeheten '3-way handshake' (SYN, SYN-ACK, ACK) in netwerken?", options: ["Een manier om hackers te groeten", "Het vaste proces waarmee twee computers over TCP betrouwbaar een verbinding met elkaar opbouwen vóórdat er data wordt verstuurd", "Het versturen van e-mails", "Een WiFi protocol"], answer: 1 },
        { q: "Wat is het doel van 'Subnetting' in een groot IT-netwerk?", options: ["Het maken van websites", "Een groot IP-netwerk wiskundig en logisch opdelen in meerdere kleinere, gescheiden sub-netwerken voor betere veiligheid en prestaties", "Het verbinden van datacenters", "Een router uitschakelen"], answer: 1 },
        { q: "In een IPv4 adres met een /24 subnet (bijv 192.168.1.0/24), hoeveel IP-adressen zijn er in theorie in dat specifieke subnet?", options: ["24", "128", "256", "Onbeperkt"], answer: 2 }
    ],
    "Hardware & OS": [
        // Makkelijk
        { q: "Hoe noem je het pijltje op je scherm dat meebeweegt als je je muis beweegt?", options: ["De Muis", "De Cursor", "De Pointer", "De Klikker"], answer: 1 },
        { q: "Waarom gaan laptops en telefoons over van de oude, brede USB-A poorten naar de kleine, ovale USB-C poorten?", options: ["Omdat het goedkoper is", "Omdat USB-C omkeerbaar is (je kunt hem niet verkeerd om erin steken) en data/stroom veel sneller kan overbrengen", "Omdat USB-C draadloos is", "Omdat Apple dat heeft bedacht"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'ISA' (Instruction Set Architecture) bij processoren?", options: ["Een koelsysteem", "De abstracte 'taal' van commando's (zoals x86 of ARM) die de hardware van een CPU fysiek begrijpt en kan uitvoeren", "Een type SSD", "De kloksnelheid"], answer: 1 },
        { q: "Waarom gebruiken extreem dure en zware bedrijfsservers vaak 'ECC RAM' in plaats van standaard werkgeheugen?", options: ["Omdat het goedkoper is in bulk", "ECC (Error-Correcting Code) RAM bevat een speciale chip die single-bit datacorruptie on the fly opspoort en repareert, wat onverwachte server-crashes voorkomt", "Omdat het licht geeft in de serverkast", "Omdat het draadloos werkt"], answer: 1 }
    ],
    "Cybersecurity": [
        // Makkelijk
        { q: "Wat is de makkelijkste manier voor een hacker om jouw account te stelen als je overal ter wereld hetzelfde wachtwoord gebruikt?", options: ["Hij moet je computer fysiek stelen", "Zodra één zwakke website gehackt wordt, probeert het script jouw gelekte wachtwoord gewoon automatisch op alle andere populaire websites", "Hij moet je bellen", "Hij gebruikt een satelliet"], answer: 1 },
        { q: "Waarom moet je je telefoon en computer regelmatig updaten?", options: ["Omdat de interface dan leuker wordt", "Updates bevatten cruciale beveiligings-patches ('pleisters') die nieuw ontdekte gaten dichten vóórdat hackers ze misbruiken", "Omdat het apparaat anders langzamer wordt", "Dat is niet nodig"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Buffer Overflow' aanval in software-security?", options: ["Een server crasht door teveel bezoekers", "Een zeer technische hack waarbij meer data in een geheugenbuffer wordt geduwd dan er past, waardoor aangrenzend geheugen overschreven wordt en de hacker eigen (kwaadaardige) code kan forceren te draaien", "Het versturen van een te grote e-mail", "Een SQL fout"], answer: 1 },
        { q: "Wat is het verschil tussen Symmetrische en Asymmetrische Encryptie?", options: ["Symmetrisch is oud", "Symmetrisch gebruikt dezelfde sleutel voor zowel versleutelen als ontsleutelen. Asymmetrisch gebruikt twéé wiskundig gekoppelde sleutels (een Publieke om te versleutelen, een Privé om te ontsleutelen)", "Symmetrisch is alleen voor tekst", "Asymmetrisch kan gekraakt worden"], answer: 1 }
    ],
    "Cloud & DevOps": [
        // Makkelijk
        { q: "Waar staat de afkorting 'VM' voor in de IT-wereld?", options: ["Virtual Memory", "Virtual Machine (Een virtuele computer die als software draait op een fysieke host-computer)", "Visual Monitor", "Virus Maker"], answer: 1 },
        { q: "Wat is het voordeel van bestanden opslaan in de Cloud (zoals Google Drive of OneDrive)?", options: ["Het is altijd gratis", "Je kunt vanaf élk apparaat op de hele wereld bij je bestanden, en ze zijn veilig als je laptop stuk gaat", "De bestanden worden sneller", "Ze zijn onzichtbaar"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Auto-Scaling Group' (ASG) in AWS of Azure?", options: ["Een groep grafisch ontwerpers", "Een cloud-service die op basis van actuele drukte (zoals hoog CPU-verbruik) volautomatisch extra servers opstart, en deze weer verwijdert als het rustig is, om kosten te besparen", "Een netwerkkabel", "Een tool om foto's te vergroten"], answer: 1 },
        { q: "Wat is het wezenlijke verschil tussen 'Continuous Delivery' en 'Continuous Deployment' in een CI/CD pipeline?", options: ["Er is geen verschil", "Bij Delivery is de code 100% klaar om live te gaan, maar moet een mens nog op een knop drukken. Bij Deployment gaat álle goedgekeurde code zónder menselijke tussenkomst direct volautomatisch live voor de eindgebruiker", "Deployment is alleen voor databases", "Delivery is trager"], answer: 1 }
    ],
    "Game Development": [
        // Makkelijk
        { q: "Als een game 'lag' heeft, wat is er dan meestal aan de hand?", options: ["Het beeldscherm is kapot", "Er is merkbare vertraging in de verbinding (hoge ping) of de computer kan de graphics niet vloeiend berekenen (lage FPS)", "De speler speelt slecht", "De game is uitgespeeld"], answer: 1 },
        { q: "Wat doet de functie 'Save Game' of een checkpoint in de code?", options: ["Het wist je voortgang", "Het wegschrijven en opslaan van de huidige staat en variabelen van de speler (positie, health, inventory) naar een bestand op de harde schijf, zodat je later exact daar verder kunt", "Het verlaagt het volume", "Het sluit de game"], answer: 1 },
        // Moeilijk
        { q: "Wat is 'Frustum Culling' in moderne 3D game engines?", options: ["Een manier om vijanden slim te maken", "Een onmisbare rendering-techniek die alle objecten die zich momenteel buíten het gezichtsveld (de camera frustum) van de speler bevinden, weggooit en helemaal niet rendert op de videokaart, om enorm veel prestaties te redden", "Een techniek voor regeneffecten", "Een audio filter"], answer: 1 },
        { q: "Wat wordt bedoeld met een 'NavMesh Agent' in game AI?", options: ["Een spion in de code", "Een component dat je op een AI-personage (zoals een vijand) plakt, waardoor dit personage het onzichtbare wandel-grid (NavMesh) kan lezen en zelfstandig het pad om obstakels heen kan berekenen", "Een server voor multiplayer", "Een wapen"], answer: 1 }
    ],
    "Tech Geschiedenis & Trivia": [
        // Makkelijk
        { q: "Wie was de legendarische en visionaire mede-oprichter van Apple, die bekend stond om zijn iconische 'One More Thing' presentaties in een zwarte coltrui?", options: ["Bill Gates", "Tim Cook", "Steve Wozniak", "Steve Jobs"], answer: 3 },
        { q: "Hoe noemden we de extreem zware en diepe beeldschermen en televisies van vroeger, voordat platte schermen (LCD/LED) de norm werden?", options: ["OLED", "Plasma", "CRT (Kathodestraalbuis)", "Projektor"], answer: 2 },
        // Moeilijk
        { q: "In 1969 ontving het eerste ARPANET-netwerk zijn allereerste bericht ooit. Men wilde 'LOGIN' typen, maar het systeem crashte na twee letters. Wat was dus het allereerste bericht over het internet?", options: ["HI", "LO", "OK", "01"], answer: 1 },
        { q: "Welk in 1985 opgericht bedrijf is van oudsher de absolute marktleider en ontwerper van bijna alle GPU's (Videokaarten) en is inmiddels een van de rijkste AI-bedrijven ter wereld?", options: ["Intel", "AMD", "NVIDIA", "Qualcomm"], answer: 2 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 8: Automagisch inladen!
for (let category in extraVragenDeel8) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel8[category]);
    } else {
        questionBank[category] = extraVragenDeel8[category]; 
    }
}

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 9 - DE EINDELOZE ICT QUIZ!
// =====================================================================

const extraVragenDeel9 = {
    "HTML & CSS": [
        { q: "Welke HTML tag gebruik je om een specifieke tekst geel te markeren (als met een markeerstift)?", options: ["<highlight>", "<yellow>", "<mark>", "<bg>"], answer: 2 },
        { q: "Wat doet de CSS eigenschap 'cursor: not-allowed;' als je met je muis over een knop gaat?", options: ["De muis verdwijnt", "De muis verandert in een rood verbodsteken (cirkel met streep)", "De knop wordt onzichtbaar", "De muis verandert in een handje"], answer: 1 },
        { q: "Hoe geef je in HTML aan dat een invoerveld (input) verplicht moet worden ingevuld?", options: ["Door de tag <important> te gebruiken", "Door het attribuut 'required' toe te voegen", "Door de tekst rood te maken", "Door 'must-fill=\"true\"' te typen"], answer: 1 },
        { q: "Wat is de functie van het CSS element ':nth-child(even)'?", options: ["Het verbergt alle kinderen", "Het selecteert en stijlt alleen de even elementen in een lijst (bijv. rij 2, 4, 6) voor een zebra-patroon", "Het maakt alle elementen even groot", "Het telt het aantal elementen"], answer: 1 },
        { q: "Welke HTML tag gebruik je om een horizontale scheidingslijn (streep) op je pagina te tekenen?", options: ["<line>", "<br>", "<hr> (Horizontal Rule)", "<divider>"], answer: 2 },
        { q: "Wat is de juiste syntax om een eigen CSS variabele (Custom Property) aan te maken in de :root?", options: ["$hoofdkleur: blue;", "var hoofdkleur = blue;", "--hoofdkleur: blue;", "color-main: blue;"], answer: 2 }
    ],
    "JavaScript": [
        { q: "Wat doet de functie 'Math.ceil(4.1)' in JavaScript?", options: ["Rondt af naar 4", "Rondt altijd af naar BOVEN, dus 5", "Geeft een foutmelding", "Rondt af naar 4.5"], answer: 1 },
        { q: "Welke handige array-methode checkt of een specifieke waarde bestaat in een lijst, en geeft true of false terug?", options: ["array.has()", "array.find()", "array.contains()", "array.includes()"], answer: 3 },
        { q: "Wat is de uitkomst van 'typeof undefined' in JavaScript?", options: ["null", "object", "undefined", "string"], answer: 2 },
        { q: "Wat is de functie van 'JSON.stringify()'?", options: ["Het leest een JSON bestand", "Het zet een JavaScript Object veilig om naar een stuk platte tekst (String), zodat je het via internet kunt versturen", "Het versleutelt een wachtwoord", "Het tekent een grafiek"], answer: 1 },
        { q: "Wat verwijst het keyword 'window' naar in frontend JavaScript?", options: ["Een pop-up scherm", "Het besturingssysteem Windows", "Het globale browser-object dat de huidige geopende tab en alle globale variabelen representeert", "De knop om af te sluiten"], answer: 2 },
        { q: "Hoe noem je een functie die als argument (parameter) wordt meegegeven aan een ándere functie, om later uitgevoerd te worden?", options: ["Een Loop", "Een Callback functie", "Een Arrow functie", "Een String functie"], answer: 1 }
    ],
    "Python": [
        { q: "Wat is de standaard bestandsextensie voor een Python script?", options: [".pyt", ".pt", ".python", ".py"], answer: 3 },
        { q: "Welk keyword gebruik je in Python voor 'Anders Als' in een if-statement?", options: ["else if", "elseif", "elif", "if else"], answer: 2 },
        { q: "Hoe haal je alle sleutels (keys) op uit een Python Dictionary genaamd 'auto'?", options: ["auto.keys()", "auto.getKeys()", "auto.list()", "keys(auto)"], answer: 0 },
        { q: "Wat doet de methode '.count()' op een Python lijst?", options: ["Het telt hoeveel elementen er in totaal in de lijst zitten", "Het telt hoe vaak één specifieke opgegeven waarde voorkomt in de lijst", "Het begint een aftelklok", "Het telt alleen de getallen in een lijst op"], answer: 1 },
        { q: "Waarvoor dient het 'import' keyword in Python?", options: ["Om data te exporteren", "Om externe code, bibliotheken of modules (zoals math of random) in je huidige script te laden", "Om afbeeldingen in te voegen", "Om het script te starten"], answer: 1 },
        { q: "Wat is het wezenlijke verschil tussen '=' en '==' in Python?", options: ["Geen verschil", "'==' wordt gebruikt om variabelen te vullen, '=' om wiskunde te doen", "'=' wijst een waarde toe aan een variabele, '==' is een vraag die checkt of twee waarden wiskundig gelijk zijn", "'==' is alleen voor tekst"], answer: 2 }
    ],
    "Databases": [
        { q: "Welk SQL keyword gebruik je om het aantal rijen dat je terugkrijgt te beperken (bijv. toon alleen de eerste 10 resultaten)?", options: ["STOP 10", "MAX 10", "LIMIT 10", "END 10"], answer: 2 },
        { q: "Wat doet het SQL commando 'DESCRIBE tabelnaam;' (of DESC)?", options: ["Het leest alle data voor", "Het toont de structuur, de kolommen en de datatypes van de tabel zonder de data zelf op te halen", "Het verwijdert de tabel", "Het maakt een back-up"], answer: 1 },
        { q: "Waarom gebruik je het '%' teken in combinatie met het SQL keyword 'LIKE'?", options: ["Om percentages te berekenen", "Het is een 'Wildcard' die staat voor nul, één of meerdere willekeurige karakters (bijv. LIKE 'A%' zoekt alles dat begint met een A)", "Om de database te beveiligen", "Om kolommen te koppelen"], answer: 1 },
        { q: "Wat is het doel van een 'Unique Constraint' op een database kolom (zoals een email-kolom)?", options: ["Het versleutelt de e-mails", "Het controleert of het een geldig e-mailadres is", "Het garandeert dat er absoluut geen dubbele waarden in die kolom mogen voorkomen", "Het verbergt de kolom voor beheerders"], answer: 2 },
        { q: "Wat is een 'Composite Key' (Samengestelde Sleutel) in een tabel?", options: ["Een plastic sleutel", "Een wachtwoord dat uit meerdere delen bestaat", "Een Primary Key die niet uit één, maar uit een combinatie van twéé of meer kolommen bestaat om een rij uniek te maken", "Een versleutelde tabel"], answer: 2 }
    ],
    "Netwerken": [
        { q: "Hoeveel bits lang is een klassiek IPv4 adres (zoals 192.168.1.1)?", options: ["16 bits", "32 bits", "64 bits", "128 bits"], answer: 1 },
        { q: "Hoeveel bits lang is een modern IPv6 adres?", options: ["32 bits", "64 bits", "128 bits", "256 bits"], answer: 2 },
        { q: "Wat is de functie van de 'Default Gateway' in je netwerkinstellingen?", options: ["Het is de virusscanner", "Het is het IP-adres van je router; de 'uitgang' waar al het verkeer naartoe gestuurd wordt dat buiten je eigen lokale netwerk (naar het internet) moet", "Het is het wachtwoord van je WiFi", "Het is een website"], answer: 1 },
        { q: "Wat is het 'Dark Web'?", options: ["Websites met een zwarte achtergrond", "Een klein, verborgen en zwaar versleuteld deel van het internet dat niet door zoekmachines wordt geïndexeerd en alleen bereikbaar is via speciale browsers (zoals Tor)", "Een kapotte server", "Een netwerkkabel zonder stroom"], answer: 1 },
        { q: "Wat doet de 'Ping' opdracht in de terminal eigenlijk precies?", options: ["Het maakt geluid", "Het stuurt kleine 'ICMP Echo Request' pakketjes naar een IP-adres en meet exact in milliseconden hoe lang het duurt voordat de server antwoordt", "Het wist je IP-adres", "Het downloadt een klein test-bestand"], answer: 1 }
    ],
    "Hardware & OS": [
        { q: "Welk beroemd bedrijf produceert de 'Ryzen' serie processoren?", options: ["Intel", "Apple", "AMD", "NVIDIA"], answer: 2 },
        { q: "Welk bedrijf produceert de bekende 'Core i5, i7 en i9' serie processoren?", options: ["AMD", "Intel", "Qualcomm", "Samsung"], answer: 1 },
        { q: "Wat is een 'Motherboard Standoff' in een PC-behuizing?", options: ["Een koeler", "Kleine koperen of plastic afstandsbusjes die voorkomen dat de pinnen aan de achterkant van je moederbord de metalen PC-kast raken en kortsluiting veroorzaken", "Een speciale schroevendraaier", "Een stroomkabel"], answer: 1 },
        { q: "Wat is de functie van de 'Taakbeheerder' (Task Manager) in Windows?", options: ["Spelletjes opstarten", "Een krachtig overzicht bieden van alle draaiende processen, het huidige hardwaregebruik (CPU/RAM) meten, en je de macht geven om vastgelopen programma's geforceerd te stoppen", "Het installeren van updates", "De tijd instellen"], answer: 1 },
        { q: "Wat is een 'UPS' (Uninterruptible Power Supply)?", options: ["Een pakketbezorger", "Een flinke nood-accu in de serverruimte die bij een stroomuitval direct de stroomtoevoer overneemt, zodat de servers de tijd hebben om veilig af te sluiten", "Een extra snelle harde schijf", "Een type processor"], answer: 1 }
    ],
    "Cybersecurity": [
        { q: "Wat bedoelt men met 'Shoulder Surfing' in cybersecurity?", options: ["Surfen op het strand met een laptop", "Een simpele maar effectieve aanval waarbij een kwaadwillend persoon fysiek over je schouder meekijkt terwijl jij je wachtwoord of pincode intypt", "Een netwerk hacken via een router", "Het stelen van telefoons"], answer: 1 },
        { q: "Wat is 'Two-Factor Authentication' (2FA)?", options: ["Twee firewalls gebruiken", "Een extra beveiligingslaag waarbij je naast je wachtwoord (iets dat je weet), ook een tweede bewijs nodig hebt (zoals een code op je telefoon: iets dat je hebt) om in te loggen", "Twee keer inloggen per dag", "Je wachtwoord delen met twee personen"], answer: 1 },
        { q: "Waarvoor dient een 'VPN' (Virtual Private Network)?", options: ["Om video's te bewerken", "Het creëert een zwaar versleutelde tunnel tussen jou en een server op het internet, waardoor je IP-adres verborgen blijft en je data (zelfs op openbare WiFi) veilig is voor afluisteraars", "Om je computer te scannen op virussen", "Om sneller te kunnen downloaden"], answer: 1 },
        { q: "Wat is een 'Botnet'?", options: ["Een chatroom voor robots", "Een gigantisch netwerk van duizenden gehackte computers en slimme apparaten (zombies) die door één hacker centraal worden aangestuurd, vaak gebruikt om DDoS-aanvallen uit te voeren", "Een netwerk van AI-servers", "Een nieuw sociaal netwerk"], answer: 1 },
        { q: "Wat is 'Malware'?", options: ["Een nieuw merk hardware", "Een samenvoeging van 'Malicious Software', wat de overkoepelende verzamelnaam is voor alle schadelijke programma's, zoals virussen, spyware en ransomware", "Software voor beeldbewerking", "Een programma dat je PC schoonmaakt"], answer: 1 }
    ],
    "Git & Versiebeheer": [
        { q: "Hoe zorg je ervoor dat Git specifieke bestanden (zoals logfiles of wachtwoorden) nóóit uploadt naar GitHub?", options: ["Door ze in een zipje te stoppen", "Door de bestandsnamen en mapjes letterlijk te vermelden in een speciaal verborgen bestand genaamd '.gitignore' in je project", "Door het internet uit te zetten", "Door ze een andere naam te geven"], answer: 1 },
        { q: "Wat controleer je in je terminal met het commando 'git status'?", options: ["De snelheid van je internet", "De huidige staat van je werkmap: het toont je op welke branch je zit, welke bestanden zijn aangepast, en welke klaarstaan (staged) voor een nieuwe commit", "De status van de host-server", "Hoeveel ruimte je nog hebt"], answer: 1 },
        { q: "Wat gebeurt er als je 'git push origin main' intypt?", options: ["Je downloadt de main branch", "Je pusht en publiceert jouw lokaal opgeslagen commits definitief naar de 'main' branch op de remote (externe) server, zodat collega's ze kunnen zien", "Je verwijdert het project van de server", "Je maakt een nieuwe branch genaamd 'origin'"], answer: 1 },
        { q: "Wat is het doel van het commando 'git diff'?", options: ["Het verwijdert de verschillen", "Het laat je regel voor regel (in groen en rood) de exacte inhoudelijke verschillen zien tussen de code die je nu hebt, en de code in je vorige commit", "Het pusht de code", "Het klonert een project"], answer: 1 }
    ],
    "Cloud & DevOps": [
        { q: "Wat is 'IaaS' (Infrastructure as a Service)?", options: ["Je huurt online software", "Een cloud-model waarbij je de pure, naakte en virtuele hardware (servers, opslag en netwerken) huurt, en zelf verantwoordelijk bent voor de installatie van OS en software", "Een lokaal opslagmedium", "Een database licentie"], answer: 1 },
        { q: "Wat is 'PaaS' (Platform as a Service)?", options: ["Een abonnementsdienst voor games", "Een cloud-model waarbij de provider de servers én de omgeving (zoals Node.js of Python) voor je beheert. Jij uploadt simpelweg je code en de provider regelt de rest", "Een fysiek platform voor datacenters", "Een beveiligingsprotocol"], answer: 1 },
        { q: "Waarvoor gebruik je een tool als 'Docker'?", options: ["Om boten te besturen", "Om applicaties samen met al hun benodigdheden te verpakken in lichte, draagbare en geïsoleerde 'containers', zodat de app op de server van de klant exact zo werkt als op jouw laptop", "Om video's te bewerken", "Om code te schrijven"], answer: 1 },
        { q: "Wat is de functie van 'AWS Lambda' of Azure Functions?", options: ["Het zijn fysieke servers", "Ze bieden 'Serverless Computing': je plaatst een blokje code in de cloud, en de provider start onzichtbaar rekenkracht op om deze uit te voeren zodra het nodig is. Je betaalt puur per milliseconde rekentijd", "Het zijn database systemen", "Het zijn programma's voor animatie"], answer: 1 }
    ],
    "Game Development": [
        { q: "Wat is de functie van een 'Skybox' in een 3D game?", options: ["Het is een doos die uit de lucht valt", "Het is een gigantische, onzichtbare kubus of bol om het level heen, beplakt met beelden van luchten of bergen, om de illusie van een weidse en oneindige horizon te wekken", "Het is een wolk in het spel", "Het is de camera van de speler"], answer: 1 },
        { q: "Wat wordt bedoeld met 'Anti-Aliasing' in de grafische instellingen van een game?", options: ["Het blokkeert cheaters", "Een zware rendering-techniek die berekent hoe pixels zich mengen om de lelijke, hoekige en 'gekartelde' randjes (staircase effect) van 3D-modellen vloeiender en zachter te maken", "Het maakt het spel lichter", "Het is de besturing van het spel"], answer: 1 },
        { q: "Wat doet een 'Animator Controller' (State Machine) in game ontwikkeling?", options: ["Het tekent de poppetjes", "Het is een visueel schema met logica dat bepaalt wannéér een personage moet overschakelen van de ene animatie (bijv. 'Stilstaan') naar de andere (bijv. 'Rennen' of 'Springen') op basis van code-variabelen", "Het speelt de muziek af", "Het controleert de muisklikken"], answer: 1 },
        { q: "Waarom moet je objecten die stilstaan (zoals huizen en bomen) in een engine vaak markeren als 'Static'?", options: ["Omdat ze dan onzichtbaar worden", "Omdat de engine daardoor vooraf zware berekeningen kan doen (zoals pathfinding en statische schaduwen bakken) in de wetenschap dat deze objecten tòch nooit zullen bewegen, wat enorm veel performance (FPS) scheelt", "Omdat ze dan stroom krijgen", "Omdat de speler er dan sneller langs loopt"], answer: 1 }
    ],
    "Algoritmes & Datastructuren": [
        { q: "Wat is het wezenlijke verschil tussen een 'Stack' (Stapel) en een 'Queue' (Wachtrij)?", options: ["Geen verschil", "Een Stack is voor tekst, een Queue voor getallen", "Een Stack werkt volgens LIFO (Last In, First Out, zoals een stapel borden), een Queue werkt volgens FIFO (First In, First Out, zoals een rij bij de kassa)", "Een Queue is altijd groter"], answer: 2 },
        { q: "Wat is het doel van het 'Dijkstra' algoritme?", options: ["Het versleutelt wachtwoorden", "Het is een klassiek en beroemd padvindingsalgoritme dat de absolute kortste wiskundige route berekent tussen twee knooppunten in een complex netwerk of kaart (de basis van routeplanners en GPS)", "Het sorteert data alfabetisch", "Het comprimeert bestanden"], answer: 1 },
        { q: "Hoe werkt het simpele algoritme 'Linear Search' (Lijnair zoeken)?", options: ["Het hakt de data in tweeën", "Het begint simpelweg bij het állereerste item in een lijst en controleert één voor één, op volgorde, elk item totdat het gezochte antwoord is gevonden (heel traag bij miljarden regels data)", "Het zoekt via het internet", "Het kiest een willekeurig antwoord"], answer: 1 },
        { q: "Wat is de Big O notatie voor de efficiëntie van een algoritme dat, ongeacht de grootte van de dataset, altijd exact in één enkele rekenstap klaar is?", options: ["O(n)", "O(log n)", "O(1) (Constante tijd)", "O(n^2)"], answer: 2 }
    ],
    "Tech Geschiedenis & Trivia": [
        { q: "Welk iconisch videospel over vallende blokken werd in 1984 in de Sovjet-Unie bedacht door Alexey Pajitnov?", options: ["Pong", "Space Invaders", "Tetris", "Pac-Man"], answer: 2 },
        { q: "Hoe noemden we vroeger de kleine, vierkante plastic schijfjes (van maximaal 1.44 MB) waarop we al onze bestanden en Word-documenten bewaarden vóórdat de USB-stick bestond?", options: ["CD-ROM", "Cassette", "Floppy Disk (Diskette)", "Punch card"], answer: 2 },
        { q: "Wat maakte in de jaren '90 en begin jaren 2000 een extreem specifiek, hard, piepend en schreeuwend krakend geluid voordat je ein-de-lijk verbinding met het internet had?", options: ["Een inbel-modem (Dial-up over de vaste telefoonlijn)", "De harde schijf", "De naaldprinter", "De CD speler"], answer: 0 },
        { q: "Voor hoeveel miljard dollar kocht Facebook (nu Meta) in 2012 de immens populaire, maar destijds nog nauwelijks winstgevende foto-app Instagram?", options: ["Facebook heeft Instagram niet gekocht", "Slechts 1 Miljard Dollar (wat achteraf een van de beste tech-deals aller tijden bleek)", "10 Miljard Dollar", "100 Miljard Dollar"], answer: 1 },
        { q: "Welke populaire gamereeks en e-sports titaan begon in de late jaren '90 ooit simpelweg als een door de community gemaakte 'mod' voor het schietspel Half-Life?", options: ["Minecraft", "Counter-Strike", "Call of Duty", "Fortnite"], answer: 1 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 9: Nog meer vragen, helemaal automatisch!
for (let category in extraVragenDeel9) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel9[category]);
    } else {
        questionBank[category] = extraVragenDeel9[category]; 
    }
}

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 10 - DE ABSOLUTE EINDSTRIJD!
// =====================================================================

const extraVragenDeel10 = {
    "HTML & CSS": [
        // Makkelijk
        { q: "Waar staat de 'p' in de HTML tag <p> voor?", options: ["Page", "Paragraph (Alinea)", "Pointer", "Picture"], answer: 1 },
        { q: "Wat doet de CSS pseudo-class ':hover'?", options: ["Het laat het element zweven in 3D", "Het verandert de stijl van het element zodra je er met je muis overheen beweegt", "Het verbergt het element", "Het maakt de tekst onzichtbaar"], answer: 1 },
        { q: "Wat is de functie van de HTML tag <nav>?", options: ["Het start een navigatie-app op je pc", "Het is een semantische tag die wordt gebruikt om het hoofdmenu (de navigatie-links) van een website te groeperen", "Het downloadt bestanden", "Het geeft de breedtegang aan"], answer: 1 },
        // Moeilijk
        { q: "Wat is de functie van de CSS eigenschap 'position: sticky;'?", options: ["Het lijmt het element vast aan de muis", "Het element gedraagt zich normaal totdat je naar beneden scrollt; dan blijft het bovenaan je scherm 'plakken' zolang je in die sectie bent", "Het maakt de randen kleverig", "Het verbergt het element achter een ander element"], answer: 1 },
        { q: "Wat is de hoofdregel als je kiest tussen een 'ID' en een 'Class' in HTML/CSS?", options: ["Classes zijn voor kleuren, ID's voor tekst", "Een ID mag maar maximaal één keer op de hele pagina voorkomen, een Class mag je op eindeloos veel elementen tegelijk gebruiken", "ID's zijn alleen voor JavaScript, Classes alleen voor CSS", "Er is geen enkele regel voor"], answer: 1 },
        { q: "Wat doet de moderne CSS-functie 'clamp()'?", options: ["Het knipt een afbeelding bij", "Het stelt een vloeiende, responsieve waarde in met een minimum, een ideale voorkeurswaarde, en een maximum (bijv. voor meeschalende tekstgrootte)", "Het verwijdert de marges", "Het zet het beeldscherm vast"], answer: 1 }
    ],
    "JavaScript": [
        // Makkelijk
        { q: "Als je het datatype van de boolean 'true' opvraagt via 'typeof true', wat krijg je dan terug?", options: ["string", "number", "boolean", "undefined"], answer: 2 },
        { q: "Welk keyword in JavaScript wordt gebruikt om een blok code af te handelen áls een eerdere 'if' conditie NIET waar (False) was?", options: ["then", "else", "except", "otherwise"], answer: 1 },
        // Moeilijk
        { q: "Wat doet de razend handige array-methode 'array.splice()' in JavaScript?", options: ["Het snijdt de array precies in tweeën", "Hiermee kun je elementen toevoegen, verwijderen of vervangen ergens Middenin een bestaande array", "Het zoekt naar virussen in de data", "Het exporteert de array naar een database"], answer: 1 },
        { q: "Wat gebeurt er als je de regel '\"use strict\";' helemaal bovenaan je JavaScript bestand zet?", options: ["De code wordt onzichtbaar voor gebruikers", "Het dwingt veiligere en modernere (strikte) regels af in de browser, en geeft bijvoorbeeld direct een Error als je per ongeluk een variabele gebruikt zonder hem te declareren", "Het schakelt HTML5 uit", "Het maakt de code 2 keer zo langzaam"], answer: 1 },
        { q: "Wat is een 'Symbol' in de nieuwere versies van JavaScript (ES6)?", options: ["Een icoontje op de website", "Een compleet nieuw en uniek Primitief Datatype (naast string, number, boolean) dat vaak wordt gebruikt om absoluut unieke eigenschappen of keys aan een object toe te voegen zonder botsingen", "Een manier om te typen in symbolen", "Een CSS klasse"], answer: 1 },
        { q: "Wat is het beruchte probleem met het 'this' keyword in gewone JavaScript functies?", options: ["Het is verboden om te gebruiken", "De waarde van 'this' is extreem variabel: het hangt er volledig van af HOE en DOOR WIE de functie wordt aangeroepen (de context), wat vaak tot verwarring leidt in callbacks", "Het crasht de browser", "Het verwijst altijd naar het woordje 'that'"], answer: 1 }
    ],
    "Python": [
        // Makkelijk
        { q: "Wat is de return-waarde (uitkomst) als je in Python 'print(\"A\" * 3)' intypt?", options: ["A3", "3", "AAA", "Error"], answer: 2 },
        { q: "Hoe schrijf je een 'Kommagetal' (Float) op de juiste wiskundige manier in Python?", options: ["3,14", "3.14", "3:14", "3;14"], answer: 1 },
        { q: "Met welk Engels keyword definieer je een 'Niets' of 'Lege' waarde in Python?", options: ["Null", "None", "Zero", "Empty"], answer: 1 },
        // Moeilijk
        { q: "Wat doet de krachtige ingebouwde 'map()' functie in Python?", options: ["Het opent Google Maps", "Het past een specifieke functie (zoals een berekening) razendsnel toe op álle individuele elementen in een lijst of iterable, zonder dat je zelf een langzame for-loop hoeft te schrijven", "Het zoekt de weg in een directory", "Het wist het geheugen"], answer: 1 },
        { q: "Waarvoor is de beruchte Python regel 'if __name__ == \"__main__\":' precies bedoeld?", options: ["Het hernoemt het bestand", "Hiermee zorg je dat dat specifieke blok code allèén wordt uitgevoerd als je dít script direct zelf opstart, en NIET wordt uitgevoerd als je het script (als module) importeert in een ander bestand", "Het is een verplichte beveiligingsregel", "Het wist de main branch in Git"], answer: 1 },
        { q: "Wat is een Python 'Dictionary' (Dict) precies voor een datastructuur?", options: ["Een vertaal-boek", "Een flexibele, ongeordende collectie van data opgeslagen in 'Key-Value' paren (sleutel en waarde), ideaal om razendsnel data op te slaan en terug te vinden zonder index-nummers", "Een lijst met alleen maar strings", "Een functie die wachtwoorden genereert"], answer: 1 }
    ],
    "Databases": [
        // Makkelijk
        { q: "Wat is een 'Boolean' veld in een database?", options: ["Een veld voor lange teksten", "Een veld voor afbeeldingen", "Een logisch datatype dat uitsluitend de waarde True (Waar / 1) of False (Niet Waar / 0) kan aannemen", "Een veld voor datums"], answer: 2 },
        { q: "Wat is het doel van het SQL commando 'SELECT'?", options: ["Het wist alle tabellen", "Het vraagt specifieke data op uit de database zodat je die kunt bekijken of gebruiken in je app", "Het logt in op de server", "Het selecteert een nieuwe admin"], answer: 1 },
        // Moeilijk
        { q: "Wat doet een 'Self Join' in de wereld van databases?", options: ["De database sluit zich aan bij een netwerk", "Een query waarbij een tabel door middel van een JOIN wiskundig aan zichzelf wordt gekoppeld (vaak gebruikt in hiërarchieën, bijv. om in één werknemers-tabel de werknemers direct te koppelen aan hun manager die óók in die tabel staat)", "Het verwijdert de tabel zelf", "Een back-up naar de cloud sturen"], answer: 1 },
        { q: "Wat is een 'View' in een SQL database?", options: ["Een visuele grafiek van je data", "Een virtuele, opgeslagen tabel die niet zelf fysiek data bezit, maar waarvan de inhoud dynamisch wordt gegenereerd op basis van een vastgelegde SQL query over andere echte tabellen", "Een tool voor beheerders", "Een wachtwoord manager"], answer: 1 },
        { q: "Waarvoor gebruik je het handige SQL keyword 'BETWEEN'?", options: ["Om twee tabellen fysiek naast elkaar te zetten", "Om razendsnel in een WHERE-clausule te filteren op waardes die exact binnen een bepaald bereik vallen (bijvoorbeeld tussen twee specifieke datums of prijzen)", "Om wachtwoorden te verbergen", "Om tabellen te splitsen"], answer: 1 }
    ],
    "Netwerken": [
        // Makkelijk
        { q: "Wat is 'Bluetooth' eigenlijk?", options: ["Een tandarts gereedschap", "Een draadloze, korte-afstands netwerktechnologie (Personal Area Network) om apparaten zoals telefoons en oordopjes met elkaar te verbinden", "Een kabel voor het internet", "Een type computervirus"], answer: 1 },
        { q: "Waar staat de veelgebruikte afkorting 'LAN' voor?", options: ["Large Area Network", "Local Area Network (een lokaal, klein netwerk zoals bij jou thuis of op kantoor)", "Logic Array Node", "Light Access Network"], answer: 1 },
        // Moeilijk
        { q: "Wat doet het essentiële 'ARP' (Address Resolution Protocol) achter de schermen van een netwerk?", options: ["Het scant op virussen", "Het is het protocol dat wiskundig een IP-adres vertaalt naar het unieke fysieke hardware MAC-adres van een netwerkkaart op een lokaal netwerk", "Het verstuurt zware e-mails", "Het blokkeert advertenties"], answer: 1 },
        { q: "Wat is de functie van poort 3389 in een Windows omgeving?", options: ["Het is voor webbrowsers", "Deze specifieke netwerkpoort wordt standaard gebruikt voor RDP (Remote Desktop Protocol) om de computer van een afstand grafisch over te nemen", "Het is de poort voor de muis", "Het zendt WiFi uit"], answer: 1 },
        { q: "Wat is de Transportlaag (Layer 4) in het bekende OSI-model?", options: ["De fysieke laag met de kabels", "De laag die verantwoordelijk is voor de foutloze, logische end-to-end levering en segmentatie van data tussen twee applicaties, veelal gebruikmakend van de TCP of UDP protocollen", "De laag van de browser (HTML)", "De laag van de harde schijf"], answer: 1 }
    ],
    "Hardware & OS": [
        // Makkelijk
        { q: "Waar dient een 'CPU Koeler' voor?", options: ["Om de kamer af te koelen", "Om de extreme hitte die de processor (het brein) tijdens het rekenen produceert veilig af te voeren, zodat hij niet smelt of uitvalt", "Om het beeldscherm af te koelen", "Om stroom op te slaan"], answer: 1 },
        { q: "Wat is een 'Toetsenbord' (Keyboard) in ICT-termen?", options: ["Een Output-apparaat", "Een Opslag-apparaat", "Een Input-apparaat (invoerapparaat) waarmee de gebruiker commando's en data naar de computer stuurt", "Een Netwerk-apparaat"], answer: 2 },
        // Moeilijk
        { q: "Wat betekent de afkorting 'RISC' als we spreken over processor-architectuur (zoals in ARM chips en Apple Silicon)?", options: ["Risk Instruction System Code", "Reduced Instruction Set Computer (Een zeer moderne processor die ontworpen en geoptimaliseerd is om een relatief kleine set van simpele, fundamentele instructies razendsnel en uiterst energiezuinig uit te voeren)", "Random Internal System Cache", "Run In Safe Configuration"], answer: 1 },
        { q: "Wat is de uiterst belangrijke functie van de 'CMOS-batterij' op je moederbord?", options: ["Het laadt je telefoon op", "Het is een knoopcelbatterij die ervoor zorgt dat vluchtige geheugenchips (die de BIOS/UEFI instellingen en de live systeemklok vasthouden) stroom blijven houden, zelfs als je de stekker van de PC volledig uit het stopcontact trekt", "Het versnelt de WiFi kaart", "Het is puur een reserve-batterij voor de muis"], answer: 1 },
        { q: "Wat doet een handige KVM-switch (Keyboard, Video, Mouse) op een IT-werkplek?", options: ["Het hackt je netwerk", "Een hardware apparaatje waarmee je fysiek meerdere, aparte computers (of servers) kunt bedienen en besturen door te schakelen tussen slechts één enkel toetsenbord, één muis en één monitor", "Het is een USB-hub", "Het versnelt je videokaart rendering"], answer: 1 }
    ],
    "Cybersecurity": [
        // Makkelijk
        { q: "Waarom is het belangrijk om 'Multi-Factor Authentication' (MFA of 2FA) aan te zetten op je accounts?", options: ["Omdat je dan twee accounts krijgt", "Omdat een hacker dan niets meer aan alléén jouw gestolen wachtwoord heeft; hij heeft ook toegang tot jouw fysieke telefoon nodig voor de tweede code, wat je account extreem veel veiliger maakt", "Omdat je dan korting krijgt op software", "Het maakt inloggen sneller"], answer: 1 },
        { q: "Wat is een 'Hacker' in de breedste zin van het woord?", options: ["Altijd een crimineel in een zwarte hoodie", "Een persoon die zijn vergaande, diepe technische kennis van computersystemen en netwerken gebruikt om beveiligingssystemen te doorbreken, hetzij met slechte bedoelingen (Black Hat) of juist om de boel veiliger te maken (White Hat)", "Een virus op je telefoon", "Een programmeur die alleen HTML typt"], answer: 1 },
        // Moeilijk
        { q: "Wat is 'Spear Phishing' en waarom is het zo gevaarlijk?", options: ["Vissen met een speer op het darkweb", "Een extreem gerichte, handmatige vorm van phishing waarbij de hacker vooraf de sociale media en achtergrond van zijn specifieke doelwit (bijv. een directeur) heeft onderzocht, en de valse e-mail dus tjokvol overtuigende, ware persoonlijke details zit", "Een virus via USB", "Het bellen van willekeurige nummers"], answer: 1 },
        { q: "Wat betekent het verdienmodel 'Ransomware-as-a-Service' (RaaS) in de criminele onderwereld?", options: ["Een legitiem bedrijf dat hackers inhuurt", "Een georganiseerd, illegaal cloud-businessmodel in de onderwereld waarbij uiterst professionele en slimme hackers hun complexe gijzelsoftware kant-en-klaar verhuren aan 'dommere' criminelen, in ruil voor een percentage (fee) van de buitgemaakte losgelden", "Een cursus om hacker te worden", "Een gratis antivirus dienst"], answer: 1 },
        { q: "Wat is het gevaarlijke concept van een 'Hash Collision' in wachtwoordbeveiliging?", options: ["De database crasht door teveel wachtwoorden", "Een uiterst zeldzame, wiskundige zwakte in een algoritme (zoals het oude MD5) waarbij twee totaal, compleet verschillende wachtwoorden per ongeluk resulteren in exact dezelfde versleutelde Hash-output, waardoor een hacker alsnog kan inloggen", "Een aanval via de router", "Een geblokkeerd account"], answer: 1 }
    ],
    "Git & Versiebeheer": [
        // Makkelijk
        { q: "Wat is het commando 'git pull' in normale taal?", options: ["Het trekt de kabels uit de server", "Het downloadt direct alle nieuwste wijzigingen (updates en nieuwe code van je team) vanaf de externe server op GitHub en verwerkt deze meteen in jouw eigen, lokale bestanden op je PC", "Het verwijdert je bestanden lokaal", "Het is een commando om te chatten"], answer: 1 },
        { q: "Wat betekent het als een bestand in je project in de 'Staging Area' zit?", options: ["Het bestand is gecrasht", "Het bestand is door jou gewijzigd en is (vaak via 'git add') in de wachtkamer gezet; het ligt 100% klaar om meegenomen en permanent opgeslagen te worden in de állervolgende 'commit' die je gaat maken", "Het bestand is gepubliceerd", "Het is een tijdelijk internetbestand"], answer: 1 },
        // Moeilijk
        { q: "Wat doet de briljante tool 'git bisect' als je team een probleem heeft?", options: ["Het splitst je code in twee repositories", "Het is een magische, wiskundige debugging tool die (door de geschiedenis met binaire zoektechniek steeds te halveren) razendsnel voor je opzoekt in exact wélke historische commit de ontwikkelaar de fatale bug of fout heeft geïntroduceerd", "Het verwijdert foutieve code", "Het vergelijkt twee tekstbestanden"], answer: 1 },
        { q: "Wat gebeurt er als je het simpele commando 'git log' intypt in je terminal?", options: ["Het formatteert je schijf", "Je krijgt een uiterst overzichtelijke, chronologische en gedetailleerde lijst te zien van alle historische commits die ooit zijn gedaan in jouw huidige branch, inclusief unieke ID's, de specifieke maker en het log-bericht", "Het wist al je logboeken", "Het maakt een nieuw txt bestand aan"], answer: 1 }
    ],
    "Cloud & DevOps": [
        // Makkelijk
        { q: "Als je een film streamt op Netflix, staat dat bestand dan bij jou op de laptop of in de 'Cloud'?", options: ["Op mijn laptop", "In de Cloud (Netflix gebruikt gigantische, verdeelde cloud-servers, voornamelijk van AWS, om videobestanden via het internet naar jouw scherm te streamen)", "Op een USB-stick", "In de WiFi router"], answer: 1 },
        // Moeilijk
        { q: "Wat doet een zogeheten 'Reverse Proxy' (zoals Nginx, Traefik of HAProxy) in een professioneel cloud-netwerk?", options: ["Het is een virus dat data omkeert", "Het is een slimme server die als een onzichtbaar schild strak vóór je eigenlijke webservers staat; het vangt alle inkomende internetverzoeken veilig af, verdeelt de drukte (load balancing), regelt SSL en stuurt het verzoek pas daarna door naar de juiste interne server", "Het versleutelt data voor verzending", "Het sluit ongebruikte poorten af"], answer: 1 },
        { q: "Wat betekent de term 'Vendor Lock-in' voor bedrijven die overstappen naar Cloud computing?", options: ["Een fysiek hangslot op de serverkast", "De gevaarlijke situatie waarin een bedrijf zó diep verstrengeld en afhankelijk is geworden van de specifieke, unieke tools en architecturen van één cloudprovider (bijv. AWS), dat overstappen naar een concurrent (zoals Azure) extreem complex en te duur is geworden", "Het vastlopen van een database", "Een contract voor onbepaalde tijd"], answer: 1 }
    ],
    "Algoritmes & Datastructuren": [
        // Makkelijk
        { q: "Wat is een algoritme, simpel uitgelegd?", options: ["Een robot", "Een stappenplan, net als een recept voor een taart. Maar dan voor een computer om een specifieke taak of som feilloos uit te voeren", "Een virus", "Een merk laptop"], answer: 1 },
        // Moeilijk
        { q: "Wat is de befaamde 'Fibonacci' reeks (0, 1, 1, 2, 3, 5, 8...) in de wiskunde en het programmeren?", options: ["Een willekeurige reeks getallen", "Een reeks waarbij elk volgend getal simpelweg de wiskundige som is van de twee direct daaraan voorafgaande getallen (deze reeks wordt op universiteiten enorm vaak gebruikt als de ultieme test om het concept van Recursie te leren)", "Een type encryptie sleutel", "Het algoritme achter zoekmachines"], answer: 1 },
        { q: "Wat is een 'Linked List' (Gekoppelde Lijst) en hoe verschilt het van een Array?", options: ["Een Linked List is altijd trager", "Het is een vloeiende reeks data-elementen (Nodes) waarbij elk blokje niet alleen zijn eigen data/waarde bevat, maar óók een expliciete 'Pointer' (wiskundige verwijzing in het RAM geheugen) bevat naar het volgende blokje in de keten", "Het is een speciale database tabel", "Een Linked List kan geen getallen bevatten"], answer: 1 }
    ],
    "Game Development": [
        // Makkelijk
        { q: "Wat is 'FPS' in een game?", options: ["First Player Screen", "Frames Per Second (beelden per seconde, dit geeft aan hoe vloeiend en scherp het spel op dat moment draait) OF First Person Shooter (een genre)", "Fast Processing System", "Final Player Score"], answer: 1 },
        // Moeilijk
        { q: "Wat is het doel van de optimalisatietechniek 'Mipmapping' in 3D game graphics?", options: ["Het ontwerpen van kaarten", "Een geheugen- en rekentechniek waarbij de game engine automatisch vooraf kleinere, vagere en lichtere versies van een Texture (plaatje) berekent en inlaadt voor objecten die zich héél ver weg van de speler bevinden, om rekenkracht van de GPU te besparen en flikkerende pixels te voorkomen", "Het genereren van landschappen", "Het opslaan van de game state"], answer: 1 },
        { q: "Wat is de taak van de automatische 'Garbage Collector' (Vuilnisman) in Game Engines zoals Unity (geschreven in C#)?", options: ["Het weggooien van slechte code", "Het draait continu als een achtergrondproces en loopt periodiek het werkgeheugen (RAM) door om 'zwevende' objecten, dode kogels en variabelen die de game helemaal niet meer nodig heeft, veilig en automatisch te vernietigen om geheugen vrij te maken en crashes te voorkomen", "Het verwijderen van oude save-games", "Het blokkeren van cheaters"], answer: 1 }
    ],
    "Tech Geschiedenis & Trivia": [
        // Makkelijk
        { q: "Wat was de naam van het allereerste bedrijf dat in 2004 werd opgericht door o.a. de Harvard-student Mark Zuckerberg?", options: ["Twitter", "MySpace", "Facebook", "Instagram"], answer: 2 },
        // Moeilijk
        { q: "Wat was 'Mosaic' in de rijke geschiedenis van de ICT in het jaar 1993?", options: ["Een merk harde schijven", "Een revolutionaire software: het was een van de allereerste immens populaire webbrowsers mét een grafische interface (plaatjes naast de tekst), die het complexe internet ineens uiterst toegankelijk en sexy maakte voor het grote, niet-technische publiek", "Een wiskundig algoritme", "De allereerste mobiele telefoon"], answer: 1 },
        { q: "Welk bedrijf bouwde en bezat het 'Android' besturingssysteem voordat de gigant Google het in 2005 voor een schijntje van 50 miljoen dollar kocht?", options: ["Samsung", "Nokia", "Android Inc. (een zelfstandige, destijds kleine startup opgericht door Andy Rubin)", "Microsoft"], answer: 2 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 10: Slurp alles moeiteloos je memory in!
for (let category in extraVragenDeel10) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel10[category]);
    } else {
        questionBank[category] = extraVragenDeel10[category]; 
    }
}

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 11 - DE DATABASE DIE NOOIT STOPT!
// =====================================================================

const extraVragenDeel11 = {
    "HTML & CSS": [
        // Makkelijk
        { q: "Welke HTML tag gebruik je om een tabel te maken?", options: ["<grid>", "<t>", "<table>", "<spreadsheet>"], answer: 2 },
        { q: "Hoe pas je in CSS het lettertype van een tekst aan?", options: ["text-style", "font-family", "font-weight", "text-font"], answer: 1 },
        { q: "Wat doet de HTML tag <strong>?", options: ["Het maakt de tekst groot en rood", "Het maakt de tekst vetgedrukt (en geeft semantische nadruk)", "Het maakt een knop", "Het centreert de tekst"], answer: 1 },
        // Moeilijk
        { q: "Wat is de functie van de CSS eigenschap 'overflow: hidden;'?", options: ["Het verwijdert het element", "Het snijdt alle inhoud af die buiten de vaste afmetingen van het element valt (zonder een scrollbar te tonen)", "Het maakt de tekst onzichtbaar", "Het repareert een layout fout"], answer: 1 },
        { q: "Wat is het verschil tussen 'justify-content' en 'align-items' in CSS Flexbox?", options: ["Geen verschil", "justify-content verplaatst het hele grid, align-items roteert de tekst", "justify-content lijnt elementen uit op de hoofdas (meestal horizontaal), align-items op de kruisas (meestal verticaal)", "justify-content is alleen voor tekst"], answer: 2 },
        { q: "Wat doet de 'CSS Specificity' (Specificiteit) regel?", options: ["Het bepaalt de taal van de website", "Het is het wiskundige puntensysteem (gebaseerd op id's, classes en tags) waarmee de browser beslist wélke CSS-regel wint als er conflicten zijn", "Het comprimeert CSS bestanden", "Het maakt animaties soepel"], answer: 1 }
    ],
    "JavaScript": [
        // Makkelijk
        { q: "Wat doet de wiskundige functie 'Math.round(4.5)' in JavaScript?", options: ["Rondt af naar 4", "Geeft een foutmelding", "Rondt het getal af naar het dichtstbijzijnde gehele getal, in dit geval 5", "Maakt het getal willekeurig"], answer: 2 },
        { q: "Welk keyword gebruik je om een nieuwe functie aan te maken in JavaScript?", options: ["func", "method", "create", "function"], answer: 3 },
        // Moeilijk
        { q: "Wat is een 'IIFE' (Immediately Invoked Function Expression) in JavaScript?", options: ["Een error bij het inladen", "Een functie die gedefinieerd wordt én direct op hetzelfde moment volautomatisch wordt uitgevoerd, om vervuiling van de globale scope te voorkomen", "Een snelle for-loop", "Een manier om de server te herstarten"], answer: 1 },
        { q: "Wat doet de array-methode '.reduce()'?", options: ["Verwijdert onnodige variabelen", "Het verlaagt de helderheid van de webpagina", "Het 'vouwt' (reduceert) een complete array van elementen terug naar één enkele waarde (bijv. de som van alle getallen) via een accumulator-functie", "Het verkleint een afbeelding"], answer: 2 },
        { q: "Wat is het beruchte probleem met 'Callback Hell' (ook wel de Pyramid of Doom genoemd)?", options: ["Een virus in de browser", "Wanneer je te veel asynchrone callbacks in elkaar nest (diep inspringt), waardoor de code extreem onleesbaar en lastig te onderhouden wordt", "Wanneer de server niet meer antwoordt", "Een CSS layout fout"], answer: 1 }
    ],
    "Python": [
        // Makkelijk
        { q: "Hoe schrijf je een 'for-loop' die door een lijst genaamd 'fruit' loopt in Python?", options: ["for each fruit:", "for item in fruit:", "loop(fruit):", "while fruit == true:"], answer: 1 },
        { q: "Wat is de output van de code 'type(3.14)' in Python?", options: ["<class 'int'>", "<class 'string'>", "<class 'float'>", "error"], answer: 2 },
        // Moeilijk
        { q: "Wat is een 'Virtual Environment' (venv) in Python?", options: ["Een VR-bril voor code", "Een geïsoleerde, lokale mappenstructuur per project waarin je specifieke versies van packages kunt installeren, zonder dat ze conflicteren met andere Python-projecten op je pc", "Een virtuele server in de cloud", "Een map met reserve-kopieën"], answer: 1 },
        { q: "Wat is 'Pickle' in de context van Python?", options: ["Een augurk", "Een ingebouwde module waarmee je Python-objecten (zoals lijsten of dictionaries) kunt 'serialiseren' en opslaan in een binair bestand voor later gebruik", "Een functie om data te wissen", "Een type encryptie"], answer: 1 },
        { q: "Wat is het wezenlijke verschil tussen de methodes '.sort()' en de ingebouwde functie 'sorted()' in Python?", options: ["Geen verschil", "'.sort()' sorteert de originele lijst op zijn plek (in-place) en geeft None terug. 'sorted()' laat de originele lijst met rust en geeft een nieuwe, gesorteerde kopie terug", "'.sort()' is voor tekst, 'sorted()' is voor getallen", "'.sort()' is veel trager"], answer: 1 }
    ],
    "Databases": [
        // Makkelijk
        { q: "Wat bedoelt men in een database met de term 'Record'?", options: ["Een opslaglimiet", "Een specifieke rij (row) in een tabel, die alle informatie over één enkel item (bijv. één klant) bevat", "Een foutmelding in het logboek", "Een audio-bestand"], answer: 1 },
        { q: "Welk SQL commando gebruik je om een complete, ongewenste tabel weg te gooien?", options: ["DELETE TABLE", "TRASH TABLE", "REMOVE TABLE", "DROP TABLE"], answer: 3 },
        // Moeilijk
        { q: "Wat doet een 'Left Outer Join' in SQL?", options: ["Het joinen van twee losse databases", "Het haalt ALTIJD alle rijen uit de linker-tabel op, plus de matchende rijen uit de rechter-tabel. Is er geen match? Dan toont hij in de rechter-kolommen gewoon 'NULL'", "Het verwijdert de linker tabel", "Het toont alleen getallen"], answer: 1 },
        { q: "Wat bedoelt de 'D' in het ACID-principe (Durability)?", options: ["Database", "Durability (Duurzaamheid): Dit garandeert dat als een database-transactie eenmaal is geaccepteerd, deze gegarandeerd bewaard blijft, zelfs als de stroom uitvalt of de server crasht vlak daarna", "Dual-Core", "Dynamic"], answer: 1 },
        { q: "Wat is 'Denormalisatie' in database design?", options: ["Het resetten van de data", "Het opzettelijk schenden van normalisatieregels (bijv. door dubbele data op te slaan in één tabel) puur om de 'lees'-prestaties (SELECT queries) razendsnel te maken, ten koste van extra opslagruimte", "Het beveiligen met encryptie", "Het blokkeren van gebruikers"], answer: 1 }
    ],
    "Netwerken": [
        // Makkelijk
        { q: "Waar staat de afkorting ISP voor (zoals Ziggo of KPN)?", options: ["Internal Server Protocol", "Internet Service Provider (het bedrijf dat jou de toegang tot het internet levert)", "Internet Security Policy", "Intelligent Switch Port"], answer: 1 },
        { q: "Wat is het grootste verschil tussen een 2.4GHz en een 5GHz WiFi verbinding?", options: ["Er is geen verschil", "2.4GHz is nieuwer", "5GHz is veel sneller, maar 2.4GHz heeft een veel beter bereik (reikt makkelijker door dikke muren heen)", "5GHz kost extra stroom"], answer: 2 },
        // Moeilijk
        { q: "Wat betekent het als een IP-adres de notatie '192.168.1.0/24' (CIDR-notatie) heeft?", options: ["Dat het via poort 24 loopt", "Dat de eerste 24 bits (de eerste 3 blokken) van het IP-adres het netwerkgedeelte (Subnet Mask 255.255.255.0) vormen, wat nog 256 adressen vrijlaat voor hosts", "Dat het IP 24 uur geldig is", "Dat de maximale ping 24ms is"], answer: 1 },
        { q: "Wat doet het netwerkprotocol OSPF (Open Shortest Path First)?", options: ["Het is een inbelverbinding", "Een complex, intern routerings-protocol (vaak binnen grote bedrijfsnetwerken) dat wiskundig razendsnel de kortste en efficiëntste weg door de netwerkkabels naar een ander IP-adres berekent", "Het blokkeert virussen op het netwerk", "Het is de voorloper van Bluetooth"], answer: 1 },
        { q: "Wat is een 'DDoS Amplification Attack' (Versterkings-aanval)?", options: ["Een fysieke aanval met speakers", "Een hack waarbij een aanvaller een klein verzoek met een vervalst afzender-IP naar een kwetsbare server (bijv. een DNS server) stuurt, die vervolgens een gigantisch groot antwoord terugstuurt naar het slachtoffer, waardoor deze direct overbelast raakt", "Een virus via de mail", "Een aanval waarbij kabels worden doorgeknipt"], answer: 1 }
    ],
    "Hardware & OS": [
        // Makkelijk
        { q: "Hoe noemen we het aanraakgevoelige vlak op een laptop dat de computermuis vervangt?", options: ["De Muis", "De Sensor", "Het Touchpad (of Trackpad)", "Het Tekentablet"], answer: 2 },
        { q: "Welk besturingssysteem is herkenbaar aan het logo van een groen mannetje of robotje?", options: ["Windows", "iOS", "Android", "Linux"], answer: 3 },
        // Moeilijk
        { q: "Wat wordt bedoeld met de 'Kernel' van een besturingssysteem?", options: ["Het is een popcorn-spel", "Het is het diepste, onzichtbare hart van het besturingssysteem (zoals de Linux Kernel of Windows NT) dat direct communiceert met de hardware (CPU, geheugen, schijven) en geheugen toewijst aan je programma's", "Het is de virusscanner van Windows", "Het is het grafische inlogscherm"], answer: 1 },
        { q: "Wat gebeurt er als een computer last heeft van 'Thrashing'?", options: ["De ventilatoren maken een hard geluid", "Het RAM-geheugen zit zó vol, dat de pc continu wanhopig bezig is met het wegschrijven (swappen) van geheugenblokken naar de extreem trage harde schijf, waardoor de computer volledig vastvriest en onbruikbaar traag wordt", "De voeding krijgt kortsluiting", "De processor valt in slaapstand"], answer: 1 }
    ],
    "Cybersecurity": [
        // Makkelijk
        { q: "Waarom raden experts altijd aan om per website een uniek en ander wachtwoord te gebruiken?", options: ["Omdat je ze dan makkelijker onthoudt", "Als hackers inbreken bij website A en jouw wachtwoord stelen, kunnen ze daarmee niet óók direct inloggen op jouw account bij website B, C en je e-mail", "Omdat websites dat verplichten", "Omdat de letters anders opraken"], answer: 1 },
        { q: "Wat is het doel van 'End-to-End Encryptie' (E2EE), wat bijvoorbeeld WhatsApp gebruikt?", options: ["Het maakt de app sneller", "Jouw bericht wordt versleuteld op je eigen telefoon, en kan pas weer ontsleuteld (gelezen) worden op de telefoon van de ontvanger. Zelfs het bedrijf (WhatsApp) of hackers kunnen de berichten onderweg absoluut niet meelezen", "Het voorkomt dat je telefoon leegloopt", "Het maakt de letters onzichtbaar"], answer: 1 },
        // Moeilijk
        { q: "Wat is het exacte verschil tussen een 'Worm' en een 'Virus' in de wereld van malware?", options: ["Wormen leven in de aarde", "Een Virus heeft ALTIJD een geïnfecteerd gastbestand (zoals een word-doc of .exe) en actie van de gebruiker (een klik) nodig om te activeren. Een Worm is echter een compleet zelfstandig programma dat zónder enige menselijke interactie zelfstandig over het netwerk van pc naar pc kruipt", "Een virus is veel groter", "Er is geen verschil"], answer: 1 },
        { q: "Wat houdt een 'SQL UNION Attack' precies in?", options: ["Het verwijdert de database", "Een slimme SQL injectie waarbij de hacker het 'UNION' keyword gebruikt om de resultaten van de originele (legitieme) query samen te voegen met de resultaten van een kwaadaardige query, zodat hij stiekem verborgen data uit andere tabellen op het scherm te zien krijgt", "Het versnelt de servers", "Het is een legale database functie"], answer: 1 }
    ],
    "Git & Versiebeheer": [
        // Makkelijk
        { q: "Wat doet het commando 'git init'?", options: ["Het downloadt het internet", "Het initialiseert en start een gloednieuwe, compleet lege Git repository (met de verborgen .git map) in je huidige, lokale bestandsmap", "Het verwijdert de map", "Het stuurt een mail naar je baas"], answer: 1 },
        { q: "Waarvoor gebruik je een Git interface zoals 'SourceTree' of 'GitKraken'?", options: ["Om bomen te tekenen", "Het is een GUI (Grafische User Interface) die het beheren van Git, branches en commits visueel, overzichtelijk en met knoppen maakt, in plaats van dat je alles in een zwarte terminal moet typen", "Om virussen te verwijderen", "Om muziek te streamen"], answer: 1 },
        // Moeilijk
        { q: "Wat betekent het als Git je een waarschuwing geeft over een 'Detached HEAD' state?", options: ["Je hebt een fout gemaakt in je code", "Je 'HEAD' (je werkende pointer) wijst momenteel niet naar een actieve branch-naam, maar direct naar één specifieke, oudere historische commit. Alles wat je nu wijzigt of commit wordt 'zwevend' opgeslagen en gaat waarschijnlijk verloren zodra je weer van branch wisselt", "De server is gecrasht", "Je wachtwoord is verlopen"], answer: 1 },
        { q: "Met welk specifiek commando wis en verwijder je lokaal een branch (bijv. 'oude-feature') die je niet meer nodig hebt?", options: ["git remove branch", "git delete oude-feature", "git branch -d oude-feature", "git clear branch"], answer: 2 }
    ],
    "Cloud & DevOps": [
        // Makkelijk
        { q: "Noem drie van de grootste Cloud-providers (hosting bedrijven) ter wereld op dit moment.", options: ["Netflix, Spotify, Hulu", "Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP)", "Ziggo, KPN, T-Mobile", "Samsung, Apple, Sony"], answer: 1 },
        { q: "Wat is 'Downtime' in de cloud wereld?", options: ["Een pauze voor de medewerkers", "De periode (in minuten of uren) dat een server gecrasht, of een website onbereikbaar is voor gebruikers", "De tijd die het kost om bestanden te downloaden", "Een type virus"], answer: 1 },
        // Moeilijk
        { q: "Wat is de exacte functie van de tool 'Prometheus' in een volwassen DevOps tech-stack?", options: ["Het is een game engine", "Het is een immens populaire, krachtige open-source monitoring- en alerting tool die constant actuele 'time-series' metrics (data met een tijdstempel, zoals CPU verbruik) wegschraapt van je servers en applicaties om overbelasting te monitoren", "Het is een relationele database", "Het versleutelt wachtwoorden in Docker"], answer: 1 },
        { q: "Wat is het wezenlijke technische verschil tussen een 'Container' (Docker) en een klassieke 'Virtual Machine' (VM)?", options: ["Geen verschil", "Een VM bootst compleet eigen fysieke hardware na én draait per stuk een gigantisch zwaar, eigen Guest Besturingssysteem. Een Container deelt gewoon de OS Kernel van de fysieke host (de machine waarop hij draait) en bevat alleen de code, wat containers extreem veel lichter, kleiner en sneller maakt om op te starten dan VM's", "Een VM is voor games, een container voor websites", "Een container gebruikt nooit RAM"], answer: 1 }
    ],
    "Algoritmes & Datastructuren": [
        // Makkelijk
        { q: "Wat wordt bedoeld met een 'Loop' (zoals een for-loop) in het programmeren?", options: ["Een fysieke knoop in de netwerkkabel", "Een programmeer-instructie die een specifiek blokje code automatisch blijft herhalen, net zolang totdat aan een bepaalde stop-voorwaarde is voldaan", "Een animatie-effect", "Het sluiten van een script"], answer: 1 },
        // Moeilijk
        { q: "Wat is de tijdcomplexiteit van het opzoeken van één uniek element op basis van zijn sleutel (Key) in een goed verdeelde 'Hash Table'?", options: ["O(n) - Lijnair", "O(log n) - Logaritmisch", "O(1) - Constante tijd (het is vrijwel altijd direct gevonden, ongeacht of er 10 of 10 miljoen items in de Hash Table zitten)", "O(n^2) - Kwartratisch"], answer: 2 },
        { q: "Wat houdt het klassieke 'Traveling Salesman Problem' (Handelsreizigersprobleem) in de informatica in?", options: ["Hoe je sneller kunt typen", "Een uiterst berucht wiskundig optimalisatieprobleem: Wat is de aller-kortste route voor een verkoper om een lijst van steden te bezoeken, élke stad precies één keer aan te doen, en dan weer te eindigen in de start-stad? (Dit is een zogeheten 'NP-Hard' probleem dat voor computers exponentieel zwaarder wordt naarmate je steden toevoegt)", "Het veilig opslaan van e-mails in de cloud", "Een fout in de WiFi verbinding in treinen"], answer: 1 }
    ],
    "Game Development": [
        // Makkelijk
        { q: "Wat is een 'Boss Fight' (Eindbaas) in een game?", options: ["Een discussie met de ontwikkelaar", "Een groots, uniek en vaak extreem lastig gevecht tegen een machtige computergestuurde vijand, meestal aan het einde van een level of verhaallijn om de speler te testen", "Het opslaan van het spel", "De laatste regel code in de engine"], answer: 1 },
        { q: "Wat is de functie van een 'Health Bar'?", options: ["Het is een drankje", "Een visuele weergave (vaak een rood of groen balkje) in de UI (User Interface) die aangeeft hoeveel levenspunten of energie de speler of vijand op dit moment nog over heeft", "Het meet de internetsnelheid", "Het is de klok van het level"], answer: 1 },
        // Moeilijk
        { q: "Wat is 'Culling' (bijvoorbeeld Frustum Culling of Occlusion Culling) in moderne 3D game engines?", options: ["Het is een kleur-effect", "Het is de absoluut onmisbare rending-optimalisatie waarbij de engine vliegensvlug berekent wélke objecten momenteel uit het zicht van de speler zijn (bijv. achter de rug van de speler of verstopt áchter een dikke muur), zodat de videokaart deze objecten domweg negeert en níét tekent, wat enorm veel prestaties scheelt", "Het toevoegen van realistische schaduwen", "Een anti-cheat mechanisme voor online servers"], answer: 1 },
        { q: "Wat is een 'Mesh' in de context van 3D modeling en game rendering?", options: ["Een netwerkkabel", "De kale, virtuele en holle basis-structuur van een 3D object in de computer, die puur is opgebouwd uit wiskundige punten (vertices), verbindingslijnen (edges) en platte vlakjes (faces of polygons)", "Een kleur in de game", "Het geluid dat een personage maakt"], answer: 1 }
    ],
    "Tech Geschiedenis & Trivia": [
        // Makkelijk
        { q: "Welk iconisch tech-bedrijf maakt en verkoopt de populaire 'PlayStation' gameconsoles?", options: ["Nintendo", "Microsoft", "Sony", "Sega"], answer: 2 },
        { q: "Wat was een van de állereerste, wereldwijd populaire zoekmachines in de jaren '90, vér voordat we de Google zoekmachine kenden?", options: ["Bing", "AltaVista (of Yahoo!)", "DuckDuckGo", "Ecosia"], answer: 1 },
        // Moeilijk
        { q: "In welk jaar brak er enorme, wereldwijde paniek uit in de nog jonge internetwereld, nadat het internet vrijwel crashte door de verspreiding van de 'Morris Worm' (de allereerste échte computerworm ooit)?", options: ["1970", "1988", "1999", "2005"], answer: 1 },
        { q: "Waar staat de zeer bekende veiligheidsafkorting 'CAPTCHA' (die testjes waarbij je stoplichten of bussen moet aanklikken op een website) officieel voor?", options: ["Computer And Program Test Catching Hackers Automatically", "Completely Automated Public Turing test to tell Computers and Humans Apart (een volautomatische, wiskundige test bedoeld om te garanderen dat de bezoeker van een webpagina echt van vlees en bloed is en geen geautomatiseerde spam-bot)", "Catching All People Trying to Cheat Human Answers", "Er is geen officiële afkorting, het is gewoon een verzonnen woord"], answer: 1 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 11: Zorgt dat al deze 70+ nieuwe pareltjes perfect laden!
for (let category in extraVragenDeel11) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel11[category]);
    } else {
        questionBank[category] = extraVragenDeel11[category]; 
    }
}

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 12 - DE DATABASE DIE DE WERELD OVERNEEMT!
// =====================================================================

const extraVragenDeel12 = {
    "HTML & CSS": [
        // Makkelijk
        { q: "Wat is de functie van de HTML-tag <aside>?", options: ["Het sluit de browser", "Het geeft semantisch aan dat de content zijdelings gerelateerd is aan de hoofdcontent (zoals een zijbalk/sidebar)", "Het maakt de tekst onzichtbaar", "Het is een tag voor advertenties"], answer: 1 },
        { q: "Hoe maak je in CSS een tekst cursief (schuingedrukt)?", options: ["text-style: italic;", "font-style: italic;", "text-decoration: italic;", "font-weight: oblique;"], answer: 1 },
        { q: "Welke HTML-tag gebruik je om een drop-down lijst (keuzemenu) te maken?", options: ["<list>", "<dropdown>", "<select>", "<menu>"], answer: 2 },
        // Moeilijk
        { q: "Wat beschrijft het beruchte 'CSS Box Model' precies?", options: ["De doos waar de server in zit", "Het fundamentele principe dat élk HTML-element een rechthoekig blok is, bestaande uit de Content, Padding, Border, en Margin", "Een CSS framework zoals Bootstrap", "Het opslaan van variabelen in boxen"], answer: 1 },
        { q: "Wat is de uitkomst van 'display: inline-block;' op een HTML element?", options: ["Het wordt onzichtbaar", "Het gedraagt zich deels als 'inline' (staat netjes naast andere tekst), maar accepteert wel breedte en hoogte zoals een 'block' element", "Het breekt de layout", "Het element gaat zweven"], answer: 1 },
        { q: "Wat is het doel van de CSS eenheid 'ch' (Character)?", options: ["Color Hue", "De breedte van het '0' (nul) teken in het actieve lettertype, ideaal om een maximale leesbare regelbreedte (bijv. 60ch) in te stellen", "Character Height", "Centimeter Height"], answer: 1 }
    ],
    "JavaScript": [
        // Makkelijk
        { q: "Welke ingebouwde JavaScript functie gebruik je om het hoogste getal uit een reeks te vinden?", options: ["Math.high(1, 5, 10)", "Math.top(1, 5, 10)", "Math.max(1, 5, 10)", "Number.max(1, 5, 10)"], answer: 2 },
        { q: "Wat is de output van de expressie: 5 == '5' in JavaScript?", options: ["false", "true (want '==' checkt alleen de waarde, niet het datatype)", "undefined", "NaN"], answer: 1 },
        { q: "Welk keyword in JavaScript wordt gebruikt om een loop voortijdig af te breken?", options: ["stop", "exit", "return", "break"], answer: 3 },
        // Moeilijk
        { q: "Wat is in JavaScript het verschil tussen '.forEach()' en '.map()' op een array?", options: ["Geen verschil", "forEach() is sneller", "forEach() voert alleen een actie uit voor elk element en geeft 'undefined' terug; map() voert de actie uit én geeft een compleet NIEUWE array terug met de resultaten", "map() verwijdert elementen"], answer: 2 },
        { q: "Wat is een 'Set' in moderne JavaScript (ES6)?", options: ["Een groep variabelen", "Een object dat een verzameling van unieke waarden opslaat (dubbele waarden worden automatisch genegeerd en verwijderd)", "Een manier om de tijd in te stellen", "Een netwerk request"], answer: 1 },
        { q: "Wat is de State van een 'Promise' op het moment dat de data succesvol is binnengehaald?", options: ["Pending", "Rejected", "Fulfilled (of Resolved)", "Closed"], answer: 2 }
    ],
    "Python": [
        // Makkelijk
        { q: "Wat is in Python de output van 'print(\"Ho\" * 3)'?", options: ["Ho3", "3Ho", "HoHoHo", "Error"], answer: 2 },
        { q: "Met welk keyword voeg je in Python functionaliteit toe als een 'if' statement NIET waar is?", options: ["otherwise", "else", "except", "catch"], answer: 1 },
        { q: "Welk datatype in Python is specifiek bedoeld voor teksten?", options: ["int", "bool", "str (String)", "float"], answer: 2 },
        // Moeilijk
        { q: "Wat doet het keyword '*args' in een Python functie-definitie (bijv. def rekenen(*args):)?", options: ["Het is een wiskundige vermenigvuldiging", "Het stelt de functie in staat om een onbekend, variabel aantal (positionele) argumenten te accepteren, verpakt als een Tuple", "Het blokkeert inkomende argumenten", "Het versleutelt de argumenten"], answer: 1 },
        { q: "Wat is het wezenlijke verschil tussen de methodes 'append()' en 'extend()' bij een Python lijst?", options: ["append() is voor tekst, extend() voor getallen", "append() voegt het object als één geheel toe aan het einde; extend() pakt een iterable (zoals een andere lijst) uit en voegt de losse elementen één voor één toe", "Er is geen verschil", "extend() verwijdert elementen"], answer: 1 },
        { q: "Wat doet de ingebouwde 'str()' functie?", options: ["Het maakt de tekst sterker (bold)", "Het zet een waarde (zoals een getal) om naar een String (tekst) datatype", "Het stript spaties", "Het start een server"], answer: 1 }
    ],
    "Databases": [
        // Makkelijk
        { q: "Als je een tabel 'Klanten' hebt, wat doet het SQL commando 'DROP DATABASE klanten_db;' dan?", options: ["Het verwijdert alleen de klanten", "Het verwijdert direct de gehele database inclusief álle tabellen en data permanent", "Het maakt een backup naar een drop-server", "Het filtert de klanten"], answer: 1 },
        { q: "Wat doet het SQL sleutelwoord 'AS' (zoals in: SELECT naam AS voornaam)?", options: ["Het verwijdert de naam", "Het maakt een tijdelijke 'Alias' (schuilnaam) aan voor de kolom of tabel in de output van je query, voor betere leesbaarheid", "Het selecteert alle namen", "Het beveiligt de kolom"], answer: 1 },
        // Moeilijk
        { q: "Waar staat de veelgebruikte afkorting 'ORM' voor in back-end development (bijv. Entity Framework of Prisma)?", options: ["Online Routing Machine", "Object-Relational Mapping (een techniek/tool waarmee je via je eigen programmeertaal met de database praat door middel van objecten, in plaats van rauwe SQL queries te typen)", "Overloaded Resource Manager", "Optimal Rendering Memory"], answer: 1 },
        { q: "Wat is het fundamentele verschil tussen een 'Clustered Index' en een 'Non-Clustered Index'?", options: ["Geen verschil", "Een Clustered Index bepaalt de fysieke sorteervolgorde van de data op de harde schijf (er kan er maar 1 per tabel zijn); een Non-Clustered Index is een aparte zoekstructuur (er kunnen er meerdere zijn)", "Een Clustered Index is veel trager", "Een Non-Clustered Index is voor NoSQL"], answer: 1 },
        { q: "Wat doet de SQL aggregatiefunctie 'MIN()'?", options: ["Minimaliseert de database grootte", "Berekent het gemiddelde", "Zoekt en retourneert de absolute kleinste (laagste) waarde in een opgegeven kolom", "Verwijdert kleine bestanden"], answer: 2 }
    ],
    "Netwerken": [
        // Makkelijk
        { q: "Waarvoor dient een Modem in een thuisnetwerk?", options: ["Om de muis op te laden", "Het moduleert en demoduleert het analoge signaal van je provider (via de kabel/koper/glasvezel) naar een digitaal signaal dat jouw router en computer begrijpen", "Om virussen te blokkeren", "Om de helderheid van je scherm aan te passen"], answer: 1 },
        { q: "Welk van de volgende is een geldig, traditioneel IPv4 adres?", options: ["192.168.1.25", "192:168:1:25", "www.192.168.nl", "192-168-1-25"], answer: 0 },
        // Moeilijk
        { q: "Wat is de functie van een 'ARP-tabel' (Address Resolution Protocol) in een router of switch?", options: ["Het is een lijst met wachtwoorden", "Het is een cruciale, dynamische tabel in het geheugen die de logische IP-adressen koppelt aan de fysieke hardware MAC-adressen van de apparaten in het lokale netwerk", "Het is een database met domeinnamen", "Het blokkeert verdachte websites"], answer: 1 },
        { q: "Wat is 'QoS' (Quality of Service) in netwerkbeheer?", options: ["Een kwaliteitskeurmerk voor kabels", "Een technologie op routers die bepaald belangrijk netwerkverkeer (zoals VoIP bellen of online gamen) voorrang geeft op minder belangrijk verkeer (zoals een bestand downloaden)", "Een virusscanner", "Een methode om WiFi te beveiligen"], answer: 1 },
        { q: "Op welke netwerkpoort luistert een standaard HTTP webserver die níét beveiligd is met SSL/TLS?", options: ["Poort 443", "Poort 21", "Poort 80", "Poort 25"], answer: 2 }
    ],
    "Hardware & OS": [
        // Makkelijk
        { q: "Welk PC-onderdeel wordt vaak de 'Geluidskaart' of Audio Interface genoemd?", options: ["De voeding", "Het onderdeel dat digitale data omzet in hoorbare analoge signalen voor je koptelefoon en speakers", "De koeler", "De internetkabel"], answer: 1 },
        { q: "Wat bedoelt men in de computerwereld met een 'Randapparaat' (Peripheral)?", options: ["Een CPU", "Een extern apparaat dat je op de computer aansluit (zoals een muis, toetsenbord, webcam of printer) om de functionaliteit uit te breiden", "Een kabel die klem zit", "Een virus"], answer: 1 },
        // Moeilijk
        { q: "Wat was historisch gezien het verschil tussen de 'Northbridge' en de 'Southbridge' op een moederbord?", options: ["De Northbridge was voor AMD, Southbridge voor Intel", "De Northbridge regelde de razendsnelle communicatie tussen CPU, RAM en Videokaart. De Southbridge regelde de tragere I/O apparaten (USB, audio, harde schijven)", "Het waren twee verschillende ventilatoren", "Het waren twee merken voedingen"], answer: 1 },
        { q: "Waar staat de afkorting 'POST' voor als je een computer aanzet?", options: ["Power On Stop Time", "Power-On Self-Test (een razendsnelle diagnose door de BIOS om te checken of CPU, RAM en toetsenbord functioneren voordat het OS start)", "Pre-Operating System Transfer", "Processor Output Signal Test"], answer: 1 },
        { q: "Waarvoor is de kleine, knoopcelbatterij (vaak een CR2032) op je moederbord bedoeld?", options: ["Om de muis van stroom te voorzien", "Om de CMOS chip (die de BIOS instellingen en de hardware kloktijd vasthoudt) van stroom te voorzien, zelfs als de stekker uit het stopcontact is", "Als reserve voor de CPU", "Om de LED lichtjes te laten branden"], answer: 1 }
    ],
    "Cybersecurity": [
        // Makkelijk
        { q: "Wat probeert een cybercrimineel te bereiken met een 'Evil Twin' aanval op een terrasje of luchthaven?", options: ["Hij probeert je laptop fysiek te stelen", "Hij zet een eigen, frauduleus WiFi-netwerk op met exact dezelfde naam als het echte WiFi-netwerk van het café, in de hoop dat jij ermee verbindt en hij je data kan afluisteren", "Hij installeert een virus via een USB-stick", "Hij raadt je wachtwoord"], answer: 1 },
        { q: "Wat is het doel van 'Pentesting' (Penetration Testing)?", options: ["Het testen van nieuwe pennen", "Een bedrijf huurt ethische hackers in om gecontroleerde cyberaanvallen uit te voeren op hun eigen systemen, met als doel veiligheidslekken te vinden en dichten vóórdat echte criminelen dat doen", "Het hacken van banken voor geld", "Het verwijderen van virussen"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Dictionary Attack' in cryptografie?", options: ["Iemand slaan met een woordenboek", "Een brute-force variant waarbij de hacker een gigantische lijst (dictionary) met veelgebruikte woorden, bekende gelekte wachtwoorden en logische variaties daarop automatisch uitprobeert om een hash te kraken", "Een DDoS aanval op een vertaalsite", "Een type firewall"], answer: 1 },
        { q: "Wat is een 'Logic Bomb' in malware?", options: ["Een bug in de hardware", "Een kwaadaardig stukje code dat stiekem slaapt in een netwerk en pas wordt getriggerd (geactiveerd) op het moment dat aan een specifieke voorwaarde is voldaan (bijv. op een bepaalde datum of als een ex-medewerker wordt verwijderd uit de database)", "Een type encryptie", "Een virus dat via de mail komt"], answer: 1 },
        { q: "Wat is 'Steganografie' in de context van databeveiliging?", options: ["Het fysiek beveiligen van harde schijven", "De eeuwenoude techniek om een geheime boodschap, bestand of kwaadaardige code fysiek te verbergen bínnenin een ander, onschuldig ogend dragerbestand (zoals de pixels van een foto of in een audiobestand)", "Een heel streng wachtwoordbeleid", "Een type netwerkaanval"], answer: 1 }
    ],
    "Git & Versiebeheer": [
        // Makkelijk
        { q: "Wat is het lokale Git-commando om exact te zien welke codebestanden je hebt aangepast ten opzichte van de vorige commit?", options: ["git status", "git check", "git files", "git update"], answer: 0 },
        { q: "Als iemand roept: 'Zet de code even op GitHub!', wat bedoelen ze dan?", options: ["Dat je het moet printen", "Dat je jouw lokale code en Git-geschiedenis moet pushen naar de cloudservers van GitHub, zodat het veilig staat opgeslagen en anderen erbij kunnen", "Dat je de code moet verwijderen", "Dat je het moet e-mailen"], answer: 1 },
        // Moeilijk
        { q: "Wat is het belangrijkste verschil tussen een Git 'Clone' en een GitHub 'Fork'?", options: ["Er is geen verschil", "Een Fork kopieert het project naar jouw eigen, onafhankelijke GitHub account zodat je er rechten over hebt; een Clone downloadt de code puur lokaal naar de harde schijf van je PC", "Een Clone wist de geschiedenis", "Een Fork is een premium betaalde feature"], answer: 1 },
        { q: "Waar gebruik je de feature 'git remote add origin [URL]' voor in de terminal?", options: ["Om het internet uit te zetten", "Hiermee koppel je jouw lokale, pas opgezette Git-map aan een externe, lege repository in de cloud (zoals op GitLab of GitHub), zodat je de code er naartoe kunt pushen", "Om virussen te scannen", "Om een branch te verwijderen"], answer: 1 }
    ],
    "Cloud & DevOps": [
        // Makkelijk
        { q: "Wat is het verschil tussen 'IaaS' en 'SaaS' in de cloud?", options: ["Geen verschil", "Bij IaaS (Infrastructure as a Service) huur je kale servers en regel je alles zelf; Bij SaaS (Software as a Service) log je in via de browser op een compleet afgewerkt programma zoals Netflix of Office 365", "IaaS is voor telefoons, SaaS voor pc's", "IaaS is altijd lokaal geïnstalleerd"], answer: 1 },
        // Moeilijk
        { q: "Wat is de functie van een Service Level Agreement (SLA) bij Cloud providers?", options: ["Een handleiding voor de software", "Een juridisch bindend contract tussen de provider en de klant dat snoeiharde, financiële garanties afgeeft over de betrouwbaarheid en minimale Uptime (bijv. 99.99%) van de clouddienst", "Een type firewall instelling", "Een certificaat voor encryptie"], answer: 1 },
        { q: "Wat wordt er bedoeld met 'Autoscaling' in moderne cloud architecturen (AWS/Azure)?", options: ["Het automatisch vergroten van foto's", "Een krachtige dienst die, compleet automatisch en gebaseerd op de actuele belasting (CPU spikes of veel bezoekers), nieuwe virtuele servers opstart (opschaalt) en ze in rustige tijden weer netjes uitschakelt (afschaft) om kosten te besparen", "Het automatisch updaten van software", "Het automatisch hacken van netwerken"], answer: 1 },
        { q: "Wat doet een 'Reverse Proxy' (zoals Nginx of HAProxy)?", options: ["Het is een virus dat je data omkeert", "Het is een server die namens de interne backend-servers inkomende verzoeken (van het internet) aanneemt, filtert, beveiligt met SSL, en vervolgens veilig en gebalanceerd doorstuurt naar de juiste interne applicatie", "Het verlaagt je ping in games", "Het blokkeert alle inkomende e-mails"], answer: 1 }
    ],
    "Algoritmes & Datastructuren": [
        // Makkelijk
        { q: "Wat is een 'Tuple' in programmeertalen zoals Python of C#?", options: ["Een fout in de code", "Een kleine, geordende lijst met waarden die (vaak) niet meer veranderd kan worden (immutable) na het aanmaken, in tegenstelling tot een gewone Array/Lijst", "Een type harde schijf", "Een netwerkkabel"], answer: 1 },
        // Moeilijk
        { q: "Wat is een zogeheten 'Heuristic' (Heuristisch) algoritme?", options: ["Een extreem traag algoritme", "Een praktisch ontworpen algoritme dat niet garandeert dat het de absoluut 100% perfecte en meest optimale oplossing vindt, maar in plaats daarvan zéér snel met een oplossing komt die 'goed genoeg' is voor het doel (vaak gebruikt in AI en complexe routing)", "Een algoritme dat wachtwoorden kraakt", "Een virus dat data vernietigt"], answer: 1 },
        { q: "Wat is het bekende 'Handelsreizigersprobleem' (Traveling Salesman Problem) in informatica?", options: ["Hoe verkoop je meer software", "Een berucht wiskundig optimalisatieprobleem: Wat is de aller-kortste route om een lijst van steden te bezoeken, élke stad precies één keer aan te doen, en te eindigen in de start-stad? (Dit is een 'NP-Hard' probleem dat voor computers exponentieel te zwaar wordt naarmate je steden toevoegt)", "Een database probleem bij webshops", "Een fout in de internetverbinding"], answer: 1 }
    ],
    "Game Development": [
        // Makkelijk
        { q: "Waar staat de veelgebruikte term 'Procedural Generation' voor in games (zoals in Minecraft)?", options: ["Dat spelers zelf het level moeten tekenen", "Het is een techniek waarbij werelden, levels, bomen of textures niet met de hand worden ontworpen door een artiest, maar live en oneindig worden berekend en opgebouwd door een wiskundig algoritme in de code", "Dat is de naam van de grafische engine", "Dat de game elke keer crasht"], answer: 1 },
        // Moeilijk
        { q: "Wat is 'Rasterization' (Rasterisatie) in 3D graphics?", options: ["Het blokkeren van cheaters in multiplayer", "De traditionele, supersnelle renderingtechniek waarbij de 3D-polygonen uit de virtuele wereld platgeslagen worden naar een 2D-vlak en worden omgezet in de losse kleur-pixels die jij op je beeldscherm ziet", "Het is een audio-compressie methode", "Het berekenen van zwaartekracht"], answer: 1 },
        { q: "Wat is het nut van een 'Particle System' in een game engine zoals Unity of Unreal?", options: ["Het is een wiskundig hulpmiddel voor de Physics", "Het is een enorm geoptimaliseerd grafisch systeem dat duizenden piepkleine 2D-plaatjes tegelijk animeert (met zwaartekracht, kleurverloop en levensduur) om chaotische effecten zoals vuur, explosies, rook of regen visueel na te bootsen", "Het genereert de AI van de vijanden", "Het slaat de game op in kleine partikels"], answer: 1 }
    ],
    "Tech Geschiedenis & Trivia": [
        // Makkelijk
        { q: "Wie wordt vaak gezien als de absolute 'vader van de computer' vanwege zijn ontwerp voor de mechanische 'Analytical Engine' in 1837?", options: ["Bill Gates", "Charles Babbage", "Alan Turing", "Steve Jobs"], answer: 1 },
        { q: "Wat is historisch gezien een van de allereerste commercieel succesvolle arcade video-games ooit (uit 1972 door Atari)?", options: ["Tetris", "Super Mario Bros", "Pong", "Pac-Man"], answer: 2 },
        // Moeilijk
        { q: "Wat was de 'Altair 8800' in 1975?", options: ["Een oude ruimteraket", "Het was een van de allereerste commercieel succesvolle microcomputers (personal computers) voor hobbyisten. Je moest hem zelf in elkaar solderen en bedienen met schakelaars in plaats van een toetsenbord", "De eerste mobiele telefoon", "De eerste grafische videokaart"], answer: 1 },
        { q: "In 1988 crashte zo'n 10% van het prille, vroege internet door de 'Morris Worm'. Wat was de ironische bedoeling van de maker, de 23-jarige student Robert Tappan Morris?", options: ["Hij wilde miljarden verdienen", "Hij had helemaal geen kwade bedoelingen; hij schreef het script puur als academisch experiment om te 'meten' hoe groot het internet eigenlijk was, maar een weeffout in zijn code zorgde dat het script computers bleef her-infecteren tot ze vastliepen", "Hij wilde de Amerikaanse overheid hacken", "Hij wilde muziek illegaal downloaden"], answer: 1 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 12: Zorgt dat deze bak met vragen er naadloos bij komt!
for (let category in extraVragenDeel12) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel12[category]);
    } else {
        questionBank[category] = extraVragenDeel12[category]; 
    }
}

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 13 - THE TRIVIA STRIKES BACK!
// =====================================================================

const extraVragenDeel13 = {
    "HTML & CSS": [
        // Makkelijk
        { q: "Wat betekent de HTML tag <ol>?", options: ["Only Links", "Ordered List (Een genummerde lijst met 1, 2, 3...)", "Outer Layer", "Object List"], answer: 1 },
        { q: "Welke HTML tag gebruik je om een lijst-item (zoals een bolletje) te maken binnen een <ul> of <ol>?", options: ["<item>", "<bullet>", "<li> (List Item)", "<list>"], answer: 2 },
        // Moeilijk
        { q: "Wat lost de moderne CSS eenheid 'dvh' (Dynamic Viewport Height) op voor mobiele telefoons?", options: ["Het is een nieuwe kleur", "Het voorkomt dat elementen verspringen doordat het dynamisch rekening houdt met de mobiele adresbalk van de browser die in- en uitklapt", "Het maakt teksten groter", "Het verwijdert de scrollbar"], answer: 1 },
        { q: "Wat doet de eigenschap 'line-height' in CSS?", options: ["Het bepaalt de breedte van een lijn", "Het bepaalt de verticale ruimte (regelafstand) tussen tekstregels, wat de leesbaarheid enorm vergroot", "Het tekent een streep onder de tekst", "Het maakt de tekst onzichtbaar"], answer: 1 }
    ],
    "JavaScript": [
        // Makkelijk
        { q: "Welke functie gebruik je in JavaScript om een getal naar beneden af te ronden?", options: ["Math.down()", "Math.floor()", "Math.round()", "Math.bottom()"], answer: 1 },
        { q: "Wat is de uitkomst van '10 % 3' (Modulo) in JavaScript?", options: ["3.33", "3", "1 (de restwaarde na de deling)", "0"], answer: 2 },
        // Moeilijk
        { q: "Wat is een 'Closure' in JavaScript?", options: ["Een manier om de browser te sluiten", "Een functie die onthoudt in welke 'lexical scope' hij is aangemaakt, waardoor hij zelfs nog bij variabelen uit zijn parent-functie kan als die al lang is afgesloten", "Een fout in een loop", "Het beveiligen van code"], answer: 1 },
        { q: "Wat is het verschil tussen 'Event Bubbling' en 'Event Capturing'?", options: ["Er is geen verschil", "Bubbling beweegt de klik van het kind-element omhoog naar de parent, Capturing vangt de klik juist bovenaan bij de parent en zakt af naar beneden naar het kind", "Bubbling crasht de browser, Capturing niet", "Ze worden gebruikt voor CSS animaties"], answer: 1 }
    ],
    "Python": [
        // Makkelijk
        { q: "Wat is de output van de som '2 ** 3' in Python?", options: ["5", "6", "8 (2 tot de macht 3)", "9"], answer: 2 },
        { q: "Wat is een 'String' in Python?", options: ["Een getal met komma's", "Een fout in de code", "Een reeks van tekst/karakters, omringd door aanhalingstekens", "Een type lijst"], answer: 2 },
        // Moeilijk
        { q: "Wat doet het keyword 'pass' in een Python script?", options: ["Het slaat het bestand op", "Het is een 'null-operatie'; een lege placeholder die simpelweg he-le-maal niets doet, vaak gebruikt om syntax-fouten te voorkomen als je later nog code wilt toevoegen", "Het deelt variabelen met andere bestanden", "Het sluit de applicatie direct af"], answer: 1 },
        { q: "Wat is een 'Decorator' (aangegeven met een @ symbool) in Python?", options: ["Een CSS stijl voor Python", "Een krachtige functie die het gedrag van een ándere functie 'inpakt' en aanpast of uitbreidt, zónder de originele broncode van die functie aan te raken", "Een hack-methode", "Een manier om kleuren toe te voegen aan de terminal"], answer: 1 }
    ],
    "Databases": [
        // Makkelijk
        { q: "Welk SQL commando voegt een compleet nieuwe rij (record) toe aan een tabel?", options: ["ADD ROW", "NEW DATA", "INSERT INTO", "CREATE RECORD"], answer: 2 },
        { q: "Waar staat het concept van 'Data Redundancy' voor in een database?", options: ["Dat de server erg veilig is", "Het onnodig, dubbel opslaan van exact dezelfde gegevens op meerdere plekken, wat verspilling is en tot fouten kan leiden", "Dat de database offline is", "Dat de database heel snel is"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Trigger' in relationele databases?", options: ["Een virus dat de database wist", "Een speciaal stukje opgeslagen code dat compleet automatisch wordt afgeschoten (geactiveerd) zodra er een bepaalde INSERT, UPDATE of DELETE plaatsvindt op een tabel", "Een poort op de router", "Een backup commando"], answer: 1 },
        { q: "Wat is 'Sharding' (Database Sharding)?", options: ["Het versleutelen van data", "Een opschalings-techniek waarbij je een gigantische database horizontaal opsplitst in kleinere, snellere stukken (shards) die je over meerdere fysieke servers verdeelt", "Het comprimeren van bestanden", "Het blokkeren van gebruikers"], answer: 1 }
    ],
    "Netwerken": [
        // Makkelijk
        { q: "Welk beroemd IP-adres verwijst altijd naar je eigen, lokale computer (localhost)?", options: ["192.168.1.1", "127.0.0.1", "8.8.8.8", "0.0.0.0"], answer: 1 },
        { q: "Wat is de functie van een netwerk-kabel (Ethernet / UTP)?", options: ["Stroom leveren aan je monitor", "Computerapparatuur fysiek, bekabeld met elkaar of met een router verbinden voor snel internet", "Geluid opnemen", "Virussen blokkeren"], answer: 1 },
        // Moeilijk
        { q: "In het DHCP proces (waarbij een IP wordt uitgedeeld) spreekt men vaak van 'DORA'. Waar staat dit voor?", options: ["Download, Override, Read, Accept", "Discover, Offer, Request, Acknowledge (De vier stappen tussen de client en de server om een IP-adres te verkrijgen)", "Data, Operator, Range, Area", "Digital Online Router Access"], answer: 1 },
        { q: "Wat is de functie van het 'ICMP' protocol?", options: ["Het is voor e-mails", "Het is een control-protocol dat wordt gebruikt door netwerkapparaten (zoals routers) om foutmeldingen of operationele info te sturen, bijvoorbeeld wanneer de 'Ping' tool wordt gebruikt", "Het versleutelt wachtwoorden", "Het is een type WiFi encryptie"], answer: 1 }
    ],
    "Hardware & OS": [
        // Makkelijk
        { q: "Wat is de functie van een 'Videokaart' (GPU) voor een gamer?", options: ["Het bewaart save-games", "Het berekent bliksemsnel de complexe 3D beelden, schaduwen en kleuren en stuurt deze naar het beeldscherm", "Het verbetert het internet", "Het koelt de computer af"], answer: 1 },
        // Moeilijk
        { q: "Wat geeft de levensduur-rating 'TBW' (Terabytes Written) aan bij de aankoop van een moderne SSD?", options: ["De grootte van de SSD", "De gegarandeerde, absolute maximale hoeveelheid data (in Terabytes) die je naar de flash-chips kunt wegschrijven voordat het geheugen fysiek begint te slijten en defect kan raken", "De snelheid van de SSD", "Het stroomverbruik"], answer: 1 },
        { q: "Wat is een 'Bootloader' (zoals GRUB voor Linux)?", options: ["Een virus dat de PC opstart", "Een heel klein, cruciaal programmaatje dat direct na de BIOS in het geheugen wordt geladen, met als enige taak om het échte zware besturingssysteem in het RAM te laden en op te starten", "Een type SSD", "Een USB-stick"], answer: 1 }
    ],
    "Cybersecurity": [
        // Makkelijk
        { q: "Waarom is het een héél slecht idee om een 'gevonden' USB-stick op de parkeerplaats in je laptop te steken?", options: ["Omdat hij vies is", "Het is een veelgebruikte, fysieke hack-methode. De stick kan onzichtbaar schadelijke malware, een keylogger of ransomware installeren zodra je hem inplugt", "Omdat hij stroom vreet", "Omdat hij altijd leeg is"], answer: 1 },
        // Moeilijk
        { q: "Wat is 'Salting' bij het opslaan van wachtwoorden in een database?", options: ["Het wissen van wachtwoorden", "Een willekeurige, unieke reeks karakters (de 'salt') toevoegen aan een wachtwoord vóórdat het door de wiskundige Hash-functie gaat, om razendsnelle 'Rainbow Table' kraak-aanvallen onmogelijk te maken", "Het blokkeren van het account", "Het gebruik van korte wachtwoorden"], answer: 1 },
        { q: "Wat is een 'Air-Gapped' netwerk of computer?", options: ["Een PC die in de wolken vliegt", "Een systeem dat fysiek en digitaal honderd procent geïsoleerd is van andere computers en het publieke internet, vaak gebruikt in kerncentrales of zwaar beveiligde militaire netwerken", "Een systeem met een kapotte ventilator", "Een draadloos netwerk"], answer: 1 }
    ],
    "Git & Versiebeheer": [
        // Makkelijk
        { q: "Welk commando gebruik je om een exacte, online kopie van een Git project (zoals een game) op je eigen pc te zetten?", options: ["git copy", "git clone", "git download", "git get"], answer: 1 },
        // Moeilijk
        { q: "Wat doet de geavanceerde feature 'git cherry-pick' in versiebeheer?", options: ["Het verwijdert de beste code", "Het stelt je in staat om één specifieke, geïsoleerde commit uit een ándere branch te selecteren en die naadloos toe te passen op je eigen, huidige branch (handig voor een snelle bugfix)", "Het zoekt fouten in de code", "Het merget alle branches in één keer"], answer: 1 },
        { q: "Wat is het doel van het verborgen '.gitkeep' bestandje in sommige mappen?", options: ["Het is een virus", "Omdat Git van nature absoluut geen compleet lege mappen kan inchecken of onthouden, plaatsen developers dit lege bestandje in de map zodat Git de (lege) mappenstructuur tòch pusht naar de server", "Het versleutelt de map", "Het bewaart wachtwoorden"], answer: 1 }
    ],
    "Cloud & DevOps": [
        // Makkelijk
        { q: "Wat doet een fysieke, hardwarematige 'Server' eigenlijk in de kern?", options: ["Het is een speciale muis", "Het is in wezen gewoon een krachtige computer die 24/7 aan staat en verbonden is met een netwerk, puur om bestanden, websites of rekentaken 'te serveren' aan de laptops/telefoons van klanten", "Het slaat offline games op", "Het print documenten"], answer: 1 },
        // Moeilijk
        { q: "Wat is 'Kubernetes' (K8s) in de wondere wereld van cloud infrastructuur?", options: ["Een relationele database", "Een gigantisch, open-source 'Orchestration' platform (bedacht door Google) dat volautomatisch de inzet, netwerkconfiguratie, schaalbaarheid en het herstel van duizenden Docker-containers over enorme clusters van servers beheert", "Een CSS framework", "Een programmeertaal"], answer: 1 },
        { q: "Wat betekent het principe van 'Immutable Infrastructure'?", options: ["Dat de server van ijzer is", "Een cloud-benadering waarbij servers en virtuele machines na het opstarten nóóit meer worden aangepast of geüpdatet. Als er een update nodig is, wordt de oude server gewoon compleet vernietigd en vervangen door een gloednieuw geconfigureerde server", "Dat het internet nooit wegvalt", "Dat wachtwoorden nooit verlopen"], answer: 1 }
    ],
    "Algoritmes & Datastructuren": [
        // Makkelijk
        { q: "Wat is de definitie van een 'Array' in vrijwel elke programmeertaal?", options: ["Een error-bericht", "Een lijst of aaneengesloten reeks waarin je meerdere waardes, namen of getallen overzichtelijk achter elkaar kunt opslaan onder één variabelenaam", "Een functie om te rekenen", "Een type scherm"], answer: 1 },
        // Moeilijk
        { q: "Wat is 'Dynamic Programming' in computerwetenschappen?", options: ["Heel snel typen in het donker", "Een krachtige algoritme-techniek waarbij je een gigantisch complex probleem oplost door het op te breken in kleinere deelproblemen, en de resultaten daarvan op te slaan in het geheugen ('Memoization') zodat je nooit twee keer hetzelfde berekent", "Een dynamische website maken met HTML", "Het randomiseren van databases"], answer: 1 }
    ],
    "Game Development": [
        // Makkelijk
        { q: "Wat is een 'Sprite' in 2D game development (zoals in Stardew Valley of Mario)?", options: ["Een groen drankje", "Een plat, 2D grafisch afbeeldingkje of bitmap dat wordt gebruikt om de personages, muren of animaties op het scherm te tekenen", "Een foutmelding in het level", "De muziek van het spel"], answer: 1 },
        // Moeilijk
        { q: "Waarom gebruiken 3D game engines wiskundige 'Quaternions' in plaats van normale assen (Euler Angles) voor het berekenen van rotaties?", options: ["Omdat ze er stoer uitzien", "Om het fatale 'Gimbal Lock' probleem te voorkomen (een mathematische fout waarbij assen overlappen en je de mogelijkheid tot vrije rotatie in 3D verliest), waardoor ruimteschepen en camera's vlekkeloos in alle richtingen kunnen draaien", "Omdat het minder code kost", "Om zwaartekracht te berekenen"], answer: 1 }
    ],
    "Tech Geschiedenis & Trivia": [
        // Makkelijk
        { q: "Wie was de legendarische, steenrijke oprichter van Microsoft die in de jaren '90 een gigantisch monopolie op de pc-markt had?", options: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Tim Cook"], answer: 2 },
        // Moeilijk
        { q: "Wat was de immense paniek rondom de beruchte 'Y2K bug' (Millenniumbug) in het jaar 1999?", options: ["Dat het internet verboden zou worden", "De gigantische en peperdure angst dat wereldwijde computers en banken op 1 januari 2000 massaal zouden crashen, simpelweg omdat jaartallen in oude code destijds werden opgeslagen als slechts twéé cijfers (99 -> 00, wat computers als het jaar 1900 zouden interpreteren)", "Dat alle beeldschermen zouden ontploffen", "Dat alle virussen tegelijk zouden activeren"], answer: 1 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 13: Nog een container aan vragen je database in!
for (let category in extraVragenDeel13) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel13[category]);
    } else {
        questionBank[category] = extraVragenDeel13[category]; 
    }
}

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 14 - DE ONUITPUTTELIJKE BRON!
// =====================================================================

const extraVragenDeel14 = {
    "HTML & CSS": [
        // Makkelijk
        { q: "Wat doet de HTML-tag <iframe>?", options: ["Het is een frame voor een afbeelding", "Hiermee laad je een complete andere webpagina (zoals een YouTube video) binnen in je eigen webpagina", "Het tekent een rand om je tekst", "Het beveiligt de website"], answer: 1 },
        { q: "Met welke CSS-eigenschap maak je de tekst dikgedrukt?", options: ["font-weight", "text-thickness", "font-bold", "text-size"], answer: 0 },
        // Moeilijk
        { q: "Wat is het fundamentele verschil tussen 'opacity: 0;' en 'visibility: hidden;' in CSS?", options: ["Geen verschil", "opacity:0 verwijdert het element, visibility:hidden laat het staan", "Beide maken het element onzichtbaar, maar bij opacity: 0 kan je er nog steeds op klikken (het is alleen transparant), bij visibility: hidden kan je er niet meer op klikken", "visibility: hidden is alleen voor tekst"], answer: 2 },
        { q: "Wat doet de geavanceerde CSS eigenschap 'grid-template-areas'?", options: ["Het vult het scherm met willekeurige blokken", "Hiermee kun je een visuele, op tekst gebaseerde blauwdruk (zoals 'header header' 'sidebar content') maken om elementen makkelijk en leesbaar in een Grid te plaatsen", "Het berekent de oppervlakte van je beeldscherm", "Het verwijdert het grid systeem"], answer: 1 }
    ],
    "JavaScript": [
        // Makkelijk
        { q: "Welke ingebouwde functie gebruik je om een willekeurig getal te genereren in JavaScript?", options: ["Math.random()", "Number.random()", "Get.random()", "Random.math()"], answer: 0 },
        { q: "Hoe haal je de huidige datum en tijd op in JavaScript?", options: ["new Date()", "get.Time()", "Time.now()", "Date.today()"], answer: 0 },
        // Moeilijk
        { q: "Wat is het verschil tussen de array methodes '.slice()' en '.splice()'?", options: ["Er is geen verschil", "slice() past de originele array aan, splice() maakt een kopie", "slice() geeft een ongewijzigde kopie (een stukje) van de array terug; splice() past de originele array écht aan door elementen te verwijderen of toe te voegen", "splice() is alleen voor strings"], answer: 2 },
        { q: "Wat is een 'Microtask' in de JavaScript Event Loop (zoals een opgeloste Promise)?", options: ["Een hele snelle for-loop", "Een taak die absolute voorrang krijgt en direct ná de huidige functie wordt uitgevoerd, nog vóórdat eventuele 'Macrotasks' (zoals setTimeout) aan de beurt zijn", "Een fout in het geheugen", "Een afgebroken netwerkverzoek"], answer: 1 }
    ],
    "Python": [
        // Makkelijk
        { q: "Met welk symbool kan je twee verschillende lijstjes (lists) simpelweg aan elkaar vastplakken in Python?", options: ["*", "-", "+", "/"], answer: 2 },
        { q: "Wat betekent het woord 'True' in Python?", options: ["Het is een leeg object", "Een Boolean waarde die 'Waar' of 'Klopt' betekent", "Een manier om tekst in te typen", "Een foutmelding"], answer: 1 },
        // Moeilijk
        { q: "Waarom is het in Python een héél slecht idee om een lege lijst (bijv. `lijst=[]`) als standaard default-argument in een functie te gebruiken?", options: ["Omdat Python geen lijsten snapt", "Omdat default argumenten maar één keer (bij het inladen) worden geëvalueerd. De lijst wordt daardoor 'mutable' en gedeeld over élke keer dat je de functie aanroept, wat leidt tot stapelende, vreemde data", "Omdat de lijst onzichtbaar wordt", "Omdat het de server crasht"], answer: 1 },
        { q: "Wat is de speciale '__new__' methode in een Python klasse?", options: ["Het verwijdert de klasse", "De methode die daadwerkelijk verantwoordelijk is voor het fysiek creëren (alloceren in geheugen) van een nieuw object, en wordt aangeroepen vóórdat '__init__' de variabelen mag instellen", "Het genereert een nieuw wachtwoord", "Het opent een nieuw bestand"], answer: 1 }
    ],
    "Databases": [
        // Makkelijk
        { q: "Welk SQL commando pas je toe als je de gegevens van je klanten wilt wijzigen in de database?", options: ["CHANGE", "MODIFY", "UPDATE", "REPLACE"], answer: 2 },
        // Moeilijk
        { q: "Wat wordt bedoeld met een 'Dirty Read' in database transacties?", options: ["Een database vol met spam", "Een situatie waarbij een gebruiker of query een stuk data leest dat zojuist is aangepast door een andere, nog niet voltooide (ongecommitte) transactie. Als die transactie wordt teruggedraaid, heeft de gebruiker 'spookdata' gelezen", "Een hacker die je data leest", "Een fout in het RAM geheugen"], answer: 1 },
        { q: "Wat is de uitkomst van de SQL functie 'COALESCE(waarde1, waarde2, waarde3)'?", options: ["Het telt ze bij elkaar op", "Het retourneert simpelweg de allereerste waarde uit de lijst die NIET 'NULL' (leeg) is", "Het combineert de teksten aan elkaar", "Het verwijdert alle dubbele waardes"], answer: 1 }
    ],
    "Netwerken": [
        // Makkelijk
        { q: "Waarvoor gebruik je een USB-C kabel?", options: ["Alleen om te internetten", "Om moderne apparaten, zoals telefoons of laptops, razendsnel op te laden en/of om data met hoge snelheid te verzenden", "Alleen voor geluid", "Om de muis draadloos te maken"], answer: 1 },
        // Moeilijk
        { q: "Welk beroemd en uiterst belangrijk protocol is in de kern verantwoordelijk voor het efficiënt bepalen van de snelste routes tússen gigantische internetproviders (Autonomous Systems) wereldwijd?", options: ["HTTP", "BGP (Border Gateway Protocol)", "DNS", "FTP"], answer: 1 },
        { q: "Wat betekent het IPv6 adres '::1' in de netwerkwereld?", options: ["De allereerste server op het internet", "Het is de IPv6 variant van 'localhost' (loopback adres), oftewel: je eigen computer", "Het is een adres in Japan", "Het is een ongeldig adres"], answer: 1 }
    ],
    "Hardware & OS": [
        // Makkelijk
        { q: "Wat is het beeldscherm (Monitor) in computertermen?", options: ["Een Invoerapparaat (Input)", "Een Opslagmedium", "Een Uitvoerapparaat (Output) dat de berekende beelden van de videokaart aan jou laat zien", "Een Netwerkapparaat"], answer: 2 },
        // Moeilijk
        { q: "Wat is 'CPU Pipelining' in moderne processoren?", options: ["Een vloeistofkoeler", "Een zeer efficiënte techniek waarbij de CPU het uitvoeren van instructies opdeelt in fases (zoals Fetch, Decode, Execute). Terwijl één instructie wordt uitgevoerd, wordt de volgende alvast klaargezet, net als in een fabriekslopende band", "Het verbinden van meerdere CPU's", "Het blokkeren van instructies"], answer: 1 },
        { q: "Wat gebeurt er bij een zogeheten 'Page Fault' in het geheugenbeheer van een besturingssysteem?", options: ["Het scherm wordt blauw (BSOD)", "De CPU probeert een stukje data te lezen dat op dat moment níét in het snelle RAM zit, waardoor het OS het razendsnel vanaf de trage harde schijf (pagefile/swap) moet ophalen", "De website kan niet worden geladen (404)", "Het RAM geheugen is fysiek stuk"], answer: 1 }
    ],
    "Cybersecurity": [
        // Makkelijk
        { q: "Hoe vaak moet je een goede en veilige back-up maken van je allerbelangrijkste bestanden?", options: ["Eens per jaar", "Regelmatig (of automatisch elke dag), zodat je alles terug kunt halen als je computer crasht of wordt gehackt met ransomware", "Nooit, dat is ouderwets", "Alleen als de computer kapot klinkt"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Pass-the-Hash' aanval?", options: ["Een manier om met hackers te praten op forums", "Een hack-techniek waarbij een aanvaller niet het daadwerkelijke, leesbare wachtwoord hoeft te kraken, maar simpelweg direct inlogt door de opgeslagen en gestolen 'Hash' van het wachtwoord naar de server te sturen", "Het vernietigen van de harde schijf", "Het versleutelen van e-mails"], answer: 1 },
        { q: "Wat lost het wiskundige 'Diffie-Hellman' protocol op in de cryptografie?", options: ["Het comprimeert bestanden", "Het probleem van het veilig delen van sleutels: het zorgt ervoor dat twee partijen via een openbaar (onveilig) netwerk samen een geheime encryptie-sleutel kunnen genereren, zonder dat een meeluisterende hacker de sleutel kan afkijken", "Het voorkomt DDoS aanvallen", "Het beveiligt de hardware in servers"], answer: 1 }
    ],
    "Git & Versiebeheer": [
        // Makkelijk
        { q: "Met welk commando voeg je in Git álle gewijzigde bestanden in één keer toe aan je staging area?", options: ["git add all", "git stage *", "git add .", "git save"], answer: 2 },
        // Moeilijk
        { q: "Wat is de functie van het krachtige commando 'git reflog'?", options: ["Het wist alle logs", "Het is je ultieme reddingsboei: het toont een verborgen lokaal logboek van letterlijk álle acties en HEAD-wijzigingen die je hebt gedaan, waardoor je zelfs verwijderde commits of compleet verpeste rebases nog kunt terughalen", "Het reset de branch naar de hoofdserver", "Het verwijdert foute code"], answer: 1 },
        { q: "Wat is onder de motorkap van Git een zogenaamd 'Blob' (Binary Large Object) object?", options: ["Een bug in de code", "De pure, ruwe bestandsinhoud (bijv. de tekst in je script) die Git heeft opgeslagen en gecomprimeerd. De bestandsnaam zélf wordt niet in de blob, maar in een apart 'Tree' object bewaard", "Een virus", "Een type wachtwoord"], answer: 1 }
    ],
    "Cloud & DevOps": [
        // Makkelijk
        { q: "Waar gebruik je een online dienst als 'Google Drive' of 'Dropbox' voor?", options: ["Om websites te bouwen", "Als een makkelijke 'Cloud' opslag om je persoonlijke bestanden, foto's en documenten online en veilig op te slaan, zodat je er overal bij kunt", "Om virussen te verwijderen", "Om computerspellen te programmeren"], answer: 1 },
        // Moeilijk
        { q: "Wat is het levensgevaarlijke '.tfstate' bestand in Terraform (Infrastructure as Code)?", options: ["Het is de algemene handleiding", "Het essentiële 'State' bestand waarin Terraform de exacte huidige staat van al je cloud-resources opslaat. Dit bestand bevat vaak óók onversleutelde wachtwoorden en geheimen, en moet dus extreem veilig opgeslagen worden", "Het is een bug", "Het formatteert de cloud"], answer: 1 },
        { q: "Wat is het grote verschil tussen 'Docker Swarm' en 'Kubernetes' (K8s)?", options: ["Docker is voor pc's, K8s is voor Mac", "Beide zijn orchestratie-tools voor containers. Docker Swarm is echter ingebouwd in Docker, simpeler en lichter, terwijl Kubernetes (oorspronkelijk Google) onmetelijk veel groter, complexer en wereldwijd dé absolute enterprise-standaard is", "Geen verschil, het is hetzelfde programma", "K8s is een programmeertaal"], answer: 1 }
    ],
    "Algoritmes & Datastructuren": [
        // Makkelijk
        { q: "Wat bedoelt men als een algoritme of programma in een 'Infinite Loop' (oneindige lus) vastzit?", options: ["Het programma is super snel", "Door een logic-fout stopt de code nooit meer met herhalen van een taak, waardoor het programma uiteindelijk bevriest of de computer zwaar overbelast raakt", "Het scherm draait rondjes", "De database is vol"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Hash Function' in datastructuren en cryptografie?", options: ["Een functie die bestanden comprimeert", "Een wiskundig algoritme dat input-data van een willekeurige lengte (zoals een zin of heel bestand) omzet in een willekeurige, maar altijd vaste-lengte reeks letters en getallen (de hash)", "Een manier om kleuren te berekenen", "Het versleutelen van hardware"], answer: 1 }
    ],
    "Game Development": [
        // Makkelijk
        { q: "Waarvoor dient 'Multiplayer' in games?", options: ["Dat je meerdere controllers aan kunt sluiten", "Dat je de mogelijkheid hebt om via het internet of een lokaal netwerk mét of tégen andere echte mensen (spelers) in dezelfde virtuele wereld te spelen", "Dat je meerdere levens hebt", "Dat de game duurder is"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'AABB' (Axis-Aligned Bounding Box) in collision detection voor games?", options: ["Een fysieke doos voor CD's", "Een zeer snelle en reken-efficiënte methode voor botsing-detectie: een onzichtbare, niet-roterende rechthoek rondom een object waarvan de randen altijd perfect gelijk lopen met de X, Y en Z assen van de wereld", "Een geluidsbestand voor wapens", "Het inladen van de wereld"], answer: 1 },
        { q: "Wat is het doel van een 'Normal Map' of 'Bump Map' op een 3D model?", options: ["Het plat maken van een model", "Het is een speciale texture (vaak paars/blauw) die de illusie van piepkleine 3D-details (zoals putjes en rimpels) nabootst en laat reageren op lichtinval, zónder dat de videokaart miljoenen zware, echte polygonen extra hoeft te berekenen", "Het regelen van de AI zwaartekracht", "Het creëren van water"], answer: 1 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 14: Voeg alle nieuwe parels toe aan de bestaande database!
for (let category in extraVragenDeel14) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel14[category]);
    } else {
        questionBank[category] = extraVragenDeel14[category]; 
    }
}

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 15 - HET HOUDT NIET OP, NIET VANZELF!
// =====================================================================

const extraVragenDeel15 = {
    "HTML & CSS": [
        // Makkelijk
        { q: "Wat doet de HTML-tag <u>?", options: ["Het maakt een knop", "Het onderstreept de tekst (Underline)", "Het maakt de tekst blauw", "Het voegt een video in"], answer: 1 },
        { q: "Wat is de functie van de CSS eigenschap 'margin'?", options: ["Het verandert de tekstkleur", "Het voegt onzichtbare witruimte (ademruimte) toe aan de BÚÍTEnkant van een element", "Het maakt de randen dikker", "Het centreert de tekst"], answer: 1 },
        // Moeilijk
        { q: "Wat doet de CSS declaratie 'box-sizing: border-box;' precies?", options: ["Het tekent een 3D box", "Het zorgt ervoor dat de padding en de border wiskundig worden méégerekend in de totale breedte (width) van een element, wat layouts veel makkelijker maakt", "Het verwijdert alle randen", "Het maakt het element rond"], answer: 1 },
        { q: "Welke CSS pseudo-class selecteert het állereerste kind-element binnen een container?", options: [":first-child", ":number-one", ":start", ":first-element"], answer: 0 }
    ],
    "JavaScript": [
        // Makkelijk
        { q: "Met welke simpele functie kun je in JavaScript een tekst (zoals '10') omzetten naar een echt kommagetal?", options: ["parseText()", "parseFloat()", "getNumber()", "Math.float()"], answer: 1 },
        { q: "Wat betekent de uitkomst 'NaN' in JavaScript?", options: ["New and Null", "Not a Network", "Not a Number (Geen geldig getal)", "Nothing available Now"], answer: 2 },
        // Moeilijk
        { q: "Wat betekent het unieke concept 'Hoisting' in JavaScript?", options: ["Het hijsen van bestanden naar de server", "Het gedrag waarbij JavaScript declaraties (zoals 'var' of functie-definities) onzichtbaar naar de absolute top van hun scope verplaatst vóórdat de code wordt uitgevoerd", "Een manier om HTML te laden", "Een foutmelding bij traag internet"], answer: 1 },
        { q: "Wat is de exacte uitkomst van de expressie: typeof [] (het opvragen van het type van een lege array)?", options: ["array", "list", "object", "undefined"], answer: 2 } // Een beroemde JS 'quirk'
    ],
    "Python": [
        // Makkelijk
        { q: "Hoe bereken je in Python '5 in het kwadraat' (5 tot de macht 2)?", options: ["5 ^ 2", "5 ** 2", "5 * 5", "Math.square(5)"], answer: 1 },
        { q: "Wat is de output van de code: print(type(5))?", options: ["<class 'string'>", "<class 'int'>", "<class 'float'>", "<class 'number'>"], answer: 1 },
        // Moeilijk
        { q: "Wat is een Python 'Set' precies?", options: ["Een verzameling functies", "Een ongeordende collectie van uitsluitend unieke elementen (dubbele waardes worden automatisch genegeerd en verwijderd)", "Een vaste lijst die niet meer mag veranderen", "Een groep variabelen"], answer: 1 },
        { q: "Waarvoor dient de '__init__' methode in Object Georiënteerd Python?", options: ["Om het script af te sluiten", "Het is de 'Constructor': een speciale methode die volautomatisch wordt aangeroepen zodra er een nieuw object van die klasse wordt aangemaakt, vaak om variabelen in te stellen", "Om verbinding te maken met de cloud", "Om het RAM geheugen te wissen"], answer: 1 }
    ],
    "Databases": [
        // Makkelijk
        { q: "Wat doet de SQL functie COUNT()?", options: ["Het telt het aantal tabellen", "Het telt het aantal rijen (records) dat voldoet aan je zoekopdracht", "Het berekent de bestandsgrootte", "Het zoekt de hoogste waarde"], answer: 1 },
        { q: "Wat is een 'Primary Key' in een database?", options: ["Het admin wachtwoord", "Een uniek veld (bijv. ID of Klantnummer) dat élke specifieke rij in de tabel uniek identificeert", "De belangrijkste tabel", "Een geheime sleutel"], answer: 1 },
        // Moeilijk
        { q: "Wat doet een SQL 'INNER JOIN'?", options: ["Het voegt twee tabellen samen in de cloud", "Het combineert rijen uit twee verschillende tabellen, maar retourneert uitsluitend de rijen waarbij er in béíde tabellen een overeenkomende match (bijv. KlantID) is gevonden", "Het verwijdert de buitenste tabellen", "Het maakt een back-up van alle data"], answer: 1 },
        { q: "Wat is het voornaamste conceptuele verschil tussen een relationele (SQL) en een NoSQL database (zoals MongoDB)?", options: ["NoSQL kost altijd geld", "SQL gebruikt strikte, vaste tabellen met kolommen; NoSQL is veel flexibeler en slaat data vaak op als flexibele documenten (JSON/BSON) zonder een strak vooraf bedacht schema", "SQL is sneller", "NoSQL is alleen voor tekst"], answer: 1 }
    ],
    "Netwerken": [
        // Makkelijk
        { q: "Wat bedoelt een netwerkbeheerder met de 'Bandbreedte' van een verbinding?", options: ["De fysieke breedte van de netwerkkabel", "De dikte van de router", "De maximale hoeveelheid data die per seconde (bijv. in Megabits) over die verbinding gepompt kan worden", "De snelheid van de harde schijf"], answer: 2 },
        { q: "Wat doet de functie 'Ping' als je problemen hebt met internet?", options: ["Het belt de provider", "Het stuurt een klein datapakketje naar een IP-adres en meet exact in milliseconden de reactietijd (latency) en of de server überhaupt antwoordt", "Het wist de cookies", "Het versnelt de verbinding"], answer: 1 },
        // Moeilijk
        { q: "Wat doet NAT (Network Address Translation) in jouw thuisrouter?", options: ["Het vertaalt domeinnamen", "Het vertaalt de vele private, lokale IP-adressen in jouw huis naar dat ene, enkele publieke IP-adres dat je van je provider hebt gekregen, zodat je met meerdere apparaten het internet op kunt", "Het blokkeert virussen", "Het beveiligt de WiFi"], answer: 1 },
        { q: "Hoeveel theoretische abstracte lagen heeft het beroemde OSI-netwerkmodel?", options: ["3", "5", "7", "9"], answer: 2 }
    ],
    "Hardware & OS": [
        // Makkelijk
        { q: "Wat is de functie van het Moederbord (Motherboard)?", options: ["Stroom opwekken", "Het fungeert als het gigantische centrale zenuwstelsel: het is de hoofdprintplaat waar álle onderdelen (CPU, RAM, GPU) op worden aangesloten zodat ze kunnen communiceren", "Beelden renderen", "Virussen blokkeren"], answer: 1 },
        { q: "Wat wordt bedoeld met de 'Heatsink' van een computer?", options: ["De voeding", "Een speciaal blok van warmtegeleidend metaal (vaak aluminium/koper) met vele 'vinnen' dat de hitte wegzuigt van de hete processor zodat de ventilator het kan wegblazen", "Een waterdichte behuizing", "Een type SSD"], answer: 1 },
        // Moeilijk
        { q: "Wat is 'Overklokken' (Overclocking) van een processor of videokaart?", options: ["De klok in Windows aanpassen", "Een hardwarecomponent handmatig forceren om op een hogere frequentie of snelheid te draaien dan de fabrikant officieel garandeert, voor gratis extra prestaties (maar met risico op hitte en crashes)", "Het batterijverbruik verminderen", "Het uitschakelen van kernen"], answer: 1 },
        { q: "Wat is 'DMA' (Direct Memory Access)?", options: ["Een type netwerkkabel", "Een hardwarematige feature waardoor bepaalde componenten (zoals een opslagschijf) razendsnel data direct van en naar het RAM-geheugen kunnen sturen, zónder de CPU te belasten", "Een fout in het RAM", "Het wissen van het geheugen"], answer: 1 }
    ],
    "Cybersecurity": [
        // Makkelijk
        { q: "Wat is een 'Firewall' op een computer of in een netwerk?", options: ["Een fysieke brandblusser in de serverkast", "Een beveiligingssysteem dat als een douane fungeert: het controleert en blokkeert (of accepteert) inkomend en uitgaand netwerkverkeer op basis van strenge regels", "Een virus dat data vernietigt", "Een snelle internetkabel"], answer: 1 },
        { q: "Wat bedoelen we met 'Social Engineering' in de hack-wereld?", options: ["Mensen pesten op Facebook", "Niet de computers hacken, maar de 'mens' psychologisch manipuleren of misleiden (bijv. zich voordoen als de baas) om zo geheime informatie of toegang te krijgen", "Een netwerk van hackers", "Een type firewall"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Zero-Day' Vulnerability (Kwetsbaarheid)?", options: ["Een lek dat alleen om 00:00 uur werkt", "Een uiterst gevaarlijke beveiligingsfout in software die al wél bij hackers bekend is (en actief misbruikt wordt), maar nog volkomen onbekend is bij de softwaremaker, waardoor er nog 0 dagen een patch/oplossing voor bestaat", "Een virus in de hardware", "Een legaal testprogramma"], answer: 1 },
        { q: "Wat is het basisconcept van Asymmetrische Encryptie (zoals RSA)?", options: ["Het is super snel", "Je gebruikt wiskundig twee gekoppelde sleutels: een 'Public Key' die iedereen mag weten om bestanden vóór jou te versleutelen, en een strikt geheime 'Private Key' die alleen jij bezit om het weer te ontsleutelen", "Het gebruikt dezelfde sleutel voor inpakken en uitpakken", "Het is niet te hacken"], answer: 1 }
    ],
    "Git & Versiebeheer": [
        // Makkelijk
        { q: "Wat is het wezenlijke verschil tussen Git en GitHub?", options: ["Geen verschil", "Git is een programmeertaal, GitHub is een browser", "Git is het softwareprogramma (de tool) die lokaal op je pc het versiebeheer regelt; GitHub is een commercieel online cloudplatform (de website) waar je je Git-code kunt opslaan en delen", "GitHub is gratis, Git is betaald"], answer: 2 },
        { q: "Wat doet de status 'Modified' in Git?", options: ["Het bestand is verwijderd", "Het betekent dat je een bestaand bestand hebt aangepast in je editor, maar je hebt deze wijziging nog niet opgeslagen of klaargezet in Git", "Het bestand is gedeeld met het team", "Het bestand is gecrasht"], answer: 1 },
        // Moeilijk
        { q: "Wat is de functie van het complexe commando 'git rebase'?", options: ["Het verwijdert de repository", "Het herschrijft de commit-historie door jouw lokale branch op te pakken en deze als het ware nétjes 'bovenop' het allerlaatste puntje van de main branch te plaatsen, waardoor je één strakke, rechte tijdlijn houdt (zonder lelijke merge-commits)", "Het pusht de code naar de server", "Het downloadt andermans code"], answer: 1 },
        { q: "Wat doet het commando 'git merge'?", options: ["Het verwijdert de master branch", "Het voegt de historie en de code-wijzigingen van de ene branch (bijv. een feature) netjes samen met je huidige actieve branch, vaak resulterend in een 'merge commit'", "Het wist alle foute code", "Het sluit de terminal"], answer: 1 }
    ],
    "Cloud & DevOps": [
        // Makkelijk
        { q: "Wat is 'Uptime' bij een clouddienst of webserver?", options: ["De tijd dat medewerkers werken", "Het belangrijke percentage of de tijd (bijv. 99,9%) dat de server of website succesvol in de lucht en online bereikbaar is voor gebruikers zonder te crashen", "De downloadsnelheid", "De leeftijd van de hardware"], answer: 1 },
        { q: "Wat is een 'Load Balancer' in het datacenter?", options: ["Een fysieke weegschaal", "Een slim apparaat of service dat als een soort 'verkeersregelaar' al het inkomende web-verkeer netjes en gelijkmatig verdeelt over meerdere achterliggende servers, om overbelasting te voorkomen", "Een back-up schijf", "Een powerbank"], answer: 1 },
        // Moeilijk
        { q: "Wat wordt bedoeld met de DevOps term 'Infrastructure as Code' (IaC)?", options: ["Servers bouwen in een game", "Het beheer en configureren van complete cloud-netwerken en servers door middel van strakke scripts en code-bestanden (zoals Terraform), in plaats van handmatig rond te klikken in een online beheerpaneel", "Een manier om HTML te typen", "Het versleutelen van hardware"], answer: 1 },
        { q: "Waarvoor dient het bekende open-source platform 'Docker'?", options: ["Om video's te renderen", "Om applicaties plus letterlijk álle benodigde besturings-bibliotheken en instellingen te verpakken in lichte, geïsoleerde 'Containers', zodat de app werkelijk óveral (bijv. Linux of Windows) exact hetzelfde draait", "Om databases te kraken", "Om te chatten in het team"], answer: 1 }
    ],
    "Game Development": [
        // Makkelijk
        { q: "Waar staat de afkorting 'NPC' voor in een game?", options: ["New Player Character", "Non-Player Character (Een personage of wezen in de gamewereld dat volledig door de computer wordt bestuurd, vaak gebruikt om missies of info te geven)", "Network Protocol Code", "Null Pointer Crash"], answer: 1 },
        { q: "Wat is het verschil tussen een '2D' en een '3D' game?", options: ["2D is met geluid, 3D is zonder geluid", "In een 2D game (zoals klassieke Mario) is de wereld en het bewegen puur plat, zonder diepte. In een 3D game kun je vrij bewegen in de breedte, hoogte én diepte (een hele wereld)", "2D is altijd offline, 3D is online", "Er is geen verschil"], answer: 1 },
        // Moeilijk
        { q: "Wat doet een 'Collider' component in een 3D Game Engine (zoals Unity of Unreal)?", options: ["Het laat dingen ontploffen", "Het vormt een (vaak onzichtbaar) wiskundig jasje, schild of doosje om een game-object heen. De Physics Engine gebruikt alléén dit schildje om te meten en te voelen of twee objecten elkaar fysiek aanraken of overlappen", "Het slaat de score op", "Het laadt textures in"], answer: 1 },
        { q: "Waarom is de wiskundige 'Delta Time' (Time.deltaTime) absoluut essentieel bij het programmeren van beweging in een game?", options: ["Om het spel mooier te maken", "Omdat game-loops op élke computer een andere snelheid (FPS) hebben. Door beweging te vermenigvuldigen met de 'Delta Time' (de fractie van een seconde sinds de vorige frame), zorg je dat een auto op een trage én op een snelle pc in 'echte' seconden exact even hard rijdt", "Om de game te beveiligen", "Om cheaters te bannen"], answer: 1 }
    ],
    "Tech Geschiedenis & Trivia": [
        // Makkelijk
        { q: "Wie heeft het Linux-besturingssysteem uitgevonden als een kleine hobby-kernel in 1991?", options: ["Bill Gates", "Linus Torvalds", "Steve Jobs", "Mark Zuckerberg"], answer: 1 },
        { q: "Wat is wereldwijd het absolute, onbetwiste meest gebruikte besturingssysteem op mobiele telefoons?", options: ["Apple iOS", "Windows Mobile", "Android", "Symbian"], answer: 2 },
        // Moeilijk
        { q: "Wat was het historische en wereldveranderende ARPANET (eind jaren 60)?", options: ["De eerste supermarkt", "Een experimenteel militair/academisch computernetwerk gefinancierd door de Amerikaanse overheid, dat werkte op basis van 'packet switching' en geldt als de absolute directe, technische voorloper van ons huidige Internet", "De allereerste draadloze telefoon", "Een satelliet"], answer: 1 },
        { q: "Welke invloedrijke vrouw wordt door historici algemeen beschouwd als de allereerste computerprogrammeur ter wereld?", options: ["Grace Hopper", "Ada Lovelace (ze schreef in 1843 het allereerste gepubliceerde algoritme voor de mechanische computer van Babbage)", "Margaret Hamilton", "Marie Curie"], answer: 1 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 11: Zorgt dat deze nieuwe lading moeiteloos aanhaakt!
for (let category in extraVragenDeel15) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel15[category]);
    } else {
        questionBank[category] = extraVragenDeel15[category]; 
    }
}

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 16 - THE DATABASE AWAKENS!
// =====================================================================

const extraVragenDeel16 = {
    "HTML & CSS": [
        // Makkelijk
        { q: "In welk HTML-element plaats je de zichtbare inhoud van je website?", options: ["<head>", "<title>", "<body>", "<footer>"], answer: 2 },
        { q: "Wat is het juiste HTML-attribuut om een link (URL) op te geven in de <a> tag?", options: ["src", "href", "link", "target"], answer: 1 },
        // Moeilijk
        { q: "Hoe bereken je de uiteindelijke 'Specificity' (prioriteit) van de CSS-selector '#header .nav li'?", options: ["100 punten", "111 punten (1 ID, 1 Class, 1 Element)", "3 punten", "Onbeperkt"], answer: 1 },
        { q: "Wat is de functie van de CSS-eigenschap 'backdrop-filter'?", options: ["Het vervaagt of verkleurt het gebied áchter een element (bijv. voor een 'frosted glass' effect)", "Het plaatst een afbeelding op de achtergrond", "Het verwijdert de achtergrondkleur", "Het blokkeert pop-ups"], answer: 0 }
    ],
    "JavaScript": [
        // Makkelijk
        { q: "Met welk JavaScript-commando vraag je aan de gebruiker om tekst in te typen in een pop-up?", options: ["alert()", "confirm()", "prompt()", "input()"], answer: 2 },
        { q: "Wat is de uitkomst van de som '10' - 2 in JavaScript?", options: ["8 (JS converteert de string automatisch naar een getal bij een aftrekking)", "102", "NaN", "Error"], answer: 0 },
        // Moeilijk
        { q: "Wat doen de JavaScript functies 'call()', 'apply()' en 'bind()'?", options: ["Ze maken een API-verzoek", "Hiermee kun je expliciet bepalen waarnaar het keyword 'this' verwijst binnen een functie", "Ze sluiten de browser", "Ze veranderen het CSS-thema"], answer: 1 },
        { q: "Wat doet 'Promise.race()'?", options: ["Het annuleert alle langzame netwerkverzoeken", "Het accepteert een lijst met Promises en retourneert het resultaat van de állereerste Promise die klaar is (of faalt), de rest wordt genegeerd", "Het maakt de code sneller", "Het crasht de Event Loop"], answer: 1 }
    ],
    "Python": [
        // Makkelijk
        { q: "Wat is de output van de code: print(len([1, 2, 3, 4, 5]))?", options: ["1", "5", "15", "Error"], answer: 1 },
        { q: "Welk keyword gebruik je om een loop voortijdig af te breken in Python?", options: ["stop", "exit", "break", "return"], answer: 2 },
        // Moeilijk
        { q: "Wat is de 'Method Resolution Order' (MRO) in Python?", options: ["Een manier om bestanden te sorteren", "De vaste, wiskundige volgorde waarin Python zoekt naar methodes in een hiërarchie van klasses, vooral cruciaal bij 'Multiple Inheritance' (meervoudige overerving)", "Een beveiligingsprotocol", "De volgorde waarin imports geladen worden"], answer: 1 },
        { q: "Wat doet de speciale methode '__dict__' in een Python-object?", options: ["Het is een vertaal-woordenboek", "Het retourneert een dictionary die alle dynamische attributen (variabelen) van dat specifieke object bevat", "Het controleert op spelfouten", "Het verwijdert het object uit het geheugen"], answer: 1 }
    ],
    "Databases": [
        // Makkelijk
        { q: "Wat is het doel van het datatype 'VARCHAR' in SQL?", options: ["Het opslaan van kommagetallen", "Het opslaan van data en tijd", "Het opslaan van teksten (strings) met een variabele lengte", "Het opslaan van binaire bestanden (foto's)"], answer: 2 },
        { q: "Wat gebeurt er als je in SQL het commando 'SELECT DISTINCT' gebruikt?", options: ["Het selecteert alleen de tabellen", "Het haalt alleen de unieke (niet-dubbele) waarden op uit een kolom", "Het verwijdert de dubbele data permanent", "Het versleutelt de data"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Deadlock' in een database?", options: ["Een vergeten wachtwoord", "Een fatale situatie waarbij twee of meer transacties oneindig op elkaars vergrendelingen (locks) wachten om verder te kunnen, waardoor het systeem vastloopt", "Een fysiek defecte harde schijf", "Het verwijderen van de master-tabel"], answer: 1 },
        { q: "Wat is het grote nadeel van het toevoegen van extreem veel Indexen aan een database-tabel?", options: ["Indexen maken het zoeken (SELECT) langzamer", "Elke keer als je data toevoegt, wijzigt of verwijdert (INSERT/UPDATE/DELETE), moet de database óók alle Indexen opnieuw berekenen, wat wegschrijven enorm traag maakt", "Indexen verbruiken geen opslagruimte", "Indexen zijn illegaal in SQL"], answer: 1 }
    ],
    "Netwerken": [
        // Makkelijk
        { q: "Wat is een bekende, fysieke vorm van een netwerkkabel die lichtsignalen gebruikt in plaats van stroom?", options: ["Koperkabel", "Coaxkabel", "Glasvezelkabel (Fiber Optic)", "UTP-kabel"], answer: 2 },
        { q: "Welke eenheid gebruiken we om de snelheid (vertraging) in online games aan te duiden?", options: ["FPS", "Ping (of Latency), gemeten in milliseconden (ms)", "Megabytes", "Hertz"], answer: 1 },
        // Moeilijk
        { q: "Wat is het fundamentele verschil in de header-grootte tussen TCP en UDP pakketjes?", options: ["UDP is groter dan TCP", "De TCP header is doorgaans 20 bytes (vanwege alle controle-mechanismen), terwijl de zeer simpele UDP header slechts 8 bytes groot is", "Er is geen verschil", "Ze hebben geen headers"], answer: 1 },
        { q: "Wat betekent het als een netwerk 'Full-Duplex' is?", options: ["Het is half zo snel", "Apparaten kunnen tegelijkertijd, op exact hetzelfde moment, data zenden én ontvangen zonder dat het botst (zoals bellen met een telefoon)", "Het is een draadloze verbinding", "Data kan alleen één kant op tegelijk"], answer: 1 }
    ],
    "Hardware & OS": [
        // Makkelijk
        { q: "Welke bekende poort op je pc gebruik je meestal om een externe monitor aan te sluiten?", options: ["USB-A", "HDMI of DisplayPort", "Ethernet", "3.5mm Audio Jack"], answer: 1 },
        { q: "Waar staat de afkorting 'SSD' voor?", options: ["Super Speed Drive", "Solid State Drive", "System Storage Disk", "Secure Save Device"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Pipeline Hazard' in de architectuur van een CPU?", options: ["Een fysieke brand in de chip", "Een situatie waarbij de volgende instructie op de lopende band (pipeline) niet kan worden uitgevoerd, bijvoorbeeld omdat deze moet wachten op het reken-resultaat van de vóórgaande instructie", "Een virus dat de CPU hackt", "Een stroomstoring"], answer: 1 },
        { q: "In de context van opslag, wat is IOPS?", options: ["Internet Output Power System", "Input/Output Operations Per Second: een belangrijke maatstaf die aangeeft hoeveel lees- en schrijftaken een SSD of HDD per seconde kan verwerken", "Internal OS Processing Speed", "Een type formatteren"], answer: 1 }
    ],
    "Cybersecurity": [
        // Makkelijk
        { q: "Wat bedoelt men met de term 'White Hat Hacker'?", options: ["Een crimineel", "Een ethische hacker die, vaak in opdracht, beveiligingslekken zoekt om een bedrijf veiliger te maken", "Een hacker die alleen in de winter hackt", "Een virus"], answer: 1 },
        { q: "Wat doet ransomware met je bestanden?", options: ["Het kopieert ze naar Facebook", "Het versleutelt (encrypt) je bestanden zodat je ze niet meer kunt openen, totdat je losgeld betaalt", "Het verwijdert ze direct", "Het maakt ze sneller"], answer: 1 },
        // Moeilijk
        { q: "Wat is het verschil tussen 'Stored XSS' en 'Reflected XSS'?", options: ["Geen verschil", "Stored XSS wordt permanent opgeslagen in de database van de server (bijv. in een reactie); Reflected XSS kaatst direct terug vanaf een kwaadaardige link en wordt niet opgeslagen", "Reflected XSS is voor hardware", "Stored XSS werkt alleen via e-mail"], answer: 1 },
        { q: "Wat is 'Peppering' in de context van wachtwoordbeveiliging (in tegenstelling tot Salting)?", options: ["Wachtwoorden pittig maken", "Een extra, geheime, vaste reeks tekens die aan de wachtwoord-hash wordt toegevoegd, maar die (in tegenstelling tot de Salt) níét in dezelfde database wordt opgeslagen, maar hardcoded in de applicatie-server staat", "Het gebruik van kleine letters", "Het blokkeren van het IP adres"], answer: 1 }
    ],
    "Git & Versiebeheer": [
        // Makkelijk
        { q: "Wat is de functie van de 'Master' of 'Main' branch in Git?", options: ["Het is de enige branch", "Het is traditioneel de hoofd-tak van je project waarin altijd de stabiele, werkende versie van je code of game staat", "Het is het wachtwoord van Git", "Het verwijdert foute code"], answer: 1 },
        // Moeilijk
        { q: "Wat gebeurt er als je 'git stash pop' gebruikt?", options: ["Het project ontploft", "Het haalt je laatst opgeslagen, tijdelijke wijzigingen uit je stash-kluisje, plakt ze terug in je huidige werkmap, én verwijdert die stash daarna uit het kluisje", "Het pusht de code direct naar productie", "Het annuleert je laatste commit"], answer: 1 },
        { q: "Hoe kun je in Git zien wélke actieve branches er allemaal bestaan in jouw lokale project?", options: ["git branches", "git show branches", "git branch", "git tree"], answer: 2 }
    ],
    "Cloud & DevOps": [
        // Makkelijk
        { q: "Wat betekent het als een applicatie 'Schaalbaar' (Scalable) is in de cloud?", options: ["Het kan gewogen worden", "Het systeem kan soepel omgaan met groei (zoals 10x zoveel bezoekers) door automatisch extra rekenkracht of servers toe te voegen zonder te crashen", "Het kan op een klein scherm draaien", "Het is goedkoop"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Pod' in de context van Kubernetes?", options: ["Een fysieke serverkast", "De allerkleinste en eenvoudigste eenheid in Kubernetes; een omhulsel dat één (of meerdere nauw verbonden) Docker-container(s) bevat die samen logischerwijs één applicatie vormen", "Een relationele database", "Een netwerk switch"], answer: 1 },
        { q: "Wat is het doel van de DevOps tool 'Ansible Playbooks'?", options: ["Het maken van scripts voor theater", "Het schrijven van YAML-configuratiebestanden die de exacte en gewenste staat van je servers beschrijven, waarna Ansible dit volautomatisch op honderden machines tegelijk installeert", "Het scannen op malware", "Het testen van de internetverbinding"], answer: 1 }
    ],
    "Algoritmes & Datastructuren": [
        // Makkelijk
        { q: "Wat is een 'Bug' in programmeertermen?", options: ["Een fysiek insect", "Een fout of weeffout in de code waardoor het programma crasht, vastloopt of onverwacht gedrag vertoont", "Een moeilijk stukje code", "Een opgeslagen bestand"], answer: 1 },
        // Moeilijk
        { q: "Wat is de Big O tijdcomplexiteit van het toevoegen (Pushen) van een item aan de búítenkant (achteraan) van een Array?", options: ["O(log n)", "O(1) - Constante tijd (het wordt gewoon aan het einde vastgeplakt, tenzij het array-geheugen vol is en opnieuw moet worden gereserveerd)", "O(n)", "O(n^2)"], answer: 1 },
        { q: "Wat is een 'Heap' (zoals een Min-Heap of Max-Heap) in datastructuren?", options: ["Een stapel afval", "Een speciale, boom-achtige datastructuur (Tree) die vaak wordt gebruikt om Priority Queues te maken: de hoogste (of laagste) waarde bevindt zich altijd razendsnel aan de top (root)", "Een relationele database", "Een lineaire array"], answer: 1 }
    ],
    "Game Development": [
        // Makkelijk
        { q: "Wat doet de 'Physics Engine' in een game?", options: ["Het speelt muziek af", "Het berekent en simuleert realistische natuurkunde, zoals zwaartekracht, snelheid, botsingen en hoe objecten vallen of rollen", "Het laadt het volgende level", "Het bepaalt de kleur van de lucht"], answer: 1 },
        // Moeilijk
        { q: "Wat is 'Deferred Rendering' vergeleken met 'Forward Rendering' in een game engine?", options: ["Deferred rendering annuleert al het licht", "Bij Forward Rendering wordt elke lichtbron per object direct berekend (extreem zwaar bij veel lampen). Deferred Rendering splitst geometrie en belichting op: het tekent éérst alle objecten (zonder licht) naar buffers (G-Buffer), en berekent daarna pas op het eindscherm het licht over die platte pixels. (Ideaal voor spellen met enorm veel lampen, zoals GTA)", "Deferred Rendering tekent het level achterstevoren", "Er is geen verschil, het is een andere naam"], answer: 1 },
        { q: "Wat is 'Level of Detail' (LOD) in de praktijk?", options: ["De resolutie van je monitor", "Het is een techniek waarbij het gedetailleerde 3D-model van bijv. een boom stilletjes wordt omgewisseld voor een hele lelijke, simpele boom met weinig vlakken zodra de speler er heel ver vandaan loopt, om de videokaart te sparen", "Het volume van het geluid", "Het opslaan van grafische instellingen"], answer: 1 }
    ],
    "Tech Geschiedenis & Trivia": [
        // Makkelijk
        { q: "Welk beroemd bedrijf werd opgericht door de studievrienden Larry Page en Sergey Brin?", options: ["Apple", "Microsoft", "Amazon", "Google"], answer: 3 },
        // Moeilijk
        { q: "Waar stond de afkorting 'IBM' (het gigantische technologiebedrijf) oorspronkelijk voor?", options: ["Internet Broadband Machines", "International Business Machines", "Internal Byte Management", "Integrated Binary Modules"], answer: 1 },
        { q: "Wat is de legendarische 'Konami Code', een van de bekendste cheatcodes uit de gamegeschiedenis?", options: ["Up, Down, Left, Right, A, B, Start", "Up, Up, Down, Down, Left, Right, Left, Right, B, A, Start", "A, B, B, A, Up, Down, Start", "Select, Start, A, B, X, Y"], answer: 1 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 16: De mega samenvoeger!
for (let category in extraVragenDeel16) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel16[category]);
    } else {
        questionBank[category] = extraVragenDeel16[category]; 
    }
}

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 17 - DE ULTIEME BREINBREKERS EN INKOPPERS!
// =====================================================================

const extraVragenDeel17 = {
    "HTML & CSS": [
        // Makkelijk
        { q: "Welke HTML-tag gebruik je om een groot, meerregelig tekstvak te maken (bijv. voor een 'Bericht' veld in een contactformulier)?", options: ["<input type='text'>", "<textarea>", "<textbox>", "<formtext>"], answer: 1 },
        { q: "Met welke CSS-eigenschap stel je een afbeelding in als achtergrond van je pagina?", options: ["background-image", "bg-pic", "image-source", "background-url"], answer: 0 },
        // Moeilijk
        { q: "Wat doet de krachtige CSS-eigenschap 'pointer-events: none;'?", options: ["Het verwijdert de muiscursor", "Het maakt een element volledig 'onzichtbaar' voor muisklikken, waardoor je er letterlijk dwars doorheen klikt naar het element eronder", "Het blokkeert alle JavaScript", "Het stopt CSS-animaties als je de muis stilhoudt"], answer: 1 },
        { q: "Wat is een CSS 'Stacking Context' (Stapelcontext)?", options: ["Een lijst met CSS bestanden", "Een driedimensionaal concept in de browser dat bepaalt hoe elementen met een 'z-index' of 'opacity' zich ten opzichte van elkaar overlappen op de z-as", "De volgorde waarin CSS wordt gedownload", "Een manier om tekst op elkaar te stapelen"], answer: 1 }
    ],
    "JavaScript": [
        // Makkelijk
        { q: "Hoe schrijf je commentaar over méérdere regels tegelijk in JavaScript (en CSS)?", options: ["// commentaar //", "", "/* commentaar */", "~~ commentaar ~~"], answer: 2 },
        { q: "Met welke ingebouwde JS-functie zet je een tekst zoals '42' om naar een heel getal (integer)?", options: ["Number.toInt()", "parseInt()", "Math.integer()", "toInteger()"], answer: 1 },
        // Moeilijk
        { q: "Wat is in JavaScript de (beruchte) exacte uitkomst van de check: NaN === NaN ?", options: ["true", "false (Not-a-Number is wiskundig gezien in JS nóóit gelijk aan een andere Not-a-Number)", "undefined", "SyntaxError"], answer: 1 },
        { q: "Wat is een 'Proxy' object in moderne JavaScript (ES6)?", options: ["Een VPN voor de browser", "Een geavanceerd object waarmee je de fundamentele bewerkingen op een ánder object (zoals het opvragen of instellen van properties) kunt onderscheppen, aanpassen en beveiligen", "Een server in de cloud", "Een functie die wachtwoorden genereert"], answer: 1 }
    ],
    "Python": [
        // Makkelijk
        { q: "Met welk keyword schrijf je in Python een conditie die ALTIJD waar is en de loop dus oneindig laat draaien?", options: ["while True:", "loop forever:", "for always:", "while 1 == 2:"], answer: 0 },
        { q: "Wat doet de ingebouwde functie 'abs(-10)' in Python?", options: ["Het crasht het script", "Het berekent de absolute (positieve) waarde, de uitkomst is dus gewoon 10", "Het maakt het getal negatief", "Het berekent de wortel"], answer: 1 },
        // Moeilijk
        { q: "Wat is het doel van de '__slots__' variabele binnen een Python class?", options: ["Het is voor gokkast-games", "Het blokkeert het dynamisch toevoegen van nieuwe variabelen aan een object, wat in de achtergrond enorm veel RAM-geheugen bespaart bij het maken van miljoenen objecten", "Het bepaalt hoeveel functies de class mag hebben", "Het slaat wachtwoorden op"], answer: 1 },
        { q: "Wat is in Python het kritieke verschil tussen een 'Shallow Copy' (copy.copy) en een 'Deep Copy' (copy.deepcopy)?", options: ["Geen verschil", "Een shallow copy kopieert alleen de hoofdlijst; als er geneste lijstjes in zitten, blijven die gelinkt. Een deep copy kopieert recursief álles, waardoor de nieuwe lijst 100% onafhankelijk is", "Shallow is voor tekst, Deep voor getallen", "Deep copy verwijdert het origineel"], answer: 1 }
    ],
    "Databases": [
        // Makkelijk
        { q: "Waarvoor gebruik je de 'ORDER BY' clausule in een SQL-query?", options: ["Om een bestelling te plaatsen", "Om de opgehaalde rijen (resultaten) netjes alfabetisch of numeriek te sorteren (bijv. van A-Z of Hoog-Laag)", "Om tabellen te verwijderen", "Om de database te beveiligen"], answer: 1 },
        { q: "Wat doet het SQL commando 'COUNT(id)'?", options: ["Het telt alle letters", "Het telt simpelweg hoeveel rijen of ID's er in de tabel (of je zoekopdracht) zitten", "Het wist de ID's", "Het zoekt het hoogste getal"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Materialized View' in een SQL-database?", options: ["Een grafisch dashboard", "In tegenstelling tot een gewone View, wordt de uitkomst van een Materialized View daadwerkelijk fysiek opgeslagen op de harde schijf, wat leessnelheid enorm verhoogt ten koste van live-updates", "Een 3D model van je tabellen", "Een tool om te exporteren naar Excel"], answer: 1 },
        { q: "Waar staan de drie letters in de bekende 'CAP Theorem' voor in de theorie over gedistribueerde databases?", options: ["Create, Alter, Purge", "Consistency, Availability, Partition Tolerance (De stelling stelt dat een database over een netwerk maximaal 2 van deze 3 garanties tegelijk kan bieden)", "Cache, Array, Pointer", "Control, Access, Permissions"], answer: 1 }
    ],
    "Netwerken": [
        // Makkelijk
        { q: "Waar staat de wereldbekende afkorting 'IP' voor (zoals in IP-adres)?", options: ["Internal Port", "Internet Protocol", "Interconnected PCs", "Intelligent Processing"], answer: 1 },
        { q: "Hoe noemen we het bekende, plastic stekkertje (met het handige klik-lipje) dat aan het einde van een standaard internetkabel (UTP/Ethernet) zit?", options: ["USB", "HDMI", "RJ45 (Registered Jack 45)", "VGA"], answer: 2 },
        // Moeilijk
        { q: "Wat is 'Anycast' routering in een groot netwerk of het internet?", options: ["Een radiostation streamen", "Een techniek waarbij meerdere, over de wereld verspreide servers exact hetzelfde IP-adres delen. Jouw verzoek wordt volautomatisch via het kortste pad naar de fysiek állerdichtstbijzijnde server gestuurd", "Een methode om data te blokkeren", "Een verouderd type WiFi"], answer: 1 },
        { q: "Wat is de functie van het 'BGP' (Border Gateway Protocol)?", options: ["Het beveiligt je thuisrouter", "Het is letterlijk de 'postkamer' van het internet: het extreem belangrijke protocol waarmee reusachtige internetproviders (AS'en) onderling de routes uitwisselen om te bepalen hoe data de oceaan over reist", "Het vertaalt domeinnamen", "Het is een type inbelverbinding"], answer: 1 }
    ],
    "Hardware & OS": [
        // Makkelijk
        { q: "Welk PC-onderdeel converteert gevaarlijke wisselstroom uit het stopcontact naar veilige gelijkstroom voor je computeronderdelen?", options: ["Het Moederbord", "De Voeding (PSU - Power Supply Unit)", "De CPU", "De Videokaart"], answer: 1 },
        { q: "Als je te weinig RAM-geheugen hebt, gaat je computer enorm haperen omdat hij gaat 'Swappen'. Wat betekent dat?", options: ["Hij start opnieuw op", "Hij dumpt tijdelijk geheugenblokken naar je (veel tragere) harde schijf of SSD om ruimte te maken", "Hij zet het beeldscherm uit", "Hij verwijdert bestanden"], answer: 1 },
        // Moeilijk
        { q: "Wat betekent de term 'NUMA' (Non-Uniform Memory Access) in enterprise server-architectuur?", options: ["Nieuw USB Model Apple", "Een geheugenontwerp waarbij een processor veel sneller toegang heeft tot zijn éigen, direct aangesloten geheugenbank, dan tot het geheugen dat fysiek aan een andere processor op hetzelfde moederbord hangt", "Een fout in de harde schijf", "Een type waterkoeling"], answer: 1 },
        { q: "Wat gebeurt er bij een 'CPU Cache Miss'?", options: ["De processor ontploft", "De processor zoekt data in zijn razendsnelle interne Cache (L1/L2), vindt het daar niet, en wordt gedwongen om vele cycli lang te pauzeren om de data alsnog uit het véél tragere hoofdgeheugen (RAM) te halen", "De internetverbinding valt weg", "De harde schijf wordt geformatteerd"], answer: 1 }
    ],
    "Cybersecurity": [
        // Makkelijk
        { q: "Wat probeert een cybercrimineel via een 'Phishing' e-mail (bijv. een nep-mail van de PostNL of de bank)?", options: ["Je computer te laten ontploffen", "Jou in paniek op een link te laten klikken naar een nagemaakte website, zodat je daar zelf je wachtwoord en privégegevens intypt", "Je vrienden te bellen", "Je muis te hacken"], answer: 1 },
        { q: "Wat is 'Malware'?", options: ["Een nieuw soort computer-muis", "Een verzamelnaam voor alle soorten kwaadaardige software (virussen, spyware, trojans)", "Een merk antivirus", "Een programma om bestanden in te pakken"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Side-Channel Attack' in cryptografie en hardware-security?", options: ["Aanvallen via de achterdeur van de router", "Een extreem complexe aanval waarbij de hacker code niet via software kraakt, maar meeluistert naar fysieke 'bij-effecten' van de draaiende chip, zoals elektromagnetische straling, stroomverbruik of zelfs het gepiep (geluid) van componenten om encryptiesleutels af te leiden", "Een aanval via openbare WiFi", "Een standaard DDoS aanval"], answer: 1 },
        { q: "Waarom gebruiken veilige mobiele apps 'Certificate Pinning' (SSL Pinning)?", options: ["Om de app kleiner te maken in opslag", "Om extreme Man-in-the-Middle (MitM) aanvallen te voorkomen: de app vertrouwt niet langer op willekeurige autoriteiten in de telefoon, maar heeft het unieke SSL-certificaat van de eigen server 'hardcoded' in de app ingebakken", "Om wachtwoorden lokaal op te slaan", "Om betalingen sneller te verwerken"], answer: 1 }
    ],
    "Git & Versiebeheer": [
        // Makkelijk
        { q: "Met welk basis-commando controleer je razendsnel in je terminal welke bestanden je wel of niet hebt gewijzigd (in het groen en rood)?", options: ["git check", "git status", "git log", "git show"], answer: 1 },
        { q: "Wat doe je als je andermans project via 'git clone' binnenhaalt?", options: ["Je wist hun code", "Je downloadt hun volledige online-repository inclusief de hele geschiedenis naar een mapje op jouw eigen computer", "Je maakt een back-up van jouw pc", "Je verandert de programmeertaal"], answer: 1 },
        // Moeilijk
        { q: "Wat gebeurt er als je per ongeluk (of expres) in een 'Detached HEAD' staat belandt in Git?", options: ["De repo wordt onbruikbaar", "Je bent fysiek 'losgekoppeld' van een branch en werkt momenteel direct op een geïsoleerde, historische commit. Als je nu nieuwe commits maakt en weggaat zonder een nieuwe branch te maken, ben je ze hoogstwaarschijnlijk kwijt", "De code wordt automatisch gepusht", "De laatste commit wordt ongedaan gemaakt"], answer: 1 },
        { q: "Waarvoor is het commando 'git stash apply' (in tegenstelling tot pop)?", options: ["Het is sneller", "Het haalt de onopgeslagen wijzigingen uit je stash-kluisje en past ze toe op je huidige werkmap, maar (anders dan bij pop) behoudt het de kopie in het stash-kluisje voor toekomstig gebruik", "Het annuleert je stash", "Het verwijdert direct alle tijdelijke bestanden"], answer: 1 }
    ],
    "Cloud & DevOps": [
        // Makkelijk
        { q: "Waar staat de zeer bekende afkorting 'AWS' voor?", options: ["Automatic Web Server", "Amazon Web Services (de gigantische clouddivisie van Amazon)", "Apple Wireless System", "Advanced Windows Software"], answer: 1 },
        // Moeilijk
        { q: "Wat is de exacte rol van een 'DaemonSet' in Kubernetes?", options: ["Een set van virussen", "Het is een controller die volautomatisch garandeert dat er op álle (of geselecteerde) fysieke Nodes (servers) in je cluster exact één kopie van een specifieke Pod draait (ideaal voor logging en monitoring agents)", "Een database cluster", "Een tool om containers te verwijderen"], answer: 1 },
        { q: "Wat is 'Blue/Green Deployment' in DevOps?", options: ["Een nieuw kleurenthema instellen", "Een release-techniek waarbij je een compleet nieuwe productie-omgeving (Green) inricht naast de oude (Blue). Werkt Green perfect? Dan schakel je de load balancer simpelweg over. Werkt het niet? Dan schakel je direct terug naar Blue (zero downtime)", "Het scheiden van Frontend (Blue) en Backend (Green)", "Een manier om code te testen"], answer: 1 }
    ],
    "Algoritmes & Datastructuren": [
        // Makkelijk
        { q: "Wat is de logica achter het 'Binary Search' (Binair Zoeken) algoritme?", options: ["Het zoekt alles één voor één af", "Het pakt een wiskundig GESORTEERDE lijst, bekijkt het middelste element, en snijdt de lijst vervolgens continu in helften, waardoor het gigantisch snel een specifiek element weet te vinden in miljoenen regels", "Het zet tekst om naar enen en nullen", "Het zoekt in twee databases tegelijk"], answer: 1 },
        // Moeilijk
        { q: "Wat is een 'Bloom Filter' in data science en caching?", options: ["Een tool om foto's op te vrolijken", "Een extreem ruimtebesparende, waarschijnlijkheids-datastructuur: het kan je razendsnel vertellen of een element 'Absoluut NIET' in een set zit, óf dat het er 'Mogelijk WEL' in zit (maar dus af en toe een false positive geeft, perfect voor adblockers of cache-checks)", "Een virus dat algoritmes breekt", "Een filter om alleen getallen over te houden"], answer: 1 }
    ],
    "Game Development": [
        // Makkelijk
        { q: "Wat wordt in de game-industrie bedoeld met de 'Spawn Point' (Spawnpunt)?", options: ["Het einde van het level", "De vaste, specifieke X/Y/Z locatie in de gamewereld waar een speler, een vijand of een item opduikt aan het begin van de game of na het doodgaan", "Het menu-scherm", "Een save-game"], answer: 1 },
        // Moeilijk
        { q: "Wat is de extreem belangrijke functie van een 'NavMesh' (Navigation Mesh) in 3D games?", options: ["Een net om te vissen in de game", "Het is een wiskundig berekend en vaak onzichtbaar, plat polygoon-oppervlak over de grond van je level. AI-vijanden gebruiken dit grid om via het A* algoritme veilig paden te berekenen (Pathfinding) zonder vast te lopen in muren", "Een methode om kleding van personages te simuleren", "Het inladen van de textures van muren"], answer: 1 }
    ],
    "Tech Geschiedenis & Trivia": [
        // Makkelijk
        { q: "Welke twee jonge studenten richtten in 1975 officieel het bedrijf Microsoft op?", options: ["Steve Jobs en Steve Wozniak", "Bill Gates en Paul Allen", "Larry Page en Sergey Brin", "Elon Musk en Jeff Bezos"], answer: 1 },
        // Moeilijk
        { q: "Wat was in 1984 de revolutionaire 'Apple Macintosh'?", options: ["Een telefoon", "De állereerste enorm succesvolle commerciële computer die werd geleverd met een muis en een heuse Grafische Gebruikersinterface (GUI) met vensters en icoontjes, in plaats van een zwarte terminal met groene letters", "De allereerste smartwatch", "Een gameconsole"], answer: 1 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 17: Zorgt dat ook DEZE vragen volautomatisch laden!
for (let category in extraVragenDeel17) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel17[category]);
    } else {
        questionBank[category] = extraVragenDeel17[category]; 
    }
}

// =====================================================================
// PLAK DIT ONDERAAN IN questions.js (Boven module.exports)
// MEGA UPDATE DEEL 18 - THE ULTIMATE KNOWLEDGE BASE!
// =====================================================================

const extraVragenDeel18 = {
    "HTML & CSS": [
        // Makkelijk
        { q: "Welk HTML-attribuut gebruik je om een video automatisch te laten starten zodra de pagina laadt?", options: ["start=\"true\"", "play=\"now\"", "autoplay", "run=\"auto\""], answer: 2 },
        { q: "Hoe centreer je tekst horizontaal met CSS?", options: ["align: center;", "text-center: true;", "text-align: center;", "center-text: all;"], answer: 2 },
        // Moeilijk
        { q: "Wat is het verschil tussen de eenheden 'vh' en 'dvh' in moderne CSS?", options: ["Geen verschil", "vh is voor desktop, dvh voor mobiel", "vh kijkt naar de statische schermhoogte, dvh (Dynamic Viewport Height) houdt actief rekening met mobiele adresbalken die in- en uitklappen", "vh is voor video, dvh voor audio"], answer: 2 },
        { q: "Wat is de initiële (standaard) waarde van de CSS eigenschap 'z-index'?", options: ["0", "1", "auto", "none"], answer: 2 }
    ],
    "JavaScript": [
        // Makkelijk
        { q: "Hoe schrijf je een 'Niet Gelijk Aan' (Not Equal) conditie in JavaScript (controleert alleen de waarde)?", options: ["=!", "!==", "!=", "<>"], answer: 2 },
        { q: "Wat doet de 'console.clear()' functie in JavaScript?", options: ["Het sluit de browser", "Het leegt de developer console van alle eerdere log-berichten en foutmeldingen", "Het wist de cookies", "Het verwijdert alle variabelen in de code"], answer: 1 },
        // Moeilijk
        { q: "Wat is het verschil tussen 'Object.freeze()' en 'Object.seal()' in JavaScript?", options: ["Ze doen exact hetzelfde", "freeze() voorkomt alle wijzigingen aan een object; seal() voorkomt dat je nieuwe properties toevoegt, maar je mag bestaande properties nog wél wijzigen", "seal() is alleen voor arrays", "freeze() crasht het script als je het object aanpast"], answer: 1 },
        { q: "Wat is een 'WeakMap' in JavaScript?", options: ["Een kaart met een lage resolutie", "Een speciale Map waarbij de 'keys' uitsluitend objecten mogen zijn. Als er nergens anders meer naar die objecten wordt verwezen, ruimt de Garbage Collector ze automatisch op", "Een array die maximaal 10 items mag bevatten", "Een netwerk-error"], answer: 1 }
    ],
    "Python": [
        // Makkelijk
        { q: "Met welke ingebouwde Python functie rond je een kommagetal zoals 3.14 af naar 3?", options: ["floor()", "round()", "trim()", "cut()"], answer: 1 },
        { q: "Hoe controleer je in Python of het woord 'appel' in de tekst 'Ik eet een appel' zit?", options: ["if 'appel' in tekst:", "if tekst.has('appel'):", "if 'appel' == tekst:", "if tekst.contains('appel'):"], answer: 0 },
        // Moeilijk
        { q: "Wat is het nut van de 'yield' instructie in Python in plaats van 'return'?", options: ["Het is sneller dan return", "Het verandert een functie in een Generator. In plaats van de functie af te sluiten, pauzeert het de functie en levert het een waarde op, om later weer precies daar verder te gaan", "Het beveiligt de output", "Het forceert een foutmelding"], answer: 1 },
        { q: "Wat is 'Monkey Patching' in Python?", options: ["Een script dat apen simuleert", "Het dynamisch (tijdens runtime) aanpassen of overschrijven van classes of modules, vaak gebruikt om tijdelijk gedrag van externe bibliotheken te wijzigen zonder de broncode aan te raken", "Een type virus", "Het updaten van de Python kernel"], answer: 1 }
    ],
    "Databases": [
        // Makkelijk
        { q: "Welk SQL-keyword gebruik je om een bestaande database tabel volledig te verwijderen?", options: ["DELETE TABLE", "REMOVE TABLE", "TRUNCATE TABLE", "DROP TABLE"], answer: 3 },
        { q: "Wat is de functie van de 'WHERE' clausule in een SQL query?", options: ["Het geeft aan op welke server de data staat", "Het filtert de resultaten op basis van specifieke voorwaarden (zoals leeftijd > 18)", "Het vertelt waar de backup heen moet", "Het groepeert de kolommen"], answer: 1 },
        // Moeilijk
        { q: "Wat doet het SQL commando 'UPSERT' (of INSERT ... ON CONFLICT DO UPDATE)?", options: ["Het wist de database bij een error", "Het is een combinatie-actie: probeert een nieuwe rij in te voegen, maar als er al een rij met die unieke sleutel bestaat, wordt de bestaande rij geüpdatet", "Het voegt data toe aan de cloud", "Het keert de tabel ondersteboven"], answer: 1 },
        { q: "Wat is het wezenlijke verschil tussen het datatype CHAR en VARCHAR in SQL?", options: ["CHAR is voor nummers, VARCHAR voor tekst", "CHAR reserveert ALTIJD een vaste hoeveelheid geheugenruimte (ook als het woord korter is); VARCHAR is flexibel en gebruikt alleen de ruimte die de daadwerkelijke tekst nodig heeft", "VARCHAR is trager dan TEXT", "Geen verschil"], answer: 1 }
    ],
    "Netwerken": [
        // Makkelijk
        { q: "Waar staat de beroemde afkorting 'VPN' voor?", options: ["Visual Processing Node", "Virtual Private Network (een beveiligde, versleutelde tunnel over het internet)", "Very Protected Network", "Variable Ping Network"], answer: 1 },
        { q: "Welke netwerkpoort wordt van oudsher gebruikt voor onbeveiligd FTP (File Transfer Protocol) verkeer?", options: ["Poort 80", "Poort 21", "Poort 443", "Poort 22"], answer: 1 },
        // Moeilijk
        { q: "Als een netwerkbeheerder spreekt over 'Subnet Mask 255.255.255.0', hoeveel bruikbare host IP-adressen (apparaten) passen er dan theorethisch in dat specifieke subnet?", options: ["256", "255", "254 (0 is netwerkadres, 255 is broadcast)", "512"], answer: 2 },
        { q: "Wat is de functie van het 'TCP Windowing' mechanisme?", options: ["Het tekent vensters op je scherm", "Het is een flow-control techniek waarbij de ontvanger aan de zender vertelt hoeveel data (in bytes) hij nog kan ontvangen voordat zijn buffer vol zit, om pakketverlies te voorkomen", "Het blokkeert virussen", "Het controleert wachtwoorden"], answer: 1 }
    ],
    "Hardware & OS": [
        // Makkelijk
        { q: "Hoe noem je het type fysieke netwerkkabel dat de meeste mensen thuis voor hun internetverbinding gebruiken?", options: ["HDMI-kabel", "USB-kabel", "UTP-kabel (Ethernetkabel)", "VGA-kabel"], answer: 2 },
        { q: "Wat is de functie van een 'Webcam'?", options: ["Geluid opnemen", "Websites bouwen", "Bewegend beeld (video) opnemen of live uitzenden naar de computer", "Stroom besparen"], answer: 2 },
        // Moeilijk
        { q: "Over welke fysieke interface (bus) communiceren moderne NVMe M.2 SSD's rechtstreeks met de processor, om hun gigantische snelheden te halen?", options: ["SATA III", "USB 3.0", "PCIe (Peripheral Component Interconnect Express)", "Thunderbolt"], answer: 2 },
        { q: "Wat gebeurt er precies bij een 'Kernel Panic' (in Linux/macOS) of 'BSOD' (in Windows)?", options: ["De ventilator stopt met draaien", "Het diepste hart van het besturingssysteem (de Kernel) stuit op een interne, onherstelbare fatale fout (vaak door defecte hardware of drivers) en legt uit veiligheid het hele systeem onmiddellijk plat", "Het internet valt uit", "Een virus neemt de muis over"], answer: 1 }
    ],
    "Cybersecurity": [
        // Makkelijk
        { q: "Wat is de betekenis van 'Phishing'?", options: ["Een spelletje spelen op je telefoon", "Een vorm van digitale oplichting waarbij criminelen je via nep-mails (bijv. van 'de bank') naar een valse website lokken om je wachtwoorden te stelen", "Het illegaal downloaden van films", "Een antivirus programma"], answer: 1 },
        { q: "Wat is een 'White Hat Hacker'?", options: ["Een hacker in de winter", "Een ethische hacker die, vaak met toestemming en tegen betaling, systemen probeert te hacken om beveiligingslekken te vinden zodat deze gedicht kunnen worden", "Een crimineel", "Een hacker die alleen Apple apparatuur gebruikt"], answer: 1 },
        // Moeilijk
        { q: "Waarvoor dient een 'CSRF Token' (Cross-Site Request Forgery token) op een webformulier?", options: ["Om het formulier sneller te laden", "Een uniek, onvoorspelbaar stukje code dat door de server wordt meegegeven. Bij het verzenden controleert de server of dit token klopt, wat garandeert dat het formulier écht door de gebruiker vanaf de legitieme site is ingevuld en niet via een gehackte link", "Om SQL injecties te stoppen", "Het is een kortingscode"], answer: 1 },
        { q: "Wat is het verschil tussen 'Salting' en 'Peppering' bij wachtwoord-hashing?", options: ["Ze doen exact hetzelfde", "Een Salt is per gebruiker uniek en wordt náást de hash in dezelfde database bewaard. Een Pepper is een geheime, globale sleutel die hardcoded op de applicatieserver staat en níét in de database wordt opgeslagen", "Pepper maakt het wachtwoord langer, Salt korter", "Salt is voor tekst, Pepper voor getallen"], answer: 1 }
    ],
    "Git & Versiebeheer": [
        // Makkelijk
        { q: "Met welk basiscommando sla je in Git je klaargezette (staged) wijzigingen veilig lokaal op, voorzien van een verplicht log-berichtje?", options: ["git save", "git upload", "git commit -m 'bericht'", "git push"], answer: 2 },
        { q: "Wat doet het commando 'git push'?", options: ["Het drukt op enter", "Het uploadt jouw lokaal gemaakte commits definitief naar de online (remote) repository (bijv. GitHub) zodat de rest van je team erbij kan", "Het wist je code", "Het voegt een nieuwe branch toe"], answer: 1 },
        // Moeilijk
        { q: "Wat gebeurt er als je 'git reset --hard HEAD~1' in je terminal uitvoert?", options: ["De computer start opnieuw op", "Dit is uiterst destructief: Git verwijdert je állerlaatste commit én gooit ook direct alle bijbehorende wijzigingen uit je lokale werkmap permanent in de prullenbak. Weg is weg.", "Het slaat de code dubbel op", "Het pusht onzichtbaar naar GitHub"], answer: 1 },
        { q: "Wat is het nut van Git 'Submodules'?", options: ["Het maakt de bestanden kleiner", "Het stelt je in staat om een compleet ándere, externe Git repository als een submap ín jouw eigen Git project te plaatsen en op een specifieke versie (commit) vast te pinnen", "Het beveiligt de code met een wachtwoord", "Het blokkeert merge conflicten"], answer: 1 }
    ],
    "Cloud & DevOps": [
        // Makkelijk
        { q: "Wat wordt bedoeld met de 'Cloud' in de IT?", options: ["Slecht weer", "Een enorm netwerk van externe, zwaarbeveiligde datacenters (servers) dat via het internet opslag, rekenkracht en software levert, zodat je zelf geen fysieke servers in een bezemkast hoeft te zetten", "Een WiFi netwerk in vliegtuigen", "Een netwerkkabel"], answer: 1 },
        // Moeilijk
        { q: "Wat wordt in Infrastructure as Code (IaC) bedoeld met 'Idempotentie'?", options: ["Dat het script altijd crasht", "De cruciale eigenschap dat, ongeacht hoe vaak je exact hetzelfde automatiserings-script uitvoert, de eindstatus van de infrastructuur (de servers) áltijd exact hetzelfde blijft en er geen dubbele resources worden aangemaakt", "Dat het script onzichtbaar is", "Dat de code zichzelf versleutelt"], answer: 1 },
        { q: "Wat is een 'Sidecar Container' patroon in Kubernetes?", options: ["Een container voor de bijrijder", "Een kleine, extra helper-container die draait binnenin dezelfde Pod als je hoofd-applicatiecontainer. De sidecar doet handige achtergrondtaken, zoals het oppikken van logbestanden of het regelen van proxy-verkeer, zónder de hoofd-app in de weg te zitten", "Een backup container op een andere server", "Een container die crasht"], answer: 1 }
    ],
    "Game Development": [
        // Makkelijk
        { q: "Waar staat de term 'NPC' voor in video games?", options: ["New Player Code", "Non-Player Character (Een personage of vijand die door de computer/AI wordt bestuurd)", "No Playing Camera", "Network Ping Connection"], answer: 1 },
        // Moeilijk
        { q: "Wat is het doel van 'Frustum Culling' in 3D game engines?", options: ["Mooie wolken renderen", "Een onmisbare optimalisatie-techniek waarbij álle 3D objecten die momenteel buiten de beeldhoek (de camera frustum) van de speler vallen, compleet worden genegeerd door de videokaart om de Framerate (FPS) gigantisch hoog te houden", "Zwaartekracht toepassen op voorwerpen", "Het afspelen van muziekjes"], answer: 1 },
        { q: "Waarom gebruiken 3D-engines vaak 'Quaternions' in plaats van 'Euler Angles' voor rotaties?", options: ["Omdat de code korter is", "Om het fatale 'Gimbal Lock' probleem te vermijden: een wiskundig fenomeen waarbij twee rotatie-assen in elkaar klappen en je de vrijheid over de derde dimensie verliest", "Omdat Quaternions kleuren mooier maken", "Quaternions worden niet gebruikt in games"], answer: 1 }
    ],
    "Algoritmes & Datastructuren": [
        // Makkelijk
        { q: "Wat is een algoritme simpelweg?", options: ["Een speciaal stukje hardware", "Een exact wiskundig stappenplan of recept waarmee een computer een probleem oplost of een berekening uitvoert", "Een virus", "Een merk beeldscherm"], answer: 1 },
        // Moeilijk
        { q: "Wat is de gemiddelde Time Complexity (Big O) van het ophalen van een item uit een Array als je het exacte indexnummer al weet (bijv. array[5])?", options: ["O(log n)", "O(1) - Constante tijd. De computer weet door de index direct de exacte geheugenlocatie uit te rekenen, ongeacht of de array 10 of 10 miljoen items bevat", "O(n) - Lijnair", "O(n^2)"], answer: 1 },
        { q: "Wat is het 'Pivot' element in het bekende 'QuickSort' algoritme?", options: ["Het is een error", "Het is het willekeurig gekozen referentie-element in de lijst. Het algoritme plaatst vervolgens alle elementen die kleiner zijn dan de pivot aan de linkerkant, en alles wat groter is aan de rechterkant", "Het is de naam van de bedenker", "Het is het laatste element in een array"], answer: 1 }
    ],
    "Tech Geschiedenis & Trivia": [
        // Makkelijk
        { q: "Welk bedrijf bracht in 2007 de allereerste generatie iPhone uit?", options: ["Samsung", "Nokia", "Apple", "Microsoft"], answer: 2 },
        { q: "Wie waren de twee oprichters van het bedrijf Microsoft in de jaren 70?", options: ["Steve Jobs en Steve Wozniak", "Bill Gates en Paul Allen", "Larry Page en Sergey Brin", "Jeff Bezos en Elon Musk"], answer: 1 },
        // Moeilijk
        { q: "Hoe noemde admiraal en computerpionier Grace Hopper de storing die ze in 1947 ontdekte in de Harvard Mark II computer (waarmee ze een wereldberoemde term lanceerde)?", options: ["Een Glitch", "Een 'Bug' (Ze vond letterlijk een échte, dode mot bekneld tussen de relais die kortsluiting veroorzaakte, en plakte deze vast in het logboek)", "Een Error", "Een Crash"], answer: 1 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 18: Voeg al deze vragen naadloos toe!
for (let category in extraVragenDeel18) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel18[category]);
    } else {
        questionBank[category] = extraVragenDeel18[category]; 
    }
}

const extraVragenDeel19 = {
    "Linux & Terminal": [
        { q: "Welk Linux-commando toont de bestanden in de huidige map?", options: ["ls", "cd", "pwd", "mkdir"], answer: 0 },
        { q: "Wat doet het commando 'pwd'?", options: ["Het toont de huidige maplocatie", "Het wijzigt je wachtwoord", "Het wist een map", "Het start een webserver"], answer: 0 },
        { q: "Waarvoor gebruik je 'chmod' in Linux?", options: ["Bestandsrechten aanpassen", "Bestanden downloaden", "Processen stoppen", "Schijfruimte tonen"], answer: 0 },
        { q: "Wat betekent 'sudo'?", options: ["Een commando uitvoeren met verhoogde rechten", "Een map kopieren", "Een bestand zoeken", "Een netwerkpoort openen"], answer: 0 },
        { q: "Welk commando gebruik je om tekst in bestanden te zoeken?", options: ["grep", "ping", "touch", "alias"], answer: 0 },
        { q: "Wat doet 'tail -f logfile.txt'?", options: ["Nieuwe regels van een logbestand live blijven tonen", "Een bestand verwijderen", "Een map aanmaken", "Een bestand versleutelen"], answer: 0 },
        { q: "Wat is een shell script?", options: ["Een bestand met terminalcommando's die automatisch uitgevoerd kunnen worden", "Een soort videocodec", "Een database-relatie", "Een CSS-framework"], answer: 0 },
        { q: "Wat doet het pipe-teken '|' in de terminal?", options: ["Output van het ene commando doorgeven aan het volgende commando", "Een computer afsluiten", "Een bestand hernoemen", "Een map comprimeren"], answer: 0 }
    ],
    "APIs & Integraties": [
        { q: "Waar staat API voor?", options: ["Application Programming Interface", "Automatic Program Installer", "Advanced Pixel Input", "Application Password Index"], answer: 0 },
        { q: "Wat is een REST API?", options: ["Een API-stijl die resources via HTTP-methodes beschikbaar maakt", "Een pauzeknop voor servers", "Een CSS-animatie", "Een type harde schijf"], answer: 0 },
        { q: "Welke HTTP-methode gebruik je meestal om data op te halen?", options: ["GET", "POST", "DELETE", "PATCH"], answer: 0 },
        { q: "Wat betekent statuscode 404?", options: ["Niet gevonden", "Server succesvol gestart", "Geen internet", "Wachtwoord fout"], answer: 0 },
        { q: "Wat is een API key?", options: ["Een geheime sleutel om toegang tot een API te identificeren of beperken", "Een toetsenbordknop", "Een HTML-element", "Een cachebestand"], answer: 0 },
        { q: "Wat is JSON vaak in API-verkeer?", options: ["Een tekstformaat om gestructureerde data uit te wisselen", "Een soort firewall", "Een compressie-algoritme", "Een netwerkstekker"], answer: 0 },
        { q: "Waarom gebruik je rate limiting bij een API?", options: ["Om te beperken hoeveel requests iemand in een periode mag doen", "Om afbeeldingen scherper te maken", "Om CSS te bundelen", "Om RAM te formatteren"], answer: 0 },
        { q: "Wat is een webhook?", options: ["Een automatische HTTP-melding van systeem A naar systeem B bij een event", "Een haakje in HTML", "Een WiFi-kanaal", "Een databasekolom"], answer: 0 }
    ],
    "Software Testing & QA": [
        { q: "Wat is een unit test?", options: ["Een test van een klein, los stuk code", "Een test van een monitor", "Een netwerkscan", "Een wachtwoordcheck"], answer: 0 },
        { q: "Wat is regressietesten?", options: ["Controleren of bestaande functies nog werken na wijzigingen", "Een database wissen", "Een app donker maken", "Een processor vertragen"], answer: 0 },
        { q: "Wat is een test case?", options: ["Een beschreven scenario met stappen en verwachte uitkomst", "Een computerkast", "Een soort kabel", "Een CSS-selector"], answer: 0 },
        { q: "Wat betekent 'mock' in tests?", options: ["Een nepversie van een afhankelijkheid gebruiken", "Een bestand versleutelen", "Een server fysiek verplaatsen", "Een screenshot maken"], answer: 0 },
        { q: "Wat is end-to-end testing?", options: ["Een hele gebruikersflow testen alsof een echte gebruiker de app gebruikt", "Alleen de CSS testen", "Een database indexeren", "Een computer opnieuw installeren"], answer: 0 },
        { q: "Waarom automatiseer je tests?", options: ["Om vaak en snel dezelfde checks betrouwbaar uit te voeren", "Om code geheim te maken", "Om internet sneller te maken", "Om afbeeldingen te comprimeren"], answer: 0 },
        { q: "Wat is een flaky test?", options: ["Een test die soms slaagt en soms faalt zonder echte codewijziging", "Een test met te veel kleuren", "Een test zonder naam", "Een test voor printers"], answer: 0 },
        { q: "Wat is code coverage?", options: ["Een maat voor hoeveel code door tests wordt uitgevoerd", "Een backupmethode", "Een firewallregel", "Een kleurenthema"], answer: 0 }
    ],
    "Privacy & AVG/GDPR": [
        { q: "Waarvoor staat AVG in Nederland?", options: ["Algemene Verordening Gegevensbescherming", "Automatische Virus Gateway", "Algemene Video Generator", "Advanced Virtual Graphics"], answer: 0 },
        { q: "Wat zijn persoonsgegevens?", options: ["Gegevens die direct of indirect naar een persoon herleidbaar zijn", "Alleen wachtwoorden", "Alleen foto's", "Alleen IP-kabels"], answer: 0 },
        { q: "Wat is dataminimalisatie?", options: ["Alleen gegevens verzamelen die echt nodig zijn", "Data kleiner maken met zip", "Alle tabellen verwijderen", "Data in hoofdletters zetten"], answer: 0 },
        { q: "Wat betekent toestemming bij privacywetgeving?", options: ["Vrij, specifiek, geinformeerd en ondubbelzinnig akkoord", "Een standaard aangevinkt vakje dat nooit uit kan", "Een wachtwoordzin", "Een servercertificaat"], answer: 0 },
        { q: "Waarom pseudonimiseer je data?", options: ["Om directe herkenbaarheid van personen te verminderen", "Om data sneller te downloaden", "Om CSS korter te maken", "Om een API openbaar te maken"], answer: 0 },
        { q: "Wat is een datalek?", options: ["Onbedoelde of ongeoorloofde toegang tot persoonsgegevens", "Een lege database", "Een kapotte muis", "Een trage query"], answer: 0 },
        { q: "Wat is het recht op inzage?", options: ["Het recht om te weten welke persoonsgegevens van jou verwerkt worden", "Het recht op gratis hardware", "Het recht om elke server te herstarten", "Het recht om CSS te wijzigen"], answer: 0 },
        { q: "Waarom maak je een verwerkersovereenkomst?", options: ["Om afspraken vast te leggen als een andere partij persoonsgegevens voor jou verwerkt", "Om code sneller te compileren", "Om games te streamen", "Om domeinnamen te kopen"], answer: 0 }
    ],
    "Mobile App Development": [
        { q: "Wat is het verschil tussen native en web app?", options: ["Native draait direct op een platform zoals Android/iOS; web draait in de browser", "Native is altijd gratis", "Web apps hebben geen code", "Native apps werken alleen offline"], answer: 0 },
        { q: "Waarvoor gebruik je responsive layout in mobile apps?", options: ["Om schermen goed te laten werken op verschillende formaten", "Om de accu te vervangen", "Om alle data te wissen", "Om Bluetooth uit te zetten"], answer: 0 },
        { q: "Wat is een push notification?", options: ["Een melding die een app naar de gebruiker kan sturen", "Een knop die harder klikt", "Een soort API key", "Een database index"], answer: 0 },
        { q: "Wat is een app permission?", options: ["Toestemming voor toegang tot bijvoorbeeld camera, locatie of microfoon", "Een CSS-class", "Een serverpoort", "Een hardwaredriver"], answer: 0 },
        { q: "Waarom test je op echte devices naast simulators?", options: ["Echte hardware, prestaties en sensoren kunnen anders reageren", "Simulators bestaan niet", "Echte devices maken code automatisch", "Het is verplicht voor HTML"], answer: 0 },
        { q: "Wat is offline-first design?", options: ["Een app zo ontwerpen dat belangrijke functies ook zonder internet bruikbaar blijven", "Een app zonder scherm", "Een app die nooit update", "Een app alleen voor printers"], answer: 0 },
        { q: "Wat is deep linking?", options: ["Een link die direct naar een specifiek scherm in een app opent", "Een diepe map op de harde schijf", "Een versleutelde wifi-code", "Een donker thema"], answer: 0 },
        { q: "Waarom is batterijverbruik belangrijk bij mobile development?", options: ["Apps die veel stroom gebruiken worden sneller gesloten of verwijderd", "Batterij bepaalt de tekstkleur", "Het vervangt encryptie", "Het maakt databases groter"], answer: 0 }
    ],
    "IT Support & Troubleshooting": [
        { q: "Wat is de eerste stap bij veel storingen?", options: ["Duidelijk vragen wat er precies gebeurt en sinds wanneer", "Direct alles opnieuw installeren", "Alle bestanden wissen", "Een willekeurige kabel loshalen"], answer: 0 },
        { q: "Waarom is reproduceren van een probleem nuttig?", options: ["Je ziet dan welke stappen de fout veroorzaken", "Het maakt de monitor helderder", "Het verandert het wachtwoord", "Het verwijdert logs"], answer: 0 },
        { q: "Wat is een ticket in IT-support?", options: ["Een geregistreerde melding of aanvraag", "Een bioscoopkaartje", "Een soort databasevirus", "Een netwerkpoort"], answer: 0 },
        { q: "Waarom noteer je foutmeldingen exact?", options: ["Omdat de exacte tekst helpt bij zoeken en diagnose", "Omdat ze mooi zijn", "Omdat de server dan sneller draait", "Omdat het verplicht is in CSS"], answer: 0 },
        { q: "Wat controleer je bij 'geen internet' vaak als eerste?", options: ["Verbinding, kabel/wifi, IP-instellingen en routerstatus", "De schermresolutie", "De muismat", "Het lettertype"], answer: 0 },
        { q: "Wat is escaleren in support?", options: ["Een probleem doorzetten naar een specialist of hoger supportniveau", "Een computer optillen", "Een app sluiten", "Een printer vullen"], answer: 0 },
        { q: "Waarom zijn backups belangrijk bij supportwerk?", options: ["Je kunt gegevens herstellen als er iets misgaat", "Ze versnellen altijd wifi", "Ze vervangen wachtwoorden", "Ze maken schermen groter"], answer: 0 },
        { q: "Wat betekent SLA?", options: ["Service Level Agreement", "Secure Login App", "System Link Adapter", "Software Layout Animation"], answer: 0 }
    ],
    "Virtualisatie & Containers": [
        { q: "Wat is virtualisatie?", options: ["Meerdere virtuele systemen draaien op fysieke hardware", "Een scherm schoonmaken", "Een kabel splitsen", "Een wachtwoord delen"], answer: 0 },
        { q: "Wat is een container?", options: ["Een lichte, geisoleerde runtime voor een app met dependencies", "Een fysiek postpakket", "Een SQL-query", "Een soort monitor"], answer: 0 },
        { q: "Wat is Docker?", options: ["Een platform om containers te bouwen en draaien", "Een tekstverwerker", "Een videokaart", "Een netwerkkabel"], answer: 0 },
        { q: "Waarvoor gebruik je een image bij containers?", options: ["Als blauwdruk waaruit containers gestart worden", "Alleen voor foto's", "Om RAM te testen", "Om een printer aan te sturen"], answer: 0 },
        { q: "Wat is een volume in Docker?", options: ["Opslag die data buiten de levensduur van een container kan bewaren", "Het geluidsniveau", "Een CSS-eenheid", "Een soort muis"], answer: 0 },
        { q: "Wat doet Docker Compose?", options: ["Meerdere services/containers samen definieren en starten", "Afbeeldingen bewerken", "Een laptop formatteren", "Een terminal sluiten"], answer: 0 },
        { q: "Wat is Kubernetes vooral?", options: ["Een systeem om containers op schaal te beheren en orkestreren", "Een programmeertaal", "Een cloud-wachtwoord", "Een routermodel"], answer: 0 },
        { q: "Waarom gebruik je environment variables in containers?", options: ["Om configuratie buiten de code instelbaar te maken", "Om CSS te tekenen", "Om hardware te repareren", "Om bestanden te sorteren"], answer: 0 }
    ],
    "Web Performance": [
        { q: "Wat betekent lazy loading?", options: ["Content pas laden wanneer die nodig of zichtbaar wordt", "Een trage programmeur", "Een server uitschakelen", "Een database verwijderen"], answer: 0 },
        { q: "Waarom comprimeer je afbeeldingen voor het web?", options: ["Om laadtijd en dataverbruik te verminderen", "Om HTML te vervangen", "Om het scherm groter te maken", "Om cookies te wissen"], answer: 0 },
        { q: "Wat is caching?", options: ["Data tijdelijk opslaan zodat die sneller opnieuw beschikbaar is", "Een wachtwoord raden", "Een bestand permanent wissen", "Een muisbeweging"], answer: 0 },
        { q: "Wat is minification?", options: ["Overbodige tekens uit code halen om bestanden kleiner te maken", "Een scherm kleiner zetten", "Een database versleutelen", "Een API afsluiten"], answer: 0 },
        { q: "Waarom is render-blocking JavaScript soms slecht voor performance?", options: ["Het kan voorkomen dat de pagina snel zichtbaar wordt", "Het maakt tekst mooier", "Het verhoogt contrast", "Het maakt wachtwoorden sterker"], answer: 0 },
        { q: "Wat meet Largest Contentful Paint (LCP)?", options: ["Wanneer het grootste zichtbare content-element geladen is", "Hoe groot je monitor is", "Hoeveel CSS-klassen je hebt", "Hoe lang een wachtwoord is"], answer: 0 },
        { q: "Wat is een CDN?", options: ["Een netwerk van servers dat content dichter bij gebruikers levert", "Een databasekolom", "Een code-editor", "Een lokaal wachtwoord"], answer: 0 },
        { q: "Waarom bundel je soms CSS en JavaScript?", options: ["Om minder losse requests en betere levering te krijgen", "Om alle code te verbergen", "Om afbeeldingen te tekenen", "Om RAM te vervangen"], answer: 0 }
    ],
    "AI, Media & Prompting": [
        { q: "Wat is een prompt bij AI-tools?", options: ["De opdracht of vraag die je aan het model geeft", "Een netwerkkaart", "Een HTML-tag", "Een kapotte pixel"], answer: 0 },
        { q: "Waarom is context belangrijk in een prompt?", options: ["Het helpt de AI beter begrijpen wat je wilt", "Het zet je scherm helderder", "Het maakt je wifi sneller", "Het verwijdert bestanden"], answer: 0 },
        { q: "Wat is hallucinatie bij AI?", options: ["Wanneer AI iets verzint dat betrouwbaar klinkt maar niet klopt", "Een animatie-effect", "Een soort kabel", "Een databasebackup"], answer: 0 },
        { q: "Wat is een goede manier om AI-output te gebruiken voor schoolwerk?", options: ["Als hulpbron, daarna zelf controleren, begrijpen en aanpassen", "Alles blind inleveren", "Bronnen nooit controleren", "Je naam verwijderen"], answer: 0 },
        { q: "Wat betekent 'bias' in AI?", options: ["Een vertekening in data of uitkomsten", "Een toetsenbordindeling", "Een soort CSS-class", "Een schermresolutie"], answer: 0 },
        { q: "Waarom moet je voorzichtig zijn met persoonsgegevens in AI-tools?", options: ["Je weet niet altijd hoe data verwerkt of bewaard wordt", "AI kan geen tekst lezen", "Persoonsgegevens maken kleuren feller", "Het maakt internet gratis"], answer: 0 },
        { q: "Wat is een iteratieve prompt-aanpak?", options: ["Stap voor stap verbeteren op basis van de vorige output", "Een computer uitzetten", "Een map hernoemen", "Een bestand comprimeren"], answer: 0 },
        { q: "Wat is multimodale AI?", options: ["AI die met meerdere soorten input kan werken, zoals tekst en beeld", "AI met twee wachtwoorden", "Een ouderwetse printer", "Een kapotte database"], answer: 0 }
    ],
    "UX & Toegankelijkheid": [
        { q: "Wat betekent toegankelijkheid in UI-design?", options: ["Dat zoveel mogelijk mensen de interface goed kunnen gebruiken", "Dat alles alleen op mobiel werkt", "Dat tekst heel klein is", "Dat knoppen verborgen zijn"], answer: 0 },
        { q: "Waarom is voldoende kleurcontrast belangrijk?", options: ["Tekst en knoppen blijven beter leesbaar", "Het maakt de server sneller", "Het voorkomt alle hackers", "Het verwijdert afbeeldingen"], answer: 0 },
        { q: "Wat is alt-tekst?", options: ["Tekst die een afbeelding beschrijft voor screenreaders of als de afbeelding niet laadt", "Een alternatief wachtwoord", "Een CSS-grid", "Een cloudfunctie"], answer: 0 },
        { q: "Waarom moeten knoppen duidelijke labels hebben?", options: ["Gebruikers begrijpen sneller wat er gebeurt bij klikken", "Labels maken RAM vrij", "Labels vervangen databases", "Labels blokkeren cookies"], answer: 0 },
        { q: "Wat is responsive design?", options: ["Een layout die goed werkt op verschillende schermgroottes", "Een website die terugpraat", "Een antivirusfunctie", "Een kleurenthema"], answer: 0 },
        { q: "Wat is keyboard navigation?", options: ["Een interface kunnen bedienen met het toetsenbord", "Een toetsenbord schoonmaken", "Een chatbericht sturen", "Een geluidseffect"], answer: 0 },
        { q: "Waarom zijn foutmeldingen het best concreet?", options: ["Dan weet de gebruiker wat er mis is en hoe het opgelost kan worden", "Dan worden ze langer", "Dan verdwijnen bugs vanzelf", "Dan werkt CSS niet meer"], answer: 0 },
        { q: "Wat is een focus state?", options: ["Een zichtbare markering van het element dat actief is via toetsenbord of klik", "Een soort camera", "Een serverstatus", "Een databaseveld"], answer: 0 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 19: Nieuwe tech- en IT-categorieen.
for (let category in extraVragenDeel19) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel19[category]);
    } else {
        questionBank[category] = extraVragenDeel19[category];
    }
}

const extraVragenDeel20 = {
    "Windows Server & Active Directory": [
        { q: "Waarvoor gebruik je Active Directory vooral?", options: ["Gebruikers, computers en rechten centraal beheren", "Afbeeldingen bewerken", "CSS compileren", "Video streamen"], answer: 0 },
        { q: "Wat is een domain controller?", options: ["Een server die authenticatie en directorydiensten voor een domein levert", "Een router voor thuis", "Een type monitor", "Een JavaScript functie"], answer: 0 },
        { q: "Waarvoor gebruik je Group Policy?", options: ["Instellingen en regels centraal toepassen op gebruikers of computers", "Bestanden comprimeren", "Een website stylen", "Een printer fysiek reinigen"], answer: 0 },
        { q: "Wat betekent OU in Active Directory?", options: ["Organizational Unit", "Open Upload", "Output User", "Online Utility"], answer: 0 },
        { q: "Wat is DNS belangrijk voor in een Windows domein?", options: ["Clients vinden domeincontrollers en services via namen", "Het tekent iconen", "Het vervangt RAM", "Het zet laptops uit"], answer: 0 },
        { q: "Wat is Kerberos?", options: ["Een authenticatieprotocol dat tickets gebruikt", "Een bestandssysteem", "Een CSS-framework", "Een backupschijf"], answer: 0 },
        { q: "Waarom geef je gebruikers liever rechten via groepen?", options: ["Groepen maken beheer overzichtelijker en minder foutgevoelig", "Groepen versnellen de CPU", "Groepen wissen logs", "Groepen vervangen antivirus"], answer: 0 },
        { q: "Wat is een roaming profile?", options: ["Een gebruikersprofiel dat op meerdere computers kan meegaan", "Een mobiel abonnement", "Een firewallpoort", "Een SQL-query"], answer: 0 }
    ],
    "PowerShell & Automatisering": [
        { q: "Wat is PowerShell?", options: ["Een shell en scriptingtaal voor beheer en automatisering", "Een tekenprogramma", "Een netwerkstekker", "Een database-engine"], answer: 0 },
        { q: "Wat is een cmdlet?", options: ["Een PowerShell-commando met meestal een Werkwoord-ZelfstandigNaam naam", "Een CSS-selector", "Een videoformaat", "Een soort muis"], answer: 0 },
        { q: "Wat doet Get-Process?", options: ["Lopende processen tonen", "Bestanden verwijderen", "Een website openen", "RAM vervangen"], answer: 0 },
        { q: "Wat is de pipeline in PowerShell?", options: ["Output van het ene commando doorgeven aan het volgende", "Een waterleiding", "Een HTML-formulier", "Een BIOS instelling"], answer: 0 },
        { q: "Waarom gebruik je scripts in beheer?", options: ["Herhaalbaar werk sneller en consistenter uitvoeren", "Meer handmatig klikken", "Wachtwoorden zichtbaar maken", "Monitoren kalibreren"], answer: 0 },
        { q: "Wat doet Where-Object?", options: ["Objecten filteren op voorwaarden", "Een map maken", "Een proces starten zonder parameters", "Een printer delen"], answer: 0 },
        { q: "Wat is een parameter?", options: ["Een waarde die je aan een commando of functie meegeeft", "Een harde schijf", "Een soort kabel", "Een HTTP statuscode"], answer: 0 },
        { q: "Waarom is -WhatIf handig?", options: ["Je ziet wat een actie zou doen zonder het echt uit te voeren", "Het maakt internet sneller", "Het tekent grafieken", "Het zet geluid harder"], answer: 0 }
    ],
    "Frontend Frameworks": [
        { q: "Wat is React vooral?", options: ["Een JavaScript library om user interfaces te bouwen", "Een database", "Een besturingssysteem", "Een netwerkprotocol"], answer: 0 },
        { q: "Wat is een component?", options: ["Een herbruikbaar stuk UI met eigen logica of presentatie", "Een wachtwoord", "Een serverrack", "Een DNS record"], answer: 0 },
        { q: "Wat betekent state in een frontend app?", options: ["Data die de huidige toestand van de UI bepaalt", "Een land", "Een type kabel", "Een printerstatus alleen"], answer: 0 },
        { q: "Waarom gebruik je props?", options: ["Om data van parent naar child component door te geven", "Om CSS te verwijderen", "Om een computer te starten", "Om SQL te versleutelen"], answer: 0 },
        { q: "Wat is routing in een single page app?", options: ["Verschillende schermen tonen op basis van de URL", "Netwerkkabels leggen", "Een harde schijf verdelen", "Een muis instellen"], answer: 0 },
        { q: "Wat doet build tooling zoals Vite?", options: ["Ontwikkeling en bundling van frontend code versnellen", "Een firewall vervangen", "Een database backuppen", "Een scherm poetsen"], answer: 0 },
        { q: "Wat is hydration bij server-rendered apps?", options: ["Client-side JavaScript koppelen aan HTML die al door de server is gerenderd", "Water koelen voor servers", "CSS comprimeren", "Een wachtwoord resetten"], answer: 0 },
        { q: "Waarom splits je code soms in chunks?", options: ["Om niet alle JavaScript in een keer te hoeven laden", "Om bestanden onleesbaar te maken", "Om DNS te vervangen", "Om hardware te repareren"], answer: 0 }
    ],
    "Backend Development": [
        { q: "Wat is middleware in een webserver?", options: ["Code die een request onderweg kan verwerken voordat de route antwoord geeft", "Een monitorstandaard", "Een CSS reset", "Een harde schijf"], answer: 0 },
        { q: "Wat is authenticatie?", options: ["Controleren wie iemand is", "Controleren wat iemand mag", "Een bestand verkleinen", "Een query sorteren"], answer: 0 },
        { q: "Wat is autorisatie?", options: ["Controleren welke acties iemand mag uitvoeren", "Controleren of iemand bestaat", "Een server tekenen", "Een laptop opladen"], answer: 0 },
        { q: "Waarom gebruik je inputvalidatie?", options: ["Om foutieve of gevaarlijke invoer tegen te houden", "Om tekst groter te maken", "Om RAM te wissen", "Om alle cookies toe te staan"], answer: 0 },
        { q: "Wat is een ORM?", options: ["Een laag die objecten in code koppelt aan database-tabellen", "Een netwerkkaart", "Een beeldschermtype", "Een CSS animatie"], answer: 0 },
        { q: "Wat is een background job?", options: ["Werk dat buiten de directe request-response flow wordt uitgevoerd", "Een donker thema", "Een verborgen knop", "Een screenshot"], answer: 0 },
        { q: "Waarom gebruik je logging in backend systemen?", options: ["Om gedrag, fouten en events later te kunnen onderzoeken", "Om code automatisch te vertalen", "Om CSS te laden", "Om hardware te vervangen"], answer: 0 },
        { q: "Wat is idempotentie bij API endpoints?", options: ["Meerdere keren dezelfde request doen geeft hetzelfde eindresultaat", "Elke request moet anders zijn", "Een endpoint mag geen data lezen", "Een server moet offline zijn"], answer: 0 }
    ],
    "Database Ontwerp": [
        { q: "Wat is normalisatie in databases?", options: ["Data structureren om duplicatie en inconsistentie te verminderen", "Alles in een kolom zetten", "Alle indexes verwijderen", "Een database donker maken"], answer: 0 },
        { q: "Wat is een foreign key?", options: ["Een verwijzing naar een primaire sleutel in een andere tabel", "Een wachtwoord uit het buitenland", "Een tijdelijke backup", "Een CSS class"], answer: 0 },
        { q: "Waarom gebruik je indexes?", options: ["Om zoeken en filteren sneller te maken", "Om data mooier te maken", "Om tabellen te verwijderen", "Om RAM te vervangen"], answer: 0 },
        { q: "Wat is een transactie?", options: ["Een groep database-acties die samen slagen of samen teruggedraaid worden", "Een betaalkaart", "Een kleurenschema", "Een netwerkpoort"], answer: 0 },
        { q: "Waar staat ACID voor bij databases?", options: ["Atomicity, Consistency, Isolation, Durability", "Auto Code Internet Data", "Active Cloud Identity Device", "Array Cache Input Disk"], answer: 0 },
        { q: "Wat is denormalisatie?", options: ["Bewust data dubbel opslaan voor performance of eenvoud", "Alles normaler maken", "Alle tabellen wissen", "Een database offline zetten"], answer: 0 },
        { q: "Wat is een migration?", options: ["Een versiebeheerbare wijziging aan het database-schema", "Een verhuizing van vogels", "Een video-export", "Een firewallregel"], answer: 0 },
        { q: "Wat is een composite key?", options: ["Een sleutel die uit meerdere kolommen bestaat", "Een sleutel van plastic", "Een API-token", "Een DNS-record"], answer: 0 }
    ],
    "Observability & Monitoring": [
        { q: "Wat is monitoring?", options: ["Systemen meten en bewaken om problemen snel te zien", "Alleen screenshots maken", "Code mooier kleuren", "Een router installeren"], answer: 0 },
        { q: "Wat is een metric?", options: ["Een meetwaarde zoals CPU-gebruik of responstijd", "Een wachtwoord", "Een HTML-tag", "Een type muis"], answer: 0 },
        { q: "Wat is een log?", options: ["Een chronologische registratie van events of fouten", "Een afbeelding", "Een kabel", "Een spreadsheetformule"], answer: 0 },
        { q: "Wat is tracing?", options: ["Een request door meerdere services volgen", "Een lijn tekenen in Paint", "Een bestand zippen", "Een monitor resetten"], answer: 0 },
        { q: "Waarom stel je alerts in?", options: ["Om automatisch gewaarschuwd te worden bij afwijkingen", "Om CSS sneller te laden", "Om wachtwoorden te delen", "Om servers te verbergen"], answer: 0 },
        { q: "Wat is uptime?", options: ["De tijd dat een systeem beschikbaar is", "De tijd dat iemand wakker is", "De snelheid van een fan", "De grootte van RAM"], answer: 0 },
        { q: "Wat betekent MTTR?", options: ["Mean Time To Recovery/Repair", "Main Terminal Test Route", "Maximum Traffic Transfer Rate", "Manual Ticket Template Rule"], answer: 0 },
        { q: "Waarom gebruik je dashboards?", options: ["Om belangrijke systeemstatussen overzichtelijk te zien", "Om databases te wissen", "Om tekst te vertalen", "Om laptops te laden"], answer: 0 }
    ],
    "Security Operations": [
        { q: "Wat is een SIEM?", options: ["Een systeem dat security logs verzamelt en analyseert", "Een type monitor", "Een CSS framework", "Een backupkabel"], answer: 0 },
        { q: "Wat is incident response?", options: ["Het proces om op security-incidenten te reageren", "Een animatie bij fouten", "Een database-index", "Een printerdriver"], answer: 0 },
        { q: "Wat is IOC in security?", options: ["Indicator of Compromise", "Input Output Cable", "Internet Object Cache", "Internal Office Chat"], answer: 0 },
        { q: "Waarom is logcorrelatie nuttig?", options: ["Losse events samen kunnen een aanvalspatroon tonen", "Het maakt logs korter", "Het verwijdert virussen automatisch", "Het vervangt backups"], answer: 0 },
        { q: "Wat is phishing-detectie?", options: ["Herkennen van verdachte berichten of links die gegevens proberen te stelen", "Vissen tellen", "Een website stylen", "Een server patchen zonder test"], answer: 0 },
        { q: "Wat is least privilege?", options: ["Gebruikers alleen de rechten geven die ze echt nodig hebben", "Iedereen admin maken", "Alle rechten verwijderen", "Alle wachtwoorden gelijk maken"], answer: 0 },
        { q: "Wat is endpoint protection?", options: ["Beveiliging op apparaten zoals laptops en desktops", "Een laatste punt in CSS", "Een database backup", "Een routerkleur"], answer: 0 },
        { q: "Waarom oefen je met tabletop exercises?", options: ["Om incidentrespons te oefenen zonder echte crisis", "Om bureaus te testen", "Om RAM te meten", "Om afbeeldingen te comprimeren"], answer: 0 }
    ],
    "Netwerk Troubleshooting": [
        { q: "Wat test je met ping?", options: ["Of een host bereikbaar is en hoe lang antwoord duurt", "De kleur van een website", "De grootte van een database", "De sterkte van een wachtwoord"], answer: 0 },
        { q: "Wat doet traceroute of tracert?", options: ["De route tonen die pakketten naar een bestemming nemen", "Een bestand tekenen", "Een server uitzetten", "Een backup maken"], answer: 0 },
        { q: "Wat controleer je met ipconfig of ifconfig?", options: ["IP-adres en netwerkconfiguratie", "Schermhelderheid", "CPU-temperatuur", "HTML-validatie"], answer: 0 },
        { q: "Wat is packet loss?", options: ["Pakketten die onderweg verloren gaan", "Bestanden in de prullenbak", "Een volle harde schijf", "Een vergeten wachtwoord"], answer: 0 },
        { q: "Wat is jitter?", options: ["Variatie in vertraging tussen netwerkpakketten", "Een CSS-effect", "Een type RAM", "Een printerfout"], answer: 0 },
        { q: "Waarom controleer je DNS bij verbindingsproblemen?", options: ["Naamomzetting kan stuk zijn terwijl IP-connectiviteit nog werkt", "DNS bepaalt je schermresolutie", "DNS vervangt DHCP", "DNS wist cookies"], answer: 0 },
        { q: "Wat doet nslookup?", options: ["DNS-records opvragen", "Bestanden zoeken", "Schijven formatteren", "Processen stoppen"], answer: 0 },
        { q: "Wat is een duplex mismatch?", options: ["Apparaten gebruiken verschillende duplex-instellingen waardoor netwerkproblemen ontstaan", "Twee monitoren hebben andere kleuren", "Een dubbele database", "Een verkeerd lettertype"], answer: 0 }
    ],
    "ITIL & Servicemanagement": [
        { q: "Wat is incident management?", options: ["Storingen zo snel mogelijk herstellen", "Nieuwe features ontwerpen", "Alle hardware kopen", "CSS testen"], answer: 0 },
        { q: "Wat is problem management?", options: ["Oorzaken van terugkerende incidenten vinden en oplossen", "Tickets sneller sluiten zonder oplossing", "Wachtwoorden delen", "Alle logs verwijderen"], answer: 0 },
        { q: "Wat is change management?", options: ["Wijzigingen gecontroleerd plannen, beoordelen en uitvoeren", "Een thema wisselen", "Een monitor vervangen zonder plan", "Een database willekeurig aanpassen"], answer: 0 },
        { q: "Wat is een CAB?", options: ["Change Advisory Board", "Cloud Access Button", "Central API Backup", "Computer Audio Bus"], answer: 0 },
        { q: "Waarom is een kennisbank nuttig?", options: ["Oplossingen en procedures zijn sneller terug te vinden", "Het maakt CPU's sneller", "Het vervangt netwerkbeheer", "Het wist oude tickets"], answer: 0 },
        { q: "Wat is een service catalogus?", options: ["Een overzicht van beschikbare IT-diensten", "Een lijst met kleuren", "Een verzameling muizen", "Een DNS-cache"], answer: 0 },
        { q: "Wat is een workaround?", options: ["Een tijdelijke oplossing om impact te verminderen", "Een definitieve root cause", "Een wachtwoordreset", "Een type kabel"], answer: 0 },
        { q: "Wat betekent prioriteit in tickets meestal?", options: ["Combinatie van impact en urgentie", "Alleen wie het hardst klaagt", "De leeftijd van de computer", "De lengte van de foutmelding"], answer: 0 }
    ]
};

// MAGIC MERGE SCRIPT DEEL 20: Extra tech- en IT-categorieen.
for (let category in extraVragenDeel20) {
    if (questionBank[category]) {
        questionBank[category].push(...extraVragenDeel20[category]);
    } else {
        questionBank[category] = extraVragenDeel20[category];
    }
}

// Zorg ervoor dat dit he-le-maal onderaan staat:
module.exports = questionBank;
