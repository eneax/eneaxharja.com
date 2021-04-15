import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Posts from '../components/posts';
import Pagination from '../components/pagination';
import CustomLink from '../components/customLink';

const Tags = ({ pageContext, data, location }) => {
  const { tag, humanPageNumber, numberOfPages } = pageContext;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.nodes;
  const { totalCount } = data.allMarkdownRemark;

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;
  const title = `"${tag}" tag - Page ${humanPageNumber} of ${numberOfPages}`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={title} />

      <h1>{tagHeader}</h1>
      <Posts posts={posts} />
      <Pagination pageContext={pageContext} />
      <CustomLink path="/tags">Browse all tags</CustomLink>
    </Layout>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
    humanPageNumber: PropTypes.number.isRequired,
    numberOfPages: PropTypes.number.isRequired,
  }),
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    allMarkdownRemark: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tags;

export const tagsQuery = graphql`
  query tagsQuery($tag: String, $skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          description
        }
        excerpt
      }
    }
  }
`;
