// fade text while moving the arrow
window.addEventListener("load", () => {
    // grab all elements
    const intro = document.getElementById("intro");
    let content = {
        header: document.querySelector('header'),
        main: document.querySelector('main'),
        footer: document.querySelector('footer')
    };
    // Animations
    let timer = 1.5;
    let delay = 0;

    // 1. squash & stretch once
    intro.style.cssText = `animation: pulse ${timer}s ease`;

    // 2. shoot the arrow
    timer = 1.2;
    delay = 600;
    let logo = intro.children[1];
    setTimeout( () => {
        logo.style.cssText = `animation: sweep ${timer}s ease forwards`;

    }, delay); // start after 1.2s of the 1st animation
    
    // 3. fade text (move the curtains)
    timer = 1;
    delay += 70;
    setTimeout( () => {
        // grab curtains
        let curtain = intro.firstElementChild;
        // move curtains
        curtain.style.cssText = `transform: translate(40%); transition: transform ${timer}s ease`;
    
    }, delay);
    
    // 4. rocket launch the logo
    timer = 1;
    delay += 600;
    setTimeout( () => {
        logo.style.cssText = `animation: rocket_launch ${timer}s ease forwards`;
    
    }, delay);

    delay += timer*1000;
    setTimeout( () => {
        timer = 2;
        intro.style.cssText = `opacity: 0; transition: opacity ${timer}s ease;`;
    }, delay);

    // the whole time for the splashscreen
    delay += timer*1000;
    delay -= 800;
    setTimeout( () => {
        intro.remove();
        Object.values(content).forEach(element => {
            element.style.display = 'block';
            // element.style.cssText = "display: block; transition: display 1s ease";
        });
    }, delay);

});