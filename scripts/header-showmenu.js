const showMenu = function (toggleId, navId) {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");

    toggle.classList.toggle("show-icon");
  });
};

showMenu("hamburger", "menu");

const check = document.getElementById("explorer");
let nav = document.getElementById("menu");

check.addEventListener("click", () => {
  let currentDisplay = nav.style.display;
  nav.style.display = (currentDisplay === "none")? "block":"none";

});