import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import styled from 'styled-components';

import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Bio from '@/components/bio';
import Posts, { PostType } from '@/components/posts';
import CustomLink from '@/components/customLink';

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface HomepageProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    nodes: PostType[];
  };
}

const Homepage = ({ data, location }: PageProps<HomepageProps>) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <Bio showAvatar />
      <Posts posts={posts} />

      <LinkWrapper>
        <CustomLink path="/archive">Browse the archive</CustomLink>
      </LinkWrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default Homepage;

export const homepageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 15
    ) {
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
