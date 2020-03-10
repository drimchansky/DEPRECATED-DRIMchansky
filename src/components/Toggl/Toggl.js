import React, { useState, useLayoutEffect } from 'react'

import styles from './Toggl.module.css'

const Toggl = () => {
  let [check, setCheck] = useState(null)

  const clickHandler = e => {
    let darkMode = localStorage.getItem('darkMode')
    const body = document.body
    e.target.style.outline = 'none !important'
    console.log(e.target)
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
          onChange={() => {}}
          checked={check}
          tabIndex="0"
        />

        <label htmlFor="dn" className={styles.toggle}>
          <span className={styles.toggle__handler}></span>
        </label>
      </div>
    )
  } else {
    return <></>
  }
}

export default Toggl
