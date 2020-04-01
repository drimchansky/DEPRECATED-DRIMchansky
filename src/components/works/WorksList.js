/* eslint-disable array-callback-return */
import React from 'react'
import WorkItem from './WorkItem'
import { useStaticQuery, graphql } from 'gatsby'

import styles from './works.module.css'

const WorksList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___hiddenDate], order: DESC }
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
              tech
              githubUrl
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
        {works.map((item) => {
          const showData = item.node

          return (
            <WorkItem
              key={showData.id}
              title={showData.frontmatter.title}
              date={showData.frontmatter.date}
              url={showData.frontmatter.url}
              githubUrl={showData.frontmatter.githubUrl}
              tech={showData.frontmatter.tech}
              tags={showData.frontmatter.tags}
              imageUrl={showData.frontmatter.image.childImageSharp.fluid}
              html={showData.html}
            />
          )
        })}
      </ul>
    </>
  )
}

export default WorksList
