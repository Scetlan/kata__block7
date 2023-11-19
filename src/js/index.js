import '../scss/style.scss';
import '../js/swiper.js';
import '../js/sidebar.js';

const burgerMenu = document.querySelector('.mobil__burger-menu');
const dropDown = document.querySelector('.drop-down');
const menuClose = document.querySelector('.drop-down__burger-menu_close');
const asideBackground = document.querySelector('.aside-background');

burgerMenu.addEventListener('click', () => {
    dropDown.classList.add('drop-down--active');
    asideBackground.classList.add('aside-background--active');
});

menuClose.addEventListener('click', () => {
    dropDown.classList.remove('drop-down--active');
    asideBackground.classList.remove('aside-background--active');
})

// событие на кнопку 'показать еще'
const brandItems = document.querySelectorAll('.brand__item');
const brandBtn = document.querySelector('.more-buttom');
const brandAll = document.querySelector('.brand__all');
const brandSvgBtn = document.querySelector('.more-buttom__svg');

brandAll.addEventListener('click', () => {
    brandItems.forEach(item => {
        item.classList.add('brand__item--avtive');
    });
    brandSvgBtn.classList.add('more-buttom__svg--transform');
    if (brandAll.textContent === 'Показать все') {
        brandAll.textContent = 'Скрыть';
    } else {
        brandAll.textContent = 'Показать все';
        brandItems.forEach(item => {
            item.classList.remove('brand__item--avtive');
        });
        brandSvgBtn.classList.remove('more-buttom__svg--transform');
    }
});