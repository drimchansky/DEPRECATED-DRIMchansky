import React from 'react'

import Page from '../components/Page/Page'
import SEO from '../components/SEO'
import WorksList from '../components/works/WorksList'

const works = () => {
  return (
    <Page>
      <SEO title="Works" description="My works" />
      <></>
      <WorksList />
    </Page>
  )
}

export default works
