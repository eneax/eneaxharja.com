import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { avenir } from '../utils'


const HeaderWrapper = styled.header`
	text-align: center;
	padding-top: 2rem;
	padding-bottom: 2rem;
	@media screen and (min-width: 30em) {
    padding-top: 4rem;
    padding-bottom: 4rem;
	}
	margin: 6rem auto 2rem auto;
`

const Header = styled.h1`
	font-size: 1.25rem;
	@media screen and (min-width: 30em) {
    font-size: 1.5rem;
	}
	font-weight: 900;
	${avenir};
`

const SubHeader = styled.h2`
	font-size: .875rem;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: .1em;
	${avenir};
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
	svg {
		font-size: 2em;
	}
`


const IndexPage = () => (
  <Layout>
    <HeaderWrapper>
      <Header>Hi, I'm Enea!</Header>
      <SubHeader>Web Developer</SubHeader>
      <SocialLink href="https://github.com/eneax" aria-label="github" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon="code-branch" />
      </SocialLink>
      <SocialLink href="mailto:enea.xharja@icloud.com" aria-label="mail" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon="envelope" />
      </SocialLink>
    </HeaderWrapper>
  </Layout>
)

export default IndexPage
