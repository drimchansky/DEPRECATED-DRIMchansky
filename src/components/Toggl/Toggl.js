import React from 'react'

import styles from './Toggl.module.css'

const clickHandler = () => {
  let darkMode = localStorage.getItem('darkMode')
  const body = document.body

  if (darkMode === 'enabled') {
    body.classList.remove('dark')
    localStorage.setItem('darkMode', null)
  } else {
    body.classList.add('dark')
    localStorage.setItem('darkMode', 'enabled')
  }
}

const Toggl = () => {
  return (
    <button onClick={clickHandler} tabIndex="0" className={styles.toggl}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.24 404.24">
        <path d="M402.216 0a95.44 95.44 0 01-62.08 25.44h-5.44c-19.52 0-29.92 35.28-33.04 52.24l22.4 22.4h4.88a68.558 68.558 0 0050.48-20.8c16-17.04 23.52-43.68 22.8-79.28zM251.096 124.96C219.816 152 24.136 323.52 1.976 404.24c80-22.48 251.92-218.08 278.96-249.44l-29.84-29.84zM290.136 83.04l-37.76 26.24 44.24 44.24 26.24-37.76z" />
      </svg>
    </button>
  )
}

export default Toggl
