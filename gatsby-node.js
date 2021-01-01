const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
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
