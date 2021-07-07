"use strict";

let score = 20;

let secretNumber = Math.round(Math.random() * 20) + 1;

let highscore = 0;

console.log(secretNumber);

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number entered!";
  } else if (guess === secretNumber) {
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".message").textContent = "Correct Number!!";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess < secretNumber ? "Too low." : "Too High.";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost! :( ";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;

  secretNumber = Math.round(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
