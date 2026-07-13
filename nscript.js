// TYPE TEXT NOMES
const nome = document.getElementById("cartaconvite");
let i = 0;
const texto = "Carta Convite";

function type() {
  if (i <= texto.length) {
    nome.innerHTML = texto.slice(0, i);
    i++;
    setTimeout(type, 200);
  }
}

type(); // chama apenas uma vez

// COUNTDOWN
const eventDate = new Date("2026-08-15T08:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) return;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);

// MÚSICA
const musica = document.getElementById("musica");
const btn = document.getElementById("btnMusica");

window.addEventListener("load", () => {
  musica.play().then(() => {
    setTimeout(() => musica.muted = false, 500);
  }).catch(() => console.log("Autoplay bloqueado até interação."));
});

btn.addEventListener("click", () => {
  if (musica.paused) {
    musica.play();
    btn.innerHTML = "❚❚";
  } else {
    musica.pause();
    btn.innerHTML = "▶";
  }
});

// 🔹 LINKS DOS CONVITES (Google Drive link direto)
const convites = {
  
  "Matola": "https://drive.google.com/file/d/1_5TG3HJJBV3h8fyOEJAxf_A8KcplmqQ3/view?usp=drive_link",
  "Manhiça": "https://drive.google.com/file/d/1tjR96WhB4eRuXhEUariUiU_NDhl1kDQQ/view?usp=drive_link",
  "Boane": "https://drive.google.com/file/d/1K1pR9GvJ7jG1qVTz5Qn9xR3qxjwkgGsI/view?usp=drive_link",


};

// 🔹 LER ID DA URL
const params = new URLSearchParams(window.location.search);
const convidadoID = params.get("id");

// 🔹 BOTÃO VER CONVITE
document.getElementById("btnPDF").addEventListener("click", function() {

  if (convidadoID && convites[convidadoID]) {
    window.open(convites[convidadoID], "_blank");
  } else {
    alert("Convite não encontrado.");
  }

});






