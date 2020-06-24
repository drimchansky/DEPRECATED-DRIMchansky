// packages
import React from 'react'
// components
import Page from '../components/Page/Page'
import SEO from '../components/SEO'
import Layout from '../components/Layout/Layout'
import NotesList from '../components/NotesList/NotesList'

const notes = () => {
  return (
    <Page>
      <SEO title="Notes" description="My notes" />
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
          Notes
        </h1>
        <NotesList />
      </Layout>
    </Page>
  )
}

export default notes
