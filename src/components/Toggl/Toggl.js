import React, { useState, useLayoutEffect } from 'react'

import styles from './Toggl.module.css'

const Toggl = () => {
  let [check, setCheck] = useState(null)

  const clickHandler = e => {
    let darkMode = localStorage.getItem('darkMode')
    const body = document.body
    if (darkMode === 'enabled') {
      body.dataset.dark = 'disabled'
      localStorage.setItem('darkMode', null)
      setCheck(true)
    } else {
      body.dataset.dark = 'enabled'
      localStorage.setItem('darkMode', 'enabled')
      setCheck(false)
    }
  }

  useLayoutEffect(() => {
    let darkMode = localStorage.getItem('darkMode')
    darkMode === 'enabled' ? setCheck(false) : setCheck(true)
  })

  if (check !== null) {
    return (
      <div className={styles.toggleWrapper}>
        <input
          type="checkbox"
          className={styles.input}
          id="dn"
          onClick={clickHandler}
          checked={check}
          tabIndex="0"
        />

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
  } else {
    return <div>load</div>
  }
}

export default Toggl
