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
    cardList.innerHTML = addCourse(obj);
    if (window.location.pathname.includes("browse.html")) {
      searchInput.addEventListener("input", () => {
        cardList.innerHTML = searchCourse(searchInput.value);
      });
    } else {
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
    hours: "10h",
    link: "#",
  },
  {
    image: "/assets/course banners/تعلم HTML في فيديو واحد 1.svg",
    alt: "javascript",
    title: "Learn HTML in 4 Hours",
    description:
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
    hours: "4h",
    link: "#",
  },
  {
    image: "/assets/course banners/كورس بايثون 1.svg",
    alt: "python",
    title: "Python for Data Science, AI & Development",
    description:
      "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    hours: "56h 21m",
    link: "#",
  },
  {
    image: "/assets/course banners/Unreal Engine 1.svg",
    alt: "unreal",
    title: "Unreal Engine Fundamentals",
    description:
      "Code Your First Four Game Projects in Unreal Engine 5 with Blueprint Visual Scripting - From Beginner to Advanced!",
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
  return arr.map((obj) => {
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
  }).join("");
}
