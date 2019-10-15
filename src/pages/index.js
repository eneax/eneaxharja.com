import React from 'react'
import styled from 'styled-components'
import { FaCodeBranch, FaEnvelope } from 'react-icons/fa'

import Layout from '../components/layout'

import { SocialLink } from '../elements'
import { above, avenir } from '../utils'


const IndexPage = () => (
  <Layout>
    <HeaderWrapper>
      <Header>Hi, I'm Enea!</Header>
      <SubHeader>Web Developer</SubHeader>
      <SocialLink href="https://github.com/eneax" aria-label="github" >
        <FaCodeBranch />
      </SocialLink>
      <SocialLink href="mailto:eneaxharja@gmail.com" aria-label="mail" >
        <FaEnvelope />
      </SocialLink>
    </HeaderWrapper>
  </Layout>
)

export default IndexPage


// styles
const HeaderWrapper = styled.header`
  background-color: #fff;
	text-align: center;
	margin: 6rem auto 2rem auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${above.mobileL`
		padding-top: 4rem;
    padding-bottom: 4rem;
	`}
  ${above.mobileS`
		margin-top: 3rem;
	`}
`

const Header = styled.h1`
	${avenir};
	font-weight: 900;
	font-size: 1.25rem;
	${above.mobileL`
		font-size: 1.5rem;
	`}
`

const SubHeader = styled.h2`
	${avenir};
	font-size: .875rem;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: .1em;
	margin-top: -.5rem;
  margin-bottom: 1rem;
`
