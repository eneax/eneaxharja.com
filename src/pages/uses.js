import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';

import {
  Title,
  Container,
  SubTitle,
  UnOrderedList,
  ExternalLink,
} from '../elements';

const Uses = () => (
  <Layout>
    <SEO title="Uses" />

    <Title>
      <span role="img" aria-label="gears emoji">
        ⚙️{' '}
      </span>
      Uses
    </Title>

    <Container>
      <p>
        Ever wonder about what gear I use? Here is a complete list of my
        favorite hardware and software.
      </p>

      <SubTitle>Hardware</SubTitle>
      <UnOrderedList>
        <li>MacBook Pro (15-inch, 2016)</li>
        <li>Google Pixel 3a</li>
        <li>Google Stadia</li>
        <li>Kindle (10th Generation)</li>
      </UnOrderedList>

      <SubTitle>Desktop Apps</SubTitle>
      <UnOrderedList>
        <li>
          <ExternalLink href="https://www.google.com/chrome/">
            Google Chrome
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://code.visualstudio.com/">
            Visual Studio Code
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://hyper.is/">Hyper.js</ExternalLink> with "
          <ExternalLink href="https://ohmyz.sh/">Oh My ZSH!</ExternalLink>"
        </li>
        <li>
          You can see my config files over at my{' '}
          <ExternalLink href="https://github.com/eneax/dotfiles">
            Dot Files
          </ExternalLink>{' '}
          repo
        </li>
        <li>
          <ExternalLink href="https://www.alfredapp.com/">
            Alfred App
          </ExternalLink>
        </li>
      </UnOrderedList>

      <SubTitle>Chrome Extensions</SubTitle>
      <UnOrderedList>
        <li>
          <ExternalLink href="https://chrome.google.com/webstore/detail/visbug/cdockenadnadldjbbgcallicgledbeoc">
            VisBug
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?utm_source=chrome-ntp-icon">
            React Developer Tools
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?utm_source=chrome-ntp-icon">
            Redux DevTools
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?utm_source=chrome-ntp-icon">
            JSONView
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?utm_source=chrome-ntp-icon">
            uBlock Origin
          </ExternalLink>
        </li>
      </UnOrderedList>

      <SubTitle>Progressive Web Apps</SubTitle>
      <UnOrderedList>
        <li>
          <ExternalLink href="https://duo.google.com">Duo</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://messages.google.com">
            Messages
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://maps.google.com">Maps</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://photos.google.com">Photos</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://drive.google.com">Drive</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://stadia.google.com">Stadia</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://music.youtube.com">
            YouTube Music
          </ExternalLink>
        </li>
      </UnOrderedList>
    </Container>

    <Footer />
  </Layout>
);

export default Uses;
