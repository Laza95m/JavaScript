'use strict'

// 1 задание

// let userName = prompt('Введите свое имя');
// alert('Привет, ' + userName);


// 2 задание

// const userYearOfBirth = +prompt('Введите год рождения');
// const currentYear = 2022;
// alert('Ваш возраст: ' + (currentYear - userYearOfBirth));


// 3 задание. Формула нахождения периметра квадрата (P = 4 * a)

// let squareLength = +prompt('Введите длину стороны квадрата');
// alert('Периметр квадрата равен: ' + squareLength * 4);


// 4 задание. Формула вычисления площади круга (S = π * r2)

// let circleRadius = +prompt('Введите радиус окружности');
// alert('Площадь окружности равна: ' + (3.14 * circleRadius ** 2));


// 5 задание. Формула скорости (v = s / t)

// let distanceKm = +prompt('Введите расстояние в км между двумя городами');
// let hoursToCity = +prompt('Введите за сколько часов вы хотите добраться до города');
// alert('Ваша скорость равна: ' + (distanceKm / hoursToCity) + 'км/ч');


// 6 задание.

// let dollar = +prompt('Введите сумму в долларах');
// const euro = 0.98;
// alert('курс валюты в евро - ' + (dollar * euro));


// 7 задание.

// let flashDriveVolume = +prompt('Укажите объем флешки в Гб');
// alert(Math.trunc((flashDriveVolume * 1024) / 820) + ' - файлов размером в 820 Мб поместиться на флешку'); // гб перевел в мб, и разделил на 820мб


// 8 задание.

// let amountOfMoney = +prompt('Введите сумму денег в кошельке');
// let chocolatePrice = +prompt('Введите цену одной шоколадки');
// alert(Math.trunc(amountOfMoney / chocolatePrice) + ' - шоколадок можете купить');
// alert('Ваша сдача - ' + (amountOfMoney - chocolatePrice));


// 9 задание. https://www.codevscolor.com/javascript-reverse-number

// let threeDigitNumber = +prompt('Введите трехзначное число');
// let rev = 0;
// let lastDigit;
// while (threeDigitNumber != 0) {
//    lastDigit = threeDigitNumber % 10;
//    rev = rev * 10 + lastDigit;
//    threeDigitNumber = Math.floor(threeDigitNumber / 10);
// }
// alert('число задом наперед - ' + rev);


// 10 задание. https://www.programiz.com/javascript/examples/even-odd

// let number = +prompt('Введите целое число');
// let result = (number % 2 == 0) ? "четное" : "нечетное";
// alert('Ваше число ' + result);