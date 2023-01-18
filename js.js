let header__list = document.querySelector('.header__list');
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
    header__list.classList.toggle('header__list_active');

    menuBtn.classList.toggle('active');
    menu.classList.toggle('active'); 
})

