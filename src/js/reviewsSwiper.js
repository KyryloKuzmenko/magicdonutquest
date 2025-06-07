import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    centeredSlides: true,
    mousewheel: true,
    breakpoints: {
      1440: {
        initialSlide: 1,
        spaceBetween: 40,
        slidesPerView: 3,
        freeMode: true,
      },
    },
  });
})