import React from 'react'

import Page from '../components/Page/Page'
import FrontPage from '../components/FrontPage/FrontPage'
import Head from '../components/Head'

export default () => {
  return (
    <Page>
      <Head title="Home" />
      <FrontPage />
    </Page>
  )
}
