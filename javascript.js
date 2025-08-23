function createSketchBoard(size) {
    // DOM creates board of user input size
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // loop to create 256 divs for row/col
    let boardSize = size ** 2;
    for (let i = 0; i < boardSize; i++) {
        let square = document.createElement("div");
        square.addEventListener(`click`, colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement('beforeend', square);
    }
};

function changeSize(userInput) {
    if (userInput >= 2 && userInput <= 150) {
        createSketchBoard(userInput);
    } else {
        console.log("ERROR: Please keep input  2 <= input <= 150");
    }
}

function colorSquare() {
    this.style.backgroundColor = "black";
}