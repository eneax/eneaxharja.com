import React from 'react';
import styled from 'styled-components';

import { darkTheme } from '../utils/colors';

// styles
const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2rem;
  margin: 2rem auto 0;
  text-align: center;
`;

const FooterText = styled.div`
  display: flex;
  justify-content: center;
  color: ${darkTheme.textLighter};

  small {
    font-size: 0.75rem;
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>
      <small>© {new Date().getFullYear()} Enea Xharja</small>
    </FooterText>
  </FooterContainer>
);

export default Footer;
