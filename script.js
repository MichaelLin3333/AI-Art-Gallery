var swiper = new Swiper(`[unique-script-id="w-w-dm-id"] .mySwiper`, {
  speed: 1000,
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 5,
  loop: true,
  calculateHeight: true,
  pagination: {
    el: `[unique-script-id="w-w-dm-id"] .swiper-pagination`,
    clickable: true,
  },
  loop: true,
  navigation: {
    nextEl: `[unique-script-id="w-w-dm-id"] .swiper-button-nexts`,
    prevEl: `[unique-script-id="w-w-dm-id"] .swiper-button-prevs`,
  },
  breakpoints: {
    // Adjust layout based on screen size
    768: {
      slidesPerView: 2, // Show two slides on screens larger than 768px
    },
    1024: {
      slidesPerView: 3, // Show three slides on screens larger than 1024px
    },
  },
});