// try {
//     //блок кода, который может вызвать ошибку
// } catch (e) {
//     //блок кода, который обрабатывает ошибку
// } finally {
//     // работает ВСЕГДА вне зависимости от того
//     // была ошибка или нет
// }


// Положительные и целые
// class NaturalNuber{
//     constructor(value) {
//         // if(value < 0) {
//         //     value = -value
//         // } else if (value - Math.floor(value)) {
//         //     value = Math.floor(value)
//         // }
//         if (value < 0) {
//             throw Error
//         } else if (value - Math.floor(value)) {
//             throw Error
//         }
//         this._value = value
//     }
// }

// let number = new NaturalNuber(1.123)
// console.log('Test');

// try {
//     console.log('Начало блока try');  // (1) <--
//     lalala; // ошибка, переменная не определена!
//     console.log('Конец блока try (никогда не выполнится)');  // (2)
//   } catch(err) {
//     console.log(`Возникла ошибка!`); // (3) <--
//   }
// console.log('Hello!');


// try {
//     lalala; // ошибка, переменная не определена!
//   } catch(err) {
//     console.log(err.name); // ReferenceError
//     console.log(err.message); // lalala is not defined
//     console.log(err.stack); // ReferenceError: lalala is not defined at (...стек вызовов)
  
//     // Можем также просто вывести ошибку целиком
//     // Ошибка приводится к строке вида "name: message"
//     console.log(err); // ReferenceError: lalala is not defined
//   }

// let json = '{"name": "alex", "age":12}';

// // !user.name
// // !Object.keys(user).includes('name')
// // !user.hasOwnProperty('name')

// let user = JSON.parse(json); 
// function fun() {
//     try {
//         if (user.hasOwnProperty('name')) {
//           console.log(user.name);
//         } else {
//           throw new Error('user.name')
//         }
//         aaa;
//       } catch (e) {
//         if (e.message === 'user.name') {
//           user.name = 'User'
//         } else {
//           throw e
//         }
//       }
// }

// try {
//     fun()
// } catch (e) {
//     console.log('Непредвиденная ошибка!');
// }

// console.log(user);


// try {
//     console.log(1);
//     console.log(2);
// } catch(e) {
//     console.log('Error!');
// } finally {
//     console.log(3);
//     console.log(4);
//     console.log(5);
// }

// function fun(i) {
//     try {
//         if (i%2 === 0) {
//             throw new Error()
//         }
//         return 1
//     } catch (e) {
//         return 2
//     } finally {
//         return 3
//     }
// }

// console.log(fun(3));
// // 3


// метод getString(separator) – для получения 
// строки со всеми элементами массива, 
// перечисленными через указанный разделитель: 
// запятая, тире, пробел и т. д.;


// метод getHtml(tagName) – для получения строки с html
// кодом, где каждый элемент массива будет обернут в указанный тег 
// (учтите, если указывается тег li, 
// то все элементы дополнительно необходимо обернуть в ul).

class ExtendedArray extends Array {
    constructor(...args) {
        super(...args)
    }

    getString(separator) {
        return this.reduce((prev, curr)=>prev + curr + separator,'').slice(0,-1)
    }

    getHtml(tagName) {
        let res = this.reduce((prev, curr) => prev + `<${tagName}>` + curr + `</${tagName}> `,'')
        if (tagName === 'li') {
            return `<ul>${res}</ul>`
        }
        return res
    }

}

let a = new ExtendedArray(1,2,3)
// console.log(a.getString('-'))
console.log(a.getHtml('li'))
// <p>1</p> <p>2</p> <p>3</p>
