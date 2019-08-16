const switcher = document.querySelector('.switcher');
const switcherItem = document.querySelector('.switcher__item');
const currentTheme = localStorage.getItem('theme');

// set theme
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        switcherItem.classList.add('switcher_night');
    } else {
        switcherItem.classList.remove('switcher_night');
    }
}

// switch theme
function switchTheme() {
    if (switcherItem.classList.contains('switcher_night')) {
        switcherItem.classList.remove('switcher_night');
        localStorage.setItem('theme', 'day');
        document.documentElement.setAttribute('data-theme', 'day');
        switcher.style.outline = 'none';

    } else {
        switcherItem.classList.add('switcher_night');
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        switcher.style.outline = 'none';
    }
}

switcher.addEventListener('click', () => {
    switchTheme();
});
switcher.addEventListener('focus', () => switcher.style.outline = '1px solid var(--theme-primary)');
switcher.addEventListener('blur', () => switcher.style.outline = 'none');
