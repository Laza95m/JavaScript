// class Circle {
//     constructor(radius) {
//         this._radius = radius
//     }
//     get radius() {
//         return this._radius
//     }
//     set radius(value) {
//         this._radius = value
//     }
//     get diameter() {
//         return this.radius*2
//     }
//     area() {
//         return this.radius**2*Math.PI
//     }
//     length() {
//         return this.radius*2*Math.PI
//     }
// }

// let circle = new Circle(2)
// console.log(circle.radius)
// circle.radius = 4
// console.log(circle.radius);
// console.log(circle.diameter);
// console.log(circle.length());



// [[attrName, content],...,]
// .push([alt, 'None'])
// attrName='content' attrName2='content2'

class HtmlElement {
    constructor(tagName, closed) {
        this.tagName = tagName
        this.closed = closed
    }

    textContent = ''

    _styles = []
    get styles() {
        let tmp = ''
        for (let style of this._styles) {
            tmp += `${style[0]}: ${style[1]};`
        }
        return tmp
    }
    set styles(value) {
        for (let attr of this._attrs){
            if (attr.includes('style')) {
                this._attrs.splice(this._attrs.indexOf(attr), 1)
                break
            }
        }
        this._styles.push(...value)
        this._attrs.push(['style', this.styles])
    }

    _attrs = []
    get attrs() {
        let tmp = ''
        for (let arr of this._attrs) {
            tmp += `${arr[0]}='${arr[1]}' `
        }
        return tmp
    }
    set attrs(value) {
        this._attrs.push(...value)
    }
    
    insideTags = []
    addStart(element) {
        this.insideTags.push([element,'start'])
    }
    addEnd(element) {
        this.insideTags.push([element, 'end'])
    }

    getHtml() {
        let result = `<${this.tagName} ${this.attrs}>`
        for (let element of this.insideTags) {
            if (element.includes('start')) {
                result += element[0].getHtml()
            }
        }
        result += this.textContent
        for (let element of this.insideTags) {
            if (element.includes('end')) {
                result += element[0].getHtml()
            }
        }
        if (this.closed) {
            result += `</${this.tagName}>`
        }
        return result
    }
}

let div = new HtmlElement('div', true)
div.textContent = 'Hello!'
div.styles = [['background', 'blue'], ['width', '100px'], ['height', '100px'], ['color', 'green']]

let p1 = new HtmlElement('p', true)
p1.textContent = 'I AM P1'
p1.styles = [['color', 'white']]

let div2 = new HtmlElement('div', true)
div2.textContent = 'I AM DIV2'
div2.styles = [['background', 'red'], ['width', '100px'], ['height', '50px']]

let p2 = new HtmlElement('p', true)
p2.textContent = 'I AM P2'
p2.styles = [['color', 'white']]


div2.addEnd(p2)

div.addStart(div2)
div.addEnd(p1)
document.write(div.getHtml())

// '<div style='styles'>Hello!</div>'
// '<{tagName} {attrs}> 
// this.insideTags[i].getHtml()  if 'START'
// {textContent} 
// this.insideTags[i].getHtml()  if 'END'
// ?{closed}</{tagName}>'

