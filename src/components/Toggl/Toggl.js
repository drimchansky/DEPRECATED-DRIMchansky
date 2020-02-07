import React from 'react'

import styles from './Toggl.module.css'

const clickHandler = e => {
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
    <div className={styles.toggleWrapper}>
      <input type="checkbox" className={styles.input} id="dn" onClick={clickHandler} />
      <label for="dn" className={styles.toggle}>
        <span className={styles.toggle__handler}>
          <span className={[styles.crater, styles.crater1].join(' ')}></span>
          <span className={[styles.crater, styles.crater2].join(' ')}></span>
          <span className={[styles.crater, styles.crater3].join(' ')}></span>
        </span>
        <span className={[styles.star, styles.star1].join(' ')}></span>
        <span className={[styles.star, styles.star2].join(' ')}></span>
        <span className={[styles.star, styles.star3].join(' ')}></span>
        <span className={[styles.star, styles.star4].join(' ')}></span>
        <span className={[styles.star, styles.star5].join(' ')}></span>
        <span className={[styles.star, styles.star6].join(' ')}></span>
      </label>
    </div>
  )
}

export default Toggl
