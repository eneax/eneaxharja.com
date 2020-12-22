module.exports = {
  siteMetadata: {
    title: 'Enea Xharja',
    description: 'My Own Little Corner of the Web!',
    author: `@eneax`,
    siteUrl: `https://eneaxharja.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://eneaxharja.com',
        sitemap: 'https://eneaxharja.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://eneaxharja.com`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Enea Xharja',
        short_name: 'Enea',
        start_url: '/',
        background_color: '#3ddc84',
        theme_color: '#3ddc84',
        display: 'standalone',
        icon: 'src/images/logo.svg',
      },
    },
    `gatsby-plugin-offline`,
  ],
};
