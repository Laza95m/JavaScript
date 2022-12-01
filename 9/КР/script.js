'use strict';

// 1. Задание.

// function showMessage(num1, num2) {
//    if (num1 < num2) {
//       return num1;
//    } else {
//       return num2;
//    }
// }

// let num1 = +prompt('Первое число');
// let num2 = +prompt('Второе число');

// alert(showMessage(num1, num2));


// 2. Задание.

// function showMessage(num1, num2) {
//    let res = num1;
//    for (let i = 1; i < num2; i++) {
//       res *= num1;
//    }
//    return res;
// }

// let num1 = +prompt('Число');
// let num2 = +prompt('Степень числа');

// alert(showMessage(num1, num2));


// 3. Задание.

// function culcExample(num1, num2, mathSign) {
//    let res = 0;

//    if (mathSign === '+') {
//       res = num1 + num2;
//       return res;
//    } else if (mathSign === '-') {
//       res = num1 - num2;
//       return res;
//    } else if (mathSign === '*') {
//       res = num1 * num2;
//       return res;
//    } else if (mathSign === '/') {
//       res = num1 / num2;
//       return res;
//    }
// }

// let num1 = +prompt('Введите первое число');
// let num2 = +prompt('Введите второе число');
// let mathSign = prompt('Введите знак (+  -  *  /)');

// alert(culcExample(num1, num2, mathSign));


// 4. Задание.

// function numCheck(num) {
//    for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//          return 'Число непростое';
//       }
//    }
//    return 'Число простое';
// }

// let num = +prompt('Введите число');

// alert(numCheck(num));


// 5. Задание.

// function showMessage(num) {
//    let res;
//    for (let i = 2; i < 11; i++) {
//       res = num + ' * ' + i + ' = ' + (num * i);
//       console.log(res);
//    }
// }

// let num = +prompt('Введите число от 2 до 9');

// showMessage(num);


// 6. Задание.


// 7. Задание.

// function culcSum(num1, num2, num3, num4, num5) {
//    let res = num1 + num2 + num3 + num4 + num5;
//    return res;
// }

// let num1 = +prompt('Введите первое число');
// let num2 = +prompt('Введите второе число');
// let num3 = +prompt('Введите третье число');
// let num4 = +prompt('Введите четвертое число');
// let num5 = +prompt('Введите пятое число');

// alert('Сумма всех чисел = ' + culcSum(num1, num2, num3, num4, num5));


// 8. Задание.

// function showMoreNum(num1, num2, num3, num4, num5) {
//    if (num1 > (num2 && num3 && num4 && num5)) {
//       return num1;
//    } else if (num2 > (num1 && num3 && num4 && num5)) {
//       return num2;
//    } else if (num3 > (num1 && num2 && num4 && num5)) {
//       return num3;
//    } else if (num4 > (num1 && num2 && num3 && num5)) {
//       return num4;
//    } else if (num5 > (num1 && num2 && num3 && num4)) {
//       return num5;
//    }
// }

// let num1 = +prompt('Введите первое число');
// let num2 = +prompt('Введите второе число');
// let num3 = +prompt('Введите третье число');
// let num4 = +prompt('Введите четвертое число');
// let num5 = +prompt('Введите пятое число');

// alert('Число ' + showMoreNum(num1, num2, num3, num4, num5) + ', больше других чисел');


// 9. Задание.

function showEvenOdd(minNum, maxNum, bool) {

}

let minNum = +prompt('Минимальное значение диапазона');
let maxNum = +prompt('Минимальное значение диапазона');
let bool = confirm('Вывести четные(Да) или нечетные(Нет) числа');