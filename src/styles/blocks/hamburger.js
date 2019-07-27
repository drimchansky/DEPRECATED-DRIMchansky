const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', function(){
    if (menu.classList.contains('visible')){
        hamburger_close();
    } else {
        hamburger_open();
    }
})
const hamburger_close = () => {
    hamburger.classList.remove('is-active');
    hamburger.style.outline = 'none';
    menu.classList.toggle('visible', false);
}
const hamburger_open = () => {
    hamburger.classList.add('is-active');
    hamburger.style.outline = 'none';
    menu.classList.toggle('visible');
}

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 27 ) {
    hamburger_close();
    }
 })