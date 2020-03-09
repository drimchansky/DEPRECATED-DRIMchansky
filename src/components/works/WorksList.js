import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const WorksList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "work" } } }) {
        edges {
          node {
            id
            html
            frontmatter {
              date
              title
              image {
                relativePath
              }
            }
          }
        }
      }
    }
  `)
  const works = data.allMarkdownRemark.edges
  console.log(works[0].node.html)

  return (
    <div>
      <></>
    </div>
  )
}

export default WorksList
