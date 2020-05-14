import React, { useState, useLayoutEffect } from 'react'

import Header from '../Header/Header'
import Hamburger from '../../components/Hamburger/Hamburger'
import ThemeSwither from '../ThemeSwitcher/ThemeSwitcher'

import styles from './Page.module.css'
import '../../util/custom-normalize.css'
import '../../util/properties.css'
import '../../util/fonts.css'
import '../../util/utility.css'

const Page = (props) => {
  // hamburger state
  const [active, setActive] = useState(false)

  useLayoutEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
      vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  })

  return (
    <>
      <div className={styles.page}>
        <Hamburger active={active} setActive={setActive} />
        <Header active={active} setActive={setActive} />
        <>{props.children}</>
        <ThemeSwither />
      </div>
    </>
  )
}

export default Page
