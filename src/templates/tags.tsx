import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Posts, { PostType } from '@/components/posts';
import Pagination from '@/components/pagination';
import CustomLink from '@/components/customLink';

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface TagsProps {
  pageContext: {
    tag: string;
    currentPage: number;
    numPages: number;
  };
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    allMarkdownRemark: {
      totalCount: number;
      nodes: PostType[];
    };
  };
  location: Location;
}

const Tags = ({ pageContext, data, location }: TagsProps) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.nodes;
  const { totalCount } = data.allMarkdownRemark;

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${pageContext.tag}"`;

  return (
    <Layout location={location} title={siteTitle}>
      <h1>{tagHeader}</h1>
      <Posts posts={posts} />
      <Pagination pageContext={pageContext} />
      <LinkWrapper>
        <CustomLink path="/tags">Browse all tags</CustomLink>
      </LinkWrapper>
    </Layout>
  );
};

export const Head = ({ pageContext }) => {
  const { tag, humanPageNumber, numberOfPages } = pageContext;
  const title = `"${tag}" tag - Page ${humanPageNumber} of ${numberOfPages}`;

  return <Seo title={title} />;
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
