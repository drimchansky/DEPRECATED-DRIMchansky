import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SiteMetadata = () => {
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

  console.log(data)
  return (
    <Helmet>
      <html lang="en" />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="theme-color" content="#191919" />
    </Helmet>
  )
}

export default SiteMetadata
