// build-in / global / enclosed / local

// function имя(параметры) { 
//    ...тело...
// }
// 

// let age = 12
// function showMessage() {
//     let age = 21
//     console.log(age);
//     let name = 'Alex'
//     alert('Hello, ' + name);
// }

// showMessage();

// console.log(showMessage());

// function greeting(name='User', age='unknown') {
//     console.log('Hello, ny name is ' + name +'. My age is ' + age);
//     if (arguments[2] !== undefined) {
//         console.log(arguments[2]);
//     }
// }

// let name = 'Alex';
// let age = 12;

// greeting(name, age, 123)
// console.log(greeting());



// function summator(number1, number2) {
//     let result = number1 + number2
//     return result+"!"
//     console.log('Hello');
// }
// let sum = summator(2,2)
// console.log(sum);

// function bar(){
//     console.log('Hello I am bar');
// }

// function foobar() {
//     console.log('I am foobar');
// }

// function foo(number) {
//     if (number === 1) return bar()
//     if (number === 2) return foobar()
// }

// console.log(foo(1))


function oddOrEven(number){
    if (number === 0)
        return 'Zero'
    if (number%2)
        return 'Odd'
    if (!(number%2))
        return oddOrEven(2)
}

console.log(oddOrEven(8));






