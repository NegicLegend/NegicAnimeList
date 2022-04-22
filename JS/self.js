const self = document.querySelector('.self');
const icon = document.querySelector('.negic-icon');

icon.addEventListener('click', () => {
   self.classList.toggle('active');
   icon.classList.toggle('active');
})