"use strict";

document.querySelector('.menu-header').addEventListener('click', () => {
    document.querySelector('.tag-menu-wrap').classList.add('active');
    document.querySelector('.menu-header').style.opacity = 0;
});

document.querySelector('.exit-menu').addEventListener('click', () => {
    document.querySelector('.tag-menu-wrap').classList.remove('active');
    document.querySelector('.menu-header').style.opacity = 1;
});