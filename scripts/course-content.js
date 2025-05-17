// variable values
let data = [
  {
    image: "./../assets/course banners/Csharp course 2.svg",
    alt: "C#",
    title: "C# for .NET Developers",
    description:
      "Master C# Programming from A to Z. Dive deep into .NET, OOP, Clean Code, LINQ, WPF, Generics, Unit Testing, and more.",
    hours: "10h",
    link: "./overview.html",
    category: "Game",
    language: "English",
  },
  {
    image: "./../assets/course banners/تعلم HTML في فيديو واحد 1.svg",
    alt: "javascript",
    title: "Learn HTML in 4 Hours",
    description:
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
    hours: "4h",
    link: "./overview.html",
    category: "web",
    language: "English",  
  },
  {
    image: "./../assets/course banners/كورس بايثون 1.svg",
    alt: "python",
    title: "Python for Data Science, AI & Development",
    description:
      "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    hours: "56h 21m",
    link: "./overview.html",
    category: "Data Science",
    language: "English",
  },
  {
    image: "./../assets/course banners/Unreal Engine 1.svg",
    alt: "unreal",
    title: "Unreal Engine Fundamentals",
    description:
      "Code Your First Four Game Projects in Unreal Engine 5 with Blueprint Visual Scripting - From Beginner to Advanced!",
    hours: "41h 26m",
    link: "./overview.html",
    category: "Game",
    language: "English",
  },
];

let video = document.getElementById("course-preview-vid");
let title = document.getElementById("course-label");
let lecsMain = Array.from(document.querySelectorAll(".list-lecture"));
let lecs = Array.from(document.querySelectorAll("p[id=lecture-bar-label]"));
console.log(lecsMain);

const storedTitle = window.localStorage.getItem("course_title");
let obj = findByTitle(storedTitle);

// assign new title
video.poster = obj.image;
video.innerHTML = obj.alt;

for (let i in lecs){
    lecs[i].addEventListener("click", () => {
        title.innerHTML = lecs[i].innerHTML;
        uncheckAll();
        lecsMain[i].style.backgroundColor = "#9959c0";
    });
};

function findByTitle(title) {
  for (let el of data){    
    if (el.title === title){
      return el;
    }
  }
  return null;
}

function uncheckAll() {
  lecsMain.forEach(lecBar => {
    lecBar.style.backgroundColor = "#e3e1e9";
  });
}