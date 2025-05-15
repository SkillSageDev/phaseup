const showMenu = function (toggleId, navId) {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");

    toggle.classList.toggle("show-icon");
  });
};

showMenu("hamburger", "menu");
