fetch("/phaseup/utility/search.php")
  .then((response) => response.json())
  .then((cards) => {
    let searchForm = document.querySelector(".search");
    let searchInput = document.querySelector(".search-input");
    let searchHistory = window.localStorage.getItem("search");
    let searchResult = document.querySelector(
      ".container__course-list__result"
    );
    let cardList = document.querySelector(".course-list");

    if (window.localStorage.getItem("search")) {
      searchResult.innerHTML = `Results for "${window.localStorage.getItem(
        "search"
      )}"`;
      searchInput.value = window.localStorage.getItem("search");
      cardList.innerHTML = searchCourse(window.localStorage.getItem("search"));
      window.localStorage.clear();
    }

    if (searchInput.value === "") {
      cardList.innerHTML = addCourse(cards);
      searchResult.innerHTML = "";
    }

    searchInput.addEventListener("input", () => {
      searchResult.innerHTML = `Results for "${searchInput.value}"`;
      cardList.innerHTML = searchCourse(searchInput.value);
    });

    // ----add course and search course functions----
    function searchCourse(text) {
      return addCourse(
        cards.filter(
          (el) =>
            el.title.includes(text) ||
            el.title.toLowerCase().includes(text.toLowerCase())
        )
      );
    }

    function addCourse(arr) {
      return arr
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
  });
