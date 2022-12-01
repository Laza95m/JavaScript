// let a = 12

// // console.log(`Hello, I am ${a+1} years old`);

// // Max is a pilot
// // Max's a pilot

// // В одинарных кавычках не получится использовать одинарные кавычки

// let single = "Max's is a pilot"
// console.log(single);


// // "IT STEP" is cool
// let double = '"IT STEP" is cool'

// // Экранирование символов   \
// // \n - перенос строки

// console.log('Hello \nWorld!');
// console.log('\u{1F60D}');

// let str = 'Widget with id';

// console.log( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
// console.log( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру

// console.log( str.indexOf(" id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)


// console.log('Hello'.codePointAt(5));

// var hello = 'Привет, ';
// console.log(hello.concat('Кевин', ', удачного дня.'));

// console.log(hello);


let str = 'Hello H WorHld!'

// console.log(str.split(''));

let array = str.split(' ')
console.log(array.join());

// for (let index in array) {
//     if (array[index] === 'H') array[index] = 'h'
// }
// console.log(array);

// str = array.join('')
// console.log(str);
// str = ''
// for (let value of array) {
//     str += value
// }
// console.log(str);