const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", (event) => {
  jump();
});

document.addEventListener("click", (event) => {
  jump();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(() => {
    dino.classList.remove("jump");
  }, 300);
}

const isAlive = setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  const cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("GAME OVER");
  }
}, 10);
