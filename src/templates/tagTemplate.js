import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import { darkTheme } from '../utils/colors';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostMeta from '../components/postMeta';

// styles
const TagHeader = styled.h1`
  margin-bottom: 1rem;
`;

const Posts = styled.div`
  margin-bottom: 2rem;
`;

const PostTitle = styled.h3`
  margin-bottom: 0.75rem;
  transition: color 0.2s;
  &:hover {
    color: ${darkTheme.primaryDarkerHover};
  }
`;

// query
export const query = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: true } } }
    ) {
      totalCount
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

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout>
      <SEO title={`"${tag}" tag`} />

      <TagHeader>{tagHeader}</TagHeader>

      <div>
        <Link to="/tags">View all tags</Link>

        {edges.map(({ node }) => {
          const { excerpt } = node;
          const { slug, title, date, tags } = node.frontmatter;

          return (
            <Posts key={slug}>
              <Link to={`/blog${slug}`}>
                <PostTitle>{title}</PostTitle>
              </Link>

              <PostMeta date={date} tags={tags} />

              <p>{excerpt}</p>
            </Posts>
          );
        })}
      </div>
    </Layout>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          frontmatter: PropTypes.objectOf({
            title: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
          }),
        }).isRequired
      ).isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Tags;
