import React from 'react'
import { Link } from 'gatsby'

import frontStyles from './FrontPage.module.css'

const FrontPage = () => {
  return (
    <main className={frontStyles.front}>
      <p>Hi. I'm Nikita.</p>
      <h1>I make random things in the Web</h1>
      <p>
        You can see <Link to="/">my works</Link> and <Link to="/">services</Link>
      </p>
    </main>
  )
}

export default FrontPage
