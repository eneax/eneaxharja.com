import React from 'react';
import styled from 'styled-components';

import { darkTheme } from '../utils/colors';

// styles
const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35vh;
  text-align: center;

  h1 {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    color: ${darkTheme.textLighter};
  }
`;

const Hero = () => (
  <HeroContainer>
    <h1>Hi, I'm Enea!</h1>
    <h2>Welcome to my own little corner of the web.</h2>
  </HeroContainer>
);

export default Hero;
