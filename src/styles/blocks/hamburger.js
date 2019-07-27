const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', function(){
    if (menu.classList.contains('visible')){
        this.classList.remove('is-active');
        menu.classList.toggle('visible', false);
    } else {
        this.classList.add('is-active');
        menu.classList.toggle('visible');
    }
})