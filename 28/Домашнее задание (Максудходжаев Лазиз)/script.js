"use strict";


// 1. Задание. Сумма свойств объекта

/* let salaries = {
   "John": 100,
   "Pete": 300,
   "Mary": 250,
};

function sumSalaries(obj) {
   let res = 0;
   obj = Object.values(obj);

   for (let salary of obj) {
      res += salary;
   }

   return res;
}

console.log(sumSalaries(salaries)); */


// 2. Задание. Подсчёт количества свойств объекта

/* let user = {
   name: 'John',
   age: 30,
};

function count(obj) {
   return Object.entries(obj).length;
}

console.log(count(user)); */


// 3. Задание. Деструктурирующее присваивание

/* let user = {
   name: "John",
   years: 30,
};

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin); */


// 4. Задание. Максимальная зарплата

/* let salaries = {
   "John": 100,
   "Pete": 300,
   "Mary": 250,
};

function topSalary(obj) {
   let res = 0;
   let arr = Object.entries(obj);
   let topName = null;

   for (let [name, salary] of arr) {
      if (res < salary) {
         res = salary;
         topName = name;
      }
   }

   return topName;
}

console.log(topSalary(salaries)); */


// 5. Задание. Создайте дату

/* let date = new Date(2012, 1, 20, 3, 12);
console.log(date); */


// 6. Задание. Покажите день недели

/* let date = new Date(2012, 0, 3);

function getWeekDay(date) {
   let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ',];

   return days[date.getDay()];
}

console.log(getWeekDay(date)); */


// 7. Задание. День недели в европейской нумерации

/* let date = new Date(2012, 0, 3);

function getLocalDay(date) {
   let day = date.getDay();

   if (day === 0) return 7;

   return day;
}

console.log(getLocalDay(date)); */


// 8. Задание. Какой день месяца был много дней назад?

/* let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
   let date2 = new Date(date);

   date2.setDate(date.getDate() - days);
   return date2.getDate();
}

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365)); */


// 9. Задание. Последнее число месяца?

/* function getLastDayOfMonth(year, month) {
   let date = new Date(year, ++month, 0);
   return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1)); */


// 10. Задание. Сколько сегодня прошло секунд?

/* function getSecondsToday() {
   let now = new Date();
   let start = new Date();
   start.setHours(0, 0, 0);
   let res = (now - start) / 1000;
   return res;
}

console.log(getSecondsToday()); */


// 11. Задание. Сколько секунд осталось до завтра?

/* function getSecondsToTomorrow() {
   let now = new Date();
   let end = new Date();
   end.setHours(24, 0, 0);
   let res = (end - now) / 1000;
   return res;
}

console.log(getSecondsToTomorrow()); */


// 12. Задание. Форматирование относительной даты

// 13. Задание. Преобразуйте объект в JSON, а затем обратно в обычный объект

/* let user = {
   name: "Василий Иванович",
   age: 35
};

let json = JSON.stringify(user);
console.log(json);

json = JSON.parse(json);
console.log(json); */


// 14. Задание. Исключить обратные ссылки

/* let room = {
   number: 23,
};

let meetup = {
   title: 'Совещание',
   ocuppiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
   place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function (key, value) {
   if (key === 'occupiedBy' || key === 'self') return undefined;
   else return value;
}, 1)); */


// 15. Задание. Вычислить сумму чисел до данного

/* function sumTo1(num) {
   let res = 0;
   for (let i = 0; i <= num; i++) {
      res += i;
   }
   return res;
}

function sumTo2(num) {
   if (num === 1) return num;
   return num + sumTo2(num - 1);
}

console.log(sumTo1(100));
console.log('---------------------');
console.log(sumTo2(100)); */


// 16. Задание. Вычислить факториал

/* function factorial(num) {
   if (num === 1) return num;
   return num * factorial(num - 1);
}

console.log(factorial(5)); */


// 17. Задание. Числа Фибоначчи

/* let fib2 = num => {
   if (num === 0) {
      return [0, 1];
   } else {
      let [prev, next] = fib2(num - 1);
      return [next, prev + next];
   }
}

let fib1 = num => fib2(num)[0];

console.log(fib1(77)); */


// 18. Задание. Вывод односвязного списка

/* let list = {
   value: 1,
   next: {
      value: 2,
      next: {
         value: 3,
         next: {
            value: 4,
            next: null
         }
      }
   }
};

function printList1(list) {
   while (list) {
      console.log(list.value);
      list = list.next;
   }
}

function printList2(list) {
   console.log(list.value);

   if (list.next) {
      printList2(list.next);
   }
}

printList1(list);
console.log('---------------------');
printList2(list); */


// 19. Задание. Вывод односвязного списка в обратном порядке

/* let list = {
   value: 1,
   next: {
      value: 2,
      next: {
         value: 3,
         next: {
            value: 4,
            next: null
         }
      }
   }
};

function printReverseList1(list) {
   let arr = [];

   while (list) {
      arr.push(list.value);
      list = list.next;
   }

   for (let i = arr.length - 1; 0 <= i; i--) {
      console.log(arr[i]);
   }
}

function printReverseList2(list) {

   if (list.next) {
      printReverseList2(list.next);
   }

   console.log(list.value);
}

printReverseList1(list);
console.log('---------------------');
printReverseList2(list); */