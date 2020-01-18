import React from 'react'
import { Link } from 'gatsby'

import styles from './FrontPage.module.css'

const FrontPage = () => {
  return (
    <section className={styles.front}>
      <header>
        <small>Hi. I'm Nikita.</small>
        <h1>I make random things in the Web</h1>
        <p>
          You can see{' '}
          <Link to="/" className="link-effect">
            my works
          </Link>{' '}
          and{' '}
          <Link to="/" className="link-effect">
            services
          </Link>
        </p>
      </header>
    </section>
  )
}

export default FrontPage
