const menubutton = document.getElementById('menu-btn');
const navlinks = document.querySelector('nav ul');
menubutton.addEventListener('click',()=>{
    navlinks.classList.toggle('showmenu');
})

var swiper = new Swiper(".mySwiper", {
    navigation:{
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev"
    },
    loop:true,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    },
    speed:2500
});
