import React from 'react'

import Page from '../components/Page/Page'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import WorksList from '../components/works/WorksList'

const works = () => {
  return (
    <Page>
      <SEO title="Works" description="My works" />
      <Layout>
        <WorksList />
      </Layout>
    </Page>
  )
}

export default works
