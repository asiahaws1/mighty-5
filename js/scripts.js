// Inject current year in footer
const newDate = new Date();
document.querySelector('#year').textContent = newDate.getFullYear()

function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

//swiper stuff

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'flip',
    speed: 2000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
 
    // start AutoPlay
    autoplay: {
        delay: 5000,
    },


  });

  //nav 


