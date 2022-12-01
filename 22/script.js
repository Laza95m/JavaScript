// let template = /(\w\w)+(\d)/

// let result = 'gogo2 12'.match(template);

// console.log(result[2]);

// < ОБЯЗАТЕЛЬНО1БУКВА(может быть а может и не быть буквы/цифры)>

//  <span>..........</span>

// let str = '<span class="my" style="color:red">';

// let regexp = /<(([a-z]+)\s*([^>]*))>/;

// console.log(str.match(regexp));

// нет, space не прописан
// да, потому что группа (3) включает в себя space итд, до >


// let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

// let arrayResult = Array.from(results)
// console.log(arrayResult);

// for (let item of results){
//     console.log(item);
// }

// let [tag1, tag2] = results
// console.log(tag1);
// console.log(tag2);


// let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
// let str = "2019-04-30";

// let result = str.match(dateRegexp);

// console.log(result);

// let groups = result.groups


// console.log(groups.year); // 2019
// console.log(groups.month); // 04
// console.log(groups.day); // 30


let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;

let str = "2019-10-30 2020-01-01";

let results = str.matchAll(dateRegexp);

results = Array.from(results)

for (result of results){
    console.log(result.groups.day, result.groups.month, result.groups.year)
}


// for(let result of results) {
//   let {year, month, day} = result.groups;

//   console.log(`${day}.${month}.${year}`);
//   // первый вывод: 30.10.2019
//   // второй: 01.01.2020
// }
