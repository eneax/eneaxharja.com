import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { ExternalLink } from '../utils/hyperLinks';
import { darkTheme } from '../utils/colors';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Pagination from '../components/pagination';

// styles
const BooksContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Book = styled.div`
  margin-bottom: 2.5rem;

  h3 {
    margin-top: 0;
    margin-bottom: 0;
    transition: color 0.2s;
    &:hover {
      color: ${darkTheme.primaryDarkerHover};
    }
  }

  h6 {
    margin-top: 0.25rem;
    margin-bottom: 0;
    color: ${darkTheme.textLighter};
  }
`;

// query
export const getBooksData = graphql`
  query getBooksData($skip: Int!, $limit: Int!) {
    allBooksDataJson(
      limit: $limit
      skip: $skip
      sort: { order: ASC, fields: author }
    ) {
      edges {
        node {
          link
          title
          author
        }
      }
    }
  }
`;

const BookTemplate = ({ data, pageContext }) => {
  const books = data.allBooksDataJson.edges;

  return (
    <Layout>
      <SEO title="Bookshelf" />

      <h1>Bookshelf</h1>

      <BooksContainer>
        {books.map(({ node: { link, title, author } }, index) => (
          <Book key={index}>
            <ExternalLink href={link}>
              <h3>{title}</h3>
              <h6>by {author}</h6>
            </ExternalLink>
          </Book>
        ))}
      </BooksContainer>

      <Pagination page="bookshelf" pageContext={pageContext} />
    </Layout>
  );
};

BookTemplate.propTypes = {
  data: PropTypes.shape({
    allBooksDataJson: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            link: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookTemplate;
