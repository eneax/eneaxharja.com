import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../images/logo.png'


const Navbar = styled.nav`
	display: table;
	width: 100%;
	max-width: 42rem;
  margin-right: auto;
  margin-left: auto;
  padding: 2.625rem 1.3125rem .625rem 1.3125rem;
	box-sizing: border-box;
	font-family: avenir,sans-serif;

	a {
		color: #000;
		font-weight: 600;
		display: table-cell;
		vertical-align: middle;
		text-decoration: none;
		transition: all .15s ease-in;
		opacity: 1;
		&:link,
		&:visited {
			transition: color .15s ease-in;
		}
		&:hover {
			transition: all .15s ease-in;
			opacity: .5;
		}
		&:active {
			transition: color .15s ease-in;
			transition: opacity .15s ease-out;
			opacity: .8;
		}
		&:focus {
			transition: all .15s ease-in;
			opacity: .5;
		}
		img {
			display: inline-block;
			width: 2rem;
			height: 2rem;
			border-radius: 100%;
		}
	}
`

const NavLinkWrapper = styled.div`
  display: table-cell;
  width: 75%;
  text-align: right;
  a {
    font-size: 0.875rem;
    display: inline-block;
    @media screen and (min-width: 30em) {
      font-size: 1rem;
    }
  }
  a:nth-child(2) {
		margin-left: 1rem;
    margin-right: 1rem;
  }
`


const Header = () => (
  <Navbar>
		<Link to='/' title='Home'>
			<img src={logo} alt='Enea Xharja Logo'/>
		</Link>
		<NavLinkWrapper>
			<Link to='/about' title='About'>About</Link>
			<Link to='/posts' title='Blog'>Blog</Link>
			<Link to='/projects' title='Projects'>Projects</Link>
		</NavLinkWrapper>
	</Navbar>	
)

export default Header
