const gridContainer = document.querySelector(".grid-container");

let boxDiv = document.createElement("div");
boxDiv.classList.add("box");

for (let i = 0; i < 256; i++) {
  gridContainer.appendChild(boxDiv.cloneNode(true));
}

boxDiv.addEventListener();
