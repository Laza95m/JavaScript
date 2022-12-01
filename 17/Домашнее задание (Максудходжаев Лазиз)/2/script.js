"use strict";

let arr1 = [];
let arr2 = [];

for (let i = 0; i < 10; i++) {
   let number = Math.floor(Math.random() * 10);
   arr1.push(number);
}

for (let i = 0; i < 5; i++) {
   let number = Math.floor(Math.random() * 5);
   arr2.push(number);
}

console.log(arr1);
console.log(arr2);

// 1. Задание. https://ru.stackoverflow.com/questions/656733/%D0%9E%D0%B1%D1%8A%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B4%D0%B2%D1%83%D1%85-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%BE%D0%B2-%D0%B2-%D1%82%D1%80%D0%B5%D1%82%D0%B8%D0%B9-%D0%B7%D0%B0-%D0%B8%D1%81%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B5-%D1%83%D0%B6%D0%B5-%D0%B5%D1%81%D1%82%D1%8C

/* function allComponents(arr1, arr2) {
   let data = [];

   arr1.concat(arr2).forEach(function (item) {
      data[item] = true;
   });

   let res = Object.keys(data);
   return res;
}

console.log(allComponents(arr1, arr2)); */


// 2. Задание.

/* function commonElements(arr1, arr2) {
   let arr3 = arr1.concat(arr2);
   let uniqSet = new Set();

   for (let i = 0; i < arr3.length; i++) {
      for (let j = 0; j < i; j++) {

         if (arr3[j] === arr3[i]) {
            uniqSet.add(arr3[i]);
         }
      }
   }

   let res = Array.from(uniqSet);
   return res;
}

console.log(commonElements(arr1, arr2)); */


// 3. Задание.