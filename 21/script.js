// let array = [1,1,2,2,3,3,4,5,6]

// function check(array){
//     function newf(value, index, self) {
//         return self.indexOf(value) === index
//     }
//     let a = array.filter(newf)
//     // array.filter( compareFunction(value, index, array) )
//     // (1,0,[1,1,2,2,3,3,4,5,6])
//     // (1,1,[1,1,2,2,3,3,4,5,6])
//     console.log(a);
// }

// let newArray = new Set(array)
// newArray = new Array(...newArray)
// console.log(newArray);


// let name = 'Alex'
// let myRegEx = new RegExp(`${name} is`, 'ig')
// let meRegEx2 = /${name}/

// let str = "Любо, братцы, любо!";

// let result = str.match(/любо/i); // без флага g

// console.log(result);

// console.log( result[0] );     // Любо (первое совпадение)
// console.log( result.length ); // 1

// // Дополнительная информация:
// console.log( result.index );  // 0 (позиция совпадения)
// console.log( result.input );  // Любо, братцы, любо! (исходная строка)

// let matches = "JavaScript".match(/HTML/) || [];

// console.log(matches);


// console.log( "Люблю\n Привет HTML и всё!".replace(/HTML/, "$& и JavaScript") ); // Люблю HTML и JavaScript

// // Люблю и всё! и javaScript и всё!

// console.log( "1-5".match(/\d\s-\s\d/) ); // 1 - 5, тоже работает

// console.log('П р и в е т'.match(/\p{Lu}/gu));

// let regex = /x\p{Hex_Digit}\p{Hex_Digit}/u
// console.log('Число: x0F'.match(regex));

// let regexp = /\p{sc=Cyrillic}/gu; // вернёт китайские иероглифы

// let str = `Hello Привет 你好 123_456`;

// console.log( str.match(regexp) ); // 你,好

// let regexp = /\p{sc=Cyrillic}..\p{Sc}\d/gu;

// let  str = `Цены: $2, €1, ¥9`;

// console.log( str.match(regexp) ); // Цены: $2

// let str1 = "Mary ";
// console.log( /^Mary$/.test(str1) ); // true

// let str = `1е место: Винни
// 4
// 2е место: Пятачок
// 5
// 3е место: Слонопотам`;

// console.log( str.match(/^\d$/gm) ); // 1, 2, 3


// console.log( "1 a3 456 78 7a".match(/\b\d\w\b/g) ); 

// let str = 'Завтрак в 09:00 в комнате 123:456. Не проспи поезд (номер 12Q13 )'

// console.log(str.match(/\b\d\d:\d\d\b/g));

// console.log('^'.match(/\^/));

// console.log( "Глава 5.1".match(/\d\.\d/) ); // 5.1 (совпадение!)
// console.log( "Глава 511".match(/\d\.\d/) ); // null ("\." - ищет обычную точку)

// console.log('/'.match(/\//));

console.log(/[az\]-]/);