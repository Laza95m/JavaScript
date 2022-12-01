'use strict';

// 1. Задание.

/* function exponentiation(num, Degree) {
   if (Degree === 1) return num;
   else return num * exponentiation(num, Degree - 1);
}

let num = +prompt('Число');
let Degree = +prompt('Степень');

alert(exponentiation(num, Degree)); */


// 2. Задание. https://ru.stackoverflow.com/questions/929837/%D0%BD%D1%83%D0%B6%D0%BD%D0%BE-%D0%BD%D0%B0%D0%B9%D1%82%D0%B8-%D0%BD%D0%B0%D0%B8%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D0%B9-%D0%BE%D0%B1%D1%89%D0%B8%D0%B9-%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C-%D0%B2-javascript

/* function greatestCommonDivisor(num1, num2) {
   if (!num2) return num1;    // !num2 - (num2===0)
   return greatestCommonDivisor(num2, num1 % num2);
}

let num1 = +prompt('Число');
let num2 = +prompt('Число');

alert(greatestCommonDivisor(num1, num2)); */


// 3. Задание. https://overcoder.net/q/2057100/%D0%BA%D0%B0%D0%BA-%D0%BD%D0%B0%D0%B9%D1%82%D0%B8-%D0%BD%D0%B0%D0%B8%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D1%83%D1%8E-%D1%86%D0%B8%D1%84%D1%80%D1%83-%D0%B2-%D1%87%D0%B8%D1%81%D0%BB%D0%B5-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8F-%D1%80%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D1%8E

/* function maximumNumber(num) {
   if (num === 0) return 0;
   else return Math.max(Math.floor(num % 10), maximumNumber(num / 10));
}

let num = +prompt('Число');

alert(maximumNumber(num)); */


// 4. Задание. https://questu.ru/questions/63083882/

/* function simpleNumber(num1, num2 = 3) {
   if (num1 === 2) return 'Число простое';
   if (num1 < 2 || num1 % 2 === 0) return 'Число непростое';
   if (num2 * num2 > num1) return 'Число простое';
   if (num1 % num2 === 0) return 'Число непростое';
   return simpleNumber(num1, num2 + 2);
}

let num1 = +prompt('Число');
let num2;

alert(simpleNumber(num1, num2)); */


// 5. Задание. https://www.cyberforum.ru/javascript-beginners/thread2844541.html

/* function allMultipliersNumber(num1, array = [], num2 = 2) {
   if (num2 > Math.sqrt(num1)) {
      array.push(num1);
      return array;
   } else if (num1 % num2 === 0) {
      array.push(num2);
      allMultipliersNumber(num1 / num2, array, num2);
   } else {
      allMultipliersNumber(num1, array, ++num2);
   }
   return array.join("*");
}

let num1 = +prompt('Число');

alert(allMultipliersNumber(num1)); */


// 6. Задание. https://habr.com/ru/post/449616/

/* const fib2 = num => {
   if (num === 0) {
      return [0, 1];
   } else {
      const [prev, next] = fib2(num - 1);
      return [next, prev + next];
   }
}

const fib = num => fib2(num)[0];

let num = +prompt('Number');

alert(fib2(num)); */