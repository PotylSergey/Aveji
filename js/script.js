$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
   });
});
$(window).resize(function(e) {
   let width = e.target.innerWidth;
   if(width < 1024) {
      document.getElementById("about").textContent = "О компании";
   }
});
$(window).resize(function(e) {
   let width = e.target.innerWidth;
   if(width >= 1024) {
      document.getElementById("about").textContent = "Более 5 лет создаем мебель для вашего комфорта";
   }
});
window.addEventListener('DOMContentLoaded', () => {

   const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
      let swiper;

      breakpoint = window.matchMedia(breakpoint);

      const enableSwiper = function(className, settings) {
         swiper = new Swiper(className, settings);

         if (callback) {
            callback(swiper);
         }
      }

      const checker = function() {
         if (breakpoint.matches) {
            return enableSwiper(swiperClass, swiperSettings);
         } else {
            if (swiper !== undefined) swiper.destroy(true, true);
            return;
         }
      };

      breakpoint.addEventListener('change', checker);
      checker();
   }

   const someFunc = (instance) => {
      if (instance) {
         instance.on('slideChange', function (e) {
            console.log('*** mySwiper.activeIndex', instance.activeIndex);
         });
      }
   };

   resizableSwiper(
      '(max-width: 1023px)',
      '.swiper',
      {
         loop: true,
         spaceBetween: 30,
         slidesPerView: 1,
         freeMode: true,
         breakpoints: {
            767: {
               spaceBetween: 20,
               slidesPerView:3,
            },
            548:{
               spaceBetween:10,
               slidesPerView:2,
            },
         }
      }
   );
});