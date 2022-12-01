// 1. Задание

/* function statistics(string) {
   let letterCount = string.match(/[а-я]/gi).length;
   let numberDigits = string.match(/\d+/g).join('').length;
   let otherMarks = string.match(/[,:\.\-=]/g).length;

   return `Количество букв = ${letterCount}\nКоличество цифр = ${numberDigits}\nКоличество других знаков = ${otherMarks}`;
}

console.log(statistics("Вот, что мне хотелось бы сказать на эту тему: 120 - 5 = 115.")); */


// 2. Задание

/* function textNumber(number) {
   let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
   let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
   let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];

   if (number > 0 && number <= 9) {
      return first[number - 1];
   }

   if (number >= 10 && number <= 20) {
      return second[number - 10];
   }

   if (number > 20 && number <= 99) {
      let str = `${number}`.split('');
      let firstNumber = str[0];
      let secondNumber = str[1];

      return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
   }
}

console.log(textNumber(7));
console.log(textNumber(15));
console.log(textNumber(55)); */


// 3. Задание https://www.cyberforum.ru/javascript-beginners/thread2723411.html

/* function lineChange(str) {
   let result = "";

   for (let letters of str) {
      result += letters === letters.toUpperCase() ? letters.toLowerCase() : letters.toUpperCase();
   }

   return result;
}

console.log(lineChange("Вот, Что Мне Хотелось Бы Сказать На Эту Тему: 120 - 5 = 115.")); */


// 4. Задание

/* function СamelСase(string) {
   let firstWord = string.replace(/[-]/g, " ").split(' ')[0];
   let secondWord = string.replace(/[-]/g, " ").split(' ')[1][0].toUpperCase() + string.replace(/[-]/g, " ").split(' ')[1].slice(1);
   return firstWord + secondWord;
}

console.log(СamelСase("font-size"));
console.log(СamelСase("background-color"));
console.log(СamelСase("text-align")); */


// 5. Задание

/* function intoTheAbbreviation(str) {
   str = str.replace(/[-]/g, " ");
   return str.split(' ').map(word => word[0]).join('').toUpperCase();
}

console.log(intoTheAbbreviation('cascading style sheets'));
console.log(intoTheAbbreviation('объектно-ориентированное программирование')); */


// 6. Задание

/* function joinLines(...str) {
   return [...str].join('');
}

console.log(joinLines("Hello ", "world\n", "Background-", "color")); */


// 7. Задание

// function calculator(str) {
//    str = str.match(/(\d+) ([+\-*/]) (\d+)/);
//    if (str[2] === '+') return +str[1] + +str[3];
//    if (str[2] === '-') return +str[1] - +str[3];
//    if (str[2] === '*') return +str[1] * +str[3];
//    if (str[2] === '/') return +str[1] / +str[3];
// }

// console.log(calculator('10 + 2'));
// console.log(calculator('6 - 2'));
// console.log(calculator('6 * 2'));
// console.log(calculator('6 / 2'));


// 8. Задание

/* function infoURL(url) {
   url = url.match(/([\w]+):\/\/([\w\.]+)([\/\w\W]+)/)
   return `Протокол: ${url[1]}, домен: ${url[2]}, путь: ${url[3]}`;
}

console.log(infoURL('https://itstep.org/ua/about'));
console.log(infoURL('https://www.youtube.com/watch?v=nxCLXMBl4e4&t=2746s'));
console.log(infoURL('https://www.figma.com/file/5D9pDuLtS042hzaoN69Kd7/Free--Landing--Page-Template?node-id=0%3A1')); */


// 9. Задание. https://stackoverflow.com/questions/56452049/implement-split-method-with-a-function

/* let substringArray = function (str, separator) {
   let cache = [];
   let cachInt = 0;
   let lastWord = '';

   for (let i = 0; i < str.length; i++) {
      if (str[i] === separator) {
         cache[cachInt] = lastWord;
         cachInt++;
         lastWord = '';
      } else {
         lastWord = lastWord + str[i];
      }
   }

   if (lastWord !== '') {
      cache[cachInt] = lastWord;
   }

   return cache;
};

console.log(substringArray('10/08/2020', '/'));
console.log(substringArray('aa,bb,c', ',')); */


// 10. Задание. https://www.cyberforum.ru/javascript-beginners/thread2789868.html

/* let print = function (template, ...values) {
   return template.replace(/%(\d+)/g, (str, num) => [...values][num - 1]);
}

console.log(print('Today is %1 %2.%3.%4', 'Monday', 10, 8, 2020)); */