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
        name: 'Enea Xharja - Web Developer',
        short_name: 'Enea Xharja',
        start_url: '/',
        background_color: '#3ddc84',
        theme_color: '#3ddc84',
        display: 'standalone',
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
    {
      // Enables RSS Feed
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + "/posts" + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + "/posts" + edge.node.frontmatter.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                });
              });
            },
            query: `
              {
                allMdx(sort: {
                  order: DESC
                  fields:[frontmatter___date]
                }) {
                  edges {
                    node {
                      timeToRead
                      excerpt
                      html
                      frontmatter {
                        title
                        slug
                        date(formatString: "MMMM DD, YYYY")
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Enea's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/posts/"
          }
        ]
      }
    }
  ],
}
