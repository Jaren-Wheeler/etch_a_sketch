/* Written by Jaren Wheeler - Nov. 28, 2023 */


 (function() {
    
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

            gridElement.addEventListener("mouseover", () => gridElement.style.backgroundColor="#00ff00");
        }
        return grid;
    }


    // Initializes the buttons and gives them functionality for creating and resettng the board.
    let playGame = () => {
        let startBtn = document.querySelector(".start-btn");
        let resetBtn = document.querySelector(".reset-btn");

        startBtn.addEventListener("click", () => {
            const dimension =  prompt("Enter a number n for an n x n grid: ");
            createGrid(dimension);

        })

        resetBtn.addEventListener("click", () => {
            location.reload();
        })
    ;}

    playGame();

 }) () 





