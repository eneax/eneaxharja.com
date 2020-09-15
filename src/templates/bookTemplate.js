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

  h3 {
    transition: color 0.2s;
    &:hover {
      color: ${darkTheme.primaryDarkerHover};
    }
  }
  h6 {
    color: ${darkTheme.textLighter};
    margin-top: -1.35rem;
    margin-bottom: 1rem;
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

      <div>
        <p>
          Check out my past and present reading collection and maybe you will
          meet your next favorite book!
        </p>

        <BooksContainer>
          {books.map(({ node: { link, title, author } }, index) => (
            <div key={index}>
              <ExternalLink href={link}>
                <h3>{title}</h3>
                <h6>by {author}</h6>
              </ExternalLink>
            </div>
          ))}
        </BooksContainer>

        <Pagination page="bookshelf" pageContext={pageContext} />
      </div>
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
