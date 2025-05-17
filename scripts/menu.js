let menu = Array.from(document.querySelectorAll(".menu .element"));
menu = menu.slice(2);
console.log(menu);

menu.forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    window.localStorage.setItem("search", el.innerHTML);
    window.location.assign("/pages/search/browse.html");
  });
});