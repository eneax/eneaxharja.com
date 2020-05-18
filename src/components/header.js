import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../images/logoDark.svg';

import { above } from '../utils/breakpoints';
import { darkTheme } from '../utils/colors';

// styles
const NavLink = styled(Link)`
  transition: color 0.3s;

  &:hover {
    color: ${darkTheme.text};
  }
`;

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 42rem;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;

  ${above.laptop`
    justify-content: space-between;
  `}

  a {
    background-image: none;
    color: ${darkTheme.textLighter};
    align-self: flex-end;
  }

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

const MainNav = styled.div`
  ul {
    margin: 1rem 0 0.5rem;
    text-align: center;
  }

  li {
    display: inline;
  }

  a {
    display: inline-block;
    padding: 0 0.5rem;
    &:last-child {
      padding-right: 0;
    }
  }
`;

// data
const navItems = [
  { link: '/about', text: 'About' },
  { link: '/blog', text: 'Blog' },
  { link: '/projects', text: 'Projects' },
];

const Header = () => (
  <MainHeader>
    <Link to="/" title="Home">
      <img src={logo} alt="Enea Xharja Logo" />
    </Link>
    <MainNav>
      <ul>
        {navItems.map(({ link, text }) => (
          <li key={link}>
            <NavLink
              to={link}
              title={text}
              activeStyle={{
                color: `${darkTheme.text}`,
                textDecoration: `${darkTheme.primary} double underline`,
              }}
              partiallyActive
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </MainNav>
  </MainHeader>
);

export default Header;
