'use strict';

// 1. Задание

// let userAge = +prompt('Введите свой возраст');
// if (userAge >= 0 && userAge < 12) {
//    alert('Вы ребенок');
// } else if (userAge >= 12 && userAge < 18) {
//    alert('Вы подросток');
// } else if (userAge >= 18 && userAge < 60) {
//    alert('Вы взрослый');
// } else if (userAge >= 60) {
//    alert('Вы пенсионер');
// }


// 2. Задание

// let num = +prompt('Введите число от 0 до 9');
// if (num === 0) {
//    alert(')');
// } else if (num === 1) {
//    alert('!');
// } else if (num === 2) {
//    alert('@');
// } else if (num === 3) {
//    alert('#');
// } else if (num === 4) {
//    alert('$');
// } else if (num === 5) {
//    alert('%');
// } else if (num === 6) {
//    alert('^');
// } else if (num === 7) {
//    alert('&');
// } else if (num === 8) {
//    alert('*');
// } else if (num === 9) {
//    alert('(');
// } else {
//    alert('Ошибка');
// }


// 3. Задание

// let num = +prompt('Введите трехзначное число');
// let num1 = (Math.floor(num / 10 ** 2) % 10); //первое число
// let num2 = (Math.floor(num / 10 ** 1) % 10); //второе число
// let num3 = (Math.floor(num / 10 ** 0) % 10); //третье число
// if (num < 100 || num > 999) {
//    alert('Вы ввели не трехзначное число');
// } else if (num1 === num2 && num2 === num3) {
//    alert('Все числа одинаковые');
// } else if (num1 === num2 || num1 === num3 || num2 === num3) {
//    alert('Есть два одинаковых числа');
// } else if (num1 !== num2 || num1 !== num3 || num2 !== num3) {
//    alert('Нет одинаковых чисел');
// }


// 4. Задание

// let year = +prompt('Введите год');
// if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//    alert('Высокосный год');
// } else {
//    alert('Не высокосный год');
// }


// 5. Задание

// let num = +prompt('Введите пятиразрядное число');
// let num1 = Math.floor(num / 10 ** 4) % 10; // первое число
// let num2 = Math.floor(num / 10 ** 3) % 10; // второе число
// let num4 = Math.floor(num / 10 ** 1) % 10; // четвертое число
// let num5 = Math.floor(num / 10 ** 0) % 10; // пятое число

// if (num < 10000 || num > 99999) {
//    alert('Ошибка');
// } else if (num1 === num5 && num2 === num4) {
//    alert('Число является палиндромом');
// } else {
//    alert('Число не является палиндромом');
// }


// 6. Задание

// let usd = +prompt('Введите кол-во usd');
// let message = prompt('В какую валюту перевести (EUR, UAH, или AZN)');
// const eur = 0.98;
// const uah = 36.97;
// const azn = 1.7;
// if (message === 'eur' || message === 'EUR') {
//    alert(usd * eur + ' EUR');
// } else if (message === 'uah' || message === 'UAH') {
//    alert(usd * uah + ' UAH');
// } else if (message === 'azn' || message === 'AZN') {
//    alert(usd * azn + ' AZN');
// } else {
//    alert('Ошибка');
// }


// 7. Задание. Формула X = A - (A⋅P)/100. https://poschitat.online/uvelichit-ili-umenshit-chislo-na-procent

// let purchaseAmount = +prompt('Введите сумму покупки');
// if (purchaseAmount >= 200 && purchaseAmount < 300) {
//    alert('Сумма оплаты со скидкой в 3% = ' + Math.floor(purchaseAmount - (purchaseAmount * 3 / 100)));
// } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
//    alert('Сумма оплаты со скидкой в 5% = ' + Math.floor(purchaseAmount - (purchaseAmount * 5 / 100)));
// } else if (purchaseAmount >= 500) {
//    alert('Сумма оплаты со скидкой в 7% = ' + Math.floor(purchaseAmount - (purchaseAmount * 7 / 100)));
// } else {
//    alert('Ошибка');
// }


// 8. Задание

// let circumference = +prompt('Введите длину окружности');
// let perimeterSquare = +prompt('Введите периметр квадрата');
// let circleRadius = circumference / (2 * 3.14); // Радиус окружности. Формула R= с/(2*π)
// let sideSquare = perimeterSquare / 4; // Сторона квадрата.
// if (circleRadius <= sideSquare / 2) {
//    alert('Окружность поместиться в квадрат');
// } else {
//    alert('Окружность не поместиться в квадрат');
// }


// 9. Задание

// let question1 = prompt('Какая третья планета от Солнца?:  А) Марс  Б) Земля  С) Юпитер');

// if (question1 === 'Земля' || question1 === 'земля') {
//    alert('Ответ верный + 2 балла');
// } else {
//    alert('Ответ не верный');
// }

// let question2 = prompt('Какой океан самый глубокий?:  А) Атлантический  Б) Индийский  С) Тихий');

// if (question2 === 'Тихий' || question2 === 'тихий') {
//    alert('Ответ верный + 2 балла');
// } else {
//    alert('Ответ не верный');
// }

// let question3 = prompt('Какое море самое солёное?:  А) Мёртвое  Б) Аральское  С) Каспийское');

