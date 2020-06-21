import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostMeta from '../components/postMeta';

// styles
const Posts = styled.div`
  margin-bottom: 2rem;
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

      <h1>{tagHeader}</h1>

      <div>
        <Link to="/tags">View all tags</Link>

        {edges.map(({ node }) => {
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
