const switcher = document.querySelector('.switcher');
const switcherItem = document.querySelector('.switcher__item');
switcher.addEventListener('click', () => {
    switcherItem.classList.toggle('switcher_day');
    switcher.style.outline = 'none';
});
switcher.addEventListener('focus', () => switcher.style.outline = '1px solid var(--theme-primary)');
switcher.addEventListener('blur', () => switcher.style.outline = 'none');
