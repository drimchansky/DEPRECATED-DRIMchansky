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
  console.log(post)
  return (
    <Page>
      <SEO title={post.frontmatter.title} description={post.frontmatter.title} />
      <Layout className={styles.layout}>
        <main className={styles.container}>
          <h1>{post.frontmatter.title}</h1>
          <span>{post.frontmatter.date}</span>
          <div className={styles.rich} dangerouslySetInnerHTML={{ __html: post.html }} />
        </main>
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
        date(formatString: "MMM YYYY")
      }
    }
  }
`
export default Note
