let cardList = document.querySelector(".card-list");

fetch("/pages/components/header.html")
  .then((response) => response.text())
  .then((html) => {
    let headerContent = html.slice(
      html.indexOf('<div class="container">'),
      html.indexOf("</header>")
    );

    // ----Added header content to the actual header in the html----
    let myHeader = document.querySelector("header");
    myHeader.innerHTML = headerContent;

    let searchForm = document.querySelector(".search");
    let searchInput = document.querySelector(".search-input");
    console.log(searchForm);
    console.log(searchInput);

    let cardList = document.querySelector(".course-list");
    console.log(cardList);

    let searchResult = document.querySelector(
      ".container__course-list__result"
    );

    let searchHistory = window.localStorage.getItem("search");
    if (window.location.pathname.includes("browse.html")) {
      if (window.localStorage.getItem("search")) {
        searchResult.innerHTML = `Results for "${window.localStorage.getItem(
          "search"
        )}"`;
        searchInput.value = window.localStorage.getItem("search");
        cardList.innerHTML = searchCourse(
          window.localStorage.getItem("search")
        );
        window.localStorage.clear();
      }
      searchInput.addEventListener("input", () => {
        searchResult.innerHTML = `Results for "${searchInput.value}"`;
        cardList.innerHTML = searchCourse(searchInput.value);
      });
    } else {
      searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        window.localStorage.setItem("search", searchInput.value);
        window.location.assign("/pages/search/browse.html");
      });
    }
  });

// ----add course and search course functions----
let obj = [
  {
    image: "/assets/course banners/Csharp course 2.svg",
    alt: "c#",
    title: "c# for .NET Developers",
    description:
      "Master C# Programming from A to Z. Dive deep into .NET, OOP, Clean Code, LINQ, WPF, Generics, Unit Testing, and more.",
    category: ["Game", "English"],
    hours: "10h",
    link: "#",
  },
  {
    image: "/assets/course banners/تعلم HTML في فيديو واحد 1.svg",
    alt: "javascript",
    title: "Learn HTML in 4 Hours",
    description:
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
    category: ["Web", "Arabic"],
    hours: "4h",
    link: "#",
  },
  {
    image: "/assets/course banners/كورس بايثون 1.svg",
    alt: "python",
    title: "Python for Data Science, AI & Development",
    description:
      "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    category: ["Data Science", "English"],
    hours: "56h 21m",
    link: "#",
  },
  {
    image: "/assets/course banners/Unreal Engine 1.svg",
    alt: "unreal",
    title: "Unreal Engine Fundamentals",
    description:
      "Code Your First Four Game Projects in Unreal Engine 5 with Blueprint Visual Scripting - From Beginner to Advanced!",
    category: ["Game", "English"],
    hours: "41h 26m",
    link: "#",
  },
];

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
                <div class="card__category">
                  ${obj.category.map((el) => `<span>${el}</span>`).join("")}
                </div>
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

function filter() {
  let checkboxInput = document.querySelectorAll(
    ".container__filters__checkbox input"
  );

  let selectedCategories = [];

  checkboxInput.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        selectedCategories.push(checkbox.nextSibling.textContent);
        console.log(selectedCategories);
      }
    });
  });

  return obj.filter((el) =>
    el.category.some((el) => selectedCategories.includes(el))
  );
}
