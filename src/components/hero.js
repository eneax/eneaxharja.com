import React from 'react';
import styled from 'styled-components';

// styles
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35vh;

  h1 {
    text-align: center;
  }
`;

const Hero = () => (
  <HeroContainer>
    <h1>
      Hi there, I am Enea,
      <br /> web developer based in Berlin
    </h1>
  </HeroContainer>
);

export default Hero;
