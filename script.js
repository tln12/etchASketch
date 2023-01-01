const sketchpad = document.querySelector('.sketchpad');
const gridSizeBtn = document.querySelectorAll('.grid-size');

let squares = document.querySelectorAll('.square');
let num;
let gridSize;

function createGrid(squaresPerRow){

    let pressed;

    let totalSquares = squaresPerRow ** 2;
    for (let i = 0; i < totalSquares; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        div.style.width = `${1/squaresPerRow * 100}%`
        sketchpad.appendChild(div);
    }
    squares = document.querySelectorAll('.square');

    function mousedown(){
        pressed = true;
    }
    function mouseup(){
        pressed = false;
    }
    function mousemove() {
        if(pressed){
            this.style.backgroundColor = "red";
        }
    }

    sketchpad.addEventListener('mousedown', mousedown)
    sketchpad.addEventListener("mouseup", mouseup)
    squares.forEach(b => b.addEventListener('mousemove', mousemove));

}

function removeGrid(){

    squares = document.querySelectorAll('.square');
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

createGrid(32);




// square_two = Array.from(document.getElementsByClassName('square'));
// // console.log(square_two[0]);
// square_two.forEach(b => b.addEventListener('click', () => {
//     console.log("clicked");
// }));

