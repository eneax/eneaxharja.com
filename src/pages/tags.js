import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { MdLoyalty } from 'react-icons/md';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { darkTheme } from '../utils/colors';

// styles
const TagLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: ${darkTheme.primaryDarker};
  color: ${darkTheme.text};
  text-decoration: none;
  background-image: none;
  border-radius: 5px;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.2rem 0.5rem;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    color: ${darkTheme.text};
    background-color: ${darkTheme.primaryDarkerHover};
  }

  > svg {
    margin-right: 0.25rem;
  }
`;

// query
export const query = graphql`
  query {
    allMdx(limit: 2000, filter: { frontmatter: { published: { eq: true } } }) {
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
        <TagLink key={fieldValue} to={`/tags/${kebabCase(fieldValue)}`}>
          <MdLoyalty />
          {fieldValue} ({totalCount})
        </TagLink>
      ))}
    </div>
  </Layout>
);

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ).isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TagsPage;
