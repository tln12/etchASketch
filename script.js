

const btn = document.querySelector('button');
let num;
btn.addEventListener('click', () => {

    do {
        num = Number(prompt("Type in the number of squares per side of the grid (max. 100)."));
    } while (isNaN(num) || num > 100);

    return num;
})

function createGrid(squaresPerRow){
    const container = document.querySelector('.container');
    squares = squaresPerRow ** 2;
    for (let i = 0; i < squares; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        container.appendChild(div);
    }
}

createGrid(4);