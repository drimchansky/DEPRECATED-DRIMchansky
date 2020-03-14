import React from 'react'
import { Link } from 'gatsby'

import styles from './Nav.module.css'

const Nav = ({ active, setActive }) => {
  // close mobile when click on link, even current page
  const clickHandler = () => {
    setActive(!active)
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link to="/" activeClassName={styles.active} onClick={clickHandler}>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/works" activeClassName={styles.active} onClick={clickHandler}>
            <span>Works</span>
          </Link>
        </li>
        <li>
          <Link to="/services" activeClassName={styles.active} onClick={clickHandler}>
            <span>Services</span>
          </Link>
        </li>
        <li>
          <Link to="/notes" activeClassName={styles.active} onClick={clickHandler}>
            <span>Notes</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
