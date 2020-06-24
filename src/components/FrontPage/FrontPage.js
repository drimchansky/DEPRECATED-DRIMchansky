// packages
import React from 'react'
import { Link } from 'gatsby'
// styles
import styles from './FrontPage.module.css'

const FrontPage = () => {
  return (
    <main className={styles.front}>
      <div>
        <span className={styles.introduce}>
          Hi. I'm <h1>Nikita Chernov</h1>.
        </span>
        <h2 className={styles.description}>I make random things in the Web</h2>
        <span className={styles.info}>
          You can see{' '}
          <Link to="/works" className="link-effect">
            my works
          </Link>{' '}
          and{' '}
          <Link to="/services" className="link-effect">
            services
          </Link>
        </span>
      </div>
    </main>
  )
}

export default FrontPage
