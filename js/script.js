const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const home = document.getElementById("home");
const yesScreen = document.getElementById("yesScreen");
const container = document.querySelector(".container");

function moveNoButton() {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const padding = 20;

  const maxX = containerRect.width - btnRect.width - padding;
  const maxY = containerRect.height - btnRect.height - padding;

  // Jump FARTHER by re-rolling until distance is big
  let randomX, randomY;
  do {
    randomX = Math.random() * maxX;
    randomY = Math.random() * maxY;
  } while (
    Math.abs(randomX - btnRect.left) < 100 &&
    Math.abs(randomY - btnRect.top) < 60
  );

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Desktop: reacts BEFORE you touch it
noBtn.addEventListener("mousemove", moveNoButton);

// Mobile: reacts as soon as finger approaches
noBtn.addEventListener("touchmove", (e) => {
  e.preventDefault();
  moveNoButton();
});

// Extra safety: block clicks completely
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
});

yesBtn.addEventListener("click", () => {
  home.classList.add("hidden");
  yesScreen.classList.remove("hidden");
  setInterval(createHeart, 250);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}
