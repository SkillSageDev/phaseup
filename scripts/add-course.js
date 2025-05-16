fetch("/phaseup/utility/search.php")
  .then((response) => response.json())
  .then((cards) => {
    console.log(cards);
    function addCourse(cards) {
      return cards
        .map((obj) => {
          return `<li class="card-item"> 
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
        })
        .join("");
    }
    let cardList = document.querySelectorAll(".card-list");
    cardList.forEach((list) => (list.innerHTML = addCourse(cards)));
  });
