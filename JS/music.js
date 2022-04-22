import musicList from './List/MusicList.js';

const audio = document.getElementById('audio');
const sound = document.querySelector('.toggle-volume');
let animeCurrent;
let isPlaying = false;
let canPlay = false;
audio.volume = 0;

function music() {
   const anime = document.querySelectorAll('.anime-wrapper');

   for (let i = 0; i < anime.length; i++) {
      (function (i) {
         anime[i].addEventListener('mouseenter', () => {
            var promise = new Promise(
               function (resolve, reject) {
                  resolve()
               }
            );

            promise
               .then(() => {
                  let animeIndex = parseInt(anime[i].getAttribute('data-index')) - 1;
                  if (animeCurrent == animeIndex) {
                     animeCurrent = animeIndex;
                     isPlaying = true;
                  } else if (animeCurrent != animeIndex) {
                     animeCurrent = animeIndex;
                     audio.src = musicList[animeCurrent].path;
                     isPlaying = true;
                  }
                  console.log(musicList[animeCurrent].name)
               })
               .then(() => {
                  if (isPlaying && canPlay) {
                     audio.play();
                  } else {
                     audio.pause();
                  }
               })
               .catch(() => {})
         })

         anime[i].addEventListener('mouseleave', () => {
            var promise = new Promise(
               function (resolve, reject) {
                  resolve()
               }
            );

            promise
               .then(() => {
                  isPlaying = false;
               })
               .then(() => {
                  if (isPlaying && canPlay) {
                     audio.play();
                  } else {
                     audio.pause();
                  }
               })
               .catch(() => {})
         })
      })(i)
   };

   sound.addEventListener('click', () => {
      sound.classList.toggle('active');

      if (sound.classList.contains('active')) {
         audio.volume = 1;
      } else {
         audio.volume = 0;
      }

      canPlay = !canPlay;
   })
}

audio.addEventListener('ended', () => {
   setTimeout(() => {
      if (isPlaying && canPlay) {
         audio.play();
      }
   }, 1000)
})

sound.onmousemove = function(e) {
   const x = e.pageX - sound.offsetLeft;
   const y = e.pageY - sound.offsetTop;

   sound.style.setProperty('--x', x + 'px');
   sound.style.setProperty('--y', y + 'px');
}

export default music;