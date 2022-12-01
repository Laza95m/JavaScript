'use strict';


// 1. Задание.

/* function showMessage(num1, num2) {
   if (num1 < num2) {
      return -1;
   } else if (num1 > num2) {
      return 1;
   } else {
      return 0;
   }
}

let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');

alert(showMessage(num1, num2)); */


// 2. Задание.

/* function showMessage(num) {
   let res = 1;
   while (num) {
      res *= num--;
   }
   return res;
}

let num = +prompt('Введите число');

alert(showMessage(num)); */


// 3. Задание.

/* function showMessage(num1, num2, num3) {
   let res = num1 + num2 + num3;
   return res;
}

let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
let num3 = prompt('Введите третье число');

alert(showMessage(num1, num2, num3)); */


// 4. Задание.

/* function showMessage(num1, num2) {
   let res;

   if ((num1 && num2) > 0) {
      res = num1 * num2;
      return res;
   } else if (num2 === undefined) {
      res = num1 * num1;
      return res;
   }
}

console.log(showMessage(5, 5)); */


// 5. Задание. https://wm-school.ru/js/function_exercises_11.php

/* function showMessage(num) {
   let res = 0;

   for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
         res += i;
      }
   }

   if (res === num && res !== 0) {
      return 'Это идеальное число.';
   } else {
      return 'Это не идеальное число.';
   }
}

let num = +prompt('Введите число');

alert(showMessage(num)); */


// 6. Задание. https://www.cyberforum.ru/javascript-beginners/thread2796366.html

/* function showMessage(minNum, maxNum) {
   let res = [];
   let sum;

   for (let i = minNum; i < maxNum; i++) {
      sum = 0;

      for (let j = 1; j <= i / 2; j++) {
         if (i % j === 0) {
            sum += j;
         }
      }

      if (i === sum) {
         res.push(i);
      }
   }
   return res;
}

let minNum = prompt('Введите минимальное число');
let maxNum = prompt('Введите максимальное число');

alert(showMessage(minNum, maxNum)); */


// 7. Задание.

/* function time(hour, minute, second) {

   if ((hour >= 0 && hour < 10) && (minute >= 0 && minute < 10) && (second >= 0 && second < 10)) {
      hour = '0' + hour;
      minute = '0' + minute;
      second = '0' + second;
   } else if ((hour >= 0 && hour < 10) && (minute >= 0 && minute < 10) && second >= 10) {
      hour = '0' + hour;
      minute = '0' + minute;
   } else if ((hour >= 0 && hour < 10) && minute >= 10 && (second >= 0 && second < 10)) {
      hour = '0' + hour;
      second = '0' + second;
   } else if (hour >= 10 && (minute >= 0 && minute < 10) && (second >= 0 && second < 10)) {
      minute = '0' + minute;
      second = '0' + second;
   } else if ((hour >= 0 && hour < 10) && minute >= 10 && second >= 10) {
      hour = '0' + hour;
   } else if (hour >= 10 && (minute >= 0 && minute < 10) && second >= 10) {
      minute = '0' + minute;
   } else if (hour >= 10 && minute >= 10 && (second >= 0 && second < 10)) {
      second = '0' + second;
   }

   return hour + ':' + minute + ':' + second;
}

let hour = +prompt('Часы');
let minute = +prompt('Минуты');
let second = +prompt('Секунды');

alert(time(hour, minute, second)); */


// 8. Задание.

/* function time(hour, minute, second) {
   return (hour * 3600) + (minute * 60) + second;
}

let hour = +prompt('Часы');
let minute = +prompt('Минуты');
let second = +prompt('Секунды');

alert('Время в секундах - ' + time(hour, minute, second)); */


// 9. Задание. https://allcalc.ru/node/2072

function time(num) {

   hour = Math.floor(num / 3600);
   minute = Math.floor((num - (hour * 3600)) / 60);
   second = (num - (hour * 3600)) - (minute * 60);

   return hour + ':' + minute + ':' + second;
}

let num = +prompt('Секунды');
let hour;
let minute;
let second;

alert(time(num));


// 10. Задание.

/* function time(hour1, minute1, second1, hour2, minute2, second2) {

   let res1 = (hour1 * 3600) + (minute1 * 60) + second1;
   let res2 = (hour2 * 3600) + (minute2 * 60) + second2;
   let res3;

   if (res1 > res2) {
      res3 = res1 - res2;
   } else if (res1 < res2) {
      res3 = res2 - res1;
   } else {
      return 'Разница между датами - 00:00:00';
   }

   hour3 = Math.floor(res3 / 3600);
   minute3 = Math.floor((res3 - (hour3 * 3600)) / 60);
   second3 = (res3 - (hour3 * 3600)) - (minute3 * 60);

   if ((hour3 >= 0 && hour3 < 10) && (minute3 >= 0 && minute3 < 10) && (second3 >= 0 && second3 < 10)) {
      hour3 = '0' + hour3;
      minute3 = '0' + minute3;
      second3 = '0' + second3;
   } else if ((hour3 >= 0 && hour3 < 10) && (minute3 >= 0 && minute3 < 10) && second3 >= 10) {
      hour3 = '0' + hour3;
      minute3 = '0' + minute3;
   } else if ((hour3 >= 0 && hour3 < 10) && minute3 >= 10 && (second3 >= 0 && second3 < 10)) {
      hour3 = '0' + hour3;
      second3 = '0' + second3;
   } else if (hour3 >= 10 && (minute3 >= 0 && minute3 < 10) && (second3 >= 0 && second3 < 10)) {
      minute3 = '0' + minute3;
      second3 = '0' + second3;
   } else if ((hour3 >= 0 && hour3 < 10) && minute3 >= 10 && second3 >= 10) {
      hour3 = '0' + hour3;
   } else if (hour3 >= 10 && (minute3 >= 0 && minute3 < 10) && second3 >= 10) {
      minute3 = '0' + minute3;
   } else if (hour3 >= 10 && minute3 >= 10 && (second3 >= 0 && second3 < 10)) {
      second3 = '0' + second3;
   }

   return 'Разница между датами - ' + hour3 + ':' + minute3 + ':' + second3;
}

let hour1 = +prompt('Часы');
let minute1 = +prompt('Минуты');
let second1 = +prompt('Секунды');
let hour2 = +prompt('Часы');
let minute2 = +prompt('Минуты');
let second2 = +prompt('Секунды');
let hour3;
let minute3;
let second3;

alert(time(hour1, minute1, second1, hour2, minute2, second2)); */