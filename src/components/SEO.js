// packages
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

        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />

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
