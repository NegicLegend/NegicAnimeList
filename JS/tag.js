import TagsList from './List/TagsList.js';
import animeList from './List/AnimeList.js';
import render from './render.js';
import animeCount from './count.js';

const tagBtnList = document.querySelectorAll('.tag-menu-item');
const all = document.querySelector('.tag-menu-all');

for(let i = 0; i < tagBtnList.length; i++) {
    (function(i) {
        tagBtnList[i].addEventListener('click', () => {
            var promise = new Promise(
                function(resolve, reject) {
                    resolve();
                }
            );

            promise
                .then(() => {
                    if(tagBtnList[i].classList.contains('yes')) {
                        tagBtnList[i].classList.remove('yes');
                        all.classList.add('active');
                    }else {
                        tagBtnList[i].classList.add('yes');

                        if (document.querySelectorAll('.yes').length == 25) {
                            all.classList.remove('active');
                        }
                    }
                })
                .then(() => {
                    TagsList[i].tagValue = !TagsList[i].tagValue;
                })
                .then(() => {
                    for(let a = 0; a < animeList.length; a++) {
                        for(let j = 0; j < 25; j++) {
                            if(animeList[a].activeTag.includes(TagsList[j].tagName) && TagsList[j].tagValue) {
                                animeList[a].active = true;
                                break;
                            }else {
                                if(j == 24) {
                                    animeList[a].active = false;
                                }
                            }
                        }
                    }
                })
                .then(() => {
                    render();
                    animeCount();
                })
                .catch(() => {})
        })
    })(i)
};

all.addEventListener('click', () => {
    var promise = new Promise(
        function(resolve, reject) {
            resolve()
        }
    )

    promise
        .then(() => {
            for(let i = 0; i < tagBtnList.length; i++) {
                if(!tagBtnList[i].classList.contains('yes')) {
                    tagBtnList[i].classList.add('yes');
                }
            }
        })
        .then(() => {
            for(let i = 0; i < TagsList.length; i++) {
                TagsList[i].tagValue = true;
            }
            for(let a = 0; a < animeList.length; a++) {
                animeList[a].active = true;
            }
            all.classList.remove('active');
        })
        .then(() => {
            render();
            animeCount();
        })
        .catch(() => {});
});
