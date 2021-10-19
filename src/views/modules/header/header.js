const langCurrentBtn = document.querySelector('.lang__current');
const langDropdownMenu = document.querySelector('.lang__dropdown-menu');
const searchForm = document.querySelector('.search__form');
const searchFormOpenBtn = document.querySelector('.search__open');
const searchFormCloseBtn = document.querySelector('.search__input-icon--close');
const mobileNav = document.querySelector('.header__mobile-nav');
const headerNav = document.querySelector('.header__nav');

langCurrentBtn.addEventListener('click', (e) => {
  langDropdownMenu.classList.toggle('lang__dropdown-menu--active');
})

searchFormCloseBtn.addEventListener("click", () => {
  searchForm.classList.remove("search__form--active");
})

searchFormOpenBtn.addEventListener("click", () => {
  searchForm.classList.add("search__form--active");
})

mobileNav.addEventListener('click', () => {
  mobileNav.classList.toggle('header__mobile-nav--active');
  headerNav.classList.toggle('header__nav--active');
})


if (document.body.clientWidth < 1023) {

  const mobileDropdownItem = document.querySelector('.nav__item--has-dropdown');
  const mobileDropdown = document.querySelectorAll('.nav__dropdown');
  const mobileDropdownLinks = document.querySelectorAll('.nav__item--has-dropdown .nav__link');

  const removeActiveLinkClass = () => {
    mobileDropdownLinks.forEach((link) => {
      link.classList.remove('nav__link--active');
    })
  }

  mobileDropdownLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      const currentElement = evt.target;
      removeActiveLinkClass();
      currentElement.classList.toggle('nav__link--active');
    })
  })
}
