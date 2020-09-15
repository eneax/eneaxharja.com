import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import { darkTheme } from '../utils/colors';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostMeta from '../components/postMeta';
import Pagination from '../components/pagination';

// styles
const PostsContainer = styled.div`
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 0.75rem;
    transition: color 0.2s;
    &:hover {
      color: ${darkTheme.primaryDarkerHover};
    }
  }
`;

// query
export const getPosts = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    allMdx(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: { eq: true } } }
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

const PostListTemplate = ({ data, pageContext }) => {
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>

      {posts.map(({ node }) => {
        const { excerpt } = node;
        const { slug, title, date, tags } = node.frontmatter;

        return (
          <PostsContainer key={slug}>
            <Link to={`/blog${slug}`}>
              <h2>{title}</h2>
            </Link>

            <PostMeta date={date} tags={tags} />

            <p>{excerpt}</p>
          </PostsContainer>
        );
      })}

      <Pagination page="blog" pageContext={pageContext} />
    </Layout>
  );
};

PostListTemplate.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
              tags: PropTypes.arrayOf(PropTypes.string).isRequired,
            }).isRequired,
          }),
        }).isRequired
      ).isRequired,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
  }).isRequired,
};

export default PostListTemplate;
