import React from 'react'
import { Container, TitleWrapper, MainTextWrapper } from '../components/General'

const NotFoundPage = () => (
  <div>
    <Container>
      <TitleWrapper>
        <h1>NOT FOUND</h1>
      </TitleWrapper>

      <MainTextWrapper>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </MainTextWrapper>
    </Container>
  </div>
)

export default NotFoundPage
