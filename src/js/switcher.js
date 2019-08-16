const switcher = document.querySelector('.switcher');
const switcherItem = document.querySelector('.switcher__item');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'day') {
        switcherItem.classList.remove('switcher_day');
    }
}

switcher.addEventListener('click', () => {
    switcherItem.classList.toggle('switcher_day');
    switcher.style.outline = 'none';
});

function switchTheme() {
    if (switcherItem.classList.contains('switcher_day')) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'day');
        localStorage.setItem('theme', 'day');
    }
}

switcher.addEventListener('click', () => {
    switchTheme();
});
switcher.addEventListener('focus', () => switcher.style.outline = '1px solid var(--theme-primary)');
switcher.addEventListener('blur', () => switcher.style.outline = 'none');
