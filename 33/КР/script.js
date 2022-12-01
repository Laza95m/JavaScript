// class News {
//     constructor(name, text, tags, date){
//         this.name = name
//         this.text = text
//         this.tags = tags
//         this.date = new Date(date)
//     }
//     print(){
//         console.log('Printed');
//     }
// }


// class NewsList {
//     constructor(...news){
//         this.news = news
//     }
//     get allNews(){
//         return this.news.length
//     }

//     printAllNews(){
//         for (news of this.news) {
//             news.print()
//         }
//     }

//     addNews(name, text, tags, date){
//         this.news.push(new News(name, text, tags, date))
//     }

//     removeNews(){
//         this.news.pop()
//     }

//     sortByDate(){
//         return this.news.sort((a,b) => a.date > b.date)
//     }

//     searchByTag(tag){
//         return this.news.filter((news) => news.tags.includes(tag))
//     }
// }


// let newsList1 = new NewsList(new News(1,2,3,4), new News(5,6,7,8))

// class Car{ 
//     constructor(color, model){
//         this.color = color
//         this.model = model
//     }

//     static changeColor(car, color){
//         car.color = color
//     }
// }

// let car = new Car('green', 'asd')
// Car.changeColor(car, 'yellow')
// console.log(car.color);


// class Car {
//     // private
//     #max_speed = 200
//     constructor(color){
//         this._color = color
//     }

//     // Внешний интерфейс
//     move(){
//         console.log(`Пожалуйста не превышайте скорость в ${this.#max_speed}км/ч`);
//     }

//     // protected
//     dieselBurn(){
//         console.log('Some diesel burned');
//     }
// }

// let car = new Car('black')
// console.log(car.move())


// class MyArray extends Array {
//     insert(index, item){
//         this.splice(index, 0, item);
//     }
// }


// a = new MyArray()
// a.insert()


// class Button {
//     constructor(width, height, text) {
//         this.width = width
//         this.height = height
//         this.text = text
//     }

//     showBtn() {        
//         document.write(`
//         <button style='width:${this.width}px; height:${this.height}px;'>
//         ${this.text}
//         </button>`
//         )
//     }
// }

// let button = new Button(100, 100, 'Hello!')
// button.showBtn()


// class BootstrapButton extends Button {
//     constructor(width, height, text, color){
//         super(width, height, text)
//         this.color = color
//     }

//     showBtn(){
//         document.write(`
//         <button style='width:${this.width}px; height:${this.height}px; background:${this.color}' >
//         ${this.text}
//         </button>`
//         )
//     }
// }

// let newButton = new BootstrapButton(100, 100, 'Hello!', 'green')
// newButton.showBtn()

class Figure {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    info() {
    }

    area() {
    }

    perimeter() {
    }
}

class Square extends Figure {
    constructor(name, side) {
        super(name)
        this.side = side
    }

    info() {
        return `4 sides, each ${this.side}`
    }

    area() {
        return this.side ** 2
    }

    perimeter() {
        return this.side * 4
    }
}