const message = document.querySelector("body");
const winMessage = document.querySelector("p");
const quicker = document.createElement("h2");
let winner = false;
let loser = false;

quicker.innerText = "Be a quicker clicker!";

message.appendChild(quicker);

addEventListener("click", function () {
  if (loser === false) {
    winMessage.innerText = "You Win!";
    winner = true;
  }
});

setTimeout(function () {
  if (winner === false) {
    winMessage.innerText = " You Lose!";
    loser = true;
  }
}, 3000);
