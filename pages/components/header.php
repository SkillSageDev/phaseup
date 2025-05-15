<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="/styles/core/global.css" />
    <link rel="stylesheet" href="/styles/fonts/poppins.css" />
    <link rel="stylesheet" href="/assets/fontawesome/css/all.css" />
    <link rel="stylesheet" href="/styles/header-footer.css" />
    <link rel="stylesheet" href="./header.css">
  </head>
  <body>
    <header class="site-header">
      <div class="site-header__container">
        <div class="site-header__hamburger-wrapper" id="hamburger">
          <i class="site-header__hamburger-icon fa fa-bars"></i>
          <i class="site-header__close-icon fa fa-close"></i>
        </div>
        <a href="/index.html" class="site-header__logo-wrapper"
          ><img
            class="site-header__logo"
            src="/assets/icons/figma-cons/PhaseUp Logo.svg"
            alt="logo"
        /></a>
        <button class="explore-button btn--secondary">
          <span class="explore-button__text">Explore</span>
          <img
            class="explore-button__arrow-icon"
            src="/assets/icons/angle-down-solid.svg"
          />
        </button>
        <form action="" class="site-search">
          <div class="site-search__wrapper">
            <input
              type="text"
              name="search"
              placeholder="Looking for something?"
              class="site-search__input"
              id="search"
            />
            <i class="site-search__icon fa-solid fa-magnifying-glass"></i>
          </div>
          <div class="site-search-result__wrapper">
            <ul class="site-search-result__list">
              <li class="site-search-result__item">Javascript</li>
              <li class="site-search-result__item">Javascript</li>
            </ul>
          </div>
        </form>

        <div class="site-auth-buttons">
          <a
            class="site-auth-buttons__login-button btn--secondary"
            href="/pages/login.html"
            class="login"
            >Login</a
          >
          <a
            class="site-auth-buttons__signup-button btn--primary"
            href="/pages/signup.html"
            class="signup"
            >Sign up</a
          >
        </div>
      </div>
      <div class="hamburger-menu" id="menu">
        <ul class="hamburger-menu__list">
          <li class="hamburger-menu__item">
            <a href="/pages/login.html" class="hamburger-menu__link">Log in</a>
          </li>
          <li class="hamburger-menu__item">
            <a href="/pages/signup.html" class="hamburger-menu__link">Sign up</a>
          </li>
          <li
            class="hamburger-menu__item"
          >
            <span class="hamburger-menu__section">Most popular</span>
          </li>
          <li class="hamburger-menu__item">
            <a href="#" class="hamburger-menu__link">Business</a>
          </li>
          <li class="hamburger-menu__item">
            <a href="#" class="hamburger-menu__link">Software</a>
          </li>
        </ul>
      </div>
    </header>
  </body>
</html>
