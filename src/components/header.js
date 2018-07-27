import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Navbar = styled.nav`
	display: table;
	width: 100%;
	box-sizing: border-box;
	padding: 1rem;
	@media screen and (min-width: 30em) {
    padding-left: 4rem;
    padding-right: 4rem;
	}
	a {
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
			font-size: .875rem;
			display: inline-block;
			@media screen and (min-width: 30em) {
				font-size: 1rem;
			}
		}
		a:nth-child(1) {
			margin-right: 1rem;
		}
	}
`

const Header = () => (
	<Navbar>
		<Link to='/' title='Home'>
			<img src='http://tachyons.io/img/logo.jpg' alt='Enea Xharja Logo'/>
		</Link>
		<NavLinkWrapper>
			<Link to='/about' title='About'>About</Link>
			<Link to='/projects' title='Projects'>Projects</Link>
		</NavLinkWrapper>
	</Navbar>	
)

export default Header




// import React from 'react'
// import Link from 'gatsby-link'
// import styled from 'styled-components'

// const HeaderWrapper = styled.div`
// 	background: #212529;
// 	margin-bottom: 1.45rem;
// `

// const HeaderContainer = styled.div`
// 	margin: 0 auto;
// 	max-width: 960px;
// 	padding: 1.45rem 1.0875rem;
// `

// const Header = () => (
// 	<HeaderWrapper>
// 		<HeaderContainer>
// 			<h1 style={{ margin: 0 }}>
// 				<Link to="/">Home</Link>
// 			</h1>

// 			<nav>
// 				<ul>
// 					<li>
// 						<Link to='/about'>About</Link>
// 					</li>
// 					<li>
// 						<Link to='/projects'>Projects</Link>
// 					</li>
// 				</ul>
// 			</nav>

// 		</HeaderContainer>
// 	</HeaderWrapper>
// )

// export default Header