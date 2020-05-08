import React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page/Page'
import SEO from '../components/SEO'

import styles from './Note.module.css'

const Note = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Page>
      <SEO title="Notes" description="My notes" />
      <main class={styles.layout}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
    </Page>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default Note
