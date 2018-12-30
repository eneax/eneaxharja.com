module.exports = {
  siteMetadata: {
    title: 'Enea Xharja | Web Developer',
    description: 'My Own Little Corner of the Web!'
  },
  plugins: [
    // custom metadata for each page
    'gatsby-plugin-react-helmet',
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
    // parses Markdown files using Remark
    `gatsby-transformer-remark`,
    // creates ImageSharp nodes from image types 
    'gatsby-transformer-sharp',
    // exposes several image processing functions built on the Sharp image processing library
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Enea Xharja | Web Developer',
        short_name: 'Enea Xharja',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    // custom fonts
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Maven Pro'] // 400, 500, 700, 900
        }
      }
    }
  ],
}
