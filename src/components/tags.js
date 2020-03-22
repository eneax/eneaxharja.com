import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from './layout';
import SEO from './seo';
import Footer from './footer';

import { Title, Container, InternalLink } from '../elements';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout>
      <SEO title={`"${tag}" tag`} />

      <Title>{tagHeader}</Title>

      <Container style={{ minHeight: '60vh' }}>
        <InternalLink to="/tags">All tags</InternalLink>

        <PostLinks>
          {edges.map(({ node }) => {
            const { title, slug } = node.frontmatter;
            return (
              <InternalLink key={slug} to={`/posts/${slug}`}>
                {title}
              </InternalLink>
            );
          })}
        </PostLinks>
      </Container>

      <Footer />
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
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

// styles
const PostLinks = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-gap: 0.25rem;
`;
