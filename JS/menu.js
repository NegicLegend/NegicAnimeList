const menu = document.querySelector('.tag-menu-wrap');
const menuBtn = document.querySelector('.menu-header');
const exit = document.querySelector('.exit-menu');

menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
});

exit.addEventListener('click', () => {
    menu.classList.remove('active');
});