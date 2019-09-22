/* eslint-disable wrap-iife */
const switcher = document.querySelector('.switcher');
const switcherItem = document.querySelector('.switcher__item');
const currentTheme = localStorage.getItem('theme');
// eslint-disable-next-line func-names
// eslint-disable-next-line space-before-function-paren
(function() {
  // set theme

  if (currentTheme) {
    if (currentTheme === 'day') {
      document.documentElement.setAttribute('data-theme', 'day');
      switcherItem.classList.remove('switcher_night');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      switcherItem.classList.add('switcher_night');
    }
  }
})();

// switch theme
function switchTheme() {
  if (switcherItem.classList.contains('switcher_night')) {
    localStorage.setItem('theme', 'day');
    document.documentElement.setAttribute('data-theme', 'day');
    switcher.style.outline = 'none';
  } else {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    switcher.style.outline = 'none';
  }
}

function switcherSetOutline() {
  switcher.style.outline = 'outline: 4px solid #80b3ff';
}

switcher.addEventListener('click', () => {
  switchTheme();
  switcherItem.classList.toggle('switcher_night');
});
switcher.addEventListener('focus', switcherSetOutline);
switcher.addEventListener('blur', switcherSetOutline);
