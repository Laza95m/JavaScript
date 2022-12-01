// Функцию проверку на то, есть ли КУКИ

function emailValidator(email) {
    const regex = /^[a-zA-Z.-_]+$/
    const emailName = email.split('@')[0]
    
    // const regex = /^[abc]+$/g
    // let str = 'abc'

    return regex.test() && emailName.length >= 3
}

function passwordValidator(password) {
    const regexNumber = /[0-9]/g
    const regexLetter = /[a-z]/g
    const regexCapital = /[A-Z]/g

    const regexRes = password.match(regexNumber)?.length && password.match(regexLetter)?.length && password.match(regexCapital)?.length

    return password.length >= 6 && regexRes
}

function confirmValidator(password, confPassword) {
    return password === confPassword
}


const myForm = document.forms.myForm

myForm.addEventListener('submit', e => {
    e.preventDefault()
    // Взять все значения из инпутов. Запустить валидаторы.
    // Проверить значения валидаторов и сообщить о нужном из них
    // Если все корректно - переходим на другую страницу.

    // ОБНОВИТЬ КУКИ
})

