const lightMode = localStorage.getItem('lightMode');
const html = document.querySelector('.page');

if (lightMode === 'enabled') {
  html.classList.add('light-mode');
  localStorage.setItem('lightMode', 'enabled');
} else {
  html.classList.remove('light-mode');
  localStorage.setItem('lightMode', null);
}
