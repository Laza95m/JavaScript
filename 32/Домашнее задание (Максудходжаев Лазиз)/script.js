// 1. Задание

/* class Circle {
   constructor(radius) {
      this._radius = radius;
   }

   get radius() {
      return this._radius;
   }

   set radius(value) {
      this._radius = value;
   }

   get diameter() {
      return this.radius * 2;
   }

   area() {
      return this.radius ** 2 * Math.PI;
   }

   length() {
      return this.radius * 2 * Math.PI;
   }
}

let circle = new Circle(2);
console.log(circle.radius);
circle.radius = 4;
console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.area());
console.log(circle.length()); */

// 2. Задание

class HtmlElement {
  constructor(tagName, closed) {
    this.tagName = tagName;
    this.closed = closed;
  }

  textContent = "";

  _styles = [];

  get styles() {
    let tmp = "";

    for (let style of this._styles) {
      tmp += `${style[0]}: ${style[1]};`;
    }

    return tmp;
  }

  set styles(value) {
    for (let attr of this._attrs) {
      if (attr.includes("style")) {
        this._attrs.splice(this._attrs.indexOf(attr), 1);
        break;
      }
    }

    this._styles.push(...value);
    this._attrs.push(["style", this.styles]);
  }

  _attrs = [];

  get attrs() {
    let tmp = "";

    for (let arr of this._attrs) {
      tmp += `${arr[0]}='${arr[1]}' `;
    }

    return tmp;
  }

  set attrs(value) {
    this._attrs.push(...value);
  }

  insideTags = [];

  addStart(element) {
    this.insideTags.push([element, "start"]);
  }

  addEnd(element) {
    this.insideTags.push([element, "end"]);
  }

  getHtml() {
    let result = `<${this.tagName} ${this.attrs}>`;

    for (let element of this.insideTags) {
      if (element.includes("start")) {
        result += element[0].getHtml();
      }
    }

    result += this.textContent;

    for (let element of this.insideTags) {
      if (element.includes("end")) {
        result += element[0].getHtml();
      }
    }

    if (this.closed) {
      result += `</${this.tagName}>`;
    }

    return result;
  }
}

// let divOne = new HtmlElement("div", true);
// divOne.attrs = [["id", "wrapper"]];
// divOne.styles = [["display", "flex"]];

// let divTwo = new HtmlElement("div", true);
// divTwo.styles = [
//   ["width", "300px"],
//   ["margin", "10px"],
// ];

// let h3 = new HtmlElement("h3", true);
// h3.textContent = "What is Lorem Ipsum?";

// let img = new HtmlElement("img", false);
// img.styles = [["width", "100%"]];
// img.attrs = [
//   ["src", "lipsum.jpg"],
//   ["alt", "Lorem Ipsum"],
// ];

// let p = new HtmlElement("p", true);
// p.styles = [["text-align", "justify"]];
// p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing
// elit. Nesciunt saepe voluptates, vero expedita nulla atque at
// mollitia eveniet obcaecati, sit veritatis! Mollitia cupiditate
// rem animi perspiciatis illo quaerat ipsa nemo!`;

// let a = new HtmlElement("a", true);
// a.attrs = [
//   ["href", "https://www.lipsum.com/"],
//   ["target", "_blank"],
// ];
// a.textContent = "More...";

// divOne.addStart(divTwo);
// divTwo.addStart(h3);
// divTwo.addStart(img);
// divTwo.addStart(p);
// p.addEnd(a);
// divOne.addEnd(divTwo);
// document.write(divOne.getHtml());

// 3. Задание

class CssClass {
  constructor(cssName) {
    this.cssName = cssName;
  }

  _styles = [];

  get addStyles() {
    let tmp = "";

    for (let style of this._styles) {
      tmp += `${style[0]}: ${style[1]};`;
    }

    return tmp;
  }

  set addStyles(value) {
    this._styles.push(...value);
  }

  // метод для удаления стиля;

  getCss() {
    let result = `${this.cssName} {`;

    for (let style of this._styles) {
      result += `${style[0]}: ${style[1]};`;
    }

    return result + "}";
  }
}

// let block = new CssClass(".block");
// console.log(block);
// block.addStyles = [
//   ["width", "300px"],
//   ["margin", "10px"],
// ];
// console.log(block.addStyles);
// document.write(block.getCss());

// 4. Задание

class HtmlBlock {}
