(function() {
  let lightMode = localStorage.getItem('lightMode');
  const modeSwither = document.querySelector('.switcher');
  const html = document.querySelector('.page');

  const enableLightMode = () => {
    html.classList.add('light-mode');
    localStorage.setItem('lightMode', 'enabled');
    modeSwither.classList.add('switcher--light');
    modeSwither.classList.remove('switcher--dark');
  };
  const disableLightMode = () => {
    html.classList.remove('light-mode');
    localStorage.setItem('lightMode', null);
    modeSwither.classList.remove('switcher--light');
    modeSwither.classList.add('switcher--dark');
  };
  if (lightMode === 'enabled') {
    enableLightMode();
  } else {
    disableLightMode();
  }
  modeSwither.addEventListener('click', () => {
    lightMode = localStorage.getItem('lightMode');
    if (lightMode !== 'enabled') {
      enableLightMode();
    } else {
      disableLightMode();
    }
  });
})();
