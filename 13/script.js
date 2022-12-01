// let message = 'Привет!'
// let phrase = message

// phrase = 'Пока!'
// console.log(message, phrase); //Пока! Привет!

// let user = {
//     name: 'John'
// }

// let admin = user

// console.log(user.name); //John
// admin.name = 'Peter'

// console.log(user.name); //Peter
// console.log(admin.name); // Peter

// let user = {
//     name: "John",
//     age: 30,
// }

// let clone = {}

// for (let key in user){ 
//     clone[key] = user[key]
// }

// clone.name = 'Pete'

// console.log(user.name);
// console.log(clone);

// Object.assign(clone,user)
// console.log(clone);

// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
// };

// let clone = cloneObject(user)
// user.sizes.width++;
// console.log(user.sizes.width);
// console.log(clone.sizes.width);

// function cloneObject (object) {
//     let clone = {}
//     for (let key in object) {
//         if (typeof object[key] === 'object'){
//             clone[key] = cloneObject(object[key])
//         }
//         else{
//             clone[key] = object[key]
//         }
//     }
//     return clone
// }


// let fraction = {
//     nominator:1,
//     denominator:2,
// }



// let car = {
//     model: 'lacceti',
//     maxSpeed: 320,
//     avarageSpeed: 70,
//     move(){
//         console.log('Поехали!');
//     },
//     stop(){ 
//         console.log('Остановились!');
//     }
// }
// car.move();
// car.stop();

// move();

// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       // "this" - это "текущий объект".
//       console.log(this);
//     }
  
// };

// let clone = Object.assign({}, user);
// clone.name = 'Pete'

// user.sayHi();
// console.log(clone);
// clone.sayHi();

// function check() {
//     console.log(this);
// }

// check();
// let admin = {
//     name: 'alex',
//     user : {
//         firstName: "Ilya",
//         sayHi:() => {
//             console.log(this);
//         }
//     } 
// }
  
// admin.user.sayHi(); // Ilya

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Jack");
// console.log(user);

// let user2 = new User("Alice")
// console.log(user2);



// function Car(model, year, speed, color){
//     this.wheels = 4;
//     this.model = model;
//     this.year = year;
//     this.speed = speed;
//     this.color = color;
//     this.move = function(){
//         console.log('Поехали ' + this.model);
//     }
//     this.stop = function(){ 
//         console.log('Остановились');
//     }
// }

// let lacetti = new Car('lacetti','2022','320','white')
// let spark = new Car('spark','2014','100','black')
// lacetti.move()
// spark.move()
// console.log(lacetti, spark);

function User() {
    
}


console.log(new User());