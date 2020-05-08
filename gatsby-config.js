var autoprefixer = require('autoprefixer')
var nested = require('postcss-nested')
var properties = require('postcss-custom-properties')
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'DRIMchansky',
    author: 'Nikita Chernov',
    description: 'I make random things in the Web',
    siteUrl: 'https://drimchansky.ru',
    twitter: 'https://twitter.com/DRIMchansky',
    github: 'https://github.com/DRIMchansky',
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/works`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/notes`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        disableAutoprefixing: false,
        disableMinification: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          autoprefixer({
            grid: true,
          }),
          nested(),
          properties({
            preserve: true,
            importFrom: './src/util/properties.css',
          }),
        ],
      },
    },

    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://drimchansky.ru',
        sitemap: 'https://drimchansky.ru/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
