"use strict";

let ShoppingList = [
   { name: "Meat", quantity: 1, bought: "No", },
   { name: "Bread", quantity: 2, bought: "Yes", },
   { name: "Chocolate", quantity: 3, bought: "No", },
   { name: "Juice", quantity: 4, bought: "Yes", },
   { name: "Banana", quantity: 5, bought: "No", },
];


// 1. Задание.

/* function showList(array) {
   let newList = [];

   for (let product of array) {
      if (product.bought === 'No') newList.push(product);
   }

   for (let product of array) {
      if (product.bought === 'Yes') newList.push(product);
   }

   return newList;
}

console.log(showList(ShoppingList)); */


// 2. Задание

/* function AddingPurchase(array) {
   let newProduct = { name: "Bread", quantity: 3, bought: "No", };

   for (let obj of array) {
      if (obj.name === newProduct.name) {
         obj.quantity += newProduct.quantity;
         return array;
      }
   }

   return array.concat(newProduct);
}

console.log(AddingPurchase(ShoppingList)); */


// 3. Задание

/* function ProductPurchase(array, nameProduct) {
   for (let obj of array) {
      if (obj.name === nameProduct) {
         obj.bought = "Yes";
         return array;
      }
   }
}

console.log(ProductPurchase(ShoppingList, "Banana")); */