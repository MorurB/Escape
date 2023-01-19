let header__list = document.querySelector('.header__list');
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let header__ul = document.querySelector('.header__ul');
let body = document.querySelector('.body');

menuBtn.addEventListener('click', function () {
    header__list.classList.toggle('header__list_active');
    header__ul.classList.toggle('header__ul-active'); 
    body.classList.toggle('body_active'); 

    menuBtn.classList.toggle('active');
    menu.classList.toggle('active'); 
})

