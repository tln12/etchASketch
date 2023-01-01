const sketchpad = document.querySelector('.sketchpad');
const gridSizeBtn = document.querySelectorAll('.grid-size');
const colors = document.querySelectorAll('.color');
const clear = document.querySelector('#clear');

let squares;
let num;
let pressed;
let color = "black";
let gridSize;

function mousedown(){
    pressed = true;
}
function mouseup(){
    pressed = false;
}
function mousemove() {
    if(pressed){
        this.style.backgroundColor = color;
    }
}
function mouseclick(){
    this.style.backgroundColor = color;
}

function createGrid(squaresPerRow){
    let totalSquares = squaresPerRow ** 2;
    for (let i = 0; i < totalSquares; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        div.style.width = `${1/squaresPerRow * 100}%`
        sketchpad.appendChild(div);
    }
    squares = document.querySelectorAll('.square');
    squares.forEach(b => b.addEventListener('mousemove', mousemove));
    squares.forEach(b => b.addEventListener('click', mouseclick));
}

function removeGrid(){
    for (let i = 0; i < squares.length; i++){
        sketchpad.removeChild(squares[i]);
    }
}
gridSizeBtn.forEach(btn => btn.addEventListener('click', () => {
    removeGrid();
    gridSize = btn.id;
    createGrid(gridSize);
    })
);

colors.forEach(btn => btn.addEventListener('click', () => {
    switch(btn.id){
        case 'yellow': color = '#F7D002'; break;
        case 'green': color = '#297373'; break;
        case 'black': color = '#1A281F'; break;
        case 'blue': color = '#2E5EAA'; break;
        case 'red': color = '#BF1A2F'; break;
        case 'eraser': color = 'white'; break;
    }
}));

clear.addEventListener('click', () => {
    removeGrid();
    createGrid(gridSize);
});

// Initial grid
createGrid(32);

sketchpad.addEventListener('mousedown', mousedown);
sketchpad.addEventListener("mouseup", mouseup);

