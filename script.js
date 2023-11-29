/* Written by Jaren Wheeler - Nov. 28, 2023 */


let win = document.querySelector(".window");

// Creates the grid. Takes an input of grid dimension (inputting n gives nxn grid). Returns an n-length array of divs with classes.
let createGrid = (gridDim) => {
    const gridSize = gridDim**2; 
    const widthAndHeight = 100 / gridDim;
    let grid = [];
    for (let i = 0; i<gridSize; i++) {
        let gridElement = document.createElement("div");
        gridElement.setAttribute("class","gridElement square" + String(i+1));
        win.appendChild(gridElement);
        gridElement.style.width = `${widthAndHeight}%`;
        gridElement.style.height = `${widthAndHeight}%`;
        grid.push(gridElement);
    }
    return grid;
}


let gridEffects = (grid) => {
    
}
let grid = createGrid(2);

/*let square1Hover = grid[0].addEventListener("mouseover", () => square1.style.backgroundColor = "#00ff00");
let square2Hover = grid[1].addEventListener("mouseover", () => square2.style.backgroundColor = "#00ff00");
let square3Hover = grid[2].addEventListener("mouseover", () => square3.style.backgroundColor = "#00ff00");
let square4Hover = grid.addEventListener("mouseover", () => square4.style.backgroundColor = "#00ff00");
let square5Hover = square5.addEventListener("mouseover", () => square5.style.backgroundColor = "#00ff00");
let square6Hover = square6.addEventListener("mouseover", () => square6.style.backgroundColor = "#00ff00");
let square7Hover = square7.addEventListener("mouseover", () => square7.style.backgroundColor = "#00ff00");
let square8Hover = square8.addEventListener("mouseover", () => square8.style.backgroundColor = "#00ff00");
let square9Hover = square9.addEventListener("mouseover", () => square9.style.backgroundColor = "#00ff00");
let square10Hover = square10.addEventListener("mouseover", () => square10.style.backgroundColor = "#00ff00");
let square11Hover = square11.addEventListener("mouseover", () => square11.style.backgroundColor = "#00ff00");
let square12Hover = square12.addEventListener("mouseover", () => square12.style.backgroundColor = "#00ff00");
let square13Hover = square13.addEventListener("mouseover", () => square13.style.backgroundColor = "#00ff00");
let square14Hover = square14.addEventListener("mouseover", () => square14.style.backgroundColor = "#00ff00");
let square15Hover = square15.addEventListener("mouseover", () => square15.style.backgroundColor = "#00ff00");
let square16Hover = square16.addEventListener("mouseover", () => square16.style.backgroundColor = "#00ff00"); */


