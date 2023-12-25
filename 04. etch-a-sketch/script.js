const grid = document.querySelector(".grid");

// Toolbar Buttons:
const pen = document.getElementById("pen");
const eraser = document.getElementById("eraser");
const colorPicker = document.getElementById("color-picker");
const clear = document.getElementById("clear");
const range = document.getElementById("range");
const dimensions = document.querySelector(".dimensions");

let penSelected = false;
let eraserSelected = false;
range.value = 15;
const rowNum = 15;

// ///////////////////////////////////////////////////////
start();

range.addEventListener("input", () => {
  dimensions.textContent = `${rowNum}x${range.value}`;

  grid.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`;
  start();

  clearGrid();
  start();
});

pen.addEventListener("click", () => {
  pen.classList.add("selected");
  eraser.classList.remove("selected");
  colorPicker.classList.remove("selected");
  penSelected = true;
});

eraser.addEventListener("click", () => {
  eraser.classList.add("selected");
  pen.classList.remove("selected");
  colorPicker.classList.remove("selected");
  eraserSelected = true;
  penSelected = false;
});

function start() {
  for (let i = 0; i < rowNum * range.value; i++) {
    let boxDiv = document.createElement("div"); // Create a new div element for each iteration
    boxDiv.classList.add("box");

    boxDiv.addEventListener("click", () => {
      if (penSelected) {
        boxDiv.classList.add("black-dot");
      } else if (eraserSelected) {
        boxDiv.classList.remove("black-dot");
      }
    });

    grid.appendChild(boxDiv);
  }
}

function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}
