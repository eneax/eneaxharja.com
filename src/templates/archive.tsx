import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql, PageProps } from 'gatsby';

import Layout from '@/components/layout';
import SEO from '@/components/seo';
import Posts, { PostType } from '@/components/posts';
import Pagination from '@/components/pagination';

interface ArchiveProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    nodes: PostType[];
    totalCount: number;
  };
}

const Archive = ({ data, pageContext, location }: PageProps<ArchiveProps>) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.nodes;
  const totalPosts = data.allMarkdownRemark.totalCount;
  const { humanPageNumber, numberOfPages } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`Archive - Page ${humanPageNumber} of ${numberOfPages}`} />

      <h1>Archive: {totalPosts} posts</h1>
      <Posts posts={posts} />
      <Pagination pageContext={pageContext} />
    </Layout>
  );
};

Archive.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    allMarkdownRemark: PropTypes.object.isRequired,
  }).isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Archive;

export const query = graphql`
  query Archive($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
