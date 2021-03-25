import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = styled.article``

const BlogPostMeta = styled.section`
  margin-top: var(--spacing-12);

  p {
    margin-bottom: var(--spacing-0);
  }
`

const BlogPostNav = styled.nav`
  margin-top: var(--spacing-12);
  margin-bottom: var(--spacing-12);

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: var(--spacing-0);
    padding: var(--spacing-0);
  }

  li {
    display: flex;
    justify-content: flex-start;
    width: 100%;

    &:last-child {
      justify-content: flex-end;
      text-align: right;
    }

    @media (min-width: 550px) {
      & {
        width: 48%;
      }
    }
  }

  a {
    text-decoration: none;

    p {
      color: var(--color-text);
      font-size: var(--fontSize-0);
      margin-top: var(--spacing-4);
      margin-bottom: var(--spacing-1);
    }
  }
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogPost itemScope itemType="http://schema.org/Article">
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
                  <span>{i === 0 ? " " : ", "}</span>
                  <Link to={`/tags/${tag}`}>{tag}</Link>
                </span>
              ))}
            </small>
          </p>
        </BlogPostMeta>
        <hr />
      </BlogPost>

      <BlogPostNav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                <p>Previous</p>
                <span>{previous.frontmatter.title}</span>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                <p>Next</p>
                <span>{next.frontmatter.title}</span>
              </Link>
            )}
          </li>
        </ul>
      </BlogPostNav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
