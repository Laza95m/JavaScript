// a = 10 => return 10 => true
// if (a = 10){
//     console.log('Always working');
// }

// a = [1,2,-3,-4,5,6,-7,8]
// // all odd, all even, all positive, all negative

// if (number > 0){
//     count_positive ++;
// }
// else{
//     count_negative ++;
// }
// if (number % 2 == 0){
//     count_even ++;
// }
// else{
//     count_odd ++;
// }

//let variable = условие ? значение1 : значение2


let x = +prompt("Введите число: ")
switch (x){
    case 1:  console.log('Вы ввели еденицу'); break;
    case 2: console.log('Вы ввели двойку'); break;
    case 3: console.log('Вы ввели тройку'); break;
    default: console.log('Вы ввели число больше 3');
}

