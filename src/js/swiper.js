var swiper = new Swiper('.mySwiper', {});

const screenWidth = window.innerWidth;

let swiperParams = {
  spaceBetween: 15,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

if (screenWidth >= 768) {
  swiperParams.slidesPerView = 3;
  swiperParams.spaceBetween = 1;
}

var swiper = new Swiper('.mySwiper_2', swiperParams);
