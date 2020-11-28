"use strict";
let againButton = document.querySelector(".again");
let messageText = document.querySelector(".message");
let body = document.querySelector("body");
let number = document.querySelector(".number");
let scoreText = document.querySelector(".score");
let guessText = document.querySelector(".guess");
let highScoreText = document.querySelector(".highscore");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

againButton.addEventListener("click", resetGame);
document.querySelector(".check").addEventListener("click", game);

function game() {
  let guess = Number(guessText.value);
  if (!guess) {
    messageText.textContent = "No number";
  } else if (guess === secretNumber) {
    messageText.textContent = "Correct number";
    body.style.backgroundColor = "#68b347";
    number.style.width = "30rem";
    number.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreText.textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      messageText.textContent = "Too high";
      score--;
      scoreText.textContent = score;
    } else {
      messageText.textContent = "You lost the game";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      messageText.textContent = "Too low";
      score--;
      scoreText.textContent = score;
    } else {
      messageText.textContent = "You lost the game";
    }
  }
}

function resetGame() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  messageText.textContent = "Start guessing...";
  body.style.backgroundColor = "#222222";
  number.style.width = "15rem";
  number.textContent = "?";
  scoreText.textContent = score;
  guessText.value = "";
}
