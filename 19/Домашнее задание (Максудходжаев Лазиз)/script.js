"use strict";

// 1. Задание

/* let str1 = "Привет мир";
let str2 = "Пока мир";

function compareLength(string1, string2) {
   if (string1.length > string2.length) return 1;
   if (string1.length < string2.length) return -1;
   if (string1.length === string2.length) return 0;
}

console.log(compareLength(str1, str2)); */


// 2. Задание

/* let str1 = "привет мир";

function convertToUpperCase(string) {
   return string[0].toUpperCase() + string.slice(1);
}

console.log(convertToUpperCase(str1)); */


// 3. Задание. https://www.cyberforum.ru/javascript-beginners/thread2733010.html

/* let str = 'Привет. Я строка! Сколько же тут гласных?';

function numOfVowels(str) {
   let arr = str.match(/[ауоыиэяюёе]/gi);

   if (arr === null) return 0;

   return arr;
}

console.log(numOfVowels(str)); */


// 4. Задание.

/* let str1 = "Привет Мир";
let str2 = "100% бесплатно";
let str3 = "Увеличение продаж";
let str4 = "Только сегодня";
let str5 = "Не удаляйте";
let str6 = "ххх";

function spamCheck(str) {
   let spamWords = ["100% бесплатно", "увеличение продаж", "только сегодня", "не удаляйте", "ххх",];
   str = str.toLowerCase();

   for (let words of spamWords) {
      words = words.toLowerCase();

      if (words === str) {
         return true;
      }
   }

   return false;
}

console.log(spamCheck(str1));
console.log(spamCheck(str2));
console.log(spamCheck(str3));
console.log(spamCheck(str4));
console.log(spamCheck(str5));
console.log(spamCheck(str6)); */


// 5. Задание.

/* let str = "Hello, world!";

function truncate(string, maxLength) {
   if (string.length > maxLength) return string.slice(0, maxLength - 3) + "...";
   return string;
}

console.log(truncate(str, 8)); */


// 6. Задание.

/* function palindrome(str) {
   str = str.toLowerCase().split(' ').join('');
   return str.split('').reverse().join('').split(' ').join('').toLowerCase() === str;
}

console.log(palindrome("А роза упала на лапу Азора"));
console.log(palindrome('34543'));
console.log(palindrome('345543'));
console.log(palindrome('3'));
console.log(palindrome(''));
console.log(palindrome('723210')); */


// 7. Задание.

/* function getAmountOfWords(string) {
   return string.split(' ').join('').length;
}

console.log(getAmountOfWords('Это строка где очень много слов')); */


// 8. Задание.

/* function findLongestWord(str) {
   return str.split(' ').reduce(function (a, b) {
      if (b.length > a.length) {
         return b;
      }

      return a;
   });
};

console.log(findLongestWord('There is the longest word in a string!')); */


// 9. Задание. https://stackoverflow.com/questions/30986239/function-that-involves-averaging-word-length-from-a-string

/* let superCounter = function (x) {
   let wordCount = x.split(" ").length;
   let wordArray = x.split(" ");
   let wordAvg = 0;

   for (let i = 0; i < wordCount; i++) {
      wordAvg += wordArray[i].length;
   }

   let avgLen = wordAvg / wordCount;
   return "Средняя длина слова: " + avgLen;
};

console.log(superCounter("Эта функция будет анализировать строки")); */


// 10. Задание.

/* function findSymbol(str, symbol) {
   let regExp = new RegExp(symbol, "gi");

   return "Индекс символа = " + [...str.matchAll(regExp)].map(i => i.index)
      + "\nКол-во символа = " + [...str.matchAll(regExp)].map(i => i.index).length;

}

console.log(findSymbol("Быть или не быть, вот в чём вопрос.", "б")); */