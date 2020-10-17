const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('./src/templates/postTemplate.js');
  const postListTemplate = path.resolve('./src/templates/postListTemplate.js');
  const tagTemplate = path.resolve('src/templates/tagTemplate.js');
  const bookTemplate = path.resolve('src/templates/bookTemplate.js');
  const travelTemplate = path.resolve('src/templates/travelTemplate.js');
  const projectTemplate = path.resolve('src/templates/projectTemplate.js');

  const result = await graphql(`
    {
      posts: allMdx(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              date(formatString: "MMMM DD, YYYY")
              tags
              published
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
  posts.forEach(({ node }, i) => {
    const prev = posts[i - 1];
    const next = posts[i + 1];

    createPage({
      path: `/blog${node.frontmatter.slug}`,
      component: postTemplate,
      context: {
        slug: node.frontmatter.slug,
        prev,
        next,
        pathPrefix: '/blog',
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

  paginate('allBooksDataJson', 20, 'bookshelf', bookTemplate);
  paginate('allTravelsDataJson', 6, 'travel', travelTemplate);
  paginate('allProjectsDataJson', 6, 'projects', projectTemplate);
  paginate('posts', 10, 'blog', postListTemplate);
};
