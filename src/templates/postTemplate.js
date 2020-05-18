import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostMeta from '../components/postMeta';

import { darkTheme } from '../utils/colors';

// styles
const PostContent = styled.div`
  margin-top: 3rem;

  blockquote {
    border-left-color: ${darkTheme.primary};
    color: ${darkTheme.text};
  }

  blockquote,
  pre {
    background-color: ${darkTheme.bodyLighter};
    border-radius: 8px;
    box-shadow: rgba(255, 255, 255, 0.16) 0px 0px 0px 1px,
      rgba(0, 0, 0, 0.04) 0px 1px 4px inset;
    padding: 2rem 1rem;
    margin: 2rem 0 3.5rem 0;
  }

  .gatsby-resp-image-wrapper {
    a.gatsby-resp-image-link {
      span.gatsby-resp-image-background-image {
        display: none !important;
      }
    }
  }
`;

// query
export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        tags
      }
    }
  }
`;

const PostTemplate = ({
  data: {
    mdx: {
      frontmatter: { title, date, tags },
      timeToRead,
      body,
    },
  },
}) => (
  <Layout>
    <SEO title={title} />

    <h1>{title}</h1>
    <PostMeta date={date} tags={tags} timeToRead={timeToRead} />

    <PostContent>
      <MDXRenderer>{body}</MDXRenderer>
    </PostContent>
  </Layout>
);

export default PostTemplate;

PostTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      body: PropTypes.string.isRequired,
      timeToRead: PropTypes.number.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
