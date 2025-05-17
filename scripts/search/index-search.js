let searchForm = document.querySelector(".search");
let searchInput = document.querySelector(".search-input");
console.log(searchForm);
console.log(searchInput);
let path = window.location.pathname;

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.localStorage.setItem("search", searchInput.value);
  if (path === "/index.html") {
    window.location.href = "./pages/search/browse.html";
  }
  else {
    window.location.href = "./search/browse.html";
  }
});
