const burgerBtn = document.querySelector('.header__btn-menu');
const menu = document.querySelector('.header__menu');
const menuList = document.querySelector('.header__menu-list');
const socialBar = document.querySelector('.header__social-bar');
const feedbackBtn = document.querySelector('.header__feedback');
const telBtn = document.querySelector('.header__tel');

burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('header__menu--active');
});

menuList.addEventListener('click', () => {
  menu.classList.remove('header__menu--active');
});

socialBar.addEventListener('click', () => {
  menu.classList.remove('header__menu--active');
});

feedbackBtn.addEventListener('click', () => {
  menu.classList.remove('header__menu--active');
});

telBtn.addEventListener('click', () => {
  menu.classList.remove('header__menu--active');
});
