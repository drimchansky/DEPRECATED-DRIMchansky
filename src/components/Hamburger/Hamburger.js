// packages
import React from 'react'
// styles
import styles from './Hamburger.module.css'

const Hamburger = ({ active, setActive }) => {
  return (
    <button
      aria-label="Hamburger"
      className={`
    ${styles.hamburger} 
    ${styles.hamburgerSpring} 
    ${active ? styles.isActive : ''}
    `}
      onClick={() => setActive(!active)}
    >
      <span className={styles.hamburgerBox}>
        <span className={styles.hamburgerInner}></span>
      </span>
    </button>
  )
}

export default Hamburger
