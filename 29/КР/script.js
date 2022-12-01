// function makeCounter() {
//     let count = 0;
//     let name = 'asd'
  
//     return function() {
//       return count++; // есть доступ к внешней переменной "count"
//     };
//   }
  
//   let counter = makeCounter();
  
//   console.log( counter() ); // 0
//   console.log( counter() ); // 1
  

//   counter = makeCounter();
//   console.log( counter() ); // 2


// function fun () {
//     let phrase = 'Hello'

//     if (true) {
//         let user = 'John'
//         return function(newPhrase = phrase){
//             phrase = newPhrase
//             console.log(phrase, user);
//         }
//     }
// }

// let test = fun();
// test('Bye')
// let test2 = fun();
// test2()


// function mult(a) {
//     return function(b){
//         return a*b
//     }
// }

// let mult2 = mult(2)
// console.log(mult2(5));
// let mult3 = mult(3)
// console.log(mult3(5));

// function inArray(arr) {
//     return function(element){
//         return arr.includes(element)
//     }
//   }


// let arr = [0,1,2,3,4]

// let test = [1,5,10,0]

// console.log(test.filter(inArray(arr)));


let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

// по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);

// function byField(param) {
//     return function (a,b) {
//         if (a[param] < b[param]) {
//             return -1
//         } else if (a[param] > b[param]) {
//             return 1
//         } else {
//             return 0
//         }
//     }
// }
// let arr = users.sort(byField('name'))
// for (let item of arr){
//     console.log(item);
// }
// console.log('---------------------------------');
// arr = users.sort(byField('surname'))
// for (let item of arr){
//     console.log(item);
// }


// Прочитать с 5.9 - 6.3 включительно
// Исправить
function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
      let shooter = function() { // функция shooter
        console.log( i ); // должна выводить порядковый номер
      };
      shooters.push(shooter);
      i++;
    }
    return shooters;
  }
  let army = makeArmy();
  army[0](); // у 0-го стрелка будет номер 10
  army[5](); // и у 5-го стрелка тоже будет номер 10
  // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...