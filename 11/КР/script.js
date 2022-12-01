'use strict';

// 1. Задание.

/* function factorial(num) {
   if (num === 1) return 1;
   else return factorial(num - 1) * num;
}

let num = +prompt('Число');

alert(factorial(num)); */


// 2. Задание.

/* function directOrderNumbers(minNum1, maxNum1) {
   if (minNum1 === maxNum1) return minNum1;
   else return minNum1 + ' ' + directOrderNumbers(minNum1 + 1, maxNum1);
}

let minNum1 = +prompt('Минимальное число');
let maxNum1 = +prompt('Максимальное число');

alert(directOrderNumbers(minNum1, maxNum1));

function reverseOrderNumbers(minNum2, maxNum2) {
   if (minNum2 === maxNum2) return maxNum2;
   else return maxNum2 + ' ' + reverseOrderNumbers(minNum2, maxNum2 - 1);
}

let minNum2 = +prompt('Минимальное число');
let maxNum2 = +prompt('Максимальное число');

alert(reverseOrderNumbers(minNum2, maxNum2)); */


// 3. Задание.

/* function backwardNumber(num) {
   if (num < 10) return num;
   else return num % 10 + '' + backwardNumber(Math.floor(num / 10));
}

let num = +prompt('Число');

alert(backwardNumber(num)); */


// 4. Задание.

/* function sumNumber(num) {
   if (num < 10) return num;
   else return num % 10 + sumNumber(Math.floor(num / 10));
}

let num = +prompt('Число');

alert(sumNumber(num)); */


// 5. Задание.

/* function brackets(num) {
   if (num === 1) return '()';
   else return '(' + brackets(num - 1) + ')';
}

let num = +prompt('Число');

alert(brackets(num)); */