import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import Footer from '../components/footer'


const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
	@media (min-width: 576px) {
    max-width: 540px;
	}
	@media (min-width: 768px) {
    max-width: 720px;
	}
	@media (min-width: 992px) {
    max-width: 960px;
	}
	@media (min-width: 1200px) {
    max-width: 1140px;
	}
`

const TitleWrapper = styled.div`
  padding: 1rem 1rem;
  margin-bottom: 2rem;
	border-radius: 0.3rem;
	h1 {
		font-family: avenir,sans-serif;
		text-align: center;
		margin-bottom: 0;
	}
`

const MainTextWrapper = styled.div`
	max-width: 30em;
	margin-right: auto;
	margin-left: auto;
	margin-bottom: 4rem;
	margin-top: 0;
	font-size: 1.2rem;
	text-align: justify;
	background-color: #fff;
	font-weight: 100;
	> p {
		font-family: avenir,sans-serif;
		@media screen and (min-width: 48em) {
			font-size: 1.5rem;
		}
		line-height: 1.2;
  	margin-top: 0;
		margin-bottom: 0;
		a {
			color: #000;
			text-decoration: underline;
			transition: color .15s ease-in;
			transition: background-color .15s ease-in-out;
			&:link,
			&:visited {
				transition: color .15s ease-in;
			}
			&:hover {
				transition: color .15s ease-in;
				transition: background-color .15s ease-in-out;
				background-color: #000000;
				color: #fff;
			}
			&:active {
				transition: color .15s ease-in;
			}
			&:focus {
				transition: color .15s ease-in;
				transition: background-color .15s ease-in-out;
				outline: 1px dotted #000000;
				background-color: #000000;
				color: #fff;
			}
		}
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
            code</a> for the web. I create websites for small businesses and portfolio pages that are responsive and can adapt the layout to a variety of devices and screen sizes.
            </p>
        <p>
          When I’m not coding, I read <Link to='/library'>books</Link>, procrastinate on <a href='https://waitbutwhy.com/' target='_blank' rel='noopener noreferrer'>Wait But Why</a> and <a href='http://www.ynharari.com/' target='_blank' rel='noopener noreferrer'>Y. N. Harari</a> or just walk around in nature.
            </p>
        <p>
          I'm open to new opportunities and always looking for new
          projects where I can contribute. Feel free to take a look at
                  my complete resume over <a href='https://www.dropbox.com/s/hog3x7xo5l7pmpo/eneaxharja-resume.pdf?dl=0' target='_blank' rel='noopener noreferrer'>here</a>.
            </p>
      </MainTextWrapper>
    </Container>

    <Footer />
  </Layout>
)

export default About
