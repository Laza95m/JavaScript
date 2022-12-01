// if (condition) {
//     // если condition - true
// } else if (condition2) {
//     // если condition2 - true
// } else {
//     // если condition и condition2 - false
// }

// let num1 = 12
// let num2 = 21

// // тернарный оператор всегда возвращает значение 
// let max = num1 > num2 ? num1 : num2

// // let max = num1 > num2 ? num1 : (num3 > num2 ? num3 : num2)

// switch (variable) {
//     case '1' : //action break
//     default : 
// }


// while (condition) {
//     // body is active if condition - true
// }

// do {
//     //body
// } while (condition)


// let number = 0
// for (let i = number; i < 6; i+=2) {
//     //подняться на 1 этаж
// }

// // for (переменная и её начальное значение; условие окончания по переменной; шаг цикла )


// for (let i = 6; i > 0; i--) {
//     // спуститься на 1 этаж 
// }


// for (let i = 0; i < 6; i+=2){
//     //подняться на этаж 
// }


// for (let i = 0; i < 5; i++) {
//     let a = 12
//     console.log(a);
// }
// console.log(a);
// console.log('New Loop');

// for (let i = 0; i<10; i+=2) {
//     console.log(i);// 0 2 4 6 8
//     // 5 7 9
// }


// let number = +prompt()
// let a;


// if (number==1) {
//     a = 12
// }
// else {
//     let b = 21
// }
// console.log(b);


// let name = prompt("Введите имя:  (или exit для выхода)")
// while (name !== 'exit') {
//     let name = prompt("Введите имя:  (или exit для выхода)")
//     let a = name.length
//     let b = Math.floor(Math.random()*10) // Math.random - 0,5*10
//     if (name === 'exit' && a+b > 10 ) break;
//     console.log('Привет,' + name);
// }


// for (let i = +prompt('Введите число: '); i<10; i++) {
//     if (i === 4) break;
//     console.log(i);
// }

// for (let i = +prompt(); i<10; i++) {
//     console.log('Step');
//     // до continue помещать код, который работает в любом случае
//     if (i === 7) continue;
//     // после continue вы помещаете код, который может НЕ работать при определенных условиях
//     console.log(i);
// }


// Флаг

// Пусть пользователь вводит число. 
// Посчитать сумму делителей этого числа
// Если среди делителей этого числа найдется число 7, 
// то посчитать ещё и произведение


// let number = +prompt();
// let summ = 0;
// let prod = 1;
// let flag = false;
// // 15 - 1, 3, 5, 15
// // 21 - 1, 3, 7, 21

// for (let i = 1; i <= number; i++){
//     if (number % i == 0) {
//         if (i === 7) flag = true 
//         summ += i
//         prod *= i
//     }
// }

// console.log(summ);
// console.log(flag);



//Счетчик
// let count = 0;
// for (let i = 10; i < 15; i++) {
//     //body
//     count++;
// }




// Пусть пользователь вводит число. 
// Посчитать количество делителей этого числа

// let number = +prompt()
// let count = 0

// for (let i = 1; i<=number; i++) {
//     if (number % i === 0) {
//         count++
//     }
// }
// console.log(count);





// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         console.log('i = '+ i + ' j= ' + j);
//     }
// }


// for (let i = 0; i < 3; i++){
//     for (let j =0; j < 3; j++){
//         for (let k =0; k < 3; k++){
//             console.log('i=' + i + ' j=' + j + ' k=' + k);
//         }
//     }
// }

