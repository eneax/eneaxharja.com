import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../images/logoDark.svg';

import { darkTheme } from '../utils/colors';

import Search from './search';

// styles
const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 42rem;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

const Logo = styled(Link)`
  background-image: none;
  display: flex;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    border: 1px solid ${darkTheme.text};
    margin-bottom: 0;

    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    &:hover {
      transform: rotate(-5deg) scale(1.1);
    }
  }
`;

const Header = () => (
  <MainHeader>
    <Logo to="/" title="Home">
      <img src={logo} alt="Enea Xharja Logo" />
    </Logo>

    <Search />
  </MainHeader>
);

export default Header;
