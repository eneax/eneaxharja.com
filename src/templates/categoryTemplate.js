import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import { gradientText } from '../utils/globalStyles';

import Layout from '../components/layout';
import SEO from '../components/seo';

// styles
const CategoryContainer = styled.article`
  margin-top: 5rem;
`;

const CategoryHeader = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 5rem;

  span {
    ${gradientText}
  }
`;

const CategoryContent = styled.section`
  margin-top: 7rem;

  h3 {
    font-size: 2.4rem;
    margin-bottom: 3rem;
    transition: color 0.2s;

    &:hover {
      color: var(--primaryDarkerHover);
    }
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

      <CategoryContainer>
        <CategoryHeader dangerouslySetInnerHTML={{ __html: categoryHeader }} />
        <CategoryContent>
          {categories.map(({ frontmatter: { slug, title } }) => (
            <h3 key={slug}>
              <Link to={`/${slug}`}>{title}</Link>
            </h3>
          ))}
        </CategoryContent>
      </CategoryContainer>
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
