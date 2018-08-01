import styled from 'styled-components'

const Navbar = styled.nav`
	display: table;
	width: 100%;
	box-sizing: border-box;
	padding: 1rem;
	font-family: avenir,sans-serif;
	@media screen and (min-width: 30em) {
    padding-left: 4rem;
    padding-right: 4rem;
	}
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
	font-family: avenir,sans-serif;
`

const SubHeader = styled.h2`
	font-size: .875rem;
	font-weight: 200;
	text-transform: uppercase;
	letter-spacing: .1em;
	font-family: avenir,sans-serif;
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

const FooterWrapper = styled.footer`
	font-family: avenir,sans-serif;
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

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
	@media (min-width: 576px) {
    max-width: 540px;
	}
	@media (min-width: 768px) {
    max-width: 720px;
	}
	@media (min-width: 992px) {
    max-width: 960px;
	}
	@media (min-width: 1200px) {
    max-width: 1140px;
	}
`

const Row = styled.div`
	display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

const Col = styled.div`
	position: relative;
	width: 100%;
	min-height: 1px;
	padding-right: 15px;
	padding-left: 15px;
	> p {
		margin-bottom: 2rem;
	}
`

const Col6Medium4 = styled.div`
	position: relative;
	width: 100%;
	min-height: 1px;
	padding-right: 15px;
	padding-left: 15px;
	margin-top: 1rem;

	-ms-flex: 0 0 50%;
  flex: 0 0 50%;
	max-width: 50%;
	
	@media (min-width: 768px) {
		-ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
	}
`

const Thumbnail = styled.div`
	padding: 0.25rem;
	background-color: #fff;
	border: 1px solid #dee2e6;
	border-radius: 0.25rem;
	max-width: 100%;
	height: auto;
	text-align: center;
	a {
		color: #000;
		text-decoration: none;
		&:hover,
		&:focus {
			h6 {
				transition: color .15s ease-in;
				color: #663399;
			}
		}
	}
	img {
		width: 100%;
		height: auto;
		margin-bottom: 0;
	}
	h6 {
		margin-bottom: 0;
		span {
			font-size: .875rem;
			font-weight: 500;
		}
	}
	p {
		margin-bottom: 0;
		small {
			font-size: .875rem;
			font-weight: 100;
		}
	}
`

const TitleWrapper = styled.div`
  padding: 1rem 1rem;
  margin-bottom: 2rem;
	border-radius: 0.3rem;
	h1 {
		font-family: avenir,sans-serif;
		text-align: center;
		margin-bottom: 0;
	}
`

const SubTitleWrapper = styled.div`
	font-family: avenir,sans-serif;
	text-align: left;
	margin-top: 1rem;
	a {
		text-decoration: none;
		color: #000;
		&:hover,
		&:focus {
			h2 {
				transition: color .15s ease-in;
				color: #663399;
			}
		}
	}
	h2 {
		margin-bottom: .5rem;
	}
`

const MainTextWrapper = styled.div`
	max-width: 30em;
	margin-right: auto;
	margin-left: auto;
	margin-bottom: 4rem;
	margin-top: 0;
	font-size: 1.2rem;
	text-align: justify;
	background-color: #fff;
	> p {
		font-family: avenir,sans-serif;
		@media screen and (min-width: 48em) {
			font-size: 1.5rem;
		}
		line-height: 1.2;
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

const ImageWrapper = styled.div`
	width: 100%;
	height: auto;
	margin-bottom: 0;
	img {
		margin-bottom: .75rem;
		border: 1px solid #e7e7e7;
		border-radius: 0.25rem !important;
	}
`


export {
  Navbar,
	NavLinkWrapper,
	HeaderWrapper,
	Header,
	SubHeader,
	SocialLink,
	FooterWrapper,
	Container, 
	Row,
	Col,
	Col6Medium4, 
	Thumbnail,
	TitleWrapper,
	SubTitleWrapper,
	MainTextWrapper,
	ImageWrapper
}