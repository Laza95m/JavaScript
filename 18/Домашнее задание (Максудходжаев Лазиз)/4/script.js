"use strict";


let academyAuditorium = [
   { nameAuditor: 201, numberOfSeats: 18, facultyNames: "Журналистика", },
   { nameAuditor: 202, numberOfSeats: 16, facultyNames: "Философия", },
   { nameAuditor: 203, numberOfSeats: 14, facultyNames: "Психология", },
   { nameAuditor: 204, numberOfSeats: 15, facultyNames: "Социология", },
   { nameAuditor: 205, numberOfSeats: 18, facultyNames: "Филология", },
];


// 1. Задание

/* function showAllAudience(arr) {
   let res = "";

   for (let i = 0; i < arr.length; i++) {
      let a = 0;
      a = arr[i].nameAuditor;
      res += " Аудитория №" + a + "\n";
   }

   return res;
}

console.log(showAllAudience(academyAuditorium)); */


// 2. Задание

/* function classroomsForFaculty(array, faculty) {
   for (let obj of array) {
      if (obj.facultyNames === faculty) {
         return obj.nameAuditor
      }
   }
}

console.log(classroomsForFaculty(academyAuditorium, "Психология")); */


// 3. Задание

/* let group = { name: 105, studentPopulation: 5, facultyNames: "Психология", };

function groupAudience(array, obj) {
   for (let value of array) {
      if (obj.studentPopulation <= value.numberOfSeats && obj.facultyNames === value.facultyNames) {
         return value.nameAuditor;
      }
   }
}

console.log(groupAudience(academyAuditorium, group)); */


// 4. Задание

/* function SortByNumberOfSeats(array) {
   array.sort(function (a, b) {
      if (a.numberOfSeats > b.numberOfSeats) {
         return 1;
      }

      if (a.numberOfSeats < b.numberOfSeats) {
         return -1;
      }

      return 0;
   });

   return array;
}

console.log(SortByNumberOfSeats(academyAuditorium)); */


// 5. Задание

/* function SortByNumberOfSeats(array) {
   array.sort(function (a, b) {
      if (a.facultyNames > b.facultyNames) {
         return 1;
      }

      if (a.facultyNames < b.facultyNames) {
         return -1;
      }

      return 0;
   });

   return array;
}

console.log(SortByNumberOfSeats(academyAuditorium)); */