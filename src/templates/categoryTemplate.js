import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import { darkTheme } from '../utils/colors';

import Layout from '../components/layout';
import SEO from '../components/seo';

// styles
const CategoryHeader = styled.h1`
  font-size: 1.75rem;
  text-align: center;

  span {
    color: ${darkTheme.primary};
  }
`;

const Notes = styled.div`
  margin-bottom: 2rem;
`;

const NoteTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  transition: color 0.2s;

  &:hover {
    color: ${darkTheme.primaryDarkerHover};
  }
`;

// query
export const query = graphql`
  query($category: String) {
    categories: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { category: { in: [$category] }, published: { eq: true } }
      }
    ) {
      totalCount
      nodes {
        frontmatter {
          category
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;

// ui
const CategoryTemplate = ({ pageContext, data }) => {
  const { category } = pageContext;
  const categories = data.categories.nodes;
  const notes = data.categories.totalCount;

  const categoryHeader = `The <span>${category}</span> category contains <span>${notes}</span> note${
    notes === 1 ? '' : 's'
  }`;

  return (
    <Layout>
      <SEO title={`"${category}" category`} />

      <CategoryHeader dangerouslySetInnerHTML={{ __html: categoryHeader }} />

      <section>
        {categories.map(({ frontmatter: { slug, title } }) => (
          <Notes key={slug}>
            <Link to={`/${slug}`}>
              <NoteTitle>{title}</NoteTitle>
            </Link>
          </Notes>
        ))}
      </section>
    </Layout>
  );
};

CategoryTemplate.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    categories: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
          }),
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default CategoryTemplate;
