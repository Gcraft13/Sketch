const grid = document.querySelector("#container");
let blocks = 16;
const resetBtn = document.querySelector(".reset");

function createDiv() {
  for (let i = 1; i <= blocks; i++) {
    let subDiv = document.createElement("div");
    subDiv.classList.add("subDiv");
    for (let j = 1; j < blocks; j++) {
      let div = document.createElement("div");
      div.classList.add("box");
      subDiv.appendChild(div);
    }
    grid.appendChild(subDiv);
  }
}

createDiv();

const newDiv = document.querySelectorAll(".box");

newDiv.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("hover");
  });
});

resetBtn.addEventListener("click", function () {
  newDiv.forEach((button) => {
    button.classList.remove("hover");
  });
});
