// Есть блок с текстом на странице и кнопка. 
// При нажатии на кнопку текст изменяет цвет.
//  При повторном нажатии – возвращается предыдущий цвет

let textSwapColor = document.querySelector('.js--textSwapColor')
let buttonForSwapColor = document.querySelector('.js--buttonForSwapColor')
textSwapColor.style.color = 'black'



buttonForSwapColor.addEventListener('click', swapColor)


// buttonForSwapColor.removeEventListener('click' , swapColor)


function swapColor() {
  if (textSwapColor.style.color === 'black') {
    textSwapColor.style.color = 'red'
  }
  else if (textSwapColor.style.color !=='black') {
    textSwapColor.style.color = 'black'
  }
}


