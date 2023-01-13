let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let header__list = document.querySelector('.header__list');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    header__list.classList.toggle('header__list_active');
})