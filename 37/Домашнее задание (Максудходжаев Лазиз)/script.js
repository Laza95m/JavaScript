// 1. Задание

/* let text = document.getElementById("text");

text.addEventListener("keydown", (evt) => {
  if (/[^a-zA-z ]/.test(evt.key)) evt.preventDefault();
}); */

// 2. Задание

/* const buttonOpen = document.querySelector(".buttonOpen");
const buttonClose = document.querySelector(".buttonClose");
const container = document.querySelector(".container");

function openContent() {
  container.classList.add("active");
}

function CloseContent() {
  container.classList.remove("active");
}

buttonOpen.addEventListener("click", openContent);
buttonClose.addEventListener("click", CloseContent); */

// 3. Задание https://learn.javascript.ru/task/move-ball-field

/* const field = document.querySelector(".field");
const ball = document.querySelector(".ball");

function ballMove(event) {
  // координаты поля относительно окна браузера

  const fieldCoords = field.getBoundingClientRect();

  // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
  // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
  const ballCoords = {
    top:
      event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left:
      event.clientX -
      fieldCoords.left -
      field.clientLeft -
      ball.clientWidth / 2,
  };

  // запрещаем пересекать верхнюю границу поля
  if (ballCoords.top < 0) ballCoords.top = 0;

  // запрещаем пересекать левую границу поля
  if (ballCoords.left < 0) ballCoords.left = 0;

  // // запрещаем пересекать правую границу поля
  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }

  // запрещаем пересекать нижнюю границу поля
  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + "px";
  ball.style.top = ballCoords.top + "px";
}

field.addEventListener("click", ballMove); */

// 4. Задание https://ru.stackoverflow.com/questions/812091/js-%D0%9F%D1%80%D0%B8-%D0%BA%D0%BB%D0%B8%D0%BA%D0%B5-%D0%BF%D0%B5%D1%80%D0%B5%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D1%82%D1%8C%D1%81%D1%8F-%D0%BD%D0%B0-%D1%81%D0%BB%D0%B5%D0%B4%D1%83%D1%8E%D1%89%D0%B8%D0%B9-div

const item1 = document.querySelector(".item1");
const firstCircle = document.querySelector(".item1 div:nth-of-type(1)");
const secondCircle = document.querySelector(".item1 div:nth-of-type(2)");
const thirdCircle = document.querySelector(".item1 div:nth-of-type(3)");
const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
  if (!item1.matches("active_one")) firstCircle.classList.add("active_one");
});
