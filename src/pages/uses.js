import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/footer'
import { Title, Container, SubTitle, UnOrderedList, ExternalLink } from '../elements'


const About = () => (
	<Layout>
		<Title>Uses</Title>

		<Container>
			<p>Ever wonder about what gear I use? Here is my complete list.</p>
      
      <SubTitle>Hardware</SubTitle>
      <UnOrderedList>
        <li>MacBook Pro (15-inch, 2016)</li>
        <li>iPhone SE</li>
        <li>AirPods</li>
      </UnOrderedList>

      <SubTitle>Desktop Apps</SubTitle>
      <UnOrderedList>
        <li><ExternalLink href="https://www.google.com/chrome/">Google Chrome</ExternalLink></li>
        <li><ExternalLink href="https://code.visualstudio.com/">Visual Studio Code</ExternalLink></li>
        <li><ExternalLink href="https://hyper.is/">Hyper.js</ExternalLink> with "<ExternalLink href="https://ohmyz.sh/">Oh My ZSH!</ExternalLink>"</li>
        <li>You can see my config files over at my <ExternalLink href="https://github.com/eneax/dotfiles">Dot Files</ExternalLink> repo</li>
        <li><ExternalLink href="https://www.alfredapp.com/" >Alfred App</ExternalLink></li>
        <li><ExternalLink href="https://www.macbartender.com/">Bartender</ExternalLink></li>
        <li><ExternalLink href="https://matthewpalmer.net/rocket/">Rocket</ExternalLink></li>
        <li><ExternalLink href="https://www.notion.so/">Notion</ExternalLink></li>
        <li><ExternalLink href="https://www.spotify.com/">Spotify</ExternalLink></li>
        <li><ExternalLink href="https://www.lastpass.com/">LastPass</ExternalLink></li>
      </UnOrderedList>

      <SubTitle>Extra</SubTitle>
      <UnOrderedList>
        <li>I like reading printed books. I tried with ebooks and audiobooks, but after spending an entire day coding, the last thing I need is another screen!</li>
      </UnOrderedList>
		</Container>

		<Footer />
	</Layout>
)

export default About
