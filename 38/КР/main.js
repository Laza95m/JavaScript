'use strict'; 


// function getSomeText(callback) {
//     setTimeout(() => {
//         callback();
//     }, 1000); 
// }

//Callback HELL 
// getSomeText(() => {
//     console.log('Hello');
//     getSomeText(() => {
//         console.log("World");
//         getSomeText(() => {
//             console.log("1`23312313");
//         })
//     })
// })

// const result = new Promise((resolve, reject) => {
//     let a = 5;
//     // if(typeof a !== "number") reject(new Error(`переменная ${a} не является числом`)); 
//     setTimeout(() => {
//         resolve(a); 
//     }, 2000)
// })

// result
//     .then(value => { 
//         return value * 2; 
//     })
//     .then(value => {
//         console.log(value);
//         let b = 999; 
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(b); 
//             }, 2000)
//         })
//     })
//     .then(value => {
//         console.log(value);
//     })


    // .catch(value => {
    //     throw value;
    // })


const test = fetch("https://jsonplaceholder.typicode.com/users")


test
    .then(res => {
        if(res.ok && res.status === 200) {
            return res.json(); 
        }
    })
    .then(data => {
        console.log(data);
        createList(data); 
        getExtraInfo(data); 
    })



const rootEl = document.querySelector('#root'); 
const tableData = document.querySelector('#tableData'); 

function getExtraInfo(data) {
    rootEl.addEventListener('click', e => {
        if(e.target.id === "root") return; 
        const id = Number(e.target.parentNode.dataset.id);
        createTable(id, data)
    })
}

function createTable(id, data) {
    const tableEl = document.createElement('table'); 
    tableData.textContent = ''; 
    for(let user of data) {
        if(id === user.id) {
            tableEl.remove()
            const {email, website, phone, username, name} = user;
            const userData = {email, website, phone, username, name}; 
            
           
            let result = '';
            for(let [key, value] of Object.entries(userData)) {
                // const trEl = document.createElement('tr'); 
                // const thEl = document.createElement('th'); 
                // const tdEl = document.createElement('td'); 
                result += `
                    <tr>
                        <th>${key}</th>
                        <td>${value}</td>
                    </tr>
                `

                // thEl.textContent = key; 
                // tdEl.textContent = value; 

                // trEl.append(thEl, tdEl); 
                // tableEl.append(trEl); 
            }
            tableEl.innerHTML = result; 
        }
    }
    tableData.innerHTML = tableEl.outerHTML; 
}

function createContent({name, id}) {
    const messageBlock = document.createElement('div'); 
    const messageText = document.createElement('p'); 

    messageBlock.dataset.id = id; 

    messageText.textContent = name; 
    messageBlock.append(messageText);
    return messageBlock; 
}

function createList(data) {
    for(const elem of data) {
        rootEl.append(createContent(elem)); 
    }
}


const testEl = document.querySelector('#testBlock'); 


