const main = document.querySelector("#main");
const buttons = [];

for (i = 1; i <= 20; i++) {
  let button = document.createElement("button");
  buttons.push([button]);
  button.id = `button-${i}`;
  button.innerText = `${i}`;
  let randomTop = Math.floor(Math.random() * 400);
  button.style.position = "absolute";
  button.style.top = randomTop + "px";
  let randomLeft = Math.floor(Math.random() * 500);
  button.style.left = randomLeft + "px";
  button.style.backgroundColor = "red";
  button.addEventListener("click", function () {
    if (button.style.backgroundColor === "green") {
      button.style.backgroundColor = "red";
    } else if (button.style.backgroundColor === "red") {
      button.style.backgroundColor = "green";
    }
  });

  main.appendChild(button);
}
