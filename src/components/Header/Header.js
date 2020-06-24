// packages
import React from 'react'
import { Link } from 'gatsby'
// components
import Nav from '../Nav/Nav'
import Social from '../Social/Social'
// styles
import styles from './Header.module.css'

const Header = ({ active, setActive }) => {
  return (
    <header
      className={`
    ${styles.header}
    ${active ? styles.isActive : ''}
    `}
    >
      <div className={styles.wrapper}>
        <Link to="/" className={styles.title} tabIndex="-1">
          <span>DRIMchansky</span>
          <small>web enthusiast</small>
        </Link>
        <Nav active={active} setActive={setActive} />
      </div>
      <div className={styles.footer}>
        <Social />
        <a href="mailto:drimchansky@gmail.com">drimchansky@gmail.com</a>
      </div>
    </header>
  )
}

export default Header
