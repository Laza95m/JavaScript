"use strict";




let storeReceipt = [
   ['Bread', 2, 20,],
   ['Oil', 1, 120,],
   ['Sugar', 3, 45,],
   ['Tomato', 1, 20,],
   ['Cheese', 1, 340,],
];


// 1. Задание

/* function ShowCheck(array) {
   let res = '';

   for (let check of array) {
      res += `Product: ${check[0]}. Quantity: ${check[1]}. Price: ${check[2]}\n`;
   }

   return res;
}

console.log(ShowCheck(storeReceipt)); */


// 2. Задание

/*function totalSum(array) {
   let res = 0;

   for (let i = 0; i < array.length; i++) {
      res += array[i][2];
   }

   return res;
}

console.log(totalSum(storeReceipt));*/


// 3. Задание

/* function mostExpensivePurchase(array) {
   let arrNum = [];

   for (let i = 0; i < array.length; i++) {
      arrNum.push(array[i][2]);
   }

   return Math.max.apply(null, arrNum);
}

console.log(mostExpensivePurchase(storeReceipt)); */


// 4. Задание

/* function avarageCost(array) {
   let newSumm = 0;

   for (let i = 0; i < array.length; i++) {
      newSumm += array[i][2];
   }

   return newSumm / array.length;
}

console.log(avarageCost(storeReceipt)); */