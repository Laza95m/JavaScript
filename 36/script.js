// console.log(document.documentElement);  //<html>
// console.log(document.body); // <body>

// for (let i = 0; i < document.body.childNodes.length; i++) {
//     document.body.childNodes[i] = 'asd'
// }

// console.log(document.head.nextSibling.nextSibling)


// console.log(document.head.nextElementSibling);
// console.log(document.body.children);

// console.log(document.getElementById('div1'));

// console.log(document.querySelectorAll('div'));
// console.log(document.querySelectorAll('.box'));

// console.log(document.querySelector('.box'));

// let arr = document.querySelectorAll('div')
// for (let elem of arr) {
//     if (elem.matches('.box')) {
//         console.log(item);
//     }
// }

let elem = document.querySelector('.main-text')
console.log(elem.closest('#container'));