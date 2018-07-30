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

const HeaderWrapper = styled.header`
	text-align: center;
	padding-top: 2rem;
	padding-bottom: 2rem;
	@media screen and (min-width: 30em) {
    padding-top: 4rem;
    padding-bottom: 4rem;
	}
	margin: 4rem auto;
`

const Header = styled.h1`
	font-size: 1.25rem;
	@media screen and (min-width: 30em) {
    font-size: 1.5rem;
	}
	font-weight: 600;
	font-family: Courier Next,courier,monospace;
`

const SubHeader = styled.h2`
	font-size: .875rem;
	font-weight: 200;
	text-transform: uppercase;
	letter-spacing: .1em;
	font-family: georgia,serif;
	margin-top: -.5rem;
  margin-bottom: 1rem;
`

const SocialLink = styled.a`
	font-size: .875rem;
	-moz-osx-font-smoothing: grayscale;
	backface-visibility: hidden;
	transform: translateZ(0);
	transition: transform .25s ease-out;
	&:hover,
	&:focus {
		transform: scale(1.05);
	}
	&:active {
		transform: scale(.9);
	}
	display: inline-block;
	vertical-align: middle;
	padding-left: .5rem;
	padding-right: .5rem;
	padding-top: .5rem;
	padding-bottom: .5rem;
	margin-bottom: 1rem;
	color: #333;
`

const Main = styled.main`
	background-color: #fff;
`

const MainWrapper = styled.div`
	padding-left: .5rem;
	padding-right: .5rem;
	@media screen and (min-width: 48em) and (max-width: 64em) {
		padding-left: 4rem;
		padding-right: 4rem;
	}
	@media screen and (min-width: 64em)  {
		padding-left: 8rem;
  	padding-right: 8rem;
	}
`

const TitleWrapper = styled.div`
	padding-top: 1rem;
	padding-bottom: 1rem;
	font-size: 1rem;
	@media screen and (min-width: 48em) {
		font-size: 2.25rem;
	}
	max-width: 30em;
	margin-right: auto;
	margin-left: auto;
	h1 {
		font-weight: 600;
		font-size: 2.25rem;
		text-align: center;
		width: 100%;
		margin-top: 0;
		margin-bottom: 1rem;
		font-family: Courier Next,courier,monospace;
	}
`

const MainTextWrapper = styled.div`
	max-width: 30em;
	margin-right: auto;
	margin-left: auto;
	margin-bottom: 4rem;
	margin-top: 0;
	font-size: 1.5rem;
	text-align: justify;
	p:first-of-type{
    text-indent: 0;
  	margin-top: 0;
  	margin-bottom: 0;
	}
	p {
		font-family: georgia,serif;
		font-size: 1.25rem;
		@media screen and (min-width: 48em) {
			font-size: 1.5rem;
		}
		line-height: 1.5;
		text-indent: 1em;
  	margin-top: 0;
		margin-bottom: 0;
		a {
			color: #000;
			text-decoration: underline;
			transition: color .15s ease-in;
			transition: background-color .15s ease-in-out;
			&:link,
			&:visited {
				transition: color .15s ease-in;
			}
			&:hover {
				transition: color .15s ease-in;
				transition: background-color .15s ease-in-out;
				background-color: #000000;
				color: #fff;
			}
			&:active {
				transition: color .15s ease-in;
			}
			&:focus {
				transition: color .15s ease-in;
				transition: background-color .15s ease-in-out;
				outline: 1px dotted #000000;
				background-color: #000000;
				color: #fff;
			}

		}
	}
`

const FooterWrapper = styled.footer`
	font-family: Courier Next,courier,monospace;
	color: #555;
	@media screen and (min-width: 48em) and (max-width: 64em) {
		padding-left: 4rem;
		padding-right: 4rem;
	}
	@media screen and (min-width: 64em)  {
		padding-left: 8rem;
  	padding-right: 8rem;
	}
	small {
		display: block;
		font-size: .75rem;
		text-align: center;
		b {
			text-transform: uppercase;
		}
	}
`

export {
  Navbar,
	NavLinkWrapper,
	HeaderWrapper,
	Header,
	SubHeader,
	SocialLink,
	Main,
	MainWrapper,
	TitleWrapper,
	MainTextWrapper,
	FooterWrapper
}