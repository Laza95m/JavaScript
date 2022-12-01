"use strict";

let arr = [];

for (let i = 0; i < 10; i++) {
   let number = Math.floor(Math.random() * 10);
   arr.push(number);
}

console.log(arr);


// 1. Задание

/* function showArr(arr) {
   alert(arr);
}

showArr(arr); */


// 2. Задание

/* function showEvenArr(arr) {
   let res = [];

   for (let prop of arr) {
      if (prop % 2 === 0) {
         res.push(prop);
      }
   }

   return res;
}

alert(showEvenArr(arr)); */


// 3. Задание

/* function sumArr(arr) {
   let res = 0;

   for (let prop of arr) {
      res += prop;
   }

   return res;
}

alert(sumArr(arr)); */


// 4. Задание

/* function maxNumArr(arr) {
   let num = '';

   for (let prop of arr) {
      num = num + '' + prop;
   }

   function maximumNumber(num) {
      if (num === 0) return 0;
      else return Math.max(Math.floor(num % 10), maximumNumber(num / 10));
   }

   return maximumNumber(num);
}

alert(maxNumArr(arr)); */


// 5. Задание

/* function addNewItem(index, addItem, arr) {

   arr.splice(index, 0, addItem);
   return arr;
}

alert(addNewItem(10, 777, arr)); */

// 6. Задание

/* function deleteItem(index, deleteElem, arr) {

   arr.splice(index, deleteElem);
   return arr;
}

alert(deleteItem(4, 2, arr)); */