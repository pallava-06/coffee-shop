const navTab =document.querySelectorAll(".nav-menu .nav-link")
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu")
})

//close menu when the button is click
menuCloseButton.addEventListener("click", () =>{
    menuOpenButton.click()
})

//close the nav-menu after nav link is clicked
navTab.forEach(link => {
  link.addEventListener("click", () => menuCloseButton.click())
}
)
// initialize swiper
const swiper = new Swiper('.slider-wraper', {
  loop: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // responsive breakpoints
  breakpoints: {
    0:{
        slidesPerView: 1
    },
    768:{
        slidesPerView: 2  
    },
    1024:{
        slidesPerView: 3
    }
  }

});