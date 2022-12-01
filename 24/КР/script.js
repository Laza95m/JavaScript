// let myString = 'ahb acb aeb aeeb adcb axeb'
// //ahb, acb, aeb
// let template = /\ba.b\b/gi
// console.log(myString.match(template));

// let str = 'aba aca aea abba adca abea'
// // abba adca abea
// let template = /\ba..a\b/gi
// console.log(str.match(template));

// let str = 'aba aca aea abba adca abea'
// // abba и abea
// let template = /\bab.a\b/gi
// console.log(str.match(template));

// let str = 'aa aba abba abbba abca abea'
// // aba, abba, abbba
// let template = /\bab+a\b/gi
// console.log(str.match(template));

// let str = 'aa aba abba abbba abca abea'
// // aa, aba, abba, abbba
// let template = /\bab*a\b/gi
// console.log(str.match(template));

// let str = 'aa aba abba abbba abca abea'
// // aa, aba
// let template = /\bab?a\b/gi
// console.log(str.match(template));

// let str = 'ab abab abab abababab abea'
// //строка 'ab' повторяется 1 или более раз
// let template = /\b(ab)+\b/gi
// console.log(str.match(template));

// let str = 'a.a aba aea'
// // a.a
// let template = /a\.a/
// console.log(str.match(template));

// let str = '2+3 223 2223'
// // 2+3
// let template = /\d\+\d/
// console.log(str.match(template));

// let str = '23 2+3 2++3 2+++3 345 567'
// //2+3, 2++3, 2+++3
// let template = /\d\++\d/g
// console.log(str.match(template));

// let str = '23 2+3 2++3 2+++3 445 677'
// //23, 2+3, 2++3, 2+++3
// let template = /\b\d\+*\d\b/g
// console.log(str.match(template));

// let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+'
// //*q+, *qq+, *qqq+
// let template = /\*q+\+/g
// console.log(str.match(template));

// let str = 'aba accca azzza wwwwa'
// которая найдет все строки по краям которых
//стоят буквы 'a', и заменит каждую из них на '!'.
//Между буквами a может быть любой символ (кроме a)

// let template = /\ba([^a]+)a\b/g
// console.log(str.replace(template, '!$1!'));

// X(?=Y)
// (?<=Y)X

// let template = /a(?=[^a ]+a)|(?<=a[^a ]+)a/g
// console.log(str.replace(template, '!'));

// let template = /^a.+?a$/
// console.log(str.replace(template, '!'));


// 1. Задание

// let str = 'This is is a test';
// let template = /(?<=(\w+)\s*)\1/gi;
// console.log(str.replace(template, '<strong>$1</strong>'));


// 3. Задание

// let str_true = '2012/09/18 12:10'
// let str_false = '2013/09/09 09:09'

//1000-2012
// let template = /(?<year>1[0-9]{3}|20(0[0-9]|1[0-2]))/

// месяца
// let template = /(?<month>0[1-9]|1[0-2])/

//day
// let template = /(?<day>0[1-9]|[1,2][0-9]|30)/

//hours:minutes
// let template = /(?<time>([01][0-9]|2[0-3]):([0-5][0-9]))/

// let template = /(?<year>1[0-9]{3}|20(0[0-9]|1[0-2]))\/(?<month>0[1-9]|1[0-2])\/(?<day>0[1-9]|[1,2][0-9]|30)\s(?<time>([01][0-9]|2[0-3]):([0-5][0-9]))/
// console.log(str_true.match(template));
// console.log(str_false.match(template));



//Доделать регулярное выражение так, чтоб определенному месяцу соответствовало
//определенное количество дней. То есть в апреле не может быть 31 день, а вот
//в декабре может быть

// https://habr.com/ru/post/167015/