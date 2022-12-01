'use strict';

// 2. Задание.

/* function showMessage(num1, num2) {

   for (let i = num1; i <= num2; i++) {

      if (i % 2 !== 0) {
         console.log(i);
      }
   }
}

let num1 = +prompt('Первое число');
let num2 = +prompt('Второе число');

showMessage(num1, num2); */


// 3. Задание.

/* function showMessage(line, direction, symbol) {
   let res = '';
   let i;

   if (direction === 'Горизонтально' || direction === 'горизонтально') {
      for (i = 0; i < line; i++) {
         res += symbol;
      }
      return res;
   }

   if (direction === 'Вертикально' || direction === 'вертикально') {
      for (i = 0; i < line; i++) {
         res += symbol + '\n';
      }
      return res;
   }
}

let line = +prompt('Длина линии');
let direction = prompt('Отобразить горизонтально или вертикально');
let symbol = prompt('Символ');

console.log(showMessage(line, direction, symbol)); */


// 4. Задание.

/* function showMessage(num1, num2, num3, num4) {
   if (num1 > (num2 && num3 && num4)) {
      return num1;
   } else if (num2 > (num1 && num3 && num4)) {
      return num2;
   } else if (num3 > (num1 && num2 && num4)) {
      return num3;
   } else {
      return num4;
   }
}

let num1 = +prompt('Первое число');
let num2 = +prompt('Второе число');
let num3 = +prompt('Третье число');
let num4 = +prompt('Четвертое число');

alert(showMessage(num1, num2, num3, num4)); */


// 5. Задание.

/* function showMessage(minNum, maxNum) {
   let res = 0;

   for (let i = minNum; i <= maxNum; i++) {
      res += i;
   }

   return res;
}

let minNum = +prompt('Начало диапазона');
let maxNum = +prompt('Конец диапазона');

alert(showMessage(minNum, maxNum)); */


// 6. Задание.

/* function checkPrimeNumber(num) {

   for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
      if (num % i === 0) {
         return false;
      }
   }

   return true;
}

let num = +prompt('Число');

alert(checkPrimeNumber(num)); */


// 7. Задание.

/* function luckyNumber(num) {

   if (num > 99999 && num < 1000000) {

      let num1 = Math.floor(num / 10 ** 5) % 10;   //Первое число
      let num2 = Math.floor(num / 10 ** 4) % 10;   //Второе число
      let num3 = Math.floor(num / 10 ** 3) % 10;   //Третье число
      let num4 = Math.floor(num / 10 ** 2) % 10;   //Четвертое число
      let num5 = Math.floor(num / 10 ** 1) % 10;   //Пятое число
      let num6 = Math.floor(num / 10 ** 0) % 10;   //Шестое число

      if ((num1 + num2 + num3) === (num4 + num5 + num6)) {
         return true;
      } else {
         return false;
      }

   } else {
      return 'Ошибка - Число нешестизначное';
   }
}

let num = +prompt('Шестизначное число');

alert(luckyNumber(num)); */