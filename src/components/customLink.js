import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  display: ${(props) => (props.$inline ? 'inline-flex' : 'flex')};
  justify-content: center;
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

const CustomLink = ({ path, inline, children }) => (
  <StyledLink to={path} $inline={inline}>
    {children}
  </StyledLink>
);

CustomLink.propTypes = {
  path: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  children: PropTypes.any.isRequired,
};

export default CustomLink;
