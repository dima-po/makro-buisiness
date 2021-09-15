const langCurrentBtn = document.querySelector('.lang__current');
const langDropdownMenu = document.querySelector('.lang__dropdown-menu');
const searchForm = document.querySelector('.search__form');
const searchFormOpenBtn = document.querySelector('.search__open');
const searchFormCloseBtn = document.querySelector('.search__input-icon--close');

langCurrentBtn.addEventListener('click', (e) => {
  langDropdownMenu.classList.toggle('lang__dropdown-menu--active');
})

searchFormCloseBtn.addEventListener("click", () => {
  searchForm.classList.remove("search__form--active");
})

searchFormOpenBtn.addEventListener("click", () => {
  searchForm.classList.add("search__form--active");
})
