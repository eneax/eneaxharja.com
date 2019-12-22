module.exports = {
  siteMetadata: {
    title: 'Enea Xharja - Web Developer',
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
        typeName: `Json`
      }
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
    {
      // makes posts available
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    // exposes several image processing functions built on the Sharp image processing library
    `gatsby-plugin-sharp`,
    // creates ImageSharp nodes from image types 
    `gatsby-transformer-sharp`,
    {
      // parses Markdown files using Remark
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
        name: 'Enea Xharja - Web Developer',
        short_name: 'Enea Xharja',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.svg', // This path is relative to the root of the site.
      },
    },
    // Enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://eneaxharja.com',
        sitemap: 'https://eneaxharja.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-page-progress`,
  ],
}
