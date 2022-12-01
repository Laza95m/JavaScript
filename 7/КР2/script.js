'use strict';

// 1.Задание.

// let example;

// do {

//    example = +prompt('Решите пример 2 + 2 * 2');

// } while (example !== 6);


// 2.Задание.

// let num = 1000;

// do {

//    num = num / 2;

//    console.log(num);

// } while (num > 50);


// 3. Задание.

// let num = +prompt('Введите число');

// for (let i = 1; i <= 100; i++) {
//    if (i % num === 0) {
//       console.log(i);
//    }
// }


// 4. Задание.

// let minNum = +prompt('Введите минимальное значение диапазона');
// let maxNum = +prompt('Введите максимальное значение диапазона');

// for (let i = minNum + 3; i <= maxNum; i += 4) {
//    console.log(i);
// }


// 5. Задание.

let num = +prompt('Введите число');

for (let i = 2; i < num; i++) {
   if (num % i === 0) {
      alert('Число непростое');
      break;
   } else if (num > 1) {
      alert('Число простое');
      break;
   }
}