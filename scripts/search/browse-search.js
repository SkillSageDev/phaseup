let obj = [
  {
    image: "/assets/course banners/Csharp course 2.svg",
    alt: "C#",
    title: "C# for .NET Developers",
    description:
      "Master C# Programming from A to Z. Dive deep into .NET, OOP, Clean Code, LINQ, WPF, Generics, Unit Testing, and more.",
    hours: "10h",
    link: "./../overview.html",
    category: "Game",
  },
  {
    image: "/assets/course banners/تعلم HTML في فيديو واحد 1.svg",
    alt: "javascript",
    title: "Learn HTML in 4 Hours",
    description:
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
    hours: "4h",
    link: "./../overview.html",
    category: "web",
  },
  {
    image: "/assets/course banners/كورس بايثون 1.svg",
    alt: "python",
    title: "Python for Data Science, AI & Development",
    description:
      "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    hours: "56h 21m",
    link: "./../overview.html",
    category: "Data Science",
  },
  {
    image: "/assets/course banners/Unreal Engine 1.svg",
    alt: "unreal",
    title: "Unreal Engine Fundamentals",
    description:
      "Code Your First Four Game Projects in Unreal Engine 5 with Blueprint Visual Scripting - From Beginner to Advanced!",
    hours: "41h 26m",
    link: "./../overview.html",
    category: "Game",
  },
];

let searchForm = document.querySelector(".search");
let searchInput = document.querySelector(".search-input");
let searchHistory = window.localStorage.getItem("search");
let searchResult = document.querySelector(".container__course-list__result");
let cardList = document.querySelector(".course-list");

if (window.localStorage.getItem("search")) {
  searchResult.innerHTML = `Results for "${window.localStorage.getItem(
    "search"
  )}"`;
  searchInput.value = window.localStorage.getItem("search");
  cardList.innerHTML = searchCourse(window.localStorage.getItem("search"));
  window.localStorage.clear();
}

if (searchInput.value === "") {
  cardList.innerHTML = addCourse(obj);
  searchResult.innerHTML = "";
}

searchInput.addEventListener("input", () => {
  searchResult.innerHTML = `Results for "${searchInput.value}"`;
  cardList.innerHTML = searchCourse(searchInput.value);
});

// ----add course and search course functions----

function searchCourse(text) {
  return addCourse(
    obj.filter(
      (el) =>
        el.title.includes(text) ||
        el.title.toLowerCase().includes(text.toLowerCase())
    )
  );
}

function addCourse(arr) {
  return arr
    .map((obj) => {
      return `<li class="card-list__item">
              <div class="card">
                <img
                  src="${obj.image}"
                  alt="${obj.alt}"
                  class="card__image"
                />
                <div class="card__content">
                  <h3 class="card__title">${obj.title}</h3>
                  <p class="card__description">
                    ${obj.description}
                  </p>
                </div>
                <div class="card__info">
                  <span><i class="fa fa-clock"></i>${obj.hours}</span>
                  <a href="${obj.link}">Learn more</a>
                </div>
              </div>
            </li>`;
    })
    .join("");
}
