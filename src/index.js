import './styles/main.scss';
import imgg from './images/catalog-item__back2.png';

const headerMain = document.querySelector('.main');
const iconMenu = document.querySelector('.icon-menu');
const iconSearch = document.querySelector('.actions__search-icon');
const formSearch = document.querySelector('.actions__search-form');
const catalogItems = document.querySelectorAll('.item-catalog');
const catalogItem = document.querySelector('.item-catalog');
const catalog = document.querySelector('.catalog__items');

const iconMenuHandler = function () {
  headerMain.classList.toggle('main__active');
  iconMenu.classList.toggle('_active');
};

const iconSearchHandler = function () {
  formSearch.classList.toggle('search__form-active');
};

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  iconMenu.addEventListener('click', iconMenuHandler);
  iconSearch.addEventListener('click', iconSearchHandler);
} else {
  iconMenu.removeEventListener('click', iconMenuHandler);
  iconSearch.removeEventListener('click', iconSearchHandler);
}

window.onload = function () {
  window.addEventListener('resize', function () {
    if (window.innerWidth < 1134) {
      iconMenu.addEventListener('click', iconMenuHandler);
      iconSearch.addEventListener('click', iconSearchHandler);
    } else {
      iconSearch.removeEventListener('click', iconSearchHandler);
      iconMenu.removeEventListener('click', iconMenuHandler);
      iconMenu.classList.remove('_active');
      headerMain.classList.remove('main__active');
      formSearch.classList.remove('search__form-active');
    }
  });
};

const swiper = new Swiper('.header__swiper', {
  // Optional parameters

  slidesPerView: 1,
  spaceBetween: 30,

  // If we need pagination
});

const projectsSwiper = new Swiper('.projects__swiper', {
  // Optional parameters

  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: '.projects__swiper-dots',
    clickable: true,
  },
  navigation: {
    nextEl: '.projects__swiper-arrows-next',
    prevEl: '.projects__swiper-arrows-prev',
  },

  // If we need pagination
});

// catalogItems.forEach((el) => {
//   el.addEventListener('mouseover', function (e) {
//     const target = e.target;
//     const parentNode = target.parentNode.children;
//     let img = parentNode[4];
//     const imgSrc = img.getAttribute('src');
//     img.setAttribute('src', imgg);
//   });
// });
