// let randomGenerator = document.querySelector('#randomGenerator')

// randomGenerator.addEventListener('click', function () {
//     document.querySelector('#result').innerText = Math.floor(Math.random()*101)
// })

let container = document.querySelector('#container')
let result = document.querySelector('#result')

container.addEventListener('mousemove', function (event) {
    result.innerText = `x: ${event.offsetX}, y: ${event.offsetY}`
})

container.addEventListener('click', function (event) {
    result.innerText = `x: ${event.offsetX}, y: ${event.offsetY} Left Button`
})

container.addEventListener('contextmenu', function (event) {
    result.innerText = `x: ${event.offsetX}, y: ${event.offsetY} Right Button`
})