const btn = document.querySelector('button');
let num;
btn.addEventListener('click', () => {

    do {
        num = Number(prompt("Type in the number of squares per side of the grid (max. 100)."));
    } while (isNaN(num) || num > 100);

    createGrid(num);
})

function createGrid(squaresPerRow){
    const container = document.querySelector('.container');
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

createGrid(10);