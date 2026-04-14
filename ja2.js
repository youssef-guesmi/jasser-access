// TON MESSAGE PERSONNEL
const finalMessage = "USER://JASSER_ROOT > Salut joujou ! Même si tu es à Montréal aujourd'hui pour tes 18 ans, sache que la distance ne change rien. On a commencé ce parcours ensemble en informatique et je suis fier de voir où tu en es. Profite à fond de ta journée là-bas. Joyeux anniversaire Jasser, t'es le meilleur ! [FIN_TRANSMISSION]";

const SECRET_CODE = "Root_BestFriends_18";
let charIndex = 0;

// 1. LE DEUXIÈME CODE SECRET (Easter Egg)
const EASTER_EGG_CODE = "BROTHERS_FOR_LIFE"; 

// 2. LA LISTE DE TES PHOTOS
// Remplace ta ligne photoList par celle-ci :
const photoList = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg"];
// Mise à jour des horloges
function updateClocks() {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const tunisTime = new Date().toLocaleTimeString('fr-FR', { ...options, timeZone: 'Africa/Tunis' });
    const mtlTime = new Date().toLocaleTimeString('fr-FR', { ...options, timeZone: 'America/Toronto' });
    
    if(document.getElementById('tunis-time')) document.getElementById('tunis-time').innerText = tunisTime;
    if(document.getElementById('montreal-time')) document.getElementById('montreal-time').innerText = mtlTime;
}

setInterval(updateClocks, 1000);

function jarvisSpeak(message) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(message);
    msg.lang = 'fr-FR';
    msg.rate = 0.9;
    msg.pitch = 0.4;
    window.speechSynthesis.speak(msg);
}

function authenticate() {
    const inputField = document.getElementById('password');
    const val = inputField.value;

    if(val === SECRET_CODE) {
        jarvisSpeak("Accès autorisé. Bonjour Jasser.");
        revealBdayProtocol(); // <--- Corrigé ici (le nom doit correspondre à la fonction plus bas)
    } 
    else if(val === EASTER_EGG_CODE) {
        authenticateEasterEgg();
    }
    else {
        document.getElementById('error-msg').innerText = "ACCÈS REFUSÉ";
        jarvisSpeak("Accès refusé.");
    }
}

function authenticateEasterEgg() {
    jarvisSpeak("Protocole Nostalgie activé.");
    document.getElementById('password').value = "";
    triggerHolographicRain();
}

function triggerHolographicRain() {
    console.log("DÉPLOIEMENT CIRCULAIRE DES ARCHIVES...");
    const container = document.body;
    jarvisSpeak("Affichage des archives mémorielles. Optimisation de l'espace visuel.");

    const totalPhotos = photoList.length;
    const centerX = 50; // Centre de l'écran (50%)
    const centerY = 50; // Milieu de l'écran (50%)
    const radiusX = 30; // Distance horizontale du centre (30%)
    const radiusY = 25; // Distance verticale du centre (25%)

    photoList.forEach((photoUrl, index) => {
        const holoBox = document.createElement('div');
        holoBox.className = 'hologram-container';
        
        const img = document.createElement('img');
        img.src = photoUrl;
        img.className = 'hologram-photo';
        
        const dataTag = document.createElement('div');
        dataTag.className = 'hologram-data';
        dataTag.innerText = `> MEM_SCAN_${index + 1}`;

        holoBox.appendChild(img);
        holoBox.appendChild(dataTag);

        // --- CALCUL MATHÉMATIQUE POUR RÉPARTIR LES PHOTOS ---
        // On place les photos sur un cercle (360 degrés / nombre de photos)
        const angle = (index / totalPhotos) * 2 * Math.PI;
        const xPos = centerX + radiusX * Math.cos(angle);
        const yPos = centerY + radiusY * Math.sin(angle);

        // On ajuste pour que le centre de la photo soit sur le point (centrage)
        holoBox.style.left = (xPos - 10) + "%"; 
        holoBox.style.top = (yPos - 15) + "%";
        
        let randomRotate = (Math.random() * 10 - 5) + 'deg';
        holoBox.style.transform = `scale(0.5) rotate(${randomRotate})`;

        container.appendChild(holoBox);

        // Apparition une par une
        setTimeout(() => {
            holoBox.classList.add('active');
            // On enlève le transform manuel pour laisser le CSS (et le hover) gérer
            holoBox.style.transform = `rotate(${randomRotate})`; 
        }, index * 500);

        // Elles restent affichées plus longtemps (15 secondes) pour bien les voir
        setTimeout(() => {
            holoBox.classList.add('exit');
            setTimeout(() => holoBox.remove(), 600);
        }, 15000 + (index * 500)); 
    });
}

function revealBdayProtocol() {
    document.getElementById('lock-screen').style.display = "none";
    document.getElementById('reveal-screen').classList.remove('hidden');
    
    const frame = document.getElementById('main-frame');
    frame.style.width = "950px"; 
    
    document.getElementById("typing-text").innerHTML = "";
    charIndex = 0;
    
    setTimeout(startTyping, 1000);
}

function startTyping() {
    const textElement = document.getElementById("typing-text");
    if (textElement && charIndex < finalMessage.length) {
        textElement.innerHTML += finalMessage.charAt(charIndex);
        charIndex++;
        setTimeout(startTyping, 40);
    }
}

window.onload = updateClocks;
console.log("%c ACCÈS RESTREINT ", "color: #0096ff; font-size: 20px; font-weight: bold; background: #000a14;");
console.log("%c Tentative d'intrusion détectée... Bonjour Jasser.", "color: #0055ff;");