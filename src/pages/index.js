import React from 'react'

import Page from '../components/Page/Page'
import Layout from '../components/Layout/Layout'
import FrontPage from '../components/FrontPage/FrontPage'
import SEO from '../components/SEO'

export default () => {
  return (
    <Page>
      <SEO title="Home" />
      <Layout>
        <FrontPage />
      </Layout>
    </Page>
  )
}
