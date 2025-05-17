let searchForm = document.querySelector(".search");
let searchInput = document.querySelector(".search-input");
let menu = Array.from(document.querySelectorAll(".menu .element"));
console.log(searchForm);
console.log(searchInput);
menu = menu.slice(2);
console.log(menu);

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.localStorage.setItem("search", searchInput.value);
  window.location.assign("/pages/search/browse.html");
});

menu.forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    window.localStorage.setItem("search", el.innerHTML);
    window.location.assign("/pages/search/browse.html");
  });
});
