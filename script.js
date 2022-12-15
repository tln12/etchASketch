const container = document.querySelector('.container');

for (let i = 0; i < 16; i++){
    const div = document.createElement('div');
    div.setAttribute('class', 'square');
    container.appendChild(div);
}

const btn = document.querySelector('button');
let num;
btn.addEventListener('click', () => {

    do {
        num = Number(prompt("Type in the number of squares per side of the grid (max. 100)."));
    } while (isNaN(num) || num > 100);

    return num;
})
