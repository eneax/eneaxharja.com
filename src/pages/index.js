import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialLink } from '../elements'
import { above, avenir } from '../utils'


const HeaderWrapper = styled.header`
	text-align: center;
	margin: 6rem auto 2rem auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${above.mobileL`
		padding-top: 4rem;
    padding-bottom: 4rem;
	`}
  ${above.mobileS`
		margin-top: 4rem;
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


const IndexPage = () => (
  <Layout>
    <HeaderWrapper>
      <Header>Hi, I'm Enea!</Header>
      <SubHeader>Web Developer</SubHeader>
      <SocialLink href="https://github.com/eneax" aria-label="github" >
        <FontAwesomeIcon icon="code-branch" />
      </SocialLink>
      <SocialLink href="mailto:enea.xharja@icloud.com" aria-label="mail" >
        <FontAwesomeIcon icon="envelope" />
      </SocialLink>
    </HeaderWrapper>
  </Layout>
)

export default IndexPage
