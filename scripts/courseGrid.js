// animate cards on hover
const cards = document.querySelectorAll(".courseCard");

cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.cssText = "transform: translateY(-20px); transition: all 0.3s ease-out; color: #8B30C4";
    });
    card.addEventListener("mouseleave", () => {
        card.style.cssText = "transform: translateY(0); transition: all 0.3s ease-out; color: black";
    });
});