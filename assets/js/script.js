// Swiper Configuration
const initializeSwiper = () => {
  return new Swiper(`[unique-script-id="w-w-dm-id"] .mySwiper`, {
    // Core Settings
    speed: 1000,
    slidesPerView: 1.5, // Show partial prev/next slides
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,

    // Observer Settings
    watchOverflow: true,
    observer: true,
    observeParents: true,

    // Navigation
    navigation: {
      nextEl: `[unique-script-id="w-w-dm-id"] .swiper-button-nexts`,
      prevEl: `[unique-script-id="w-w-dm-id"] .swiper-button-prevs`,
    },

    // Pagination
    pagination: {
      el: `[unique-script-id="w-w-dm-id"] .swiper-pagination`,
      clickable: true,
    },

    // Effects
    effect: 'coverflow', // Change to coverflow for better slide preview
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },

    // Responsive Breakpoints
    breakpoints: {
      500: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 1.5,
        spaceBetween: 40,
      },
    },
  });
};

// Navigation Functions
const initializeNavigation = () => {
  document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

// Home Button Function
const goToHomePage = () => {
  window.location.href = '/index.html';
};

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
  initializeSwiper();
  initializeNavigation();
});