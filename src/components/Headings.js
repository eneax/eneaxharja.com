import styled from 'styled-components'
import Link from 'gatsby-link'

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
    color: #000;
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



export {
  Navbar,
  NavLinkWrapper
}