// packages
import React from 'react'
import { Link } from 'gatsby'
// styles
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
          <Link
            className={styles.link}
            to="/"
            activeClassName={styles.active}
            onClick={clickHandler}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/works"
            activeClassName={styles.active}
            onClick={clickHandler}
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/services"
            activeClassName={styles.active}
            onClick={clickHandler}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/notes"
            activeClassName={styles.active}
            onClick={clickHandler}
          >
            Notes
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
