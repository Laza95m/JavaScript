// let user = {
//   name: "John",
//   surname: "Smith",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true
// };

// console.log(admin.fullName); // John Smith (*)

// // срабатывает сеттер!
// admin.fullName = "Alice Cooper"; // (**)
// console.log(admin.name); // Alice
// console.log(admin.surname); // Cooper
// console.log(user.name);
// console.log(user.surname);

// console.log(user);
// console.log(admin);


// let obj = {
//     0: "Hello",
//     1: "world!",
// };
  
// obj.join = Array.prototype.join;
  
// console.log( obj.join(',') ); // Hello,world!


// class Human{
//     constructor(name){
//         this.name = name
//     }
//     greeting() {
//         console.log('Hello!');
//     }
// }

// let alex = new Human('Alex')
// alex.greeting()
// let user = new Human("User")
// console.log(alex.name);
// console.log(user.name);

// class Vehicle {
//     engine = true
// }

// class Car extends Vehicle {
//     electricEngine = true
// }

// let chevrolet = new Car()
// console.log(chevrolet.engine);

// class Car {
//     wheels = 4
//     constructor(year, color) {
//         this.year = year
//         this.color = color
//     }
// }

// class Chevrolet extends Car {
//     constructor(year, color, malibuBar) {
//         super(year, color)
//         this.malibuBar = malibuBar
//     }
// }

// let spark = new Chevrolet(2021, 'blue', true)
// console.log(spark);

// class Car {
//     constructor(year, color){
//         this.passport = {
//             year,
//             color
//         }
//     }
//     wheels = 4
//     doors = true
//     engine = true
//     move(){
//         console.log('Машина двигается!');
//     }
// }

// class Chevrolet extends Car {
//     constructor(year, color, malibuBar){
//         console.log('Прошло 3 месяца...');
//         super(year, color)
//         this.passport.malibuBar = true
//     }
//     engineType = 'diesel'
//     doors = 4
//     move(){
//         console.log('Машине пробуксовала');
//         super.move()
//     }
// }

// class BMW extends Car {
//     engineType = 'hybride'
//     doors = 2
//     autoParking = true
// }



// let spark = new Chevrolet(2022, 'green')



// Реализовать класс Человек
// Реализовать дочерний класс Builder
// Реализовать дочерний класс Sialor

// Human
// name, dateOfBirth - в момент создания
// ____________
// greeting('Hello, I am name')


// Builder 
// rank - инициализируется
// ______________________
// greeting('Hello, I am builder-rank')
// build('Строить')

// Sailor
// rank - инициализируется, parrot
// __________________
// greeting('Hello, I am sailor-rank')
// sail('Плыть')

// class Human {
//     constructor(name) {
//         this.name = name
//         this.dateOfBirth = new Date()
//     }

//     greeting(name = this.name) {
//         console.log(`Hello I am ${name}`);
//     }
// }

// class Builder extends Human {
//     constructor(name, rank) {
//         super(name)
//         this.rank = rank
//     }

//     greeting(){
//         super.greeting(this.rank)
//     }
// }

// class Sailor extends Human {
//     constructor(name, rank) {
//         super(name)
//         this.rank = rank
//         this.parrot = true
//     }

//     greeting(){
//         super.greeting(this.rank)
//     }
// }

// let prorab = new Builder('Prorab', 'PRORAB')
// prorab.greeting()

