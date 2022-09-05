import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-text);
  border-radius: var(--radius);
  margin-top: var(--spacing-2);
  margin-right: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-2);
  border: 1px dashed var(--color-primary);

  &:hover,
  &:focus {
    border: 1px solid var(--color-primary);
  }
`;

interface CustomLinkProps {
  display?: string;
  path: string;
  children: React.ReactNode;
}

const CustomLink = ({ path, children }: CustomLinkProps) => (
  <StyledLink to={path}>{children}</StyledLink>
);

export default CustomLink;
