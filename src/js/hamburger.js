const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const html = document.querySelector('html');

const hamburgerToggle = () => {
  hamburger.classList.toggle('is-active');
  menu.classList.toggle('visible');
  hamburger.style.outline = 'none';
  html.classList.toggle('scroll-disable');
};

// listners
hamburger.addEventListener('click', hamburgerToggle);
document.addEventListener('keydown', press => {
  if (press.keyCode === 27) {
    hamburger.classList.remove('is-active');
    menu.classList.remove('visible');
  }
});
