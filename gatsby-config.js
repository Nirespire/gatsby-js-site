module.exports = {
  siteMetadata: {
    title: `Software Engineer`,
    description: `I am a software engineer based out of Atlanta, Georgia. I enjoy working with full stack teams on value driven projects. In my spare time I like to work on personal projects like building software, speaking about tech, and writing.`,
    author: `@nirespire`,
    siteUrl: 'https://sanjaynair.me'
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-55692810-2",
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      } 
    },
    `gatsby-plugin-sitemap`
  ]
}