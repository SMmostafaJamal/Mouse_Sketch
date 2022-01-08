const grid = document.querySelector('#grid');
const color = document.querySelector('#color');
const cleanBtn = document.querySelector('#clean');
const range = document.querySelector('#rangeValue')
const output = document.querySelector('#displayRange')
const eraser = document.getElementById('eraser')
const randomColorBtn = document.getElementById('randomColor')

selectingValue(range.defaultValue)

range.addEventListener('change', function(){
    grid.innerHTML = ''  // to clean previous inner grids
    selectingValue(range.value)
})

// creating div/grids/pixels, clearing color and making color trails
function createGridFunc(val){
    for(i=0; i < val; i++){
        const div = document.createElement('div')
        grid.insertAdjacentElement('afterbegin', div)
        div.classList.add('square')
        color_erase_trail(div)
        clean(div,range)
        clean(div,cleanBtn)    
    }

}

// for defaultValue and selected values
function selectingValue(rangeVal){
    output.innerHTML = rangeVal
    // equal column and row 
    grid.style.gridTemplateRows = `repeat(${rangeVal}, 1fr)`
    grid.style.gridTemplateColumns = `repeat(${rangeVal}, 1fr)`
    displayRange = rangeVal * rangeVal
    createGridFunc(displayRange)
}

// to choose color
function color_erase_trail(clr){
    // To change the div/pixel colours
    grid.addEventListener('click', function(){
        clr.addEventListener('mouseover', function handler(e){
            this.style.backgroundColor = color.value 
            e.currentTarget.removeEventListener(e.type, handler); // this cell will run only once
        })
    })
    // To erase colour trails 
    eraser.addEventListener('click', function(){
        clr.addEventListener('mouseover', function handler(e){
            this.style.backgroundColor = 'white'
            e.currentTarget.removeEventListener(e.type, handler);
        })
    })

    // random colours
    randomColorBtn.addEventListener('click', function randomColor(){
        r = Math.floor(Math.random() * 256)
        g = Math.floor(Math.random() * 256)
        b = Math.floor(Math.random() * 256)
        const RGB = `rgb(${r},${g},${b})`
        clr.addEventListener('mouseover', function handler(e){
            clr.style.backgroundColor = RGB
            e.currentTarget.removeEventListener(e.type, handler); // this cell will run only once
        })

    })

}

// to clear grid screen 
function clean(clnCell, eventElement){
    eventElement.addEventListener('click', function(){
        clnCell.style.backgroundColor = 'white'      
    })
}



