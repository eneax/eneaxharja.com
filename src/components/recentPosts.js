import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { darkTheme } from '../utils/colors';
import PostMeta from './postMeta';

// styles
const RecentPostsContainer = styled.div`
  h2 {
    text-decoration: underline;
    margin-bottom: -1rem;
  }
`;

const Posts = styled.div`
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 0.75rem;
    transition: color 0.2s;
    &:hover {
      color: ${darkTheme.primaryDarkerHover};
    }
  }
`;

// query
const getRecentPosts = graphql`
  {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 3
    ) {
      edges {
        node {
          excerpt
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

const RecentPosts = () => {
  const response = useStaticQuery(getRecentPosts);
  const posts = response.allMdx.edges;

  return (
    <RecentPostsContainer>
      <h2>Recent Posts</h2>

      {posts.map(({ node }) => {
        const { excerpt } = node;
        const { slug, title, date, tags } = node.frontmatter;

        return (
          <Posts key={slug}>
            <Link to={`/blog${slug}`}>
              <h3>{title}</h3>
            </Link>

            <PostMeta date={date} tags={tags} />

            <p>{excerpt}</p>
          </Posts>
        );
      })}

      <Link to="/blog">View all posts →</Link>
    </RecentPostsContainer>
  );
};

export default RecentPosts;
