const autoprefixer = require('autoprefixer')
const nested = require('postcss-nested')
const properties = require('postcss-custom-properties')

// Plugins order
// - gatsby-plugin-sharp
// - gatsby-transformer-sharp
// - gatsby-transformer-remark
// -- gatsby-remark-copy-linked-files
// -- gatsby-remark-images
// - gatsby-source-filesystem static/img
// - gatsby-source-filesystem src/data
// - gatsby-plugin-material-ui
// - gatsby-plugin-react-helmet
// - gatsby-plugin-postcss
// - gatsby-plugin-sitemap
// - gatsby-plugin-robots-txt
// - gatsby-plugin-netlify-cms
// - gatsby-plugin-nprogress

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
        path: `${__dirname}/src/data`,
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
    {
      resolve: `gatsby-plugin-sitemap`,
      option: {
        exclude: [`/notes/*`, `/admin/*`],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://drimchansky.ru',
        sitemap: 'https://drimchansky.ru/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
        minimum: 0.4,
      },
    },
  ],
}
