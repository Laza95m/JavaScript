// // Функцию проверку на то, есть ли КУКИ

function emailValidator(email) {
  const regex = /^[a-zA-Z.-_]+$/;
  const emailName = email.split("@")[0];

  // const regex = /^[abc]+$/g
  // let str = 'abc'

  if (!(regex.test(emailName) && emailName.length >= 3)) {
    throw new Error("Wrong email adress");
  }
}

function passwordValidator(password) {
  const regexNumber = /[0-9]/g;
  const regexLetter = /[a-z]/g;
  const regexCapital = /[A-Z]/g;

  const regexRes =
    password.match(regexNumber)?.length &&
    password.match(regexLetter)?.length &&
    password.match(regexCapital)?.length;

  if (!(password.length >= 6 && regexRes)) {
    throw new Error("Wrong password");
  }
}

function confirmValidator(password, confPassword) {
  if (!(password === confPassword)) {
    throw new Error("Passwords must match");
  }
}

function clearMessages() {
  document.querySelector("#emailError").textContent = "";
  document.querySelector("#passwordError").textContent = "";
  document.querySelector("#confPassError").textContent = "";
}

const myForm = document.forms.myForm;

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearMessages();
  try {
    emailValidator(myForm.email.value);
    passwordValidator(myForm.pass.value);
    confirmValidator(myForm.pass.value, myForm.confPass.value);
    document.cookie = `email=${myForm.email.value}`;
    document.cookie = `password=${myForm.pass.value}`;

    let link = document.createElement("a");
    link.href = "info.html";
    link.click();
  } catch (e) {
    if (e.message === "Wrong email adress") {
      document.querySelector("#emailError").textContent = e.message;
    } else if (e.message === "Wrong password") {
      document.querySelector("#passwordError").textContent = e.message;
    } else if (e.message === "Passwords must match") {
      document.querySelector("#confPassError").textContent = e.message;
    }
  }

  // Взять все значения из инпутов. Запустить валидаторы.
  // Проверить значения валидаторов и сообщить о нужном из них
  // Если все корректно - переходим на другую страницу.

  // ОБНОВИТЬ КУКИ
});
