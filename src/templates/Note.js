// packages
import React from 'react'
import { graphql } from 'gatsby'
// components
import Page from '../components/Page/Page'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
// styles
import styles from './Note.module.css'

const Note = ({ data }) => {
  const post = data.markdownRemark

  const handler = (e) => {
    e.preventDefault()
  }

  return (
    <Page>
      <SEO title={post.frontmatter.title} description={post.frontmatter.title} />
      <Layout className={styles.layout}>
        <article className={styles.container}>
          <h1>{post.frontmatter.title}</h1>
          <span>{post.frontmatter.date}</span>
          <div
            onClick={handler}
            className={styles.rich}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </Layout>
    </Page>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
      }
    }
  }
`
export default Note
