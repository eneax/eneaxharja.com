import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import SEO from '../components/seo';

// styles
const NoteContainer = styled.article`
  margin-top: 5rem;
`;

const NoteTitle = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 0rem;
`;

const NoteInfo = styled.p`
  font-size: 1.6rem;
  text-align: center;
  color: var(--textLighter);
  margin-top: 0rem;
  margin-bottom: 0rem;
`;

const NoteContent = styled.section`
  margin-top: 7rem;

  h1,
  h2 {
    margin-top: 10rem;
    margin-bottom: 0rem;
  }

  h3 {
    margin-top: 5rem;
  }

  h4 {
    margin-top: 7rem;
    margin-bottom: 1rem;
    & + p {
      margin-top: 0;
    }
  }

  h5 {
    font-size: 1.5rem;
    color: var(--textLighter);
    margin-top: -1.75rem;
  }

  blockquote,
  pre {
    background-color: var(--bodyLighter);
    border-radius: var(--radius);
    box-shadow: rgba(255, 255, 255, 0.16) 0px 0px 0px 1px,
      rgba(0, 0, 0, 0.04) 0px 1px 4px inset;
    padding: 4rem 2rem;
    margin: 2rem 0;
  }

  blockquote {
    border-left: 5px solid var(--primary);
    color: var(--text);
  }

  a.gatsby-resp-image-link {
    background-image: none;
  }

  img {
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--radius) !important;
    box-shadow: 0 1px 3px rgba(255, 255, 255, 0.12),
      0 1px 2px rgba(255, 255, 255, 0.24);
  }
`;

// query
export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        category
        title
        author
      }
      body
    }
  }
`;

// ui
const NotesTemplate = ({
  data: {
    mdx: {
      frontmatter: { category, title, author },
      body,
    },
  },
}) => (
  <Layout>
    <SEO title={title} />

    <NoteContainer>
      <NoteTitle>{title}</NoteTitle>
      <NoteInfo>{category === 'books' ? `by ${author}` : ''}</NoteInfo>

      <NoteContent>
        <MDXRenderer>{body}</MDXRenderer>
      </NoteContent>
    </NoteContainer>
  </Layout>
);

export default NotesTemplate;

NotesTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string,
      }).isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
