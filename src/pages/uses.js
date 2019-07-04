import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/footer'
import { Title, Container, SubTitle, UnOrderedList, ExternalLink } from '../elements'


const About = () => (
	<Layout>
		<Title>⚙️ Uses</Title>

		<Container>
			<p>Ever wonder about what gear I use? Here is my complete list.</p>
      
      <SubTitle>Hardware</SubTitle>
      <UnOrderedList>
        <li>MacBook Pro (15-inch, 2016)</li>
        <li>Google Pixel 3a</li>
        <li>Kindle (7th Generation)</li>
      </UnOrderedList>

      <SubTitle>Desktop Apps</SubTitle>
      <UnOrderedList>
        <li><ExternalLink href="https://www.google.com/chrome/">Google Chrome</ExternalLink></li>
        <li><ExternalLink href="https://code.visualstudio.com/">Visual Studio Code</ExternalLink></li>
        <li><ExternalLink href="https://hyper.is/">Hyper.js</ExternalLink> with "<ExternalLink href="https://ohmyz.sh/">Oh My ZSH!</ExternalLink>"</li>
        <li>You can see my config files over at my <ExternalLink href="https://github.com/eneax/dotfiles">Dot Files</ExternalLink> repo</li>
        <li><ExternalLink href="https://www.alfredapp.com/">Alfred App</ExternalLink></li>
        <li><ExternalLink href="https://matthewpalmer.net/rocket/">Rocket</ExternalLink></li>
        <li><ExternalLink href="https://matthewpalmer.net/vanilla/">Vanilla</ExternalLink></li>
        <li><ExternalLink href="https://www.spotify.com/">Spotify</ExternalLink></li>
        <li><ExternalLink href="https://www.lastpass.com/">LastPass</ExternalLink></li>
      </UnOrderedList>

      <SubTitle>Chrome Extensions</SubTitle>
      <UnOrderedList>
        <li><ExternalLink href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?utm_source=chrome-ntp-icon">Lighthouse</ExternalLink></li>
        <li><ExternalLink href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?utm_source=chrome-ntp-icon">React Developer Tools</ExternalLink></li>
        <li><ExternalLink href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?utm_source=chrome-ntp-icon">Redux DevTools</ExternalLink></li>
        <li><ExternalLink href="https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?utm_source=chrome-ntp-icon">JSONView</ExternalLink></li>
        <li><ExternalLink href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?utm_source=chrome-ntp-icon">uBlock Origin</ExternalLink></li>
        <li><ExternalLink href="https://chrome.google.com/webstore/detail/lastpass-free-password-ma/hdokiejnpimakedhajhdlcegeplioahd?utm_source=chrome-ntp-icon">LastPass: Free Password Manager</ExternalLink></li>
      </UnOrderedList>
		</Container>

		<Footer />
	</Layout>
)

export default About
