import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { ExternalLink } from '../utils/hyperLinks';

const Uses = () => (
  <Layout>
    <SEO title="Uses" />

    <h1>Uses</h1>

    <div>
      <p>
        Ever wonder about what gear I use? Here is a complete list of my
        favorite hardware and software.
      </p>

      <h2>
        <span role="img" aria-label="gears emoji">
          ⚙️
        </span>{' '}
        Hardware
      </h2>
      <ul>
        <li>MacBook Pro (15-inch, 2016)</li>
        <li>Google Pixel 3a</li>
        <li>Google Stadia</li>
        <li>Kindle (10th Generation)</li>
      </ul>

      <h2>
        <span role="img" aria-label="laptop emoji">
          💻
        </span>{' '}
        Apps
      </h2>
      <ul>
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
      </ul>

      <h2>
        <span role="img" aria-label="coder emoji">
          👨‍💻
        </span>{' '}
        Chrome Extensions
      </h2>
      <ul>
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
          <ExternalLink href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?utm_source=chrome-ntp-icon">
            uBlock Origin
          </ExternalLink>
        </li>
      </ul>
    </div>
  </Layout>
);

export default Uses;
