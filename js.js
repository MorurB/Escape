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

let header__button_tab = document.querySelectorAll('.header__button-tab');
let header__block_title = document.querySelectorAll('.header__block-title');


header__button_tab.forEach(function (item) {
    item.addEventListener('click', function () {
        let i = item;

        for(elem of header__block_title) {
            elem.classList.add('hidden');
        }

        header__button_tab.forEach(function (item) {
            item.classList.remove('active');
        })

        let dataset = document.querySelector(item.dataset.tab);
        dataset.classList.remove('hidden')
        i.classList.add('active')
    })
});