module.exports = {
  siteMetadata: {
    title: `Sanjay Nair - Personal Website`,
    description: `Sanjay Nair - Software Engineer`,
    author: `@nirespire`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`
      },
    },
    `gatsby-plugin-react-helmet`,
  ]
}