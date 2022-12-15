const btn = document.querySelector('button');
const container = document.querySelector('.container');
let num;

btn.addEventListener('click', () => {

    do {
        num = Number(prompt("Type in the number of squares per side of the grid (max. 100)."));
    } while (isNaN(num) || num > 100);
    removeGrid();
    createGrid(num);
})

function createGrid(squaresPerRow){
    let squareWidth;
    squares = squaresPerRow ** 2;
    for (let i = 0; i < squares; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        squareWidth = 1/squaresPerRow * 100;
        div.style.width = `${squareWidth}%`
        container.appendChild(div);
    }
}

function removeGrid(){
    const squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++){
        container.removeChild(squares[i]);
    }
}

createGrid(4);