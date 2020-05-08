import React from 'react'

import Page from '../components/Page/Page'
import SEO from '../components/SEO'
import Layout from '../components/Layout/Layout'
import NotesList from '../components/NotesList/NotesList'

const notes = () => {
  return (
    <Page>
      <SEO title="Notes" description="My notes" />
      <Layout>
        <NotesList />
      </Layout>
    </Page>
  )
}

export default notes
