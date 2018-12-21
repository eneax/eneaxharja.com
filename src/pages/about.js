import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import Footer from '../components/footer'


const TitleWrapper = styled.div`
  margin-bottom: 2rem;
	h1 {
		font-family: avenir,sans-serif;
	}
`

const MainTextWrapper = styled.div`
  margin-bottom: 4rem;
  font-size: 1.2rem;
  text-align: justify;
  background-color: #fff;
  font-weight: 100;
  p {
    font-family: avenir, sans-serif;
    @media screen and (min-width: 48em) {
      font-size: 1.5rem;
    }
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0;
    a {
      color: #000;
      text-decoration: underline;
      transition: color 0.15s ease-in;
      transition: background-color 0.15s ease-in-out;
      &:link,
      &:visited {
        transition: color 0.15s ease-in;
      }
      &:hover {
        transition: color 0.15s ease-in;
        transition: background-color 0.15s ease-in-out;
        background-color: #000000;
        color: #fff;
      }
      &:active {
        transition: color 0.15s ease-in;
      }
      &:focus {
        transition: color 0.15s ease-in;
        transition: background-color 0.15s ease-in-out;
        outline: 1px dotted #000000;
        background-color: #000000;
        color: #fff;
      }
    }
  }
  p + p {
    text-indent: 1rem;
  }
`


const About = () => (
  <Layout>
    <Container>
      <TitleWrapper>
        <h1>About</h1>
      </TitleWrapper>

      <MainTextWrapper>
        <p>
          I’m currently living in Chiusi (Tuscany), Italy and working
          as a Freelance Web Developer.
        </p>
        <p>
          Most of my time is spent writing <a href='https://github.com/eneax' target='_blank' rel='noopener noreferrer'>
            code</a> for the web. I create websites for businesses and portfolio pages that are responsive and can adapt the layout to a variety of devices and screen sizes.
        </p>
        <p>
          When I’m not coding, I read <Link to='/library'>books</Link>, procrastinate <Link to='/library'>online</Link> (reading blogs or listening to podcasts) or just <Link to='/library'>travel</Link> and walk around in nature.
				</p>
				<p>For those of you who have been asking me about the software or hardware I use, here is my <Link to='/library'>list</Link>.</p>
        <p>
          I'm open to new opportunities and always looking for new
          projects where I can contribute. Feel free to take a look at
          my complete <a href='https://www.dropbox.com/s/hog3x7xo5l7pmpo/eneaxharja-resume.pdf?dl=0' target='_blank' rel='noopener noreferrer'>resume</a>.
        </p>
      </MainTextWrapper>
    </Container>

    <Footer />
  </Layout>
)

export default About
