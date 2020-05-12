/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'Bruno Dmello',
    description: "Bruno's Personal Blog.",
    author: 'bron10',
    siteUrl: 'http://localhost:8000',
  },
  plugins: [
    'gatsby-plugin-feed',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-csp',
      options: {
        disableOnDev: false,
        mergeStyleHashes: false,
        directives: {
          'style-src': "'self' 'unsafe-inline' blob:",
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog-posts',
        path: `${__dirname}/src/pages/blog-posts/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'bron10-site',
        short_name: 'bron10',
        start_url: '/',
        background_color: '#17314c',
        theme_color: '#17314c',
        display: 'minimal-ui',
        icon: 'favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
