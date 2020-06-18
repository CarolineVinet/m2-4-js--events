const game = document.querySelector("body");
const result = document.querySelector("#result");
const time = document.querySelector("#time");

let winner = false;
let loser = false;
let randomNum = Math.floor(Math.random() * 5000);
let numDisplay = Math.floor(randomNum / 1000);
time.innerText = numDisplay;

addEventListener("click", function () {
  if (loser === false) {
    result.innerText = " You Win!";
    winner = true;
  }
});

setTimeout(function () {
  if (winner === false) {
    result.innerText = "You Lose!";
    loser = true;
  }
}, randomNum);
