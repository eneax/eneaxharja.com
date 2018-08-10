import React, { Component } from 'react'
import { HeaderWrapper, Header, SubHeader, SocialLink } from '../components/General'

export default class Index extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Header>Hi, I'm Enea!</Header>
        <SubHeader>Web Developer</SubHeader>
        <SocialLink href="https://github.com/eneax" aria-label="github" target="_blank" rel="noopener noreferrer" >
          <i className="fab fa-github fa-2x"></i>
        </SocialLink>
        <SocialLink href="mailto:eneaxharja@gmail.com" aria-label="mail" target="_blank" rel="noopener noreferrer" >
          <i className="fas fa-envelope fa-2x"></i>
        </SocialLink>
      </HeaderWrapper>
    )
  }
}
