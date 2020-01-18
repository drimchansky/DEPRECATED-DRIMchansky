import React from 'react'
import { Link } from 'gatsby'

import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Works</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Notes</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
