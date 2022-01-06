const grid = document.querySelector('#grid');
const color = document.querySelector('#color');
const clean = document.querySelector('#clean');
const range = document.querySelector('#rangeValue')

// equal column and row 
grid.style.gridTemplateRows = `repeat(${range.value}, 1fr)`
grid.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`

// to choose color
function colorTrail(clr){
    clr.addEventListener('mouseover', function(e){
        this.style.backgroundColor = color.value
    })
}
// to clear screen 
function clnBtn(clearScreen){
    clean.addEventListener('click', function(){
        clearScreen.style.backgroundColor = 'white'        
    })
}






let x = range.value * range.value
for(i=1; i <= x; i++){
    const div = document.createElement('div')
    div.classList.add('square')
    grid.insertAdjacentElement('beforeend', div)
    colorTrail(div)
    clnBtn(div)
}
