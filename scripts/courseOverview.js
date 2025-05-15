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
