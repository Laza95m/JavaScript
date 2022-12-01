// function sayHi() {
//     alert("Hello!")
// }

// let sayHi = function () {
//     alert("Hello")
// }

// console.log(sayHi);

// sayHi();

// let func = sayHi;
// console.log(func);






// function greeting() {
//     alert("Hello")
// }

// console.log('AASDASDASD');

// goodbye();
// summ();

// let summ = function(a,b) {
//     return a+b
// }


// function goodbye() {
//     alert("Bye")
// }


// function greeting (name) {
//     console.log('Hello ' + name);
// }

// let myName = 'Alex'

// greeting(myName)



// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// let showOk = function () {
//   alert( "Вы согласны." );
// }

// function showCancel() {
//   alert( "Вы отменили выполнение." );
// }

// // использование: функции showOk, showCancel передаются в качестве аргументов ask
// ask("Вы согласны?", showOk, showCancel);


// console.log(function() {
//     alert("hello")
// });


// let sum = (a,b) => a+b;

// let sum = function(a,b) {
//     return a+b;
// }


// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?
//   function() { alert("Привет!") } :
//   function() { alert("Здравствуйте!") };

// welcome();



// let age = prompt("Сколько Вам лет?", 18);

// let welcome = function (age, teenager, adult) {
//     if (age < 18) teenager();
//     else adult();
// }

// welcome(
//     age,
//     () => alert('Привет!'),
//     () => alert("Здравствуйте!")
//     );


let sign = '*'

console.log(sign+'\n'+sign);
