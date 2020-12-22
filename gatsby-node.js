const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      notes: allMdx(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              date(formatString: "MMMM DD, YYYY")
              published
            }
          }
        }
      }
      categories: allMdx(filter: { frontmatter: { published: { eq: true } } }) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Extract notes data from query
  const notes = result.data.notes.edges;
  // Create note detail pages
  notes.forEach(({ node }) => {
    createPage({
      path: `/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/notesTemplate.js'),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

  // Extract categories data from query
  const categories = result.data.categories.group;
  // Make tag pages
  categories.forEach(category => {
    createPage({
      path: `/${category.fieldValue}`,
      component: path.resolve('src/templates/categoryTemplate.js'),
      context: {
        category: category.fieldValue,
      },
    });
  });
};
