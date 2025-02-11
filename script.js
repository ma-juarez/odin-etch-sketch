const board = document.querySelector(".board");

// Grid Creation
function createGrid (ncols, nrows) {
    
    if (ncols > 100) {
        ncols = 100
    } else if (nrows > 100) {
        nrows = 100
    }
    
    board.style.display = "grid";
    board.style["grid-template-columns"] = `repeat(${ncols}, 1fr)`;
    board.style["grid-template-rows"] = `repeat(${nrows}, 1fr)`;



    for (let i = 0; i <= ncols*nrows-1; i++) {
    const div = document.createElement("div");
    div.style.background = "white";

    board.appendChild(div);
    }

    // Event Listener to detect hover and color
    const divs = board.querySelectorAll("div");

    // we use the .forEach method to iterate through each button
    divs.forEach((div) => {
    // and for each one we add a 'click' listener
    div.addEventListener("mouseover", () => {
        div.style.background = "black";
    });
    });

}

function cleanGrid() {
    const divs = board.querySelectorAll("div");

    divs.forEach((div) => {
        div.style.background = "white"
    })
}

createGrid (16, 16)


// Change Grid Size
const gridSize = document.querySelector(".grid-size")

gridSize.addEventListener("click", () => {
    let ncol = prompt("Select number of columns:")
    let nrow = prompt("Select number of rows")

    createGrid(ncol, nrow)
});

// Clear Grid 
const restart = document.querySelector(".restart")

restart.addEventListener("click", () => {
    cleanGrid()
});