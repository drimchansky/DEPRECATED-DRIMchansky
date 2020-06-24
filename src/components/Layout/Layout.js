// packages
import React from 'react'
// styles
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>
}

export default Layout
