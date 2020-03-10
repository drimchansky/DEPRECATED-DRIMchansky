import React from 'react'

import Page from '../components/Page/Page'
import FrontPage from '../components/FrontPage/FrontPage'
import SEO from '../components/SEO'

export default () => {
  return (
    <Page>
      <SEO title="Home" />
      <FrontPage />
    </Page>
  )
}
