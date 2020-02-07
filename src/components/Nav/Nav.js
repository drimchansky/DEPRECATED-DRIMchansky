import React from 'react'
import { Link } from 'gatsby'

import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link to="/" activeClassName={styles.active}>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/works" activeClassName={styles.active}>
            <span>Works</span>
          </Link>
        </li>
        <li>
          <Link to="/services" activeClassName={styles.active}>
            <span>Services</span>
          </Link>
        </li>
        <li>
          <Link to="/notes" activeClassName={styles.active}>
            <span>Notes</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
