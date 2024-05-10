const grid = document.querySelector("#container");

const resetBtn = document.querySelector(".reset");
const newGridBtn = document.querySelector(".newGrid");

function createDiv() {
  let numberOfBlocks = parseInt(
    prompt(
      "Please insert the size of the grid you want as a number. Ex: 16 for 16x16"
    )
  );
  for (let i = 1; i <= numberOfBlocks; i++) {
    let subDiv = document.createElement("div");
    subDiv.classList.add("subDiv");
    for (let j = 1; j <= numberOfBlocks; j++) {
      let div = document.createElement("div");
      div.classList.add("box");
      subDiv.appendChild(div);
    }
    grid.appendChild(subDiv);
  }
}

createDiv();

const newDiv = document.querySelectorAll(".box");
const thirdDiv = document.querySelectorAll(".subDiv");

newDiv.forEach((button) => {
  button.addEventListener("mouseover", () => {
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
  thirdDiv.forEach((button) => {
    button.remove();
  });
}

function newGrid(numberOfBlocks) {
  removeDiv();
  for (i = 0; i <= numberOfBlocks; i++) {
    let subDiv = document.createElement("div");
    subDiv.classList.add("subDiv");
    for (let j = 1; j <= numberOfBlocks; j++) {
      let div = document.createElement("div");
      div.classList.add("box");
      subDiv.appendChild(div);
    }
    grid.appendChild(subDiv);
  }
}

newGridBtn.addEventListener("click", function () {
  removeDiv();
  createDiv();
  newDiv.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.classList.add("hover");
    });
  });
});
