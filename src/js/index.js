import '../scss/style.scss';
import '../js/swiper.js';
import '../js/sidebar.js';

const burgerMenu = document.querySelector('.mobil__burger-menu');
const dropDown = document.querySelector('.menu__aside-menu');
const menuClose = document.querySelector('.drop-down__burger-menu_close');
const asideBackground = document.querySelector('.menu__aside-background');

burgerMenu.addEventListener('click', () => {
  dropDown.classList.add('menu__aside-menu--active');
  asideBackground.classList.add('menu__aside-background--active');
})

menuClose.addEventListener('click', () => {
  dropDown.classList.remove('menu__aside-menu--active');
  asideBackground.classList.remove('menu__aside-background--active');
});

asideBackground.addEventListener('click', () => {
  dropDown.classList.remove('menu__aside-menu--active');
  asideBackground.classList.remove('menu__aside-background--active');
});


// событие на кнопку 'показать еще' #1
const brandItems = document.querySelectorAll('.brand__item');
const brandAll = document.querySelector('.brand__all');
const moreButton = document.querySelector('.more-button');

const brandSvgBtn = document.querySelector('.more-button__svg');

moreButton.addEventListener('click', () => {
  brandItems.forEach((item) => {
    item.classList.add('item--avtive');
  });
  brandSvgBtn.classList.add('button-svg--transform')
  if (brandAll.textContent === 'Показать все') {
    brandAll.textContent = 'Скрыть';
  } else {
    brandAll.textContent = 'Показать все';
    brandItems.forEach((item) => {
      item.classList.remove('item--avtive');
    });
    brandSvgBtn.classList.remove('button-svg--transform');
  };
});

// событие на кнопку 'показать еще' #2

const typeTechniqueItems = document.querySelectorAll('.type-technique__item');
const typeTechniqueButton = document.querySelector('.type-technique__button');
const typeTechniqueSvg = document.querySelector('.type-technique__pic');
const btnText = document.querySelector('.type-technique__btn--text');

typeTechniqueButton.addEventListener('click', () => {
  typeTechniqueItems.forEach((item) => {
    item.classList.add('item--avtive');
  });
  typeTechniqueSvg.classList.add('button-svg--transform');
  if (btnText.textContent === 'Показать все') {
    btnText.textContent = 'Скрыть';
  } else {
    btnText.textContent = 'Показать все';
    typeTechniqueItems.forEach((item) => {
      item.classList.remove('item--avtive');
    });
    typeTechniqueSvg.classList.remove('button-svg--transform');
  };
});
//читать еще

const contentButton = document.querySelector('.content__button');
const buttonText = document.querySelector('.content__button--text');
const contentText = document.querySelector('.content__text');
const picSvg = document.querySelector('.pic-svg');

contentButton.addEventListener('click', () => {
  contentText.classList.add('content__text--active');
  picSvg.classList.add('pic-svg--active');
  if (buttonText.textContent === 'Читать далее') {
    buttonText.textContent = 'Скрыть';
  } else {
    buttonText.textContent = 'Читать далее';
    contentText.classList.remove('content__text--active');
    picSvg.classList.remove('pic-svg--active');
  };
});
