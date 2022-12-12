const span = document.querySelector("#greeting");
let cookie = document.cookie.split(";");
const email = cookie.find((item) => item.includes("email")).split("=")[1];
span.textContent = `Hello ${email}`;

const exit = document.querySelector("#exit");
exit.addEventListener("click", (e) => {
  e.preventDefault();
  document.cookie = "email=; max-age=0";
  document.cookie = "password=; max-age=0";
  const link = document.createElement("a");
  link.href = "sign_up.html";
  link.click();
});

const firstName = document.querySelector("#firstName");
firstName.addEventListener("keydown", (e) => {
  if (/[^a-zA-z]/.test(e.key)) e.preventDefault();
});

const lastName = document.querySelector("#lastName");
lastName.addEventListener("keydown", (e) => {
  if (/[^a-zA-z]/.test(e.key)) e.preventDefault();
});

const birthYear = document.querySelector("#birthYear");
const yearOfBirthError = document.querySelector("#yearOfBirthError");
birthYear.onchange = (e) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const value = e.target.value;

  if (!value || value < 1900 || value > currentYear) {
    e.target.value = "";
    throw new Error(`${(yearOfBirthError.textContent = "Error")}`);
  }
  setTimeout(() => (yearOfBirthError.textContent = ""), 1000);
};

const phone = document.querySelector("#phone");
phone.addEventListener("keydown", (e) => {
  if (/[^0-9 ()-]/.test(e.key)) e.preventDefault();
});
