import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CustomLink from './customLink';

const PaginationContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;

  return (
    <PaginationContainer>
      {previousPagePath && (
        <CustomLink path={previousPagePath}>Newer Posts</CustomLink>
      )}

      {nextPagePath && <CustomLink path={nextPagePath}>Older Posts</CustomLink>}
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  pageContext: PropTypes.shape({
    previousPagePath: PropTypes.string.isRequired,
    nextPagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pagination;
