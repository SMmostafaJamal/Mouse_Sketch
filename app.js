const container = document.getElementById('container');
const box = document.createElement('div');
const color = document.getElementById('color');
const clear = document.getElementById('clean')
container.insertAdjacentElement('beforeend', box)
box.setAttribute('id', 'box')
// box.classList.add('square');

const numberOfSquares = parseInt(prompt('number of squares?'))
// creating 16 main divs/squares
function createSquares(number){
    for(let i = 0; i < number; i++){
        const parentGrid = document.createElement('div')
        box.insertAdjacentElement('beforeend', parentGrid)
        parentGrid.classList.add('sibling');
        // inside main divs/squares creating 16 divs in total of 16 X 16 divs
        for(let j = 1; j <= number; j++){
            const childGrid = document.createElement('div');
            parentGrid.insertAdjacentElement('beforeend', childGrid);
            childGrid.classList.add('square');
            childGrid.addEventListener('mouseover', function(e){
                this.style.backgroundColor = color.value
            })
            clear.addEventListener('click', function(e){
                childGrid.style.backgroundColor = 'white'
                // console.log(this.classList)
            })
        }
    }
}
createSquares(numberOfSquares)
