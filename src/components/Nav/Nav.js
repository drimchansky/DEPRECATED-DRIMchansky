import React from 'react'
import { Link } from 'gatsby'

import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
