
(function() {
  const headings = document.querySelectorAll('.collapse__caption');
  
  Array.prototype.forEach.call(headings, h => {
    let btn = h.querySelector('.collapse__button');
    let target = h.nextElementSibling;
    
    btn.onclick = () => {
      let expanded = btn.getAttribute('aria-expanded') === 'true';
      
      btn.setAttribute('aria-expanded', !expanded);
      target.hidden = expanded;  
    }
  });
})()

