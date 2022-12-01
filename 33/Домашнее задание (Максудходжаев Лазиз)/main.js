// 1. Задание

/* class Marker {
  constructor(c, p) {
    this.c = c;
    this.p = p;
  }

  get markerProps() {
    return [this.c, this.p];
  }

  set markerProps(newProps) {
    [this.c, this.p] = [...newProps];
  }

  print(line) {
    let t = document.getElementById("content");
    for (let i = 0; i < line.length; i++) {
      if (this.p != 0) {
        if (line[i] == " ") {
          this.p += 0.5;
        }
        t.innerHTML += line[i];
        t.style.color = this.c;
        this.p -= 0.5;
      } else {
        document.write("Marker is over");
        break;
      }
    }
  }
}

class FilledMarker extends Marker {
  fill(p) {
    if (p > 100) {
      p = 100;
    } else {
      this.p += p;
    }
  }
}

let marker = new FilledMarker("#838", 2);

marker.fill(31);

let l = `List of Software Inc. workers with names, positions, departments, salaries. Best Regards Jeremy Clarkson - HR Manager of the HR Department`;

marker.print(l);
document.body.setAttribute("style", "font-size: 18px; text-align: center;"); */

// 2. Задание

/* class ExtendedDate extends Date {
  constructor(date) {
    super();
    this.date = new Date(date);
  }

  textDate() {
    let resultNumb,
      stringDate = this.date.getDate().toString();

    let month = [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ];

    let numb1 = [
      "первое",
      "второе",
      "третье",
      "четвёртое",
      "пятое",
      "шестое",
      "седьмое",
      "восьмое",
      "девятое",
      "десятое",
    ];

    let numb2 = [
      "один",
      "две",
      "три",
      "четыр",
      "пят",
      "шест",
      "сем",
      "восем",
      "девят",
    ];

    let numb3 = ["двадцать", "тридцать"];
    let numb4 = ["двадцатое", "тридцатое"];

    if (this.date.getDate() < 11) resultNumb = numb1[this.date.getDate() - 1];
    else if (this.date.getDate() < 20)
      resultNumb = numb2[this.date.getDate() - 11] + "надцатое";
    else if (this.date.getDate() == 20 || this.date.getDate() == 30)
      resultNumb = numb4[stringDate[0] - 2];
    else if (this.date.getDate() <= 31)
      resultNumb = numb3[stringDate[0] - 2] + " " + numb1[stringDate[1] - 1];

    return (
      "Дата: " +
      resultNumb.slice(0, 1).toUpperCase() +
      resultNumb.slice(1) +
      " " +
      month[this.date.getMonth()] +
      " " +
      this.date.getFullYear()
    );
  }

  checkLeapYear() {
    let year = this.date.getFullYear();
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
      return "Да, високосный";
    else return "Нет, не високосны";
    // console.log(this.date.getFullYear());
  }

  nextDay() {
    this.date.setDate(this.date.getDate() + 1);
    return "Завтра:" + this.textDate().replace("Дата:", "");
  }

  checkDay() {
    return this.date > this ? "Это будущая дата " : "Это прошедшая дата";
  }
}

let date1 = new ExtendedDate("8.2.2011");
console.log(date1.textDate());
console.log(date1.checkLeapYear());
console.log(date1.checkDay());
console.log(date1.nextDay()); */

// 3. Задание

/* let mainDiv = document.getElementById("content");

let tableDiv = document.createElement("div");
tableDiv.setAttribute("id", "content__tableDiv");
tableDiv.className = "content__tableDiv";

let tableTag = document.createElement("table");
tableTag.setAttribute("id", "content__table");
tableTag.className = "content__table";

tableDiv.append(tableTag);
mainDiv.append(tableDiv);

class Employee {
  constructor(name, position, department, salary) {
    this.name = name;
    this.position = position;
    this.department = department;
    this.salary = salary;
  }
}

let arrEmp = [
  new Employee("John Doe", "Manager", "Sales", 5000),
  new Employee("Bill Freeman", "Manager", "Sales", 5000),
  new Employee("Uno Dirck", "Manager", "Sales", 5000),
  new Employee("Erick Rapid", "Manager", "Sales", 5000),
  new Employee("Chris Rea", "Manager", "Sales", 5000),
  new Employee("Tommy Lee", "Manager", "Sales", 5000),
  new Employee("Jeck Ward", "DevOps Engineer", "DevOps", 3500),
  new Employee(
    "Rick Depper",
    ".Net Senior Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee("Neo Matrix", "Team Lead", "Desktop Solutions", 5000),
  new Employee(
    "Trinity Matrix",
    ".Net Senior Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee(
    "Rick Grouy",
    ".Net Junior Developer",
    "Desktop Solutions",
    1000
  ),
  new Employee(
    "George McCalister",
    ".Net Junior Developer",
    "Desktop Solutions",
    1000
  ),
  new Employee(
    "Fred Durst",
    ".Net Junior Developer",
    "Desktop Solutions",
    1000
  ),
  new Employee(
    "Piter Parker",
    ".Net Middle Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee(
    "Bro Somebody",
    ".Net Senior Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee(
    "Merlin Mysterier",
    ".Net Middle Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee(
    "Harry Potter",
    ".Net Senior Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee(
    "Norton Commander",
    ".Net Middle Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee("Elon Musk", ".Net Senior Developer", "Desktop Solutions", 4000),
];

class EmpTable {
  constructor(arr) {
    this.arr = arr;
  }

  getHtml() {
    let table = document.getElementById("content__table");
    let array = this.arr;
    let head = document.createElement("tr");
    head.setAttribute("style", "font-size: 18px;");
    let th1 = document.createElement("th");
    th1.textContent = "Name";
    let th2 = document.createElement("th");
    th2.textContent = "Position";
    let th3 = document.createElement("th");
    th3.textContent = "Department";
    let th4 = document.createElement("th");
    th4.textContent = "Salary ($)";
    head.append(th1);
    head.append(th2);
    head.append(th3);
    head.append(th4);
    table.append(head);

    for (let i in array) {
      let tr = document.createElement("tr");
      table.append(tr);

      for (let j in array[i]) {
        let td = document.createElement("td");
        td.textContent = array[i][j];
        tr.append(td);
        td.setAttribute("style", "padding: 5px 10px; font-size: 18px;");
      }
    }

    table.setAttribute("border", "2");
    table.setAttribute("bordercolor", "brown");
    table.setAttribute("width", "60%");
    table.setAttribute("style", "margin: auto; background-color: lightgrey;");
  }
}

let tableObj = new EmpTable(arrEmp);
tableObj.getHtml(); */
