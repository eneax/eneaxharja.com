import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostMeta from '../components/postMeta';

// styles
const PostsContainer = styled.div`
  margin-bottom: 2rem;
`;

// query
const getPosts = graphql`
  {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`;

const Blog = () => {
  const response = useStaticQuery(getPosts);
  const posts = response.allMdx.edges;

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>

      {posts.map(({ node }) => {
        const { timeToRead, excerpt } = node;
        const { slug, title, date, tags } = node.frontmatter;

        return (
          <PostsContainer key={slug}>
            <Link to={`/blog${slug}`}>
              <h2>{title}</h2>
            </Link>

            <PostMeta date={date} tags={tags} timeToRead={timeToRead} />

            <p>{excerpt}</p>
          </PostsContainer>
        );
      })}
    </Layout>
  );
};

export default Blog;
