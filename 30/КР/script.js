// function sayHi() {
//     alert("Hi");
// }
  
// console.log(sayHi.name);


// function ask(question, ...handlers) {
//     let isYes = confirm(question);
  
//     for(let handler of handlers) {
//       if (handler.length == 0) {
//         if (isYes) handler();
//       } else {
//         handler(isYes);
//       }
//     }
  
//   }
  
//   // для положительных ответов вызываются оба типа обработчиков
//   // для отрицательных - только второго типа
// ask("Вопрос?", 
// () => alert('Вы ответили да'), 
// result => alert(result),
// () => alert('Вы ответили DA'));

// let sayHi = function(who) {
//     if (who) {
//       alert(`Hello, ${who}`);
//     } else {
//       sayHi("Guest"); // Ошибка: sayHi не является функцией
//     }
//   };
  
//   let welcome = function(who) {
//     if (who) {
//       alert(`Hello, ${who}`);
//     } else {
//       sayHi("Guest"); // Ошибка: sayHi не является функцией
//     }
//   };
//   sayHi = null;
  
//   welcome(); // Ошибка, вложенный вызов sayHi больше не работает!

// let sum = new Function(prompt(), prompt(), prompt());

// sum(1, 2);

function sayHi(){
    alert('Hi')
}

// let timerId = setTimeout(sayHi, 2000)
// let timerId2 = setTimeout(sayHi, 6000)
// let timerId3 = setTimeout(sayHi, 10000)
// console.log(timerId);
// console.log(timerId2);
// console.log(timerId3);

// alert("Hello!")
// clearTimeout(timerId2)

// let timerId = setInterval(sayHi, 2000)


let worker = {
    someMethod() {
      return 1;
    },
  
    slow(x) {
      alert("WORKER Called with " + x);
      return x * this.someMethod(); // (*)
    }
  };
  
  function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func.call(this, x); // теперь 'this' передаётся правильно
      cache.set(x, result);
      return result;
    };
  }
  
//   worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей
  
//   alert( worker.slow(2) ); // работает
//   alert( worker.slow(2) );

//   let test = {
//     someMethod() {
//         return 2;
//       },
    
//       slow(x) {
//         alert("Called with TEST " + x);
//         return x * this.someMethod(); // (*)
//       }
//   }
//   test.slow(1)
//   test.slow = cachingDecorator(worker.slow)
//   test.slow(1)