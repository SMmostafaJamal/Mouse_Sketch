const container = document.getElementById('container');
const box = document.createElement('div');
const color = document.getElementById('color');
container.insertAdjacentElement('beforeend', box)
box.setAttribute('id', 'box')
// box.classList.add('square');


// creating 16 main divs/squares

    for(let i = 0; i < 16; i++){
        const parentGrid = document.createElement('div');
        box.insertAdjacentElement('beforeend', parentGrid)
        parentGrid.classList.add('sibling');
        // inside main divs/squares creating 16 divs in total of 16 X 16 divs
        for(let j = 1; j <= 16; j++){
            const childGrid = document.createElement('div');
            parentGrid.insertAdjacentElement('beforeend', childGrid);
            childGrid.classList.add('square');
            childGrid.addEventListener('click', function(e){
                if(e.type == 'click'){
                    this.type = 'mouseover'
                    console.log(e.type)
                // this.addEventListener('mouseover',function(e){
                //     this.style.backgroundColor = color.value
                // })    
                }
            })
        }
    }

