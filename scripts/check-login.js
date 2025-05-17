let username = window.localStorage.getItem("username");
const buttons = document.querySelector(".auth");
let menus = Array.from(document.querySelectorAll(".menu .element"));
console.log(menus);

let visible = username? "none": "flex";

buttons.style.display = visible;
menus[0].style.display = visible;
menus[1].style.display = visible;