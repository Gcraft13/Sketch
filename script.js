const grid = document.querySelector("#container");
let blocks = 16;
let numberOfBlocks = parseInt(
  prompt(
    "Please insert the size of the grid you want as a number. Ex: 16 for 16x16"
  )
);
const resetBtn = document.querySelector(".reset");
const newGridBtn = document.querySelector(".newGrid");

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

function removeDiv() {
  newDiv.forEach((button) => {
    button.remove();
  });
}

function newGrid(numberOfBlocks) {
  removeDiv();
  for (i = 0; i <= numberOfBlocks; i++) {
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

newGridBtn.addEventListener("click", function () {
  newGrid(numberOfBlocks);
  newDiv.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("hover");
    });
  });
});
