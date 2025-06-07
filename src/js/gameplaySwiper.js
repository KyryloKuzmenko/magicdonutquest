import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let gameplaySwiper = null;

function initGameplaySwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !gameplaySwiper) {
    gameplaySwiper = new Swiper('.gameplay-swiper-wrap', {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 'auto',
      mousewheel: true,
      centeredSlides: true,
      initialSlide: 2,
    });
  }

  if (!isMobile && gameplaySwiper) {
    gameplaySwiper.destroy(true, true);
    gameplaySwiper = null;
  }
}

window.addEventListener('load', initGameplaySwiper);
window.addEventListener('resize', () => {
  initGameplaySwiper();
});
