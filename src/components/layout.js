import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

import GlobalStyle from '../utils/globalStyles';

const GITHUB_URL = 'https://github.com/eneax';

const GlobalWrapper = styled.div`
  max-width: var(--maxWidth-wrapper);
  margin: var(--spacing-0) auto;
  padding: var(--spacing-10) var(--spacing-5) var(--spacing-5);

  main {
    min-height: calc(100vh - 220px); /* sticky footer */
  }
`;

const Header = styled.header`
  margin-bottom: var(--spacing-12);

  h1 {
    font-size: var(--fontSize-6);
    margin: 0;
  }

  .header-link-home {
    text-decoration: none;
    font-weight: var(--fontWeight-bold);
    font-family: var(--font-heading);
    font-size: var(--fontSize-2);
  }
`;

const Footer = styled.footer`
  text-align: center;
  color: var(--color-text);
  font-size: var(--fontSize-0);
  margin-top: var(--spacing-4);

  p {
    margin-bottom: var(--spacing-1);
  }

  a {
    &:hover {
      svg {
        color: var(--color-primary);
        transform: scale(1.05);
      }
    }

    svg {
      color: var(--color-text);
      transition: all 0.25s ease;
    }
  }
`;

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link to="/" className="header-link-home">
        {title}
      </Link>
    );
  }

  return (
    <>
      <GlobalStyle />
      <GlobalWrapper data-is-root-path={isRootPath}>
        <Header>{header}</Header>
        <main>{children}</main>
        <Footer>
          <p>
            <small>©</small> {new Date().getFullYear()} Enea Xharja
          </p>

          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </Footer>
      </GlobalWrapper>
    </>
  );
};

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Layout;
