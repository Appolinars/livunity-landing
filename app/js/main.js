document.addEventListener("DOMContentLoaded", () => {
  const blogSlider = new Swiper(".blog__slider", {
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      567: {
        slidesPerView: 2,
      },
    },
  });

  const feedbackSlider = new Swiper(".feedback__slider", {
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
      nextEl: ".feedback__next",
      prevEl: ".feedback__prev",
    },
  });
});
