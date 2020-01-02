const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const html = document.querySelector('html');
let isPreloaded = false;

const enableOutline = () => {
  hamburger.classList.remove('disable-outline');
};
const disableOutline = () => {
  hamburger.classList.add('disable-outline');
};

const hamburgerToggle = () => {
  hamburger.classList.toggle('is-active');
  menu.classList.toggle('visible');
  html.classList.toggle('menu-on');
  disableOutline();

  // preloading subpages
  if (!isPreloaded) {
    const Uri = [
      'https://drimchansky.space/works',
      'https://drimchansky.space/about',
    ];
    Uri.map(uri => {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = uri;
      document.head.appendChild(preloadLink);
      return true;
    });
    isPreloaded = true;
  }
};

hamburger.addEventListener('click', hamburgerToggle);
hamburger.addEventListener('blur', enableOutline);

document.addEventListener('keydown', press => {
  if (press.keyCode === 27) {
    hamburger.classList.remove('is-active');
    menu.classList.remove('visible');
    html.classList.remove('menu-on');
  }
});
