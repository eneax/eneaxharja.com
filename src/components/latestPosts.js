import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import PostMeta from './postMeta';

// styles
const Posts = styled.div`
  margin-bottom: 2rem;
`;

// query
const getLatestPosts = graphql`
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

const LatestPosts = () => {
  const response = useStaticQuery(getLatestPosts);
  const posts = response.allMdx.edges;

  return (
    <div>
      <h2>Latest Posts</h2>

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

      <Link to="/blog">View all posts</Link>
    </div>
  );
};

export default LatestPosts;
