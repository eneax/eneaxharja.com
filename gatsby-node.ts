import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';
import _ from 'lodash';
import { paginate } from 'gatsby-awesome-pagination';

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define templates
  const blogPost = path.resolve(`./src/templates/blogPost.tsx`);
  const tagTemplate = path.resolve('src/templates/tags.tsx');
  const archiveTemplate = path.resolve('src/templates/archive.tsx');

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "data/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }

  // Create tag pages
  const tags = result.data.tagsGroup.group;
  tags.forEach((tag) => {
    // Filter out the posts that belong to the current category
    const filteredPosts = posts.filter(({ frontmatter }) =>
      frontmatter.tags.some((el) => el === tag.fieldValue)
    );
    // Handle empty categories
    if (filteredPosts.length > 0) {
      paginate({
        createPage,
        items: filteredPosts,
        itemsPerPage: 30,
        pathPrefix: ({ pageNumber }) =>
          pageNumber === 0
            ? `/tags/${_.kebabCase(tag.fieldValue)}`
            : `/tags/${_.kebabCase(tag.fieldValue)}/page`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      });
    }
  });

  // Create archive pages
  paginate({
    createPage,
    items: posts,
    itemsPerPage: 30,
    pathPrefix: ({ pageNumber }) =>
      pageNumber === 0 ? `/archive` : `/archive/page`,
    component: archiveTemplate,
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "data/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      siteUrl: String
      social: Social
    }

    type Social {
      github: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      tags: [String!]!
    }

    type Fields {
      slug: String
    }
  `);
};
