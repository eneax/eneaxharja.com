import React from 'react'
import Layout from '../components/layout'
import { Container } from '../components/global'
import Footer from '../components/footer'
import { Title, SubTitle, UnOrderdList, ExternalLink } from '../elements'


const About = () => (
	<Layout>
		<Title>My Gear</Title>

		<Container>
			<p>Ever wonder about what gear I use? Here is my complete list.</p>
      
      <SubTitle>Hardware</SubTitle>
      <UnOrderdList>
        <li>I code everyday on a 15" MacBook Pro.</li>
        <li>My phone is an iPhone SE.</li>
        <li>My headphones of choice are the AirPods.</li>
      </UnOrderdList>

      <SubTitle>Software</SubTitle>
      <UnOrderdList>
        <li>I use Chrome for the Dev Tools and Safari as a daily driver.</li>
        <li>I code using <ExternalLink href="https://code.visualstudio.com/">VSCode</ExternalLink> as a text editor.</li>
        <li>My terminal is <ExternalLink href="https://hyper.is/">Hyper.js</ExternalLink> with "<ExternalLink href="https://ohmyz.sh/">Oh My ZSH!</ExternalLink>".</li>
        <li>You can see my config files over at my <ExternalLink href="https://github.com/eneax/dotfiles">Dot Files</ExternalLink> repo.</li>
      </UnOrderdList>

      <SubTitle>Extra</SubTitle>
      <UnOrderdList>
        <li>I like reading printed books. I tried with ebooks and audiobooks, but after spending an entire day coding, the last thing I need is another screen!</li>
      </UnOrderdList>
		</Container>

		<Footer />
	</Layout>
)

export default About
