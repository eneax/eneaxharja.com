---
title: "Add Tags & Categories to Gatsby MDX blog"
date: "2020-09-10"
tags: ["gatsby"]
---

Tags and categories are an important section of a website, since they provide an easy way for visitors to browse content on your platform.

To add tags to your Gatsby MDX blog posts, you need to have your site set up to convert MDX files into blog posts.

## Add tags to your MDX files

You can add tags in the `frontmatter` of your MDX file:

```markdown
---
slug: "/add-tags-and-categories-to-gatsby-mdx-blog"
date: "2020-08-23"
title: "🕺 Add Tags & Categories to Gatsby MDX blog"
tags: ["js", "react", "gatsby"]
---
```

The `frontmatter` is the top area of your Markdown or MDX file that is surrounded by dashes.
It includes the title of your post, a date and any other field that is a string, number, or array.
Considering that posts can have multiple tags, I have defined the above tag field as an array.

## Write a query to get all tags for your posts

Now that the `tags` fields are available in the data layer, we can use `graphql` to query it.
Try running the following query, which groups posts by `tags`, locally in your GraphiQL `http://localhost:8000/___graphql`:

```graphql
{
  tagsGroup: allMdx(limit: 2000) {
    group(field: frontmatter___tags) {
      fieldValue
    }
  }
}
```

Then, modify your `gatsby-node.js` file with the above query:

```js
// gatsby-node.js

const path = require("path");
const _ = require("lodash");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const tagTemplate = path.resolve("src/templates/tagTemplate.js");

  const result = await graphql(`
    {
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  // ...

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;
  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
```

## Make a tags page template

As you can see on the `gatsby-node.js` file, we need a tag page template in order to generate individual pages for the tags in your posts.

Let's create a tag template for `/tags/{tag}`:

```jsx
// tagTemplate.jsx

import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export const query = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`;

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <Layout>
      <SEO title={`"${tag}" tag`} />

      <h1>{tagHeader}</h1>

      <div>
        <Link to="/tags">View all tags</Link>

        {edges.map(({ node }) => {
          const { excerpt } = node;
          const { slug, title, date, tags } = node.frontmatter;

          return (
            <div key={slug}>
              <Link to={`/blog${slug}`}>
                <h3>{title}</h3>
              </Link>

              <p>
                {date}
                <span> ● Tag: </span>
                {tags.map((tag) => (
                  <Link
                    key={tag.toLowerCase()}
                    to={`/tags/${tag.toLowerCase()}`}
                  >
                    {tag}
                  </Link>
                ))}
              </p>

              <p>{excerpt}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Tags;
```

## Make a tags index page

Finally, once we've generated pages for every tag, it's time to create a tags index page.
This page will render a list of all tags (`src/pages/tags.js`), followed by the number of posts with that particular tag.

```jsx
// src/pages/tags.js

import React from "react";
import { Link, graphql } from "gatsby";
import kebabCase from "lodash/kebabCase";

import Layout from "../components/layout";
import SEO from "../components/seo";

export const query = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
    }
  }
`;

const TagsPage = ({
  data: {
    allMdx: { group, totalCount },
  },
}) => (
  <Layout>
    <SEO title="Tags" />

    <div>
      <h1>Tags</h1>
      <p>
        {totalCount} posts are listed in {group.length} categories
      </p>
      {group.map(({ fieldValue, totalCount }) => (
        <Link key={fieldValue} to={`/tags/${kebabCase(fieldValue)}`}>
          {fieldValue} ({totalCount})
        </Link>
      ))}
    </div>
  </Layout>
);

export default TagsPage;
```
