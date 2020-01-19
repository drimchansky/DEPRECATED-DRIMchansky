const darkMode = localStorage.getItem('darkMode')
const body = document.body
if (darkMode === 'enabled') {
  body.classList.add('dark')
} else {
  body.classList.remove('dark')
}
