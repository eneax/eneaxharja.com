import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CustomLink from '../components/customLink';

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

    <section>
      <h1>All Tags</h1>

      {group.map((tag) => (
        <CustomLink
          key={tag.fieldValue}
          path={`/tags/${kebabCase(tag.fieldValue)}/`}
          inline
        >
          {tag.fieldValue} ({tag.totalCount})
        </CustomLink>
      ))}
    </section>
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
