import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';
import Pagination from '../components/pagination';

// styles
const Bookshelf = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

// query
export const getLibraryData = graphql`
  query getLibraryData($skip: Int!, $limit: Int!) {
    allBookLibraryDataJson(limit: $limit, skip: $skip) {
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
  const books = data.allBookLibraryDataJson.edges;

  return (
    <Layout>
      <SEO title="Library" />

      <h1>Library</h1>

      <div>
        <p>
          Check out my reading list below and maybe you will meet your next
          favorite book!
        </p>

        <Bookshelf>
          {books.map(({ node }, index) => (
            <Card key={index} item={node} />
          ))}
        </Bookshelf>

        <Pagination page="library" pageContext={pageContext} />
      </div>
    </Layout>
  );
};

BookTemplate.propTypes = {
  data: PropTypes.shape({
    allBookLibraryDataJson: PropTypes.shape({
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
