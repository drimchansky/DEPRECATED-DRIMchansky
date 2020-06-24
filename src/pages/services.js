// packages
import React from 'react'
// cpmponenst
import Page from '../components/Page/Page'
import SEO from '../components/SEO'
import Layout from '../components/Layout/Layout'

const services = () => {
  return (
    <Page>
      <SEO title="Services" description="My services" />
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
          Services
        </h1>
      </Layout>
    </Page>
  )
}

export default services
