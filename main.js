'use strict';
const board = document.querySelector('#board');
const colors = ['#FBD1D3','#F198AF','#EBB2D6','#9F81CD','#766DC1'];
const squaresNumber = 900;
for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mouseover', () => 
    setColor(square));

    square.addEventListener('mouseleave', () => 
    removeColor(square));

    board.append(square);
}

function setColor(element){
    const color = randomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0px 0px 30px ${color}`;
}

function removeColor(element){
    element.style.backgroundColor = "rgb(53, 53, 53)";
    element.style.boxShadow = `0px 0px 2px black`;
}

function randomColor(){
    const id = Math.floor(Math.random() * colors.length);
    return colors[id];
}