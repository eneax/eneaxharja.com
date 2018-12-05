import React from 'react'
import Layout from '../components/layout'

import { HeaderWrapper, Header, SubHeader, SocialLink } from '../components/general'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IndexPage = () => (
  <Layout>
    <HeaderWrapper>
      <Header>Hi, I'm Enea!</Header>
      <SubHeader>Web Developer</SubHeader>
      <SocialLink href="https://github.com/eneax" aria-label="github" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon="code-branch" />
      </SocialLink>
      <SocialLink href="mailto:eneaxharja@gmail.com" aria-label="mail" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon="envelope" />
      </SocialLink>
    </HeaderWrapper>
  </Layout>
)

export default IndexPage
