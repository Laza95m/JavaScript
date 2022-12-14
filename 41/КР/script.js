// const stylesArray = ['red', 'green', 'blue']

// function addParagrapgh(id) {
//     const p = document.createElement('p')
//     p.id = id
//     p.textContent = id
//     const index = Math.floor(Math.random()*3)
//     p.classList.add(stylesArray[index])
//     const target = document.querySelector('#container')
//     target.append(p)
// }
// let id = 0
// const btn = document.querySelector('#btn')
// btn.addEventListener('click', () => {
//     addParagrapgh(id)
//     id++
// })



// const cont = document.querySelector('#container')
// cont.addEventListener('contextmenu', (e) => {
//     e.preventDefault()
// })




// const modal = document.querySelector("#modal")
// const cont = document.querySelector("#container")
// modal.addEventListener('click', (e) => {
//     e.stopPropagation()
//     modal.classList.toggle('blue')
//     modal.classList.toggle('green')
// })
// cont.addEventListener('click', (e)=> {
//     e.stopPropagation()
//     modal.classList.toggle('invisible')
// })
// document.body.addEventListener('click', () => {
//     console.log('Hello');
// })




// const num = document.querySelector('#num')
// num.addEventListener('keydown', (e) => {
//     e.preventDefault()
// })


// function randomNumber() {
//     return Math.floor(Math.random()*256)
// }

// const btn = document.querySelector('#btn')
// btn.addEventListener('click', (e) => {
//     e.stopPropagation()
//     const div = document.createElement('div')
//     const color = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
//     div.style.background = color
//     div.id = "block"
//     div.classList.add('block')
//     const blocks = document.querySelector('#blocks')
//     blocks.append(div)
// })

// const blocks = document.querySelector('#blocks')
// blocks.addEventListener('click', (e) => {
//     if (e.target !== blocks) {
//         e.target.remove()
//     }
// })


const myForm = document.querySelector('#myForm')
console.log(myForm.test.value);