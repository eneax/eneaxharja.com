const workboxConfig = {
  runtimeCaching: [
    {
      // Use cacheFirst since these don't need to be revalidated (same RegExp
      // and same reason as above)
      urlPattern: /(\.js$|\.css$|static\/)/,
      handler: `CacheFirst`,
    },
    {
      // page-data.json files are not content hashed
      urlPattern: /^https?:.*\page-data\/.*\/page-data\.json/,
      handler: `NetworkFirst`,
    },
    {
      // Add runtime caching of various other page resources
      urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
      handler: `StaleWhileRevalidate`,
    },
    {
      // Google Fonts CSS (doesn't end in .css so we need to specify it)
      urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
      handler: `StaleWhileRevalidate`,
    },
  ],
  // Set skipWaiting to false. That's the only change in config.
  skipWaiting: false,
  clientsClaim: true,
};

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
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto:300,300i,400,400i,700`],
        display: 'swap',
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
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve(`./src/sw.js`),
        workboxConfig,
      },
    },
  ],
};
