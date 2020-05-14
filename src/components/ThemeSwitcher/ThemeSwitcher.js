import React, { useState, useEffect } from 'react'
import { IconButton } from '@material-ui/core'
import Brightness6Icon from '@material-ui/icons/Brightness6'

import NightsStayIcon from '@material-ui/icons/NightsStay'

import styles from './ThemeSwitcher.module.css'

const ThemeSwither = () => {
  let [check, setCheck] = useState(null)

  const clickHandler = (e) => {
    let darkMode = localStorage.getItem('darkMode')
    const body = document.body
    e.target.style.outline = 'none !important'
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

  useEffect(() => {
    let darkMode = localStorage.getItem('darkMode')
    darkMode === 'enabled' ? setCheck(false) : setCheck(true)
  })

  if (check !== null) {
    if (check) {
      return (
        <IconButton
          onClick={clickHandler}
          aria-label="Theme switcher"
          className={styles.themeSwitcher}
        >
          <NightsStayIcon />
        </IconButton>
      )
    } else {
      return (
        <IconButton
          onClick={clickHandler}
          aria-label="Theme switcher"
          className={styles.themeSwitcher}
        >
          <Brightness6Icon />
        </IconButton>
      )
    }
  } else {
    return <></>
  }
}

export default ThemeSwither
