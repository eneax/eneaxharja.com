import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { darkTheme } from '../utils/colors';

// styles
const NoteTitle = styled.h1`
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const NoteDate = styled.p`
  font-size: 0.8rem;
  text-align: center;
  color: ${darkTheme.textLighter};
`;

const NoteContent = styled.section`
  margin-top: 3rem;

  blockquote {
    border-left-width: 5px;
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

  img {
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.25rem !important;
    box-shadow: 0 1px 3px rgba(255, 255, 255, 0.12),
      0 1px 2px rgba(255, 255, 255, 0.24);
  }
`;

// query
export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
      }
    }
  }
`;

// ui
const NotesTemplate = ({
  data: {
    mdx: {
      frontmatter: { title, date },
      body,
    },
  },
}) => (
  <Layout>
    <SEO title={title} />

    <section>
      <NoteTitle>{title}</NoteTitle>
      <NoteDate>Updated on {date}</NoteDate>

      <NoteContent>
        <MDXRenderer>{body}</MDXRenderer>
      </NoteContent>
    </section>
  </Layout>
);

export default NotesTemplate;

NotesTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      body: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
