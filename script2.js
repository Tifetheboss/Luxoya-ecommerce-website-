// tife's script //

// const  days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

// const startTime = new Date().getTime();

const endTime = new Date('January 07, 2024 00:00:00').getTime();

//countdown
function updateCountdown() {
  const currentTime = new Date();
  const diff = endTime - currentTime;

  // const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // days.innerHTML = d; 
  hours.innerHTML = h < 10 ? '0' + h : h;
  mins.innerHTML = m < 10 ? '0' + m : m;
  secs.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);


// hamb //
const hamburger = document.querySelector('.hamb');
const nav = document.querySelector('.nav2');

hamburger.addEventListener('click', function () {
  this.classList.toggle('click');
  nav.classList.toggle('open');
});
// hamb ends//

// swiper js//
var swiper = new Swiper(".firstSwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
  mousewheel: true,
  keyboard: true,
});

//customer review swiperjs //
var swiper = new Swiper(".container-content", {
  spaceBetween: 0.1,
  slidesPerView: 1,
  centeredSlides: true,
  grabCursor: "true",
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    380: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 2,
    },
  },
});
