(function () {
  const headings = document.querySelectorAll('.collapse__caption');

  Array.prototype.forEach.call(headings, h => {
    const btn = h.querySelector('.collapse__button');
    const target = h.nextElementSibling;

    btn.onclick = () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      target.hidden = expanded;
    };
  });
})();
