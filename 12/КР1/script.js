'use strict';

let square = {
   topLeft: {
      x: 0,
      y: 10,
   },

   bottomRight: {
      x: 10,
      y: 0,
   },
}

// 1. Задание.

/* function infoSquare(square) {
   console.log('Top left = ' + '(' + square.topLeft.x + ':' + square.topLeft.y + ')');
   console.log('Top right = ' + '(' + square.bottomRight.x + ':' + square.topLeft.y + ')');
   console.log('Bottom right = ' + '(' + square.bottomRight.x + ':' + square.bottomRight.y + ')');
   console.log('Bootom left = ' + '(' + square.topLeft.x + ':' + square.bottomRight.y + ')');
}

infoSquare(square); */


// 2. Задание. https://www.sololearn.com/Discuss/747127/%D0%B4%D0%B0%D0%BD%D1%8B-%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B0%D1%82%D1%8B-%D0%B4%D0%B2%D1%83%D1%85-%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2%D0%BE%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%BD%D1%8B%D1%85-%D0%B2%D0%B5%D1%80%D1%88%D0%B8%D0%BD-%D0%BF%D1%80%D1%8F%D0%BC%D0%BE%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%B0-%D1%851-%D1%831-%D1%852-%D1%832-%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%8B-%D0%BF%D1%80%D1%8F%D0%BC%D0%BE%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%B0

/* function widthSquare(square) {
   return console.log('Ширина прямоугольника = ' + (square.topLeft.x + square.bottomRight.x));     // Ширина = bootom left(x) + top right(x)
}

widthSquare(square); */


// 3. Задание.

/* function heightSquare(square) {
   return console.log('Высота прямоугольника = ' + (square.bottomRight.y + square.topLeft.y));      // длина = bootom left(y) + top right(y)
}

heightSquare(square); */


// 4. Задание.

/* function areaSquare(square) {
   return console.log('Площадь прямоугольника = ' + (square.bottomRight.y + square.topLeft.y) * (square.topLeft.x + square.bottomRight.x));
}

areaSquare(square); */


// 5. Задание.

/* function perimeterSquare(square) {
   return console.log('Периметр прямоугольника = ' + 2 * (square.bottomRight.y + square.topLeft.y + square.topLeft.x + square.bottomRight.x));
}

perimeterSquare(square); */


// 6. Задание.

/* function widthChangeSquare(square, widthChange) {
   widthChange = +prompt('На сколько единиц изменить ширину ?');

   console.log('Ширина прямоугольника = ' + ((square.topLeft.x + square.bottomRight.x) - widthChange));
}

widthChangeSquare(square); */


// 7. Задание.

/* function heightChangeSquare(square, heightChange) {
   heightChange = +prompt('На сколько единиц изменить высоту ?');

   console.log('Высота прямоугольника = ' + ((square.bottomRight.y + square.topLeft.y) - heightChange));
}

heightChangeSquare(square); */


// 8. Задание.

/* function widthHeightChangeSquare(square, widthChange, heightChange) {
   widthChange = +prompt('На сколько единиц изменить ширину ?');
   heightChange = +prompt('На сколько единиц изменить высоту ?');

   console.log('Ширина прямоугольника = ' + ((square.topLeft.x + square.bottomRight.x) - widthChange));
   console.log('Высота прямоугольника = ' + ((square.bottomRight.y + square.topLeft.y) - heightChange));
}

widthHeightChangeSquare(square); */


// 9. Задание.

/* function xOffsetSquare(square, xOffset) {
   xOffset = +prompt('На сколько единиц сдвинуть ось X');

   console.log('Top left(x) = ' + (square.topLeft.x = xOffset + square.topLeft.x));
   console.log('Top right(x) = ' + (square.bottomRight.x = xOffset + square.bottomRight.x));
   console.log('Bottom right(x) = ' + (square.bottomRight.x = xOffset + square.bottomRight.x));
   console.log('Bottom left(x) = ' + (square.topLeft.x = xOffset + square.topLeft.x));
}

xOffsetSquare(square); */


// 10. Задание.

/* function yOffsetSquare(square, yOffset) {
   yOffset = +prompt('На сколько единиц сдвинуть ось Y');

   console.log('Top left(y) = ' + (square.topLeft.y = yOffset + square.topLeft.y));
   console.log('Top right(y) = ' + (square.topLeft.y = yOffset + square.topLeft.y));
   console.log('Bottom right(y) = ' + (square.bottomRight.y = yOffset + square.bottomRight.y));
   console.log('Bottom left(y) = ' + (square.bottomRight.y = yOffset + square.bottomRight.y));
}

yOffsetSquare(square); */


// 11. Задание.

/* function xyOffset(square, xOffset, yOffset) {
   xOffset = +prompt('На сколько единиц сдвинуть ось X');
   yOffset = +prompt('На сколько единиц сдвинуть ось Y');

   console.log('Top left = ' + '(' + (square.topLeft.x = xOffset + square.topLeft.x) + ':' + (square.topLeft.y = yOffset + square.topLeft.y) + ')');
   console.log('Top right = ' + '(' + (square.bottomRight.x = xOffset + square.bottomRight.x) + ':' + (square.topLeft.y = yOffset + square.topLeft.y) + ')');
   console.log('Bottom right = ' + '(' + (square.bottomRight.x = xOffset + square.bottomRight.x) + ':' + (square.bottomRight.y = yOffset + square.bottomRight.y) + ')');
   console.log('Bootom left = ' + '(' + (square.topLeft.x = xOffset + square.topLeft.x) + ':' + (square.bottomRight.y = yOffset + square.bottomRight.y) + ')');
}

xyOffset(square); */


// 12. Задание.

/* function pointCheck(square, x, y) {
   confirm('Введите координаты точки (x) и (y)');
   x = +prompt('x =');
   y = +prompt('y =');

   if ((x > square.topLeft.x && x < square.bottomRight.x) && (y > square.bottomRight.y && y < square.topLeft.y)) {
      return 'Координаты точки находятся внутри прямоугольника';
   }

   return 'Координаты точки ненаходятся внутри прямоугольника';
}

alert(pointCheck(square)); */