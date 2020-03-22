import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BookCard from './bookCard';
import { fluidObject } from '../utils';

const BookList = ({ books }) => (
  <Row>
    {books.map(({ node }, index) => (
      <BookCard key={index} book={node} />
    ))}
  </Row>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        link: PropTypes.string.isRequired,
        img: fluidObject.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default BookList;

// styles
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-top: 1rem;
`;
