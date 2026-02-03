const lockScreen = document.getElementById("lockScreen");
const home = document.getElementById("home");
const yesScreen = document.getElementById("yesScreen");

const heartHold = document.getElementById("heartHold");
const heartFill = document.getElementById("heartFill");

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const bgMusic = document.getElementById("bgMusic");

/* ❤️ HOLD TO UNLOCK */
let holdTime = 0;
let holdInterval;

function startHold() {
  holdInterval = setInterval(() => {
    holdTime += 100;
    heartFill.style.height = (holdTime / 3000) * 100 + "%";

    if (holdTime >= 3000) {
      clearInterval(holdInterval);
      lockScreen.classList.add("hidden");
      home.classList.remove("hidden");
    }
  }, 100);
}

function stopHold() {
  clearInterval(holdInterval);
  holdTime = 0;
  heartFill.style.height = "0%";
}

heartHold.addEventListener("mousedown", startHold);
heartHold.addEventListener("mouseup", stopHold);
heartHold.addEventListener("mouseleave", stopHold);

heartHold.addEventListener("touchstart", (e) => {
  e.preventDefault();
  startHold();
});

heartHold.addEventListener("touchend", (e) => {
  e.preventDefault();
  stopHold();
});


/* 🏃 NO BUTTON */
function moveNoButton() {
  const box = home.getBoundingClientRect();
  noBtn.style.left = Math.random() * (box.width - 150) + "px";
  noBtn.style.top = Math.random() * (box.height - 80) + "px";
}

noBtn.addEventListener("mousemove", moveNoButton);
noBtn.addEventListener("touchmove", moveNoButton);
noBtn.addEventListener("click", e => e.preventDefault());

/* 💖 YES BUTTON */
yesBtn.addEventListener("click", () => {
  home.classList.add("hidden");
  yesScreen.classList.remove("hidden");

  bgMusic.play();
  setInterval(createHeart, 250);
  setInterval(fireworks, 300);

  startSlideshow();
  typeLetter();
});

/* ❤️ Hearts */
function createHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}

/* 🎆 Fireworks */
function fireworks() {
  const f = document.createElement("div");
  f.className = "firework";
  f.innerHTML = "🎆";
  f.style.left = Math.random() * 100 + "vw";
  f.style.top = Math.random() * 100 + "vh";
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 1500);
}

/* 📸 Slideshow */


/* 💌 Love Letter */
const letterText = `Manaswi ❤️
From the moment you came into my life,
everything feels warmer and brighter.
This page is small,
but my love for you is endless 💖`;

function typeLetter() {
  const el = document.getElementById("loveLetter");
  let i = 0;
  el.innerHTML = "";

  const t = setInterval(() => {
    el.innerHTML += letterText.charAt(i++);
    if (i >= letterText.length) clearInterval(t);
  }, 50);
}
