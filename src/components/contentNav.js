import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import { darkTheme } from '../utils/colors';
import { below } from '../utils/breakpoints';

const ContentNavStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${below.mobileL`
    grid-template-columns: 1fr;
  `}
  grid-template-rows: auto auto;
  border: 1.5px solid ${darkTheme.textLighter};
  border-radius: 1rem;
  margin: 4rem 0;

  a {
    text-decoration: none;
    display: grid;
    grid-template-rows: auto 1fr;
    background-image: none;

    &:only-child {
      grid-column: 1 / -1;
      text-align: right;
    }
    &:nth-child(2) {
      text-align: right;
    }
  }

  p {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 0;
    color: ${darkTheme.text};
    transition: color 0.2s;
    &:hover {
      color: ${darkTheme.primaryDarkerHover};
    }

    strong {
      font-size: 0.75rem;
      color: ${darkTheme.primary};
    }
  }
`;

const ContentNav = ({ prev, next, pathPrefix }) => (
  <ContentNavStyles>
    {prev && (
      <Link to={`${pathPrefix}${prev.node.frontmatter.slug}`}>
        <p>
          <strong>
            <MdArrowBack size={10} /> Prev
          </strong>
          {prev.node.frontmatter.title}
        </p>
      </Link>
    )}
    {next && (
      <Link to={`${pathPrefix}${next.node.frontmatter.slug}`}>
        <p>
          <strong>
            Next <MdArrowForward size={10} />
          </strong>
          {next.node.frontmatter.title}
        </p>
      </Link>
    )}
  </ContentNavStyles>
);

ContentNav.propTypes = {
  prev: PropTypes.object,
  next: PropTypes.object,
  pathPrefix: PropTypes.string.isRequired,
};

export default ContentNav;