// if (question3 === 'Мёртвое' || question3 === 'мёртвое' || question3 === 'Мертвое' || question3 === 'мертвое') {
//    alert('Ответ верный + 2 балла');
// } else {
//    alert('Ответ не верный');
// }

// if ((question1 === 'Земля' || question1 === 'земля') &&
//    (question2 === 'Тихий' || question2 === 'тихий') &&
//    (question3 === 'Мёртвое' || question3 === 'мёртвое' || question3 === 'Мертвое' || question3 === 'мертвое')) {
//    alert('Вы набрали 6 баллов');
// } else if ((question1 !== 'Земля' || question1 !== 'земля') &&
//    (question2 === 'Тихий' || question2 === 'тихий') &&
//    (question3 === 'Мёртвое' || question3 === 'мёртвое' || question3 === 'Мертвое' || question3 === 'мертвое')) {
//    alert('Вы набрали 4 балла');
// } else if ((question1 === 'Земля' || question1 === 'земля') &&
//    (question2 !== 'Тихий' || question2 !== 'тихий') &&
//    (question3 === 'Мёртвое' || question3 === 'мёртвое' || question3 === 'Мертвое' || question3 === 'мертвое')) {
//    alert('Вы набрали 4 балла');
// } else if ((question1 === 'Земля' || question1 === 'земля') &&
//    (question2 === 'Тихий' || question2 === 'тихий') &&
//    (question3 !== 'Мёртвое' || question3 !== 'мёртвое' || question3 !== 'Мертвое' || question3 !== 'мертвое')) {
//    alert('Вы набрали 4 балла');
// } else if ((question1 !== 'Земля' || question1 !== 'земля') &&
//    (question2 !== 'Тихий' || question2 !== 'тихий') &&
//    (question3 === 'Мёртвое' || question3 === 'мёртвое' || question3 === 'Мертвое' || question3 === 'мертвое')) {
//    alert('Вы набрали 2 балла');
// } else if ((question1 !== 'Земля' || question1 !== 'земля') &&
//    (question2 === 'Тихий' || question2 === 'тихий') &&
//    (question3 !== 'Мёртвое' || question3 !== 'мёртвое' || question3 !== 'Мертвое' || question3 !== 'мертвое')) {
//    alert('Вы набрали 2 балла');
// } else if ((question1 === 'Земля' || question1 === 'земля') &&
//    (question2 !== 'Тихий' || question2 !== 'тихий') &&
//    (question3 !== 'Мёртвое' || question3 !== 'мёртвое' || question3 !== 'Мертвое' || question3 !== 'мертвое')) {
//    alert('Вы набрали 2 балла');
// } else {
//    alert('Вы набрали 0 баллов');
// }


// 10. Задание

// let day = +prompt('Введите дату(День)');
// let month = +prompt('Введите дату(Месяц)');
// let year = +prompt('Введите дату(Год)');

// if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) { // Високосный год
//    if (day === 29 && month === 2 && year >= 1) {
//       alert(day / day + ', ' + ++month + ', ' + year);
//    } else if (day >= 1 && day <= 28 && month === 2 && year >= 1) {
//       alert(++day + ', ' + month + ', ' + year);
//    } else if (day >= 1 && day <= 30 && (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) && year >= 1) {
//       alert(++day + ', ' + month + ', ' + year);
//    } else if (day === 30 && (month === 4 || month === 6 || month === 9 || month === 11) && year >= 1) {
//       alert(day / day + ', ' + ++month + ', ' + year);
//    } else if (day >= 1 && day <= 29 && (month === 4 || month === 6 || month === 9 || month === 11) && year >= 1) {
//       alert(++day + ', ' + month + ', ' + year);
//    } else if (day === 31 && (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10) && year >= 1) {
//       alert(day / day + ', ' + ++month + ', ' + year);
//    } else if (day === 31 && month === 12 && year >= 1) {
//       alert(day / day + ', ' + month / month + ', ' + ++year);
//    } else if (day <= 0 || day >= 32 || month <= 0 || month >= 13 || year <= 0) {
//       alert('Ошибка');
//    }
// }

// if ((year % 4 != 0) && (year % 100 == 0) || (year % 400 != 0)) { // Невисокосный год
//    if (day === 28 && month === 2 && year >= 1) {
//       alert(day / day + ', ' + ++month + ', ' + year);
//    } else if (day >= 1 && day <= 27 && month === 2 && year >= 1) {
//       alert(++day + ', ' + month + ', ' + year);
//    } else if (day >= 1 && day <= 30 && (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) && year >= 1) {
//       alert(++day + ', ' + month + ', ' + year);
//    } else if (day === 30 && (month === 4 || month === 6 || month === 9 || month === 11) && year >= 1) {
//       alert(day / day + ', ' + ++month + ', ' + year);
//    } else if (day >= 1 && day <= 29 && (month === 4 || month === 6 || month === 9 || month === 11) && year >= 1) {
//       alert(++day + ', ' + month + ', ' + year);
//    } else if (day === 31 && (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10) && year >= 1) {
//       alert(day / day + ', ' + ++month + ', ' + year);
//    } else if (day === 31 && month === 12 && year >= 1) {
//       alert(day / day + ', ' + month / month + ', ' + ++year);
//    } else if (day <= 0 || day >= 32 || month <= 0 || month >= 13 || year <= 0) {
//       alert('Ошибка');
//    }
// }