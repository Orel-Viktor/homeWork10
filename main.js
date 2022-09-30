// Есть блок с текстом на странице и кнопка. 
// При нажатии на кнопку текст изменяет цвет.
//  При повторном нажатии – возвращается предыдущий цвет

let textSwapColor = document.querySelector('.js--textSwapColor')
let buttonForSwapColor = document.querySelector('.js--buttonForSwapColor')
textSwapColor.style.color = 'black'

buttonForSwapColor.addEventListener('click', swapColor)

function swapColor() {
  if (textSwapColor.style.color === 'black') {
    textSwapColor.style.color = 'red'
  }
  else {
    textSwapColor.style.color = 'black'
  }
}



// Вывести таблицу 10×10, заполненную числами от 1 до 100 (таблица создана через js)


let elem = document.querySelector('.js--elem')

function createTable(parent, rows, cols) {
  let table = document.createElement('table')

  for (let i = 0; i < rows; i++) {
    let tr = document.createElement('tr')

    for (let j = 0; j < cols; j++) {
      let td = document.createElement('td')
      td.classList.add('tdWidth')
      td.style.width = '40px'
      td.style.height = '40px'
      td.innerText = i*10 +j +1
      tr.appendChild(td)

    }
    table.appendChild(tr)
  }
  parent.appendChild(table)
}


createTable(elem, 10, 10)
let td = document.querySelectorAll(".js--elem td")
console.log(td)



