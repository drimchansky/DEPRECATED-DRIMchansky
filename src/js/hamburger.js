const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', function(){
    hamburger_toggle();
})
    const hamburger_toggle = () => {
        hamburger.classList.toggle('is-active');
        menu.classList.toggle('visible');
        hamburger.style.outline = 'none';
    }

document.addEventListener('keydown', function (press) {
    if (press.keyCode === 27) {
        hamburger.classList.remove('is-active');
        menu.classList.remove('visible');
    }
 })