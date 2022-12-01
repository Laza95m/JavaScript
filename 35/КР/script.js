// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script);
//     document.head.append(script);
//   }

  
// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//     alert(`Здорово, скрипт ${script.src} загрузился`);
//     alert( _ ); // функция, объявленная в загруженном скрипте
// });


// loadScript('/my/script.js', function(script) {

//     alert(`Здорово, скрипт ${script.src} загрузился, загрузим ещё один`);
  
//     loadScript('/my/script2.js', function(script) {
//       alert(`Здорово, второй скрипт загрузился`);

//       loadScript('/my/script3.js', function(script) {
//         alert(`Ещё один скрипт загрузился`)
//       })
//     });
  
//   });


//   function test (resolve, reject) {
//     setTimeout(() => resolve("done"), 10000);
//   }
//   let promise = new Promise(test)
//   console.log(promise)

// let promise = new Promise(function(resolve, reject) {
//     setTimeout( ()=> resolve('done'), 1)
//   });
// console.log(promise);


// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 1000);
//   });
  
//   // resolve запустит первую функцию, переданную в .then
//   promise.then(
//     result => alert(result), // выведет "done!" через одну секунду
//     error => alert(error) // не будет запущена
//   );


// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });
  
//   // reject запустит вторую функцию, переданную в .then
//   promise.then(
//     result => alert(result), // не будет запущена
//   )

// new Promise(function (resolve, reject){
//     // solving code
//     // teakes some time
//     // one case=> resolve(value)
//     // another case => reject(error)
// }).then( result => {
//     // Код который запустится при успешном выполнении промиса  
// }).catch( error => {
//     // Код, который запустится, при неудачном выполнении промиса
// })

// function delay(ms) {
//     return new Promise( function (resolve, reject) {
//         setTimeout(() => resolve(), ms)
//     })
//   }
  
// delay(3000).then(() => alert('выполнилось через 3 секунды'));

// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000); // (*)
  
//   }).then(function(result) { // (**)
  
//     alert(result); // 1
//     return result * 2;
  
//   }).then(function(result) { // (***)
  
//     alert(result); // 2
//     return result * 2;
  
//   }).then(function(result) {
  
//     alert(result); // 4
//     return result * 2;
  
//   });

// image -> Server
//          Server -> id

// '{"name": "alex", "id":"12"}'

// new Promise(function(resolve, reject) {
//     if sendImage() resolve()
//     else reject()
// }).then(function(result) {
//     form.push(result)
//     sendForm()
// }).then(function(result) {
//     console.log(result);
// }).catch(function(error) {
//     alert(error.message)
// })

// let obj = JSON.stringify(obj)
// JSON.parse
// async function fun(){
//     try {
//         let response = await fetch(`user.json`)
//         console.log(await response.json());
//     } catch(err) {
//         console.log(err);
//     }
// }

// fun()



// 4

class asd {
    constructor () {
        this.css = new CssClass('')
        this.html = new HtmlElement('','')
    }
}