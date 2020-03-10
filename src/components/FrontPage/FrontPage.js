import React from 'react'
import { Link } from 'gatsby'

import styles from './FrontPage.module.css'

const FrontPage = () => {
  return (
    <main className={styles.front}>
      <header>
        <small>Hi. I'm Nikita.</small>
        <h1>I make random things in the Web</h1>
        <p>
          You can see{' '}
          <Link to="/works" className="link-effect">
            my works
          </Link>{' '}
          and{' '}
          <Link to="/services" className="link-effect">
            services
          </Link>
        </p>
      </header>
    </main>
  )
}

export default FrontPage
