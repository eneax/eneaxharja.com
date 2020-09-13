import React from 'react';
import styled from 'styled-components';
import { AiFillGithub, AiOutlineMail, AiFillYoutube } from 'react-icons/ai';

import { SocialIconLink } from '../utils/hyperLinks';

// styles
const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
  margin: 2rem auto 0;
  text-align: center;
`;

const FooterText = styled.div`
  display: flex;
  justify-content: center;

  small {
    font-size: 0.75rem;
  }
`;

// data
const footerLinksData = [
  {
    link: 'https://github.com/eneax',
    title: 'GitHub',
    icon: <AiFillGithub />,
  },
  {
    link: 'https://www.youtube.com/c/EneaXharja17',
    title: 'YouTube',
    icon: <AiFillYoutube />,
  },
  {
    link: 'mailto:eneaxharja@gmail.com',
    title: 'Mail',
    icon: <AiOutlineMail />,
  },
];

const Footer = () => (
  <FooterContainer>
    <FooterText>
      <small>© {new Date().getFullYear()} Enea Xharja</small>
    </FooterText>

    <div>
      {footerLinksData.map(({ link, title, icon }) => (
        <SocialIconLink key={title} href={link} aria-label={title}>
          {icon}
        </SocialIconLink>
      ))}
    </div>
  </FooterContainer>
);

export default Footer;
