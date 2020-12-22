module.exports = {
  siteMetadata: {
    title: 'Enea Xharja',
    description: 'My Own Little Corner of the Web!',
    author: `@eneax`,
    siteUrl: `https://eneaxharja.com`,
  },
  plugins: [
    // custom metadata for each page
    'gatsby-plugin-react-helmet',
    {
      // parses Json files
      resolve: `gatsby-transformer-json`,
      option: {
        typeName: `Json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      // makes images available
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // exposes several image processing functions built on the Sharp image processing library
    `gatsby-plugin-sharp`,
    // creates ImageSharp nodes from image types
    `gatsby-transformer-sharp`,
    {
      // parses Markdown files using MDX
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            // parses Markdown images using Remark
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
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
    // Enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
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
  ],
};
