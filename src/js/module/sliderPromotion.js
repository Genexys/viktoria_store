import Swiper, { Navigation, Pagination, Controller } from 'swiper';
Swiper.use([Navigation, Pagination, Controller ]);

const sliderPromotion = () => {
  if (document.querySelector('.promotion-slider')) {
    const promotionSlider = new Swiper('.promotion-slider', {
      autoHeight: true,
      calculateHeight:true,
      loop: true,
      observer: true,
      observeParents: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,

      navigation: {
        nextEl: '.promotion-slider__next',
        prevEl: '.promotion-slider__prev',
      },

      pagination: {
        el: '.promotion-slider__pagination',
      },
    });


    const galleryThumbsPromotion = new Swiper('.slider-description-thumb', {
      slidesPerView: 1,
      slideToClickedSlide:false,
      loop: true,
    });

    promotionSlider.controller.control = galleryThumbsPromotion;
    galleryThumbsPromotion.controller.control = promotionSlider;
  }

}

export {sliderPromotion}
