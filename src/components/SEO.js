import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useMatch } from '@reach/router'

const SEO = ({ title, description }) => {
  const index = useMatch('/')

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
      <Helmet
        title={index ? data.site.siteMetadata.title : `${title} | ${data.site.siteMetadata.title}`}
      >
        <html lang="en" />
        <meta name="description" content={description || data.site.siteMetadata.description} />
        <meta name="theme-color" content="#191919" />
        <meta
          name="google-site-verification"
          content="s0KBDOaiFwczjIjfpI7nOgEx273026DfhIyK8WeN5AQ"
        />
        <meta name="yandex-verification" content="48c9e460796ceb06" />
      </Helmet>
    </>
  )
}

export default SEO
