import React from 'react'
import { Link } from 'gatsby'

import Nav from '../Nav/Nav'
import Social from '../Social/Social'

import styles from './Sidebar.module.css'

const Sidebar = ({ active }) => {
  return (
    <aside
      className={`
    ${styles.sidebar}
    ${active ? styles.isActive : ''}
    `}
    >
      <div className={styles.wrapper}>
        <Link to="/" className={styles.title} tabIndex="-1">
          <span>DRIMchansky</span>
          <small>web addict</small>
        </Link>
        <Nav />
      </div>
      <footer className={styles.footer}>
        <Social />
        <small>For business enquierues:</small>
        <a href="mailto:drimchansky@gmail.com">drimchansky@gmail.com</a>
      </footer>
    </aside>
  )
}

export default Sidebar
