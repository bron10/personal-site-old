/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: `Sophie Au`,
    description: `Sophie Au's Personal Blog.`,
    author: `Sophie Au`,
    siteUrl: `https://sophieau.com`,
  },
  plugins: [
    `gatsby-plugin-feed`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-sharp',
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: false,
        mergeStyleHashes: false,
        directives: {
          'style-src': "'self' 'unsafe-inline'",
          'frame-src': 'https://app.commentbox.io',
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/pages/blog-posts/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 970,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sophie-aus-site`,
        short_name: `sophie`,
        start_url: `/`,
        background_color: `#17314c`,
        theme_color: `#17314c`,
        display: `minimal-ui`,
        icon: `favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
