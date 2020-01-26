import React from 'react'
import styled from 'styled-components'
import { FaCodeBranch, FaEnvelope } from 'react-icons/fa'

import { above, avenir, grey } from '../utils'
import { SocialLink } from '../elements'


const Footer = () => (
	<FooterWrapper>
		<FooterTextWrapper>
			<small>© {new Date().getFullYear()} <b>Enea Xharja</b>, All Rights Reserved</small>
		</FooterTextWrapper>

		<FooterLinksWrapper>
			<SocialLink href="https://github.com/eneax" aria-label="github">
				<FaCodeBranch />
			</SocialLink>
			<SocialLink href="mailto:eneaxharja@gmail.com" aria-label="mail" >
				<FaEnvelope />
			</SocialLink>
		</FooterLinksWrapper>
	</FooterWrapper>
)

export default Footer


// styles
const FooterWrapper = styled.footer`
	margin: 1rem auto 0;
`

const FooterTextWrapper = styled.div`
	display: flex;
	justify-content: center;
	${avenir};
	color: ${grey};
	${above.tablet`
		padding-left: 4rem;
		padding-right: 4rem;
	`}
	${above.laptop`
		padding-left: 8rem;
  	padding-right: 8rem;
	`}
	small {
		font-size: .75rem;
	}
`

const FooterLinksWrapper = styled.div`
	margin: 0 auto;
	text-align: center;

	a {
		font-size: .5rem;
		margin-bottom: 0;
	}
`