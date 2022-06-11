import animeCount from './count.js';
import music from './music.js';
import error from './error.js'
import animeList from './List/AnimeList.js';

const main = document.querySelector('.main');

function checkLevel(lv, name) {
   if(lv[0] === 'S') {
      return 'mythical';
   }else if(lv[0] === 'A') {
      return 'legendary';
   }else if(lv[0] === 'B') {
      return 'epic';
   }else {
      console.error(name);
   }
}

function render() {
   const html = animeList.map((anm) => {
      if(anm.active) {
         return `
            <article class="anime-wrapper" data-index="${anm.animeindex}">
               <div class="anime-level ${checkLevel(anm.level, anm.name)}">${anm.level}</div>
               <div class="anime-img-wrap ${anm.imgP}">
                  <img src="${anm.img}" class="anime-img">
                  <a href="${anm.link}" class="anime-link">${anm.name}</a>
               </div>
               <div class="anime-tag-wrap">
                  <p class="anime-tag">${anm.tagS}</p>
               </div>
            </article>
         `
      }
   })
   main.innerHTML = html.join('\n');
   music();
   error();
};
render();
animeCount();

export default render;
