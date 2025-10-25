"use strict";
const btns = document.querySelectorAll(".btn");
let input = document.querySelector(".inputBox");

let str = "";

let arr = Array.from(btns);
arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      str = eval(str);
      input.value = str;
    } else if (e.target.innerHTML == "AC") {
      str = "";
      input.value = str;
    } else if (e.target.innerHTML == "DEL") {
      str = str.slice(0, -1);
      input.value = str;
    } else {
      str = str + e.target.innerHTML;

      input.value = str;
    }
  });
});
