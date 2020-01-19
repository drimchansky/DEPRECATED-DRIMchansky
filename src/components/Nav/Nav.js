import React from 'react'
import { Link } from 'gatsby'

import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link to="/" activeClassName={styles.active}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/works" activeClassName={styles.active}>
            Works
          </Link>
        </li>
        <li>
          <Link to="/services" activeClassName={styles.active}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/notes" activeClassName={styles.active}>
            Notes
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
