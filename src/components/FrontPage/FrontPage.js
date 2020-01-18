import React from 'react'
import { Link } from 'gatsby'

import styles from './FrontPage.module.css'

const FrontPage = () => {
  return (
    <header className={styles.front}>
      <p>Hi. I'm Nikita.</p>
      <h1>I make random things in the Web</h1>
      <p>
        You can see <Link to="/">my works</Link> and <Link to="/">services</Link>
      </p>
    </header>
  )
}

export default FrontPage
