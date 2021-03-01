console.log('script loaded');

//navigation burger actions
const menuBtn = document.querySelector('.menu-btn__burger');
const burger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const logo = document.querySelector('.nav__logo');

let isMenuOpen = false;

const openMenu = () => {
 if(isMenuOpen){
    burger.classList.remove('open');
    logo.classList.remove('close');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
 } else {
     burger.classList.add('open');
     logo.classList.add('close');
     nav.classList.add('open');
     menuNav.classList.add('open');
 }
 isMenuOpen = !isMenuOpen;
}
menuBtn.addEventListener('click', openMenu);

//slider
const prevBtn = document.querySelector('.slider__button_prev');
const nextBtn = document.querySelector('.slider__button_next');
const slides = document.querySelectorAll('.slide');
const homeContents = document.querySelectorAll('.home__content');

let currentSlide = 0;

const activeSlide = (currentSlide) => {
    slides.forEach((slide, index) => {
        if(index === currentSlide){
            slide.classList.add('slide_active');
        } else slide.classList.remove('slide_active');
    });
    homeContents.forEach((slide, index) => {
        if(index === currentSlide){
            slide.classList.add('home__content_active');
        } else slide.classList.remove('home__content_active');
    });
}

const next = () => {
    if(currentSlide === slides.length-1) {
        currentSlide = 0;
    } else currentSlide+=1;
    activeSlide(currentSlide);
}
const prev = () => {
    if(currentSlide === 0) {
        currentSlide = slides.length-1;
    } else currentSlide-=1;
    activeSlide(currentSlide);
}

activeSlide(currentSlide);

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

//keyboard listeners for slides
document.addEventListener('keyup', (event)=>{if(event.keyCode===37) {prev()}});
document.addEventListener('keyup', (event)=>{if(event.keyCode===39) {next()}});

