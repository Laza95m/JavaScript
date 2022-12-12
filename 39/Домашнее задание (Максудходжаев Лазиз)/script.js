const inputColor = document.querySelector("#inputColor");
const selectType = document.querySelector("#selectType");
const inputCode = document.querySelector("#inputCode");

// console.log(selectType.options.selectedIndex);

// document.addEventListener("keydown", (e) => {
//   console.log(e.ctrlKey);
// });

inputColor.addEventListener("keydown", (e) => {
  if (!e.key.match(/[a-z]/i)) e.preventDefault();
});

inputCode.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" || (e.key.match(/[aф]/i) && e.ctrlKey)) return true;

  if (selectType.options.selectedIndex === 0) {
    if (!e.key.match(/[0-9,]/)) e.preventDefault();
  }

  if (selectType.options.selectedIndex === 1) {
    if (!e.key.match(/[0-9,]/)) e.preventDefault();
  }

  if (selectType.options.selectedIndex === 2) {
    if (!e.key.match(/[0-9A-Z,#]/)) e.preventDefault();
  }
});
