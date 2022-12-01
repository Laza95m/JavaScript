"use strict";


let array = [
   { name: 'color', value: 'red', },
   { name: 'background-color', value: 'blue', },
   { name: 'font-size', value: '24px', },
];

function printSomeText(stylesArray, text) {
   let paragraph = '<p>' + text + '</p>';
   let styles = '<style>p{';

   for (let style of stylesArray) {
      styles += style.name + ':' + style.value + ';';
   }

   styles += '}</style>';
   document.write(styles);
   document.write(paragraph);
}

printSomeText(array, 'Hello asd');