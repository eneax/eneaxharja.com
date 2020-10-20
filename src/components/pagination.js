import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import { darkTheme } from '../utils/colors';
import { above, below } from '../utils/breakpoints';

// styles
const PaginationStyles = styled.section`
  display: flex;
  justify-content: center;
  padding: 1rem;
  border: 1px solid ${darkTheme.textLighter};
  border-radius: 1rem;
  margin-bottom: 3rem;

  ${below.mobileS`
    flex-direction: column;
    text-align: center;

    a {
      background-image: none;
    }

    p {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  `}

  p {
    margin-left: 1rem;
    margin-right: 1rem;

    ${above.mobileM`
      margin-bottom: 0;
    `}
  }
`;

const Pagination = ({ page, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const prevPage =
    currentPage - 1 === 1 ? `/${page}` : `/${page}/${currentPage - 1}`;
  const nextPage = `/${page}/${currentPage + 1}`;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  return (
    <PaginationStyles>
      {!isFirst && (
        <Link to={prevPage}>
          <MdArrowBack size={15} /> Prev
        </Link>
      )}

      <p>
        Page {currentPage} of {numPages}
      </p>

      {!isLast && (
        <Link to={nextPage}>
          Next <MdArrowForward size={15} />
        </Link>
      )}
    </PaginationStyles>
  );
};

Pagination.propTypes = {
  page: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
  }).isRequired,
};

export default Pagination;
