import React from 'react';
import styled from 'styled-components';

// styles
const FooterContainer = styled.footer`
  text-align: center;
  color: var(--textLighter);

  small {
    font-size: 1.5rem;
  }
`;

const Footer = () => (
  <FooterContainer>
    <small>© {new Date().getFullYear()} Enea Xharja</small>
  </FooterContainer>
);

export default Footer;
