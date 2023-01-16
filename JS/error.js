"use strict";

function error() {
   for(let i = 0; i < document.querySelectorAll('.anime-img').length; i++) {
      (function(i) {
         document.querySelectorAll('.anime-img')[i].addEventListener('error', function() {
            this.src = 'https://mybrighthat.com/wp-content/uploads/2021/08/000-http-error-codes.png';
            document.querySelectorAll('.anime-img-wrap')[i].style.alignItems = 'center';
         })
      })(i)
   }
}

export default error;