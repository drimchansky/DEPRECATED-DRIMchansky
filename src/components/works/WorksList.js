/* eslint-disable array-callback-return */
import React from 'react'
import WorkItem from './WorkItem'
import { useStaticQuery, graphql } from 'gatsby'

import styles from './WorkList.module.css'

const WorksList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "work" } } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              date
              tags
              title
              url
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const works = data.allMarkdownRemark.edges

  return (
    <>
      <ul className={styles.workList}>
        {works.map(item => {
          const showData = item.node
          console.log(showData)

          return (
            <WorkItem
              title={showData.frontmatter.title}
              id={showData.id}
              imageUrl={showData.frontmatter.image.childImageSharp.fluid}
            />
          )
        })}
      </ul>
    </>
  )
}

export default WorksList
