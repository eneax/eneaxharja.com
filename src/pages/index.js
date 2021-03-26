import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import Posts from '../components/posts';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Bio />
      <Posts posts={posts} />
    </Layout>
  );
};

BlogIndex.propTypes = {
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

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
