module.exports = {
  siteMetadata: {
    title: `Michigan Publishing`,
    description: `Gatsby website coupled with Netlify CMS.`,
    author: `Michigan Creative`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: false,
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
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
  ],
}
