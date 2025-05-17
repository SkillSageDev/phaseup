const vid = document.getElementById("course-preview-vid");
const player = document.getElementById("player")

vid.addEventListener("click", () => {
    let currentDisplay = player.style.display;
    player.style.display = (currentDisplay === "none")? "block":"none";
});
