const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', function(){
    if (menu.classList.contains('visible')){
        this.classList.remove('is-active');
        this.style.outline = 'none';
        menu.classList.toggle('visible', false);
        
    } else {
        this.classList.add('is-active');
        this.style.outline = '2px solid white';
        menu.classList.toggle('visible');
    }
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 27 ) {
       menu.classList.remove('visible');
       hamburger.classList.remove('is-active');
       hamburger.style.outline = 'none';
    }
 })