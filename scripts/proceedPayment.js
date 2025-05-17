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
    price: "45.99$",
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
    price: "19.99$", 
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
    price: "34.99$",
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
    price: "69.99$",
  },
];

let banner = document.getElementById("productImage").children[0]; // src & alt
let title = document.querySelector("h3");
let price = document.querySelector("h2");

const storedTitle = window.localStorage.getItem("course_title");
let obj = findByTitle(storedTitle);

console.log(banner);


// assign new title
title.innerHTML = storedTitle;
banner.src = obj.image;
banner.alt = obj.alt;
price.innerHTML = obj.price;


function findByTitle(title) {
  for (let el of data){    
    if (el.title === title){
      return el;
    }
  }
  return null;
}