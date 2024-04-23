import lightGallery from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.3";

let $lgSwiper = document.getElementById("lg-swipper");
const swiper = new Swiper(".swiper", {
  // other parameters
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    init: function () {
      const lg = lightGallery($lgSwiper, {
        speed: 300
      });
      $lgSwiper.addEventListener("lgBeforeClose", () => {
        swiper.slideTo(lg.index, 0);
      });
    }
  }
});
