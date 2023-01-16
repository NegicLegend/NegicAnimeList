"use strict";

const scrollBtn = document.querySelector('.scroll');

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
})

window.onscroll = () => window.scrollY > screen.height * 2.5 ? scrollBtn.style.display = 'flex' : scrollBtn.style.display = 'none';