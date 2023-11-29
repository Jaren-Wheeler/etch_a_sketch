/* Written by Jaren Wheeler - Nov. 28, 2023 */


let win = document.querySelector(".window");

// Creates the grid. Takes an input of grid dimension (inputting n gives nxn grid). Returns an n-length array of divs.
let createGrid = (gridDim) => {
    const gridSize = gridDim**2; 
    let grid = [];
    for (let i = 0; i<gridSize; i++) {
        let gridElement = document.createElement("div");
        grid.push(gridElement);
    }
}



/*let square1 = document.createElement("div");
let square2 = document.createElement("div");
let square3 = document.createElement("div");
let square4 = document.createElement("div");
let square5 = document.createElement("div");
let square6 = document.createElement("div");
let square7 = document.createElement("div");
let square8 = document.createElement("div");
let square9 = document.createElement("div");
let square10 = document.createElement("div");
let square11 = document.createElement("div");
let square12 = document.createElement("div");
let square13 = document.createElement("div");
let square14 = document.createElement("div");
let square15 = document.createElement("div");
let square16 = document.createElement("div");

square1.setAttribute("class", "square1");
square2.setAttribute("class", "square2");
square3.setAttribute("class", "square3");
square4.setAttribute("class", "square4");
square5.setAttribute("class", "square5");
square6.setAttribute("class", "square6");
square7.setAttribute("class", "square7");
square8.setAttribute("class", "square8");
square9.setAttribute("class", "square9");
square10.setAttribute("class", "square10");
square11.setAttribute("class", "square11");
square12.setAttribute("class", "square12");
square13.setAttribute("class", "square13");
square14.setAttribute("class", "square14");
square15.setAttribute("class", "square15");
square16.setAttribute("class", "square16");

win.appendChild(square1);
win.appendChild(square2);
win.appendChild(square3);
win.appendChild(square4);
win.appendChild(square5);
win.appendChild(square6);
win.appendChild(square7);
win.appendChild(square8);
win.appendChild(square9);
win.appendChild(square10);
win.appendChild(square11);
win.appendChild(square12);
win.appendChild(square13);
win.appendChild(square14);
win.appendChild(square15);
win.appendChild(square16);

let square1Hover = square1.addEventListener("mouseover", () => square1.style.backgroundColor = "#00ff00");
let square2Hover = square2.addEventListener("mouseover", () => square2.style.backgroundColor = "#00ff00");
let square3Hover = square3.addEventListener("mouseover", () => square3.style.backgroundColor = "#00ff00");
let square4Hover = square4.addEventListener("mouseover", () => square4.style.backgroundColor = "#00ff00");
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
let square16Hover = square16.addEventListener("mouseover", () => square16.style.backgroundColor = "#00ff00");*/


