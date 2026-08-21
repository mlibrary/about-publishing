module.exports = {
  siteMetadata: {
    title: `Michigan Publishing`,
    description: `Advancing scholarship at U-M and beyond`,
    author: `Michigan Creative`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michigan Publishing`,
        short_name: `Publishing`,
        start_url: `/`,
        background_color: `#00274c`,
        theme_color: `#00274c`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-Y7HY8B8BRE"],
        pluginConfig: {
          head: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-K7KXTB7",
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
  ],
}
