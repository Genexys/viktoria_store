import Swiper, { Navigation, Pagination, } from 'swiper';
Swiper.use([Navigation, Pagination,]);

const mainSlider = () => {
  const mainSlider = new Swiper('.main-slider__container', {
    autoHeight: true,
    calculateHeight:true,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    observer: true,
    observeParents: true,

    navigation: {
      nextEl: '.main-slider__button--next',
      prevEl: '.main-slider__button--prev',
    },

    pagination: {
      el: '.main-slider__pagination',
    },
  })
}

export {mainSlider}
