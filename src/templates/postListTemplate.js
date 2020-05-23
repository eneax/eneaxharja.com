import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostMeta from '../components/postMeta';
import Pagination from '../components/pagination';

// styles
const PostsContainer = styled.div`
  margin-bottom: 2rem;
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

const PostListTemplate = ({ data, pageContext }) => {
  const posts = data.allMdx.edges;

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
            timeToRead: PropTypes.number.isRequired,
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
