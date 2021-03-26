import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import GlobalStyle from '../utils/globalStyles';

const GlobalWrapper = styled.div`
  margin: var(--spacing-0) auto;
  max-width: var(--maxWidth-wrapper);
  padding: var(--spacing-10) var(--spacing-5) var(--spacing-5);

  &[data-is-root-path='true'] {
    .bio {
      margin-bottom: var(--spacing-20);
    }
  }

  /* sticky footer */
  main {
    min-height: calc(100vh - 200px);
  }
`;

const Header = styled.div`
  margin-bottom: var(--spacing-12);
`;

const MainHeading = styled.h1`
  font-size: var(--fontSize-6);
  margin: 0;
`;

const HeaderLinkHome = styled(Link)`
  font-weight: var(--fontWeight-bold);
  font-family: var(--font-heading);
  text-decoration: none;
  font-size: var(--fontSize-2);
`;

const Footer = styled.footer`
  text-align: center;
  color: var(--color-text-light);
  font-size: var(--fontSize-0);

  p {
    margin-bottom: var(--spacing-0);
  }
`;

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <MainHeading>
        <Link to="/">{title}</Link>
      </MainHeading>
    );
  } else {
    header = <HeaderLinkHome to="/">{title}</HeaderLinkHome>;
  }

  return (
    <>
      <GlobalStyle />
      <GlobalWrapper data-is-root-path={isRootPath}>
        <Header>{header}</Header>
        <main>{children}</main>
        <Footer>
          <p>
            <small>©</small> {new Date().getFullYear()}{' '}
            <a
              href="mailto:eneaxharja@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enea Xharja
            </a>
          </p>
        </Footer>
      </GlobalWrapper>
    </>
  );
};

export default Layout;
