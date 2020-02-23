import React from 'react'
import styled from 'styled-components'
import { MdCode, MdMailOutline, MdRssFeed } from 'react-icons/md'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { SocialLink } from '../elements'
import { above, avenir, darkTheme } from '../utils'


const IndexPage = () => (
  <Layout>
    <SEO title='Home' />

    <HeaderWrapper>
      <Header>Hi, I'm Enea!</Header>
      <SubHeader>Web Developer</SubHeader>
      
      <SocialLink href="https://github.com/eneax" aria-label="github" >
        <MdCode />
      </SocialLink>
      <SocialLink href="mailto:eneaxharja@gmail.com" aria-label="mail" >
        <MdMailOutline />
      </SocialLink>
      <SocialLink href="https://eneaxharja.com/rss-feed.xml" aria-label="rss feed" >
        <MdRssFeed />
      </SocialLink>
    </HeaderWrapper>
  </Layout>
)

export default IndexPage


// styles
const HeaderWrapper = styled.header`
  background-color: ${darkTheme.body};
  color: ${darkTheme.text};
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
