import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GlobalStyle from '../utils/globalStyles';

import Header from './header';
import Footer from './footer';

// styles
const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const MainContainer = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 1rem 1.3125rem 3rem;
`;

const Layout = ({ children }) => (
  <PageContainer>
    <GlobalStyle />
    <Header />
    <MainContainer>{children}</MainContainer>
    <Footer />
  </PageContainer>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
