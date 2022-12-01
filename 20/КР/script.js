// document.write('<h1>Out with the old, in with the new!</h1>')
// document.write('<h2>Out with the old, in with the new!</h1>')
// document.write('<h1>Out with the old, in with the new!</h1>')

// let array =[
//     {
//         name: 'color',
//         value: 'red'
//     },
//     {
//         name: 'background-color',
//         value: 'blue'
//     },
//     {
//         name: 'font-size',
//         value: '24px'
//     }
// ]


// function printSomeText(stylesArray, text) {
//     let paragraph = '<p>' + text + '</p>'
//     let styles = '<style>p{'
//     for (style of stylesArray) {
//         styles += style.name + ':' + style.value + ';'
//     }
//     styles += '}</style>'
//     document.write(styles)
//     document.write(paragraph)
// }

// printSomeText(array, 'Hello asd')


// let array = [
//     { name: 'b', value: 12 },
//     { name: 'c', value: 11 },
//     { name: 'a', value: 13 },
//     { name: 'z', value: 14 },
//     { name: 'w', value: 15 },
// ]

// console.log(array.sort(function (a, b) {
//     if (a.name > b.name) {
//       return 1;
//     }
//     if (a.name < b.name) {
//       return -1;
//     }
//     return 0;
//   }))

let obj1 = {
    c: 21,
    d: 12
}

let obj2 = {
    c: 21,
    d: 12
}

function isEqual(object1, object2) {
    for (let key in object1) {
        if (key in object2) {
            if (object1[key] !== object2[key]) {
                return false
            }
        }
        else {
            return false
        }
    }
    return true
}

console.log(isEqual(obj1, obj2))

// function intersection(object1, object2) {
//     let result = {}
//     for (let key in object1) {
//         if (key in object2 && object1[key] === object2[key]) {
//             result[key] = object1[key] 
//         }
//     }
//     return result
// }

// console.log(intersection(obj1, obj2));


obj1 = {
    a: '12',
    b: {
        c: 21,
        d: 12
    }
}

obj2 = {
    a: '12',
    b: {
        c: 21,
        d: 12
    }
}


function deepEqual(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false
    }
    for (let key in object1) {
        if (key in object2) {
            if (typeof object1[key] !== 'object' && typeof object2[key] !== 'object') {
                if (object1[key] !== object2[key]) {
                    return false
                }
            }
            else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
                if (!deepEqual(object1[key], object2[key])) {
                    return false
                }
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }
    return true
}

console.log(deepEqual(obj1, obj2));

// function deepIntersection(object1, object2) {
//     let result = {}
//     for (let key in object1) {
//         if (key in object2) {
//             if(typeof object1[key] !== 'object' && typeof object2[key] !== 'object'){
//                 if (object1[key] === object2[key]) {
//                     result[key] = object1[key]
//                 }
//             }
//             else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
//                 let tempResult = deepIntersection(object1[key], object2[key])
//                 // for (let key in tempResult){
//                 //     result[key] = tempResult
//                 //     break
//                 // }
//                 if( Object.keys(tempResult).length !== 0) {
//                     result[key] = tempResult
//                 }
//             }
//         }
//     }
//     return result
// }

// console.log(deepIntersection(obj1, obj2));

// Русском
// Английском

// найти код буквы "а", найти код буквы "я", найти код буквы "А", найти код буквы "Я"
// найти код буквы 'a', найти код буквы 'z', найти код буквы 'A', найти код буквы 'Z'

// ЕСЛИ символ не входит в диапазон от а-я или А-Я или A-Z или a-z тогда это мусор

map = new Map()

console.log(typeof map);