import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';

import Layout from '../components/layout';
import SEO from '../components/seo';

const TagLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  color: var(--color-text);
  border-radius: var(--radius);
  margin-top: var(--spacing-2);
  margin-right: var(--spacing-2);
  padding: var(--spacing-1) var(--spacing-2);
  border: 1px dashed var(--color-primary);

  &:hover,
  &:focus {
    border: 1px solid var(--color-primary);
  }
`;

const TagsPage = ({
  location,
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout location={location} title={title}>
    <SEO title="All tags" />

    <div>
      <h1>All Tags</h1>

      {group.map((tag) => (
        <TagLink
          to={`/tags/${kebabCase(tag.fieldValue)}/`}
          key={tag.fieldValue}
        >
          {tag.fieldValue} ({tag.totalCount})
        </TagLink>
      ))}
    </div>
  </Layout>
);

TagsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
