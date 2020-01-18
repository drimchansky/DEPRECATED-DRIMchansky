var autoprefixer = require("autoprefixer")
var nested = require("postcss-nested")
var properties = require("postcss-custom-properties")

module.exports = {
  siteMetadata: {
    title: "DRIMchansky",
    author: "Nikita Chernov",
    description: "I make random things in the Web",
    siteUrl: "https://drimchansky.ru",
  },
  pathPrefix: "/",
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
            importFrom: "./src/util/properties.css",
          }),
        ],
      },
    },
  ],
}
