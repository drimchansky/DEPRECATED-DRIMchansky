import React from 'react'

import Page from '../components/Page/Page'
import Sidebar from '../components/Sidebar/Sidebar'
import FrontPage from '../components/FrontPage/FrontPage'

export default () => {
  return (
    <Page>
      <Sidebar />
      <FrontPage />
    </Page>
  )
}
