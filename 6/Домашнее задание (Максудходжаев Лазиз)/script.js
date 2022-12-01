'use strict';

// 1. Задание.

// let num1 = +prompt('Введите первое число');
// let num2 = +prompt('Введите второе число');
// let sum = 0;

// while (num1 <= num2) {
//    sum += num1;
//    num1++;
// }

// alert('Суммы всех чисел в заданном диапазоне: ' + sum);


// 2. Задание.

// let num1 = +prompt('Введите первое число');
// let num2 = +prompt('Введите второе число');

// while (num1 != 0 && num2 != 0) {

//    if (num1 > num2) {
//       num1 %= num2;
//    } else {
//       num2 %= num1;
//    }

// }

// alert(num1 + num2);


// 3. Задание.

// let num = +prompt('Введите число');
// let i = 0;

// while (i <= num) {
//    i++;
//    if (num % i == 0) {
//       console.log(i);
//    }
// }


// 4. Задание. Определить количество цифр в введенном числе

// let num = +prompt('Введите число');
// let i = 0;

// while (num > 0) {
//    num = Math.floor(num / 10);
//    i++;
// }
// console.log(i);


// 5. Задание.

// let i = 0;
// let numPositive = 0;
// let numNegative = 0;
// let numZeros = 0;
// let numEven = 0;
// let numOdd = 0;
// let num;

// while (i < 10) {

//    i++;
//    num = +prompt('Введите 10 чисел');

//    if (num > 0) {
//       numPositive++;
//    } else if (num < 0) {
//       numNegative++;
//    } else {
//       numZeros++;
//    }

//    if (num % 2 == 0) {
//       numEven++;
//    } else {
//       numOdd++;
//    }

// }

// console.log('Положительных чисел - ' + numPositive);
// console.log('Отрицательных чисел - ' + numNegative);
// console.log('Нулей - ' + numZeros);
// console.log('Четный чисел - ' + numEven);
// console.log('Нечетный чисел - ' + numOdd);


// 6. Задание.

// let question;

// do {

//    let num1 = +prompt('Введите первое число');
//    let num2 = +prompt('Введите второе число');
//    let mathSign = prompt('Введите знак "+" "-" "*" "/"');

//    if (mathSign === '+') {
//       alert(num1 + num2);
//    } else if (mathSign === '-') {
//       alert(num1 - num1);
//    } else if (mathSign === '*') {
//       alert(num1 * num2);
//    } else if (mathSign === '/') {
//       alert(num1 / num2);
//    }

//    question = confirm('Хотите решить еще один пример ?');

// } while (question === true);


// 7. Задание.

// let num = prompt('Введите число!');
// let shift = prompt('На сколько цифр его сдвинуть?');
// let res = (num.slice(shift) + num.slice(0, shift));
// alert(res);


// 8. Задание.

// let i = 0;
// let question;

// do {

//    if (i === 0) {
//       alert('Понедельник');
//    } else if (i === 1) {
//       alert('Вторник');
//    } else if (i === 2) {
//       alert('Среда');
//    } else if (i === 3) {
//       alert('Четверг');
//    } else if (i === 4) {
//       alert('Пятница');
//    } else if (i === 5) {
//       alert('Суббота');
//    } else if (i === 6) {
//       alert('Воскресенье');
//    }

//    if (i === 6) {
//       i -= 7;
//    }

//    i++;

//    question = confirm('Хотите увидеть следующий день?');

// } while (question === true);


// 9. Задание.

// for (let i = 2; i < 10; i++) {
//    for (let j = 1; j < 11; j++) {
//       let res = i + ' * ' + j + ' = ' + (i * j);
//       console.log(res);
//    }
// }


// 10. Задание.

// let question1 = confirm('Загадайте число от 0 до 100');
// let minNum = 0;
// let maxNum = 100;
// let res;

// while (true) {
//    res = Math.floor((minNum + maxNum) / 2);
//    let question2 = confirm('Ваше число ' + res + ' ?');

//    if (question2 === true) {
//       alert('Ваше число - ' + res);
//       break;
//    }

//    let question3 = confirm('Ваше число больше ' + res + ' ?');

//    if (question3 === true) {
//       minNum = Math.floor((minNum + maxNum) / 2);
//    } else {
//       maxNum = Math.floor((minNum + maxNum) / 2);
//    }
// }