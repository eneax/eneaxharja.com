import React from 'react'
import { Link } from 'gatsby'

import { Navbar, NavLinkWrapper } from './General'
import logo from '../images/logo.png'

const Header = () => (
  <Navbar>
		<Link to='/' title='Home'>
			<img src={logo} alt='Enea Xharja Logo'/>
		</Link>
		<NavLinkWrapper>
			<Link to='/about' title='About'>About</Link>
			<Link to='/projects' title='Projects'>Projects</Link>
		</NavLinkWrapper>
	</Navbar>	
)

export default Header
