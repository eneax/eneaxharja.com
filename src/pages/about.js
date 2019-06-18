import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/footer'
import { Title, Container, ExternalLink, InternalLink } from '../elements'


const About = () => (
	<Layout>
		<Title>About</Title>

		<Container>
			<p>
				I’m currently living in San Pietro in Cariano (Verona), Italy and working
				as a Front-End Developer at <ExternalLink href='http://fornacestudio.com'>Fornace</ExternalLink>.
      </p>
			<p>
				Most of my time is spent writing <ExternalLink href='https://github.com/eneax'>code</ExternalLink> for the web. I create websites for businesses and portfolio pages that are responsive and can adapt the layout to a variety of devices and screen sizes.
      </p>
			<p>
				When I’m not coding, I read <InternalLink to='/library'>books</InternalLink>, procrastinate <InternalLink to='/fun'>online</InternalLink> (reading blogs or listening to podcasts) or just <InternalLink to='/travel'>travel</InternalLink> and walk around in nature.
			</p>
			<p>For those of you who have been asking me about the software or hardware I use, here is my <InternalLink to='/uses'>list</InternalLink>.</p>
			<p>
				I'm open to new opportunities and always looking for new
				projects where I can contribute. Feel free to take a look at
          my complete <InternalLink to='/resume'>resume</InternalLink>.
      </p>
		</Container>

		<Footer />
	</Layout>
)

export default About
