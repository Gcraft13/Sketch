const container = document.querySelector(".container");

function fillRow() {
  for (let i = 0; i < 16; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    block.addEventListener("mouseenter", () => {
      block.classList.add("colored");
    });
  }
}

function createGrid() {
  for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
  }
}

createGrid();
