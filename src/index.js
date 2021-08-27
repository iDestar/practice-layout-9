import './styles/main.scss';
import './images/product-photo-1@1x.jpg';

const headerMain = document.querySelector('.main');
const iconMenu = document.querySelector('.icon-menu');

const iconMenuHandler = function () {
  headerMain.classList.toggle('main__active');
  console.log(1);
};

window.onload = function () {
  window.addEventListener('resize', function () {
    if (window.innerWidth < 1134) {
      iconMenu.addEventListener('click', iconMenuHandler);
    } else {
      iconMenu.removeEventListener('click', iconMenuHandler);
    }
  });
};
