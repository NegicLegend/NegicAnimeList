"use strict";

const scrollBtn = document.querySelector('.scroll');

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
})

window.onscroll = () => window.scrollY > screen.height * 2.5 ? scrollBtn.style.display = 'flex' : scrollBtn.style.display = 'none';
window.addEventListener('scroll', () => {
    if(window.scrollY > document.querySelector('.menu-header').offsetHeight) {
        if(!document.querySelector('.header').classList.contains('active')) {
            document.querySelector('.header').classList.add('active');
        }
    }else {
        if(document.querySelector('.header').classList.contains('active')) {
            document.querySelector('.header').classList.remove('active');
        }
    }
})