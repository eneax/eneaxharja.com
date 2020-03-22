import React from 'react';
import styled from 'styled-components';
import { MdCode, MdMailOutline, MdRssFeed } from 'react-icons/md';

import { above, avenir, darkTheme } from '../utils';
import { SocialLink } from '../elements';

const Footer = () => (
  <FooterWrapper>
    <FooterTextWrapper>
      <small>
        © {new Date().getFullYear()} <b>Enea Xharja</b>, All Rights Reserved
      </small>
    </FooterTextWrapper>

    <FooterLinksWrapper>
      <SocialLink href="https://github.com/eneax" aria-label="github">
        <MdCode />
      </SocialLink>
      <SocialLink href="mailto:eneaxharja@gmail.com" aria-label="mail">
        <MdMailOutline />
      </SocialLink>
      <SocialLink
        href="https://eneaxharja.com/rss-feed.xml"
        aria-label="rss feed"
      >
        <MdRssFeed />
      </SocialLink>
    </FooterLinksWrapper>
  </FooterWrapper>
);

export default Footer;

// styles
const FooterWrapper = styled.footer`
  margin: 1rem auto 0;
`;

const FooterTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  ${avenir};
  color: ${darkTheme.textLighter};
  ${above.tablet`
		padding-left: 4rem;
		padding-right: 4rem;
	`}
  ${above.laptop`
		padding-left: 8rem;
  	padding-right: 8rem;
	`}
	small {
    font-size: 0.75rem;
  }
`;

const FooterLinksWrapper = styled.div`
  margin: 0 auto;
  text-align: center;

  a {
    font-size: 0.5rem;
    margin-bottom: 0;
  }
`;
