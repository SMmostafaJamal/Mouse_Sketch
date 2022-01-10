const grid = document.querySelector('#grid');
const color = document.querySelector('#color');
const cleanBtn = document.querySelector('#clean');
const range = document.querySelector('#rangeValue')
const output_1 = document.querySelector('#displayRange_1')
const output_2 = document.querySelector('#displayRange_2')

const eraser = document.getElementById('eraser')
const randomColorBtn = document.getElementById('randomColor')



selectingValue(range.defaultValue)


// creating div/grids/pixels, clearing color and making color trails
function createGridFunc(val){
    for(i=0; i < val; i++){
        r = Math.floor(Math.random() * 256)
        g = Math.floor(Math.random() * 256)
        b = Math.floor(Math.random() * 256)
        const RGB = `rgb(${r},${g},${b})`
        
        const div = document.createElement('div')
        grid.insertAdjacentElement('afterbegin', div)
        div.classList.add('square')
        

        // To change the div/pixel colours-
        combine_of_clrTrail_eraser_randomClr(grid, div, color)
        // To erase colour trails-
        combine_of_clrTrail_eraser_randomClr(eraser, div, '#EEEEEE')
        // random colours-
        combine_of_clrTrail_eraser_randomClr(randomColorBtn, div, RGB)
        // for range 
        combine_of_clrTrail_eraser_randomClr(range, div, '#EEEEEE')
        // to clean grid
        combine_of_clrTrail_eraser_randomClr(cleanBtn, div, '#EEEEEE')

        // color_erase_trail(div)
        // clean(range,div)
        // clean(cleanBtn,div)  
    }

}

// for defaultValue and selected values
function selectingValue(rangeVal){
    output_1.innerHTML = rangeVal
    output_2.innerHTML = rangeVal

    // equal column and row 
    grid.style.gridTemplateRows = `repeat(${rangeVal}, 1fr)`
    grid.style.gridTemplateColumns = `repeat(${rangeVal}, 1fr)`
    displayRange = rangeVal * rangeVal
    createGridFunc(displayRange)
}
// for slider 
range.addEventListener('change', function(){
    grid.innerHTML = ''  // to clean previous inner grids
    selectingValue(range.value)
})
// combine of the div/pixel colour change, to erase the colour trails and random colour 
function combine_of_clrTrail_eraser_randomClr(outerElement, innerElement,variable){
    outerElement.addEventListener('click',function(){
        if(outerElement !== cleanBtn){
            innerElement.addEventListener('mouseover', function handler(e){
                (variable === color) ? this.style.backgroundColor = variable.value: this.style.backgroundColor = variable
             
                e.currentTarget.removeEventListener(e.type, handler); // this cell will run only once
            })
        }else {
            innerElement.style.backgroundColor = variable
        }
    })
}



/*
// to clear grid screen 
function clean(eventElement, clnCell){
    eventElement.addEventListener('click', function(){
        clnCell.style.backgroundColor = 'white'      
    })
}

to choose color
function color_erase_trail(clr){
    // To change the div/pixel colours-
    combine_of_clrTrail_eraser_randomClr(grid, clr, color.value)
    grid.addEventListener('click', function(){
        clr.addEventListener('mouseover', function handler(e){
            this.style.backgroundColor = color.value 
            e.currentTarget.removeEventListener(e.type, handler); // this cell will run only once
        })
    })

    // To erase colour trails-
    combine_of_clrTrail_eraser_randomClr(eraser,clr,'white')
    eraser.addEventListener('click', function(){
        clr.addEventListener('mouseover', function handler(e){
            this.style.backgroundColor = 'white'
            e.currentTarget.removeEventListener(e.type, handler);
        })
    })

    // random colours-
    combine_of_clrTrail_eraser_randomClr(randomColorBtn,clr,RGB)

    randomColorBtn.addEventListener('click', function(){
        clr.addEventListener('mouseover', function handler(e){
            this.style.backgroundColor = RGB
            e.currentTarget.removeEventListener(e.type, handler); // this cell will run only once
        })

    })

} */




