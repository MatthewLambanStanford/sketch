let color = "black";
let click = true;

createSketchBoard(16);


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
        square.addEventListener(`mouseover`, colorSquare);
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


function randomColor() {
    let pallete = [ "red", "orange", "yellow", 
                    "green", "blue", "purple" ];
    let num = (Math.floor(Math.random() * pallete.length));
    return pallete[num];
}

function colorSquare() {
    if (click) {
        if (color == 'random') {
            this.style.backgroundColor = randomColor();
        } else {
            this.style.backgroundColor = color; 
        }
    }
}

document.querySelector("body").addEventListener(`click`, () => {
    click = !click;
})

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    createSketchBoard(16);
}
