import React from 'react'
import Layout from '../components/layout'
import { MainTextWrapper } from '../components/global'
import Footer from '../components/footer'
import { Title, SubTitle } from '../elements'


const theme = {
  marginBottom: 0
}

const About = () => (
	<Layout>
		<Title>My Gear</Title>

		<MainTextWrapper theme={theme}>
			<p>Ever wonder about what gear I use? Here is my complete list.</p>
      
      <SubTitle>Hardware</SubTitle>
      <ul>
        <li>I code everyday on a 15" MacBook Pro.</li>
        <li>My phone is an iPhone SE.</li>
        <li>My headphones of choice are the AirPods.</li>
      </ul>

      <SubTitle>Software</SubTitle>
      <ul>
        <li>I use Chrome for the Dev Tools and Safari as a daily driver.</li>
        <li>I code using <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode</a> as a text editor.</li>
        <li>My terminal is <a href="https://hyper.is/" target="_blank" rel="noopener noreferrer">Hyper.js</a> with "<a href="https://ohmyz.sh/" target="_blank" rel="noopener noreferrer">Oh My ZSH!</a>".</li>
        <li>You can see my config files over at my <a href="https://github.com/eneax/dotfiles" target="_blank" rel="noopener noreferrer">Dot Files</a> repo.</li>
      </ul>

      <SubTitle>Extra</SubTitle>
      <ul>
        <li>I like reading printed books. I tried with ebooks and audiobooks, but after spending an entire day coding, the last thing I need is another screen!</li>
      </ul>
		</MainTextWrapper>

		<Footer />
	</Layout>
)

export default About
