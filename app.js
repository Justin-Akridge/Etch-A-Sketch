const grid = document.querySelector('.grid');

createGrid = () => {
  for(let i = 0; i < 256; i++){
    const div = document.createElement('div')
    div.classList.add('cell')
    div.addEventListener('mouseover', function(event){
      event.target.style.backgroundColor = 'black'
    })
    grid.appendChild(div)
  }
}

const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const removeAllChildNodes = (parent) => {
  while(parent.firstChild){
    parent.removeChild(parent.firstChild)
  } 
}

//create grid of different sizes
const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.value')
slider.addEventListener('input', function(){
  let val = document.getElementById('slider').value;
  screenVal.textContent = val;
  removeAllChildNodes(grid);
  grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`)
  for(let i = 0; i < val*val; i++){
    const div = document.createElement('div');
    div.classList.add('cell');
    div.addEventListener('mouseover', function(e){
      e.target.style.backgroundColor = 'black';
    })
    grid.appendChild(div);
  }
})

//Erase the blocks
const reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
  let val = document.getElementById('slider').value;
  let cell = grid.children;
  for (let i = 0; i < val * val; i++){
    cell[i].style.backgroundColor = 'white'
  }
})

//set blocks to random rgb
const rgb = document.querySelector('#rgb');
rgb.addEventListener('click', function(){
  let val = document.getElementById('slider').value;
  let cell = grid.children;
  for(let i = 0; i < val*val; i++){
    cell[i].addEventListener('mouseover', function(e){
      e.target.style.backgroundColor = getRandomColor();
    })
  }
})

//set blocks to black
const black = document.querySelector('#black');
black.addEventListener('click', function(){
  let val = document.getElementById('slider').value;
  let cell = grid.children;
  for(let i = 0; i < val * val; i++){
    cell[i].addEventListener('mouseover', function(e){
      e.target.style.backgroundColor = 'black';
    })
  }
})


createGrid();