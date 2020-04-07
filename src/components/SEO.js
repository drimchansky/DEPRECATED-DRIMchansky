import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Helmet title={`${data.site.siteMetadata.title} | ${title}`}>
        <html lang="en" />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="theme-color" content="#191919" />
        <meta
          name="google-site-verification"
          content="s0KBDOaiFwczjIjfpI7nOgEx273026DfhIyK8WeN5AQ"
        />
      </Helmet>
    </>
  )
}

export default SEO
