import React from 'react'

import styles from './Hamburger.module.css'

const Hamburger = ({ active, setActive }) => {
  return (
    <button
      aria-label="Hamburger menu"
      className={`
    ${styles.hamburger} 
    ${styles.hamburgerSpring} 
    ${active ? styles.isActive : ''}
    `}
      type="button"
      onClick={() => setActive(!active)}
    >
      <span className={styles.hamburgerBox}>
        <span className={styles.hamburgerInner}></span>
      </span>
    </button>
  )
}

export default Hamburger
