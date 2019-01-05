import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { TitleWrapper, MainTextWrapper } from '../components/global'
import Footer from '../components/footer'


const theme = {
  marginBottom: 0
}

const About = () => (
	<Layout>
		<TitleWrapper>
			<h1>About</h1>
		</TitleWrapper>

		<MainTextWrapper theme={theme}>
			<p>
				I’m currently living in Chiusi (Tuscany), Italy and working
				as a Freelance Web Developer.
        </p>
			<p>
				Most of my time is spent writing <a href='https://github.com/eneax' target='_blank' rel='noopener noreferrer'>
					code</a> for the web. I create websites for businesses and portfolio pages that are responsive and can adapt the layout to a variety of devices and screen sizes.
        </p>
			<p>
				When I’m not coding, I read <Link to='/library'>books</Link>, procrastinate <Link to='/fun'>online</Link> (reading blogs or listening to podcasts) or just <Link to='/travel'>travel</Link> and walk around in nature.
			</p>
			<p>For those of you who have been asking me about the software or hardware I use, here is my <Link to='/gear'>list</Link>.</p>
			<p>
				I'm open to new opportunities and always looking for new
				projects where I can contribute. Feel free to take a look at
          my complete <Link to='/resume'>resume</Link>.
      </p>
		</MainTextWrapper>

		<Footer />
	</Layout>
)

export default About
