---
title: "Add an RSS Feed to your Gatsby MDX blog"
date: "2020-08-09"
---

An [RSS Feed](https://en.wikipedia.org/wiki/RSS) is a standard XML file with the purpose of listing the content of a website in a subscribable format.
It allows readers to consume your content in news aggregators, like a feed reader app.
You can think of it like a newsfeed where the content is displayed in a chronological order, without any algorithm choosing the "right" post that will make you click.

## Install

To generate an RSS Feed for your Gatsby MDX blog, you need the [gatsby-plugin-feed-mdx](https://www.gatsbyjs.com/plugins/gatsby-plugin-feed-mdx) package.
To install this package, run the following command:

```bash
npm install --save gatsby-plugin-feed-mdx
```

## Config

Now, it's time to config the `gatsby-plugin-feed-mdx` plugin in your `gatsby-config.js` file:

```js
// gatsby-config.js

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
        serialize: ({ query: { site, allMdx } }) =>
          allMdx.edges.map(edge => ({
            ...edge.node.frontmatter,
            description: edge.node.excerpt,
            date: edge.node.frontmatter.date,
            url: `${site.siteMetadata.siteUrl}/blog${edge.node.frontmatter.slug}`,
            guid: `${site.siteMetadata.siteUrl}/blog${edge.node.frontmatter.slug}`,
            custom_elements: [{ 'content:encoded': edge.node.html }],
          })),
        query: `
          {
            allMdx(
              sort: { order: DESC, fields: [frontmatter___date] },
              filter: { frontmatter: { published: { eq: true } } }
            ) {
              edges {
                node {
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
        output: '/rss-feed.xml',
        title: "Enea's RSS Feed",
        // optional configuration to insert feed reference in pages:
        // if `string` is used, it will be used to create RegExp and then test if pathname of
        // current page satisfied this regular expression;
        // if not provided or `undefined`, all pages will have feed reference inserted
        match: '^/posts/',
      },
    ],
  },
}
```

We can have a closer look at all this block of code by examining each option individually.
The initial `query` attribute allows us to query for site metadata:

```js
// gatsby-config.js

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
```

The `query` attribute is followed by a `feeds` array, that we can use to create multiple feeds.
This can be usefull if you want to generate different feeds for different content types like: blog, courses, podcast or talks. Every content type will be represented by a `feed object`:

```js
// gatsby-config.js

feeds: [
  {
    // blog feed
  },
  {
    // courses feed
  },
  {
    // podcast feed
  },
  {
    // talks feed
  },
];
```

Since we are working with an MDX Blog, we need to transform our MDX pages into HTML objects that can be read by RSS Feed readers. For this purpose, we need to use a `serializer`:

```js
// gatsby-config.js

serialize: ({ query: { site, allMdx } }) =>
  allMdx.edges.map(edge => ({
    ...edge.node.frontmatter,
    description: edge.node.excerpt,
    date: edge.node.frontmatter.date,
    url: `${site.siteMetadata.siteUrl}/blog${edge.node.frontmatter.slug}`,
    guid: `${site.siteMetadata.siteUrl}/blog${edge.node.frontmatter.slug}`,
    custom_elements: [{ 'content:encoded': edge.node.html }],
  })),
```

Our `feed object` will contain also a GraphQL query that will retrieve all our blog posts and sort them in descending order, before filtering out those which are just drafts:

```js
// gatsby-config.js

query: `
  {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { published: { eq: true } } }
    ) {
        edges {
          node {
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
```

Finally, we need to specify our RSS Feed URL together with a title using the `output` and `title` attributes.

## Output

To see the final output, you can run the following command in your terminal:

```bash
gatsby build && gatsby serve
```

and visit `http://localhost:9000/rss-feed.xml`.
