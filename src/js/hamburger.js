const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const html = document.querySelector('html');

const enableOutline = () => {
  hamburger.classList.remove('disable-outline');
};
const disableOutline = () => {
  hamburger.classList.add('disable-outline');
};

const hamburgerToggle = () => {
  hamburger.classList.toggle('is-active');
  menu.classList.toggle('visible');
  html.classList.toggle('scroll-disable');
  disableOutline();
};

hamburger.addEventListener('click', hamburgerToggle);
hamburger.addEventListener('blur', enableOutline);

document.addEventListener('keydown', press => {
  if (press.keyCode === 27) {
    hamburger.classList.remove('is-active');
    menu.classList.remove('visible');
  }
});
