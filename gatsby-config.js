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
  },
  pathPrefix: '/',
  plugins: [
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
