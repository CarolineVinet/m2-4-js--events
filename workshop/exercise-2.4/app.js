const main = document.querySelector("#main");
const buttons = [];
let countDown = 5;
let messageBox = document.createElement("header");
let winStatus = false;

addEventListener("load", function () {
  const startButton = document.createElement("button");
  startButton.innerText = "Start";
  startButton.style.backgroundColor = "yellow";

  startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    let timer = setInterval(function () {
      countDown = countDown - 1;
      messageBox.innerText = countDown;
      if (countDown < 1) {
        clearInterval(timer);
      }
    }, 1000);

    setTimeout(function () {
      if (winStatus === false) {
        let loser = document.createElement("h2");
        loser.innerText = "You Lose";
        main.appendChild(loser);
      }
    }, 6000);

    let randomNum = Math.floor((Math.random() + 1) * 3);

    for (i = 1; i <= randomNum; i++) {
      let button = document.createElement("button");
      button.id = `button-${i}`;
      button.innerText = `${i}`;
      let randomTop = Math.floor(Math.random() * 400);
      button.style.position = "absolute";
      button.style.top = randomTop + "px";
      let randomLeft = Math.floor(Math.random() * 500);
      button.style.left = randomLeft + "px";
      button.style.backgroundColor = "red";
      button.addEventListener("click", function () {
        button.style.backgroundColor = "green";
        buttons.push([button]);
        if (randomNum == buttons.length) {
          winStatus = true;
          let winnerText = document.createElement("h2");
          winnerText.innerText = "You Win!";
          main.appendChild(winnerText);
        }
      });
      main.appendChild(button);
    }
  });
  main.appendChild(startButton);
});
main.appendChild(messageBox);
