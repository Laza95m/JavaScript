

let a = [1,2,3,4,5,6]

// Array.prototype.methodName = fun(){}

// Array.prototype.check = function(){
//     console.log('HELLO!');
// }


// Добавляет элемент в конец массива который вызывает метод. Возвращает новую длинну
Array.prototype.myPush = function(elem) {
    this[this.length] = elem // это аналогично коду someArray[someIndex] = new_elem
    return this.length
}

console.log(a.myPush('a'))
console.log(a);



//.pop() удаляет элемент с конца вызывающего массива. Возвращает удаленный элемент
Array.prototype.myPop = function() {
    let lastElem = this[this.length-1]
    this.length -= 1
    return lastElem
}

console.log(a.myPop()); // 'a'
console.log(a); //1,2,3,4,5,6


// unshift(elem) -> Добавляет в начало вызывающего массива элемент и возвращает новую длинну

// [1,2,3].unshift(4)
// [4,1,2,3]
// 1 -> [0] -> [1]
// 2-> [1] -> [2]
// 3-> [2] -> [3]

// индекс каждого элемента увеличить на 1. сохранить элемент в новый индекс
// в нулевой сохранить elem

// [1,2,3]
// [1,2,3,3]
// [1,2,2,3]
// [1,1,2,3]

//последний элемент и сохранять его в следующую ячейку

Array.prototype.myUnshift = function(elem) {
    for (let i = this.length-1; i>=0; i--){
        this[i+1] = this[i]
    }
    this[0] = elem
    return this.length
}

console.log(a.myUnshift(0));
console.log(a);

Array.prototype.myShift = function() {
    let firstElement = this[0]
    for (let i = 0; i < this.length-1; i++){
        this[i] = this[i+1]
    }
    this.length -= 1
    return firstElement
}

console.log(a.myShift());
console.log(a);



// ищет в массиве элемент по значению возвращает индекс первого вхождения.
// если не найдено -> "-1"
// Начинает с того индекса, который задан (не задан - 0)


Array.prototype.myIndexOf = function(elem, startFrom = 0) {
    for (let i = startFrom; i<this.length; i++){
        if (this[i] === elem) return i
    }
    return '-1'
}

let b = [1,2,3]
console.log(b.myIndexOf(3));


// [1,2,3,4,5].slice(3) => [4,5]
Array.prototype.mySlice = function(begin=0, end=this.length) {
    let result = []
    for (let i = begin; i<end; i++){
        result.myPush(this[i])
    }
    return result
}

console.log([1,2,3,4,5].mySlice(1));


Array.prototype.myMap = function(callback) {
    let result = []
    for (let i = 0; i < this.length; i++){
        result.myPush(callback(this[i], i, this))
    }
    return result
}

console.log([1,2,3].myMap(x => x*x));