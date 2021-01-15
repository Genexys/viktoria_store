import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

const mainSlider = () => {
  var mySwiper = new Swiper('.main-slider__container', {
    loop: true,
  })
}

export {mainSlider}
