import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Posts from '../components/posts';

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.nodes;
  const { totalCount } = data.allMarkdownRemark;

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={tagHeader} />

      <h1>{tagHeader}</h1>
      <Posts posts={posts} />
      <Link to="/tags">Browse all tags</Link>
    </Layout>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
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

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          description
          date(formatString: "MMMM DD, YYYY")
        }
        timeToRead
        excerpt
      }
    }
  }
`;
