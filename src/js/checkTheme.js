(function() {
  const lightMode = localStorage.getItem('lightMode');
  const html = document.querySelector('.page');

  const enableLightMode = () => {
    html.classList.add('light-mode');
    localStorage.setItem('lightMode', 'enabled');
  };
  const disableLightMode = () => {
    html.classList.remove('light-mode');
    localStorage.setItem('lightMode', null);
  };
  if (lightMode === 'enabled') {
    enableLightMode();
  } else {
    disableLightMode();
  }
})();
