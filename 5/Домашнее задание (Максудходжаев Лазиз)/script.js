'use strict';


// 1. Задание

// let num1 = +prompt('Введите начальное число диапозона');
// let num2 = +prompt('Введите конечное число диапозона');
// let sum = 0;

// while (num1 <= num2) {
//    sum += num1;
//    num1++;
// }
// alert(sum);


// 2. Задание. Алгоритм Евклида - нахождение наибольшего общего делителя. https://younglinux.info/algorithm/euclidean

// let num1 = +prompt('Введите первое число');
// let num2 = +prompt('Введите второе число');

// while (num1 != 0 & num2 != 0) {
//    if (num1 > num2) {
//       num1 %= num2;
//    } else {
//       num2 %= num1;
//    }
// }
// alert(num1 + num2);


// 3. Задание. Выводит все делители числа.

// let num = +prompt('Введите число');
// let i = 0;

// while (i++ <= num) {
//    if (num % i == 0) {
//       console.log(i);
//    }
// }


// 4. Задание. https://dev.to/cesareferrari/calculate-the-number-of-digits-with-a-while-loop-in-javascript-53o

// let num = +prompt('Введите число');
// let i = 0;

// while (num > 0) {
//    num = Math.floor(num / 10);
//    i++;
// }
// console.log(i);


// 5. Задание

// let numPositive = 0;
// let numNegative = 0;
// let numZeros = 0;
// let NumEven = 0;
// let NumOdd = 0;
// let i = 1;

// while (i <= 10) {

//    i++;
//    let num = +prompt('Введите 10 чисел');

//    if (num > 0) {
//       numPositive++;
//    } else if (num < 0) {
//       numNegative++;
//    } else {
//       numZeros++;
//    }

//    if (num % 2 == 0) {
//       NumEven++;
//    } else {
//       NumOdd++;
//    }
// }

// if (numPositive > 0) {
//    alert('Кол-во положительных чисел: ' + numPositive);
// } else {
//    alert('Положительных чисел нет');
// }

// if (numNegative > 0) {
//    alert('Кол-во отрицательных чисел: ' + numNegative);
// } else {
//    alert('Отрицательных чисел нет');
// }

// if (numZeros > 0) {
//    alert('Кол-во нулей: ' + numZeros);
// } else {
//    alert('Нулей нет');
// }

// if (NumEven > 0) {
//    alert('Кол-во четных чисел: ' + NumEven);
// } else {
//    alert('Четных чисел нет');
// }

// if (NumOdd > 0) {
//    alert('Кол-во нечетных чисел: ' + NumOdd);
// } else {
//    alert('Нечетных чисел нет');
// }


// 6. Задание

// let question;

// do {

//    let num1 = +prompt('Введите первое число');
//    let num2 = +prompt('Введите второе число');
//    let signCalc = prompt('Введите знак:  "+"  "-"  "*"  "/"  ');

//    if (signCalc === '+') {
//       alert(num1 + num2);
//    } else if (signCalc === '-') {
//       alert(num1 - num2);
//    } else if (signCalc === '*') {
//       alert(num1 * num2);
//    } else if (signCalc === '/') {
//       alert(num1 / num2);
//    } else {
//       alert('Ошибка');
//    }

//    question = prompt('Хотите решить еще один пример:  "Да" - "Нет" ');

// } while (question === 'Да' || question === 'да' || question === 'ДА');


// 7. Задание. https://www.cyberforum.ru/javascript-beginners/thread2318430.html

// let num = prompt('Введите число!');
// let shift = prompt('На сколько цифр его сдвинуть?');
// let res = (num.slice(shift) + num.slice(0, shift));
// alert(res);


// 8. Задание

// let question;
// let days = 0;

// do {

//    if (days === 0) {
//       alert('Понедельник');
//    } else if (days === 1) {
//       alert('Вторник');
//    } else if (days === 2) {
//       alert('Среда');
//    } else if (days === 3) {
//       alert('Четверг');
//    } else if (days === 4) {
//       alert('Пятница');
//    } else if (days === 5) {
//       alert('Суббота');
//    } else if (days === 6) {
//       alert('Воскресенье');
//    }

//    if (days === 6) {
//       days -= 7
//    }

//    days++;

//    question = confirm('Хотите увидеть следующий день?');

// } while (question === true);


// 9. Задание. https://overcoder.net/q/1068718/%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0-%D1%83%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2-javascript

// let result = '';

// for (let i = 2; i < 10; i++) {

//    for (let j = 1; j < 11; j++) {

//       if (i > 0 && j > 0) {
//          result += (i * j) + ' ';
//       }
//    }
//    result += '\n'
// }

// console.log(result);


// 10. Задание.

// let question1 = confirm('Загадайте число от 0 до 100');
// let n = 50;

// do {

//    question1 = prompt('Ваше число > ' + n + ', < ' + n + ' или == ' + n + ' ?');

//    if (n >= 100) {
//       alert('Число больше 100. Сброс до 50');
//       n = n - 50;
//    } else if (n <= 0) {
//       alert('Число меньше 0. Сброс до 50');
//       n = n + 50;
//    } else if (question1 === '<') {
//       n--;
//    } else if (question1 === '>') {
//       n++;
//    }

// } while (question1 === '>' || question1 === '<');

// let question2 = confirm('Ваше число ' + n);