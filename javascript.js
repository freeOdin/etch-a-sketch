function setGrid(size) {
  numRows = size;
  numCols = size;

  for (let row = 1; row <= numRows; row++) {
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    container.appendChild(newRow);

    for (let col = 1; col <= numCols; col++) {
      let newSqr = document.createElement("div");
      newSqr.classList.add("square");
      newSqr.addEventListener("mouseover", () => newSqr.style.backgroundColor = "yellow");
      newSqr.addEventListener("mouseout", () => newSqr.style.backgroundColor = "");
      newRow.appendChild(newSqr);
    }
  }
}

function resetGrid() {
  let newSize = 101;

  while (newSize > 100) {
    newSize = prompt("Enter how many rows you would like in the new grid (max 100): ");
  }
  container.innerHTML = "";
  setGrid(newSize);
}

const container = document.querySelector(".container");

const button = document.querySelector("#button");
button.addEventListener("click", resetGrid);

setGrid(5);

