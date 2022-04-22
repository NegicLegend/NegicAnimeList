const themeBtn = document.querySelector('.toggle-theme');
const theme = document.getElementById('theme');

themeBtn.addEventListener('click', () => {
    if (theme.href.indexOf('dark') > -1) {
        theme.href = './theme/light.css';
    } else if (theme.href.indexOf('light') > -1) {
        theme.href = './theme/dark.css';
    } else {
        console.error('Something must be wrong!');
    }

    document.getAnimations().forEach((anim) => {
        if(anim.animationName != 'MoveTop') {
           anim.cancel();
           anim.play();
        }
     });
})