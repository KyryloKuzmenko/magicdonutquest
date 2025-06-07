import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let gallerySwiper = null;

function initGallerySwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !gallerySwiper) {
    gallerySwiper = new Swiper('.gallery-swiper', {
      loop: true,
      mousewheel: true,
      spaceBetween: 20,
      slidesPerView: 'auto',
    });
  }

  if (!isMobile && gallerySwiper) {
    gallerySwiper.destroy(true, true);
    gallerySwiper = null;
  }
}

window.addEventListener('load', initGallerySwiper);
window.addEventListener('resize', () => {
  initGallerySwiper();
});

