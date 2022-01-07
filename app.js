const grid = document.querySelector('#grid');
const color = document.querySelector('#color');
const cleanBtn = document.querySelector('#clean');
const range = document.querySelector('#rangeValue')
const output = document.querySelector('#displayRange')
// console.log(range.defaultValue)








startingValue(range.defaultValue)
range.addEventListener('change', function(){
    grid.innerHTML = ''  // to clean previous inner grids
    startingValue(range.value)

})

// creating grids, clearing color and making color trails
function createGridFunc(val){
    for(i=0; i < val; i++){
        const div = document.createElement('div')
        grid.insertAdjacentElement('afterbegin', div)
        div.classList.add('square')
        colorTrail(div)
        clean(div,range)
        clean(div,cleanBtn)
        
    }

}

// for defaultValue and selected values
function startingValue(rangeVal){
    output.innerHTML = rangeVal
    // equal column and row 
    grid.style.gridTemplateRows = `repeat(${rangeVal}, 1fr)`
    grid.style.gridTemplateColumns = `repeat(${rangeVal}, 1fr)`
    displayRange = rangeVal * rangeVal
    createGridFunc(displayRange)
}

// to choose color
function colorTrail(clr){
    clr.addEventListener('mouseover', function(e){
        this.style.backgroundColor = color.value
    })
}

// to clear screen 
function clean(clnCell, eventElement){
    eventElement.addEventListener('click', function(){
        clnCell.style.backgroundColor = 'white'      
    })
}



