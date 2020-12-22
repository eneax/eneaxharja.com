const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      notes: allMdx(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            published
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

  // Create note detail pages
  result.data.notes.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/${slug}`,
      component: path.resolve('./src/templates/notesTemplate.js'),
      context: {
        slug,
      },
    });
  });

  // Make category pages
  result.data.categories.group.forEach(category => {
    createPage({
      path: `/${category.fieldValue}`,
      component: path.resolve('src/templates/categoryTemplate.js'),
      context: {
        category: category.fieldValue,
      },
    });
  });
};
