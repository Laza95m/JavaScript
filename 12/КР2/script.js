// let user = {
//     surname:'Abdalov',
//     name:'Alex',
//     'likes birds': true,
// }

// console.log(user.name);
// console.log(user.surname);

// user.isActive = true;
// console.log(user);

// delete user.surname;
// console.log(user);

// console.log(user["likes birds"]);

// const user = {
//     name: "John"
// };
// user.name = "Pete"; // (*)
// console.log(user.name); // Pete

// user = {}
// console.log(user);


// let myForm = {
//     file: null
// }

// function getFile(file){
//     myForm.file = file
// }

// let key = 'likes birds';

// console.log(user[key]);

// let fruit = prompt("Какой фрукт купить?", 'apple')

// let bag = {
//     [fruit]:5,
// }
// console.log(bag[fruit]);


// function makeUser(name, age){
//     return {
//         name, //name: name,
//         age, //age: age
//     }
// }

// let user = makeUser("Alex", 12)
// console.log(user);

// let name = "Alex"

// let user = {
//     name,
//     age : 12
// }

// console.log(user);


// let key = prompt("Введите имя ключа")

// let user = {
//     name: "Alex",
//     age:12
// }

// if(key in user){
//     console.log(user[key]);
// }


// let user = {
//     name: "Alex",
//     age: 12,
//     isAdmin: true,
// }

// // Итерирование по объекту

// for (let asd in user) {
//     console.log(asd, user[asd]);
// }


// let admin = {
//     name: 'admin',
//     permissions: {
//         canEdit: true,
//         canView: true,
//     }
// }

// let user = {
//     name: 'user', 
//     permissions: {
//         canEdit:false,
//         canView: true,
//     }
// }

// console.log(admin.permissions.canEdit);


let square = {
    topLeft: {
        x:0,
        y:10
    },
    bottomRight: {
        x: 10,
        y: 0
    }
}

let square2 = {
    topLeft: {
        x:0,
        y:12
    },
    bottomRight: {
        x: 2,
        y: 0
    }
}

function infoSquare(square) {
    // Левую верхнюю Л.в(x;y)
    console.log('Л.В.'+'('+square.topLeft.x+';'+square.topLeft.y+')');
    // Правую Верхнюю
    console.log('П.В.'+'('+square.bottomRight.x+';'+square.topLeft.y+')');
    // Правую Нижнюю
    console.log('П.Н.'+"("+square.bottomRight.x+';'+square.bottomRight.y+')');
    // Левая Нижняя
    console.log('Л.Н'+'('+square.topLeft.x+';'+square.bottomRight.y+')');
}

infoSquare(square)
infoSquare(square2)