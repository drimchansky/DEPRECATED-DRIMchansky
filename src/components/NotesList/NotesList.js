import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import styles from './NotesList.module.css'

const NotesList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "note" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMM YYYY")
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const notes = data.allMarkdownRemark.edges

  console.log(notes)
  return (
    <ul className={styles.list}>
      {notes.map((item) => {
        return (
          <li key={item.node.id} className={styles.item}>
            <Link to={item.node.fields.slug}>
              <h3>{item.node.frontmatter.title}</h3>

              <ul className={styles.tagList}>
                {item.node.frontmatter.tags.map((tag) => {
                  return <li key={tag}>{tag}</li>
                })}
              </ul>

              <span>{item.node.frontmatter.date}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NotesList
