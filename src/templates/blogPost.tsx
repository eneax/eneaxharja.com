import * as React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Bio from '@/components/bio';
import { PostType } from '@/components/posts';

const BlogPostArticle = styled.article`
  hr {
    margin-top: var(--spacing-12);
    margin-bottom: var(--spacing-12);
  }
`;

const BlogPostMeta = styled.section`
  margin-top: var(--spacing-12);

  p {
    margin-bottom: var(--spacing-0);
  }
`;

interface BlogPostProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    markdownRemark: PostType;
  };
  location: Location;
}

const BlogPostTemplate = ({ data, location }: BlogPostProps) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <BlogPostArticle itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />

        <BlogPostMeta>
          <p>
            <small>Updated on {post.frontmatter.date}</small>
          </p>
          <p>
            <small>
              Tagged with:
              {post.frontmatter.tags.map((tag, i) => (
                <span key={tag}>
                  <span>{i === 0 ? ' ' : ', '}</span>
                  <Link to={`/tags/${tag}`}>{tag}</Link>
                </span>
              ))}
            </small>
          </p>
        </BlogPostMeta>
        <hr />
      </BlogPostArticle>

      <Bio showAvatar />
    </Layout>
  );
};

export const Head = ({ data: { markdownRemark: post } }) => (
  <Seo
    title={post.frontmatter.title}
    description={post.frontmatter.description || post.excerpt}
  />
);

export default BlogPostTemplate;

export const BlogPostBySlug = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
      excerpt(pruneLength: 160)
      html
    }
  }
`;
