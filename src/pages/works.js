// packages
import React from 'react'
// components
import Page from '../components/Page/Page'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import WorksList from '../components/WorksList/WorksList'

const works = () => {
  return (
    <Page>
      <SEO title="Works" description="My works" />
      <Layout>
        {/* visually hidden header */}
        <h1
          style={{
            visibility: 'hidden',
            height: 0,
            width: 0,
            position: 'absolute',
            overflow: 'hidden',
          }}
        >
          Works
        </h1>
        <WorksList />
      </Layout>
    </Page>
  )
}

export default works
