"use strict";

// 1. Задание. https://stackoverflow.com/questions/70724526/how-to-create-a-function-that-omits-key-value-pairs-from-an-object-and-creates

// let car1 = {
//    model: "Kia",
//    speed: 70,
//    color: "Black",
// };

/* function Without(obj, keys) {
   let res = {};

   for (let key in obj) {
      if (keys.includes(key)) continue;

      res[key] = obj[key];
   }

   return res;
}

let car2 = Without(car1, ['speed', 'model']);

console.log(car2); */


// 2. Задание

/* function IsEpmty(obj) {

   for (let key in obj) {
      return true;
   }

   return false
}

console.log(IsEpmty(car1)); */


// 3. Задание

/* let obj1 = {
   c: 21,
   d: 12,
};

let obj2 = {
   c: 21,
   d: 12,
};

function isEqual(object1, object2) {
   for (let key in object1) {
      if (key in object2) {

         if (object1[key] !== object2[key]) {
            return false;
         }

      } else {
         return false;
      }
   }

   return true;
}

console.log(isEqual(obj1, obj2)); * /


// 4. Задание

/*let car1 = {
   model: {
      name: undefined,
   },
};

let car2 = {
   model: {
      name: 'Kia',
   },
   color: null,
}

function IsEmptyDeep(obj) {

   for (let key in obj) {
      if (typeof obj[key] === 'object') {
         let obj2 = obj[key];

         for (let key2 in obj2) {
            if (obj2[key2] === undefined) {
               return true;
            }
            return false;
         }
      }
   }
}

console.log(IsEmptyDeep(car1)) // true
console.log(IsEmptyDeep(car2)) // false */


// 5. Задание

/* obj1 = {
   a: '12',
   b: {
      c: 21,
      d: 12,
   },
};

obj2 = {
   a: '12',
   b: {
      c: 21,
      d: 12,
   },
};


function deepEqual(object1, object2) {
   if (Object.keys(object1).length !== Object.keys(object2).length) return false;

   for (let key in object1) {
      if (key in object2) {

         if (typeof object1[key] !== 'object' && typeof object2[key] !== 'object') {

            if (object1[key] !== object2[key]) return false;

         } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {

            if (!deepEqual(object1[key], object2[key])) return false;

         } else return false;

      } else return false;

   }

   return true;
}

console.log(deepEqual(obj1, obj2)); */


// 6. Задание.

/* let obj1 = {
   c: 21,
   d: 12,
};

let obj2 = {
   c: 21,
   d: 12,
};

function intersection(object1, object2) {
   let result = {};

   for (let key in object1) {
      if (key in object2 && object1[key] === object2[key]) {
         result[key] = object1[key];
      }
   }

   return result;
}

console.log(intersection(obj1, obj2)); */


// 7. Задание.

/* obj1 = {
   a: '12',
   b: {
      c: 21,
      d: 12,
   },
};

obj2 = {
   a: '12',
   b: {
      c: 21,
      d: 12,
   },
};

function deepIntersection(object1, object2) {
   let result = {};

   for (let key in object1) {
      if (key in object2) {

         if (typeof object1[key] !== 'object' && typeof object2[key] !== 'object') {

            if (object1[key] === object2[key]) result[key] = object1[key];

         } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
            let tempResult = deepIntersection(object1[key], object2[key]);

            if (Object.keys(tempResult).length !== 0) result[key] = tempResult;
         }
      }
   }

   return result;
}

console.log(deepIntersection(obj1, obj2)); */