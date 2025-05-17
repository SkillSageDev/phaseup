function moveLectures() {
  const width = document.documentElement.clientWidth;
  const lectures = document.querySelector(".course-lectures");
  const outsideContainer = document.getElementById("outside-container");
  const courseInfo = document.querySelector(".lectures-overview");

  console.log("Current width:", width);

  if (width <= 480) {
    outsideContainer.appendChild(lectures);
    console.log("Moved course-lectures OUTSIDE");
  } else {
    courseInfo.appendChild(lectures);
    console.log("Moved course-lectures BACK INSIDE");
  }
  if (width == 500) {
    console.log("you are gay");
  }
}
window.addEventListener("load", moveLectures);
window.addEventListener("resize", moveLectures);

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

let banner = document.getElementById("course-preview-image"); // src & alt
let title = document.getElementById("course-label");
let description = document.querySelectorAll(".course-description")[0].children[1];
let length = document.getElementById("course-length");

const storedTitle = window.localStorage.getItem("course_title");
let obj = findByTitle(storedTitle);

// assign new title
title.innerHTML = storedTitle;
description.innerHTML = obj.description;
length.innerHTML = obj.hours;
banner.src = obj.image;
banner.alt = obj.alt;


function findByTitle(title) {
  for (let el of data){    
    if (el.title === title){
      return el;
    }
  }
  return null;
}