import React from 'react'
import styled from 'styled-components'

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
	}
`

const Footer = () => (
	<FooterWrapper>
		<small>© 2018 <b>Enea Xharja</b>, All Rights Reserved</small>
	</FooterWrapper>
)

export default Footer
