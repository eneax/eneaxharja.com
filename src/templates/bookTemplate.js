import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';
import Pagination from '../components/pagination';

// styles
const BooksContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

// query
export const getBooksData = graphql`
  query getBooksData($skip: Int!, $limit: Int!) {
    allBooksDataJson(limit: $limit, skip: $skip) {
      edges {
        node {
          link
          title
          desc
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
          {books.map(({ node }, index) => (
            <Card key={index} item={node} />
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
            desc: PropTypes.string.isRequired,
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
