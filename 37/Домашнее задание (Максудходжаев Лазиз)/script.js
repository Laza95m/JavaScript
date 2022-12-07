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

// 4. Задание

/* const firstCircle = document.querySelector(".item1 div:nth-of-type(1)");
const secondCircle = document.querySelector(".item1 div:nth-of-type(2)");
const thirdCircle = document.querySelector(".item1 div:nth-of-type(3)");
const button = document.querySelector(".button");

function changeColor(e) {
  if (firstCircle.classList.contains("active_red")) {
    firstCircle.classList.remove("active_red");
    return secondCircle.classList.add("active_yellow");
  } else if (secondCircle.classList.contains("active_yellow")) {
    secondCircle.classList.remove("active_yellow");
    thirdCircle.classList.add("active_green");
  } else {
    thirdCircle.classList.remove("active_green");
    firstCircle.classList.add("active_red");
  }
}

button.addEventListener("click", changeColor); */

// 5. Задание

/* const container = document.querySelector(".container");
let old;

function changeBackgroundColor(e) {
  if (e.target.matches("li")) {
    if (old) old.classList.remove("active_burlywood");
    old = e.target;
    old.classList.add("active_burlywood");
  }
}

container.addEventListener("click", changeBackgroundColor); */

// 6. Задание
