"use strict";

function error() {
   for(let i = 0; i < document.querySelectorAll('.anime-img').length; i++) {
      (function(i) {
         document.querySelectorAll('.anime-img')[i].addEventListener('error', function() {
            this.src = 'https://thumbs.dreamstime.com/b/computer-screen-error-effect-glitch-binary-code-abstract-digital-matrix-background-noise-vector-228803972.jpg';
            document.querySelectorAll('.anime-img-wrap')[i].style.alignItems = 'center';
         })
      })(i)
   }
}

export default error;