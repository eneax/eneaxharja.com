import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import styled from 'styled-components';

import GlobalStyle from '../utils/globalStyles';

import Header from './header';
import UpdateButton from './updateButton';
import Footer from './footer';

// styles
const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: var(--maxWidth);
  padding: 2rem 2.5rem;

  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;

const MainContent = styled.main`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <MainContainer>
      <Header />
      <UpdateButton />
      <MainContent>{children}</MainContent>
      <Footer />
    </MainContainer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
