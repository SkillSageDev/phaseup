// animate cards on hover
const cards = document.querySelectorAll(".card");
const background = document.getElementById("background");

cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.cssText = "transform: translateY(-20px); transition: all 0.3s ease-out; color: #8B30C4";
        background.style.animationPlayState = "paused";
    });
    card.addEventListener("mouseleave", () => {
        card.style.cssText = "transform: translateY(0); transition: all 0.3s ease-out; color: black";
        background.style.animationPlayState = "running";
    });
    card.addEventListener("click", () => {
        if (window.location.pathname === "/index.html"){
            window.location.href = "./pages/overview.html";
        }
        else {
            window.location.href = "./../overview.html";
        }
    });
});