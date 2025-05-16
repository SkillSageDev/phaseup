<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Browse</title>
    <!-- ----Styles---- -->
    <link rel="stylesheet" href="./../../assets/fontawesome/css/all.css" />
    <link rel="stylesheet" href="./../../styles/core/global.css" />
    <link rel="stylesheet" href="./../../styles/fonts/poppins.css" />
    <link rel="stylesheet" href="./../../styles/header-footer.css" />
    <link rel="stylesheet" href="./../../styles/course-card.css" />
    <link rel="stylesheet" href="/phaseup/styles/search/browse.css">
    <!-- <link rel="stylesheet" href="../../styles/search/browse.css"> -->
    <!-- ----Scripts---- -->
    <!-- <script src="./../../scripts/header-showmenu.js" defer></script> -->
    <!-- <script src="./../../scripts/search/browse-search.js" defer></script> -->
    <!-- <script src="./../../scripts/components/load-header.js"></script> -->
    <!-- <script src="./../../scripts/search/search-course.js" defer></script> -->
     <script src="/phaseup/scripts/search/browse-search.js" defer></script>
  </head>
  <body>
    <header>
      <div class="container">
        <div class="hamburger" id="hamburger">
          <i class="fa fa-bars"></i>
          <i class="fa fa-close"></i>
        </div>
        <div class="logo">
          <a href="./../../index.php"
            ><img src="./../../assets/icons/figma-cons/PhaseUp Logo.svg" alt="logo"
          /></a>
        </div>
        <div class="explore">
          <!-- ! needs some modification -->
          <button>
            <span>Explore</span>
            <img src="./../../assets/icons/angle-down-solid.svg" />
          </button>
        </div>
        <form action="" class="search">
          <div class="search-box">
            <input
              type="text"
              name="search"
              placeholder="Looking for something?"
              id="search"
              class="search-input"
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </form>
        <div class="auth">
          <a href="./../../pages/login.php" class="login">Login</a>
          <a href="./../../pages/signup.php" class="signup">Sign up</a>
          <!-- <button class="login">Login</button> -->
          <!-- <button class="signup">Sign up</button> -->
        </div>

        <!-- ----Hamberger Menu---- -->
      </div>
      <div class="menu" id="menu">
        <ul>
          <li><a href="./../../pages/login.php" class="element">Log in</a></li>
          <li><a href="./../../pages/signup.php" class="element">Sign up</a></li>
          <li class="section"><span>Most popular</span></li>
          <li><a href="#" class="element">Business</a></li>
          <li><a href="#" class="element">Software</a></li>
        </ul>
      </div>
    </header>

    <div class="container">
      <div class="container__filters">
        <h3 class="container__filters__head">Filter By</h3>

        <div class="container__filters__checkbox">
          <h4>Subject</h4>
          <label for="data-science-checkbox"
            ><input
              type="checkbox"
              name="data-science-checkbox"
              id="data-science-checkbox"
              data-category="Data Science"
            />Data Science</label
          >

          <label for="game-checkbox"
            ><input
              type="checkbox"
              name="game-checkbox"
              id="game-checkbox"
              data-category="Game"
            />Game</label
          >

          <label for="web-checkbox"
            ><input
              type="checkbox"
              name="web-checkbox"
              id="web-checkbox"
              data-category="Web"
            />Web</label
          >
        </div>

        <div class="container__filters__checkbox">
          <h4>Language</h4>
          <label for="arabic-checkbox"
            ><input
              type="checkbox"
              name="arabic-checkbox"
              id="arabic-checkbox"
              data-category="Arabic"
            />Arabic</label
          >
          <label for="english-checkbox"
            ><input
              type="checkbox"
              name="english-checkbox"
              id="english-checkbox"
              data-category="English"
            />English</label
          >
        </div>
      </div>

      <div class="container__course-list">
        <h3 class="container__course-list__result">
          <span>Result for "${input.value}"</span>
        </h3>
        <div>
          <ul class="course-list">
            <?php
        include("/xampp/htdocs/phaseup/utility/sql_commands.php");
        $cards = get_cards(); // Get all cards
        // Loop through each card and display it
        foreach ($cards as $card) {
          ?>
          <li class="card-item">
            <div class="card">
              <img
              src="<?php echo $card['image']; ?>"
              alt="<?php echo $card['alt']; ?>"
              class="card__image"
              />
              <div class="card__content">
                <h3 class="card__title"><?php echo $card['title']; ?></h3>
                <p class="card__description"><?php echo $card['description']; ?></p>
              </div>
              <div class="card__info">
                <span><i class="fa fa-clock"></i><?php echo $card['hours']; ?></span>
                <a href="<?php echo $card['link']; ?>">Learn more</a>
              </div>
            </div>
          </li>
        <?php
        }
        ?>
        </ul>
        </div>
      </div>
    </div>
  </body>
</html>
