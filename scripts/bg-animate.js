const bg = document.getElementById("background");

setTimeout(() => {
bg.style.animation = "background_scroll 128s linear infinite forwards";
bg.style.animationPlayState = "running";
}, 3800);