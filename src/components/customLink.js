import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: var(--display, flex);
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-text);
  border-radius: var(--radius);
  margin-top: var(--spacing-2);
  margin-right: var(--spacing-2);
  padding: var(--spacing-1) var(--spacing-2);
  border: 1px dashed var(--color-primary);

  &:hover,
  &:focus {
    border: 1px solid var(--color-primary);
  }
`;

const CustomLink = ({ display, path, children }) => (
  <Wrapper
    style={{
      '--display': display,
    }}
  >
    <StyledLink to={path}>{children}</StyledLink>
  </Wrapper>
);

CustomLink.propTypes = {
  display: PropTypes.string,
  path: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default CustomLink;
