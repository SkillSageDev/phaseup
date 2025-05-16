let searchForm = document.querySelector(".search");
let searchInput = document.querySelector(".search-input");
console.log(searchForm);
console.log(searchInput);

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.localStorage.setItem("search", searchInput.value);
  window.location.assign("/phaseup/pages/search/browse.php");
});
