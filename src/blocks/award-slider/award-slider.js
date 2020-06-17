// document.addEventListener('DOMContentLoaded', function(){});
(function(){

  var slideLazy = new Blazy({
    selector: '.slide-lazy',
    offset: 0 // расстояние до след изображ. которое будет загружено, должны быть меньше расстояния указанного в параметре "spaceBetween" в swiper, чтобы не грузить сразу лишнее
  });

  var awardSlider = new Swiper('.award-slider__container', {
    slidesPerView: 1,
    spaceBetween: 20,
    //preloadImages: false,
    //loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 25
      },
      1280: {
        slidesPerView: 5
      }
    },
    navigation: {
      nextEl: '.award-slider__next',
      prevEl: '.award-slider__prev'
    },
    on: {
      slideChangeTransitionEnd: function () {
        slideLazy.revalidate();
        //console.log('Slide changed');
      },
    }
  });
}());
