import React, { Component } from 'react'
import { HeaderWrapper, Header, SubHeader, SocialLink } from '../components/General'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Index extends Component {
  render() {
    return (
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
    )
  }
}
