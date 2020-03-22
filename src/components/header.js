import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../images/logoDark.svg';
import { above, avenir, darkTheme } from '../utils';

const Header = () => (
  <Navbar>
    <Link className="logo" to="/" title="Home">
      <img src={logo} alt="Enea Xharja Logo" />
    </Link>
    <NavLinkWrapper>
      <Link to="/about" title="About">
        About
      </Link>
      <Link to="/posts" title="Blog">
        Blog
      </Link>
      <Link to="/projects" title="Projects">
        Projects
      </Link>
    </NavLinkWrapper>
  </Navbar>
);

export default Header;

// styles
const Navbar = styled.nav`
  display: table;
  width: 100%;
  max-width: 42rem;
  margin-right: auto;
  margin-left: auto;
  padding: 2.625rem 1.3125rem 0.625rem 1.3125rem;
  box-sizing: border-box;
  ${avenir};
  background-color: ${darkTheme.body};

  a {
    color: ${darkTheme.text};
    font-weight: 900;
    display: table-cell;
    vertical-align: middle;
    text-decoration: none;
    &:hover {
      text-decoration: none;
      transition: color 0.03s ease-in;
    }
    &:hover,
    &:focus {
      color: ${darkTheme.text};
    }

    img {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      border-radius: 100%;
      border: 1px solid ${darkTheme.text};
      margin-top: -0.2rem;
      transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      &:hover {
        transform: rotate(-5deg) scale(1.1);
      }
    }
  }
`;

const NavLinkWrapper = styled.div`
  display: table-cell;
  width: 75%;
  text-align: right;
  a {
    font-size: 0.875rem;
    display: inline-block;
    ${above.mobileL`
			font-size: 1rem;
		`}
  }
  a:nth-child(2) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
