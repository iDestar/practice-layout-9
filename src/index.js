import './styles/main.scss';
import './images/product-photo-1@1x.jpg';

const headerMain = document.querySelector('.main');
const iconMenu = document.querySelector('.icon-menu');
const iconSearch = document.querySelector('.actions__search-icon');
const formSearch = document.querySelector('.actions__search-form');

iconSearch.addEventListener('click', function () {
  console.log(123);
});

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

const swiper = new Swiper('.swiper', {
  // Optional parameters

  slidesPerView: 1,
  spaceBetween: 30,

  // If we need pagination
});
