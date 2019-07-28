const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', function(){
    class_toggle();
})
/*
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
*/
    const class_toggle = () => {
        hamburger.classList.toggle('is-active');
        menu.classList.toggle('visible');
        hamburger.style.outline = 'none';
    }

document.addEventListener('keydown', function (press) {
    if (press.keyCode === 27 ) {
    hamburger_close();
    }
 })