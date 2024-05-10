const grid = document.querySelector("#container");
let blocks = 16;
const newDiv = document.querySelectorAll(".box");

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

newdiv.forEach((button) => {
  button.addEventListener("mouseover", () => {});
});

createDiv();
