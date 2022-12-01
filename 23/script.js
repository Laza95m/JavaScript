// let template = /gr(a|e)y/

// let str = 'gray'

// console.log(str.match(template));

// let str = "1 индейка стоит 30€";
// let regexp = /\d+(?=(€|kr))/; // добавлены дополнительные скобки вокруг €|kr

// console.log( str.match(regexp) ); 


// /^(\w+\s?)*$/
// /^(\w+)*

// (asd)
// (as)(d)
// (a)(sd)
// (a)(s)(d)

// string number
// (string )(number)

// string!
// (string)!   *-много взял, + много взял
// (strin)g!
// (strin)(g)!
// (stri)ng!
// (stri)(ng)!

// /^(\w+\s)*\w*$/

// string number
// (string )(number)

// string!
// false


// /^((?=(\w+))\2\s?)*$/


// /\w+/


//  '*****asd'
// elem.index >=5

// /gr(a|e)y/
// grayagrey

//result = [gray]




function getInfo(name, age, ...rest){
    str = `Main info:
    Name: ${name}
    Age: ${age} 
Special Info:
    ${rest}
    `
    console.log(str);
}

getInfo('Alex', '12', 'MSU', 'JS, Python', 'cat', 'Uzbekistan')