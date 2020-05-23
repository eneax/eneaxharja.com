const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('./src/templates/postTemplate.js');
  const tagTemplate = path.resolve('src/templates/tagTemplate.js');
  const bookTemplate = path.resolve('src/templates/bookTemplate.js');
  const travelTemplate = path.resolve('src/templates/travelTemplate.js');
  const projectTemplate = path.resolve('src/templates/projectTemplate.js');

  const result = await graphql(`
    {
      posts: allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      tagsGroup: allMdx(
        filter: { frontmatter: { published: { eq: true } } }
        limit: 2000
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      allBooksDataJson {
        edges {
          node {
            link
            title
            desc
            author
          }
        }
      }
      allTravelsDataJson {
        edges {
          node {
            title
            img {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            desc
          }
        }
      }
      allProjectsDataJson {
        edges {
          node {
            link
            title
            img {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            desc
          }
        }
      }
    }
  `);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Extract posts data from query
  const posts = result.data.posts.edges;
  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: `/blog${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  // Pagination feature
  function paginate(typeOfPage, itemsPerPage, path, component) {
    const type = result.data[typeOfPage].edges;
    const numPages = Math.ceil(type.length / itemsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/${path}` : `/${path}/${i + 1}`,
        component,
        context: {
          limit: itemsPerPage,
          skip: i * itemsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  }

  paginate('allBooksDataJson', 10, 'bookshelf', bookTemplate);
  paginate('allTravelsDataJson', 6, 'travel', travelTemplate);
  paginate('allProjectsDataJson', 6, 'projects', projectTemplate);
};
