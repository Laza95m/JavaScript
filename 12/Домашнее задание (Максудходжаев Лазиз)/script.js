'use strict';

/* let car = {
   manufacturer: 'Kia',
   model: 'K5',
   productionYear: 2000,
   averageSpeed: 100,
} */

// 1. Задание.

/* function infoCar(car) {
   alert('Производитель - ' + (car.manufacturer) + '. Модель - ' + (car.model) + '. Год выпуска - ' + (car.productionYear) + 'г. Средняя скорость - ' + (car.averageSpeed) + 'км/ч');
}

infoCar(car); */


// 2. Задание.

/* function time(car, distance) {
   distance = +prompt("Расстояние - км");
   let time = distance / (car.averageSpeed);
   let rest;

   if (time % 4 === 0) rest = (time / 4 | 0) - 1;
   else rest = time / 4 | 0;

   return alert(distance / (car.averageSpeed) + rest + 'ч');
}

time(car); */


/* let fraction1 = {
   numerator: 3,
   denominator: 15,
}

let fraction2 = {
   numerator: 4,
   denominator: 16,
} */

// 1. Задание.

/* function summation(fraction1, fraction2) {

   if ((fraction1.denominator) === (fraction2.denominator)) return alert('Числитель = ' + (fraction1.numerator + fraction2.numerator) + '. Знаменатель = ' + (fraction1.denominator));

   function nod(a, b) {    //Находим НОД
      if (b > a) return nod(b, a);
      if (b === 0) return a;
      return nod(b, a % b);
   }

   function nok(fraction1, fraction2) {
      return (fraction1.denominator / nod(fraction1.denominator, fraction2.denominator) | 0) * fraction2.denominator;      //наименьший общий знаменатель
   }

   let denominator1 = (nok(fraction1, fraction2) / fraction1.denominator) * fraction1.numerator;      //Числитель первой дроби
   let denominator2 = (nok(fraction1, fraction2) / fraction2.denominator) * fraction2.numerator;      //Числитель второй дроби


   return alert('Числитель = ' + (denominator1 + denominator2) + '. Знаменатель = ' + nok(fraction1, fraction2));
}

summation(fraction1, fraction2); */


// 2. Задание.

/* function subtraction(fraction1, fraction2) {
   if ((fraction1.denominator) === (fraction2.denominator)) return alert('Числитель = ' + (fraction1.numerator - fraction2.numerator) + '. Знаменатель = ' + (fraction1.denominator));

   function nod(a, b) {    //Находим НОД
      if (b > a) return nod(b, a);
      if (b === 0) return a;
      return nod(b, a % b);
   }

   function nok(fraction1, fraction2) {
      return (fraction1.denominator / nod(fraction1.denominator, fraction2.denominator) | 0) * fraction2.denominator;      //наименьший общий знаменатель
   }

   let denominator1 = (nok(fraction1, fraction2) / fraction1.denominator) * fraction1.numerator;      //Числитель первой дроби
   let denominator2 = (nok(fraction1, fraction2) / fraction2.denominator) * fraction2.numerator;      //Числитель второй дроби

   return alert('Числитель = ' + (denominator1 - denominator2) + '. Знаменатель = ' + nok(fraction1, fraction2));
}

subtraction(fraction1, fraction2); */


// 3. Задание.

/* function multiplication(fraction1, fraction2) {
   let numerator = fraction1.numerator * fraction2.numerator;      //Числитель дроби - 10
   let denominator = fraction1.denominator * fraction2.denominator;      //знаменатель дроби - 3


   function nod(numerator, denominator) {    //Находим НОД
      if (denominator > numerator) return nod(denominator, numerator);
      if (denominator === 0) return numerator;
      return nod(denominator, numerator % denominator);
   }

   if (nod(numerator, denominator) === 1) return alert('Числитель = ' + (fraction1.numerator * fraction2.numerator) + '. Знаменатель = ' + (fraction1.denominator * fraction2.denominator));
   return alert('Числитель = ' + (numerator / nod(numerator, denominator)) + '. Знаменатель = ' + (denominator / nod(numerator, denominator)));
}

multiplication(fraction1, fraction2); */


// 4. Задание.

/* function division(fraction1, fraction2) {
   let numerator = fraction1.numerator * fraction2.denominator;      //Числитель дроби - 10
   let denominator = fraction1.denominator * fraction2.numerator;      //знаменатель дроби - 3

   function nod(numerator, denominator) {    //Находим НОД
      if (denominator > numerator) return nod(denominator, numerator);
      if (denominator === 0) return numerator;
      return nod(denominator, numerator % denominator);
   }

   if (nod(numerator, denominator) === 1) return alert('Числитель = ' + (fraction1.numerator * fraction2.denominator) + '. Знаменатель = ' + (fraction1.denominator * fraction2.numerator));
   return alert('Числитель = ' + (numerator / nod(numerator, denominator)) + '. Знаменатель = ' + (denominator / nod(numerator, denominator)));
}

division(fraction1, fraction2); */


// 5. Задание.

/* function reduction(fraction1) {
   let numerator = fraction1.numerator;      //Числитель дроби
   let denominator = fraction1.denominator;     //знаменатель дроби

   function nod(numerator, denominator) {    //Находим НОД
      if (denominator > numerator) return nod(denominator, numerator);
      if (denominator === 0) return numerator;
      return nod(denominator, numerator % denominator);
   }

   if (nod(numerator, denominator) === 1) return alert('Числитель = ' + fraction1.numerator + '. Знаменатель = ' + fraction1.denominator);
   return alert('Числитель = ' + (numerator / nod(numerator, denominator)) + '. Знаменатель = ' + (denominator / nod(numerator, denominator)));
}

reduction(fraction1); */


/* let time = {
   hours: 10,
   minutes: 30,
   seconds: 40,
} */

// 1. Задание

/* function infoTime(time) {
   return alert(time.hours + 'ч ' + time.minutes + 'м ' + time.seconds + 'с');
}

infoTime(time); */


// 2. Задание

/* function changeTime(time, numberSeconds) {
   numberSeconds = +prompt('Кол-во секунд');
   let totalSeconds = (time.hours * 3600) + (time.minutes * 60) + (time.seconds + numberSeconds);     //часы, минуты, секунды перевели в - секунды

   function infoTime(totalSeconds) {
      time.hours = Math.floor(totalSeconds / 3600);
      time.minutes = Math.floor((totalSeconds - (time.hours * 3600)) / 60);
      time.seconds = (totalSeconds - (time.hours * 3600)) - (time.minutes * 60);

      return time.hours + 'ч ' + time.minutes + 'м ' + time.seconds + 'с';
   }

   return alert(infoTime(totalSeconds));
}

changeTime(time); */


// 3. Задание

/* function changeTime(time, numberMinutes) {
   numberMinutes = +prompt('Кол-во минут');
   let totalMinutes = (time.hours * 3600) + ((time.minutes + numberMinutes) * 60);     //часы, минуты перевели в - минуты
   console.log(totalMinutes);

   function infoTime(totalMinutes) {
      time.hours = Math.floor(totalMinutes / 3600);
      time.minutes = Math.floor((totalMinutes - (time.hours * 3600)) / 60);

      return time.hours + 'ч ' + time.minutes + 'м ' + time.seconds + 'с';
   }

   return alert(infoTime(totalMinutes));
}

changeTime(time); */


// 4. Задание

/* function changeTime(time, numberHours) {
   numberHours = +prompt('Кол-во часов');
   return alert((time.hours + numberHours) + 'ч ' + time.minutes + 'м ' + time.seconds + 'с');
}

changeTime(time); */