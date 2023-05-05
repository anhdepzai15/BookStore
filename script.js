let seach_form=document.querySelector('.form_srearch');
let search_btn=document.getElementById('search-bth');
search_btn.addEventListener('click', ()=>{
    seach_form.classList.toggle('active');
})
window.addEventListener('scroll', function() {
    var currentPosition = window.scrollY;
    let header_2=document.querySelector('.header-2');
    if (currentPosition > 90) {
      header_2.classList.add('active');
    } else {
        header_2.classList.remove('active');
    }
  });
let form_container=document.querySelector('.form-container');
let close_form=document.getElementById('btn_close_form')
let user= document.getElementById('user');
user.addEventListener('click', ()=>{
  form_container.classList.toggle('active');
})
close_form.addEventListener('click', ()=>{
  form_container.classList.remove('active');
})

var swiper = new Swiper(".book_slide", {
 loop:true,
 centeredSlides:true,
 autoplay: {
  delay: 2000,
  disableOnInteraction: false,
 },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 1
    },
  },
});

var swiper = new Swiper(".featured_slide", {
  loop:true,
  centeredSlides:true,
  autoplay: {
   delay: 5000,
   disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
   breakpoints: {
     0: {
       slidesPerView: 1
     },
     450: {
      slidesPerView: 2
    },
     768: {
       slidesPerView: 3
     },
     1024: {
       slidesPerView: 5
     },
   },
 });
 var swiper = new Swiper(".arrrivals_slide", {
  loop:true,
  centeredSlides:true,
  autoplay: {
   delay: 6000,
   disableOnInteraction: false,
  },
   breakpoints: {
     0: {
       slidesPerView: 1
     },
     768: {
       slidesPerView: 3
     },
     1024: {
       slidesPerView: 3
     },
   },
 });
 var swiper = new Swiper(".reviews_slide", {
  loop:true,
  centeredSlides:true,
  autoplay: {
   delay: 2000,
   disableOnInteraction: false,
  },
   breakpoints: {
     0: {
       slidesPerView: 1
     },
     768: {
       slidesPerView: 3
     },
     1024: {
       slidesPerView: 3
     },
   },
 });
