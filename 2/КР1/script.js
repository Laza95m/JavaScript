// alert("Hello")
// alert("2nd Hello")

// let input = prompt('Пожалуйста введите число: ')
// console.log(input);

//Нам нужно запросить у пользователя имя и вывести на страницу Hello, "введеное имя"

// let userName = prompt('Введите своё имя:')
// alert('Hello, ' + userName)

// let answer = confirm('Вам уже есть 18?')
// console.log(answer);


// let result = +prompt();
// console.log(typeof result);

// console.log('5' + 2);

// let number = 123;
// console.log(number);

// let number_str = String(number)
// console.log(number_str);

// let str = undefined
// console.log(str);

// let new_str = Number(str)
// console.log(new_str);


//Всё что не 0 - true, 0 - false
// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(-1));

//Любая строка НЕНУЛЕВОЙ ДЛИННЫ - true, пустая строка - false
// console.log(Boolean('A'));
// console.log(Boolean(''));

// console.log(2>>1);


// 1 task
// let number = +prompt("Введите число: ");
// number = number**2;
// alert(number)

//2 task
// (a+b+c+d+...+z)/кол-во
// (a+b)/2
// let number1 = +prompt('Введите первое число: ')
// let number2 = +prompt('Введите второе число: ')
// alert((number1+number2)/2)

//5 Task
let number1 = +prompt('Число1 ')
let number2 = +prompt('Число2')
let summ = number1+number2
let diff = number1-number2
let mult = number1*number2
let div = number1/number2
let result = 'Сумма: ' + String(summ) + ' Разность: ' + String(diff)
result += ' Произведение: ' + String(mult) + ' Частное: ' + String(div)
alert(result)