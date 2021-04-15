import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';

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

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
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

      <Bio />
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    markdownRemark: PropTypes.shape({
      id: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
      }).isRequired,
      excerpt: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

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
