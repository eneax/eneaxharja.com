import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { MainTextWrapper } from '../components/global'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../components/footer'
import { Title, SubTitle } from '../elements'


const theme = {
  marginBottom: 0
}

const Heading3 = styled.h3`
  margin-top: 3rem;
  margin-bottom: .25rem;
	font-weight: 500;
`

const Time = styled.h4`
  font-size: 1rem;
  font-style: italic;
  font-weight: normal;
  margin-top: .25rem;
  color: #868e96;
`

const SocialLink = styled.a`
	font-size: .875rem;
	-moz-osx-font-smoothing: grayscale;
	backface-visibility: hidden;
	transform: translateZ(0);
	transition: transform .25s ease-out;
	&:hover,
	&:focus {
		transform: scale(1.05);
	}
	&:active {
		transform: scale(.9);
	}
	display: inline-block;
	vertical-align: middle;
	padding-left: .5rem;
	padding-right: .5rem;
	padding-top: .5rem;
	padding-bottom: .5rem;
	margin-bottom: 1rem;
	color: #333;
	svg {
		font-size: 1.5em;
    margin-top: 1rem;
	}
`


const Resume = () => (
	<Layout>
    <Title>
      Resume
        <SocialLink
        href='https://www.dropbox.com/s/hog3x7xo5l7pmpo/eneaxharja-resume.pdf?dl=0'
        target='_blank' rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon="cloud-download-alt" />
      </SocialLink>
    </Title>

		<MainTextWrapper theme={theme}>

      <SubTitle style={{marginTop: '4rem'}}>
        SUMMARY OF QUALIFICATIONS
      </SubTitle>
      <hr/>

      <ul style={{marginTop: '3rem'}}>
        <li>Self-taught web developer</li>
        <li>Master of Science with Summa Cum Laude in Accounting and Management at the University of Siena</li>
      </ul>

      <SubTitle style={{marginTop: '5rem'}}>
        WORK EXPERIENCE
      </SubTitle>
      <hr/>

      <Heading3>Web Developer, Freelance</Heading3>
      <Time>10/2017 – Present</Time>
      <ul>
        <li>Used the static site generator Gatsby.js, Netlify CMS, GraphQL and Styled Components to build a blazing-fast and <a href='https://minimal-blog-x.netlify.com' target='_blank' rel='noopener noreferrer'>minimal blog</a></li>
        <li>Designed and implemented a responsive <a href='https://aqueous-badlands-68133.herokuapp.com' target='_blank' rel='noopener noreferrer'>travel agency</a> website using React, React Router v4 and nested routes</li>
        <li>Created a clean and minimal <a href='https://gentle-bastion-82801.herokuapp.com' target='_blank' rel='noopener noreferrer'>portfolio</a> website using React, React Router v4, nested routes and Tachyons</li>
        <li>Built a React and Bootstrap single page <a href='https://tranquil-shore-37678.herokuapp.com' target='_blank' rel='noopener noreferrer'>company</a> website with events image grid and modal window popup previews</li>
        <li>Designed and developed a functioning and responsive <a href='https://weather-app-x.firebaseapp.com' target='_blank' rel='noopener noreferrer'>weather app</a> using React, Bootstrap and Open Weather API</li>
        <li>Created open-source side projects listed on my <a href='https://github.com/eneax' target='_blank' rel='noopener noreferrer'>Github</a> profile</li>
      </ul>

      <Heading3>Social Media Marketing, Trattoria Porsenna Srl - Chiusi (Italy)</Heading3>
      <Time>06/2013 – 09/2017</Time>
      <ul>
        <li>Planned, supervised, and implemented the online and offline marketing activities of the company for the next 3 years</li>
        <li>Successfully built and boosted the company's social media presence on 4 different mediums: Facebook, Instagram, Tripadvisor and Google Maps</li>
        <li>Analyzed market, competitors and customer perception of the brand Trattoria Porsenna</li>
      </ul>

      <SubTitle style={{marginTop: '5rem'}}>
        EDUCATION
      </SubTitle>
      <hr/>
      
      <Heading3>
        Self-Education on Online Coding Schools <br/>
        (<a href='https://www.udemy.com/' target='_blank' rel='noopener noreferrer'>Udemy</a>, <a href='https://tylermcginnis.com/' target='_blank' rel='noopener noreferrer'>tylermcginnis</a>, <a href='https://wesbos.com/' target='_blank' rel='noopener noreferrer'>wesbos</a>, <a href='https://www.leveluptutorials.com/' target='_blank' rel='noopener noreferrer'>leveluptutorials</a>)
      </Heading3>
      <Time>05/2017 – Present</Time>
      <ul>
        <li>HTML - CSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Gatsby.js</li>
        <li>Git</li>
        <li>Node (work-in-progress)</li>
      </ul>

      <Heading3>MSc in Accounting and Management - Siena (Italy)</Heading3>
      <Time>11/2014 – 02/2017</Time>
      <ul>
        <li>International Management</li>
        <li>Corporate Valuation</li>
        <li>Statistics for Business Decision Making</li>
        <li>Consumer Behavior</li>
      </ul>
		</MainTextWrapper>

		<Footer />
	</Layout>
)

export default Resume
