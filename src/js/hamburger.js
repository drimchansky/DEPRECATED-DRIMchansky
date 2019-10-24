const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const html = document.querySelector('html');

const hamburgerToggle = () => {
  hamburger.classList.toggle('is-active');
  menu.classList.toggle('visible');
  html.classList.toggle('scroll-disable');
};

// listners
hamburger.addEventListener('click', hamburgerToggle);
// hamburger.addEventListener('blur', () => {
//   hamburger.style.outline = '1px solid black';
// });
document.addEventListener('keydown', press => {
  if (press.keyCode === 27) {
    hamburger.classList.remove('is-active');
    menu.classList.remove('visible');
  }
});
