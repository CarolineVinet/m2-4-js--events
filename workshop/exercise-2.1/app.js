const main = document.querySelector("#main");
const buttons = [];

for (i = 1; i <= 20; i++) {
  let button = document.createElement("button");
  buttons.push([button]);
  button.id = `button-${i}`;
  button.innerText = `${i}`;
  button.style.backgroundColor = "red";
  button.addEventListener("click", function () {
    button.style.backgroundColor = "green";
  });

  main.appendChild(button);
}
