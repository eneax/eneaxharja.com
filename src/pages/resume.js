import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { Container } from '../components/global'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../components/footer'
import { Title, SubTitle, ExternalLink, UnOrderdList, HR } from '../elements'


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

		<Container>

      <SubTitle style={{marginTop: '4rem'}}>
        SUMMARY OF QUALIFICATIONS
      </SubTitle>
      <HR />

      <UnOrderdList style={{marginTop: '3rem'}}>
        <li>Self-taught web developer</li>
        <li>Master of Science with Summa Cum Laude in Accounting and Management at the University of Siena</li>
      </UnOrderdList>

      <SubTitle style={{marginTop: '5rem'}}>
        WORK EXPERIENCE
      </SubTitle>
      <HR />

      <Heading3>Web Developer, Freelance</Heading3>
      <Time>10/2017 – Present</Time>
      <UnOrderdList>
        <li>Used the static site generator Gatsby.js, Netlify CMS, GraphQL and Styled Components to build a blazing-fast and <ExternalLink href='https://minimal-blog-x.netlify.com'>minimal blog</ExternalLink></li>
        <li>Designed and implemented a responsive <ExternalLink href='https://aqueous-badlands-68133.herokuapp.com'>travel agency</ExternalLink> website using React, React Router v4 and nested routes</li>
        <li>Created a clean and minimal <ExternalLink href='https://gentle-bastion-82801.herokuapp.com'>portfolio</ExternalLink> website using React, React Router v4, nested routes and Tachyons</li>
        <li>Built a React and Bootstrap single page <ExternalLink href='https://tranquil-shore-37678.herokuapp.com'>company</ExternalLink> website with events image grid and modal window popup previews</li>
        <li>Designed and developed a functioning and responsive <ExternalLink href='https://weather-app-x.firebaseapp.com'>weather app</ExternalLink> using React, Bootstrap and Open Weather API</li>
        <li>Created open-source side projects listed on my <ExternalLink href='https://github.com/eneax'>Github</ExternalLink> profile</li>
      </UnOrderdList>

      <Heading3>Social Media Marketing, Trattoria Porsenna Srl - Chiusi (Italy)</Heading3>
      <Time>06/2013 – 09/2017</Time>
      <UnOrderdList>
        <li>Planned, supervised, and implemented the online and offline marketing activities of the company for the next 3 years</li>
        <li>Successfully built and boosted the company's social media presence on 4 different mediums: Facebook, Instagram, Tripadvisor and Google Maps</li>
        <li>Analyzed market, competitors and customer perception of the brand Trattoria Porsenna</li>
      </UnOrderdList>

      <SubTitle style={{marginTop: '5rem'}}>
        EDUCATION
      </SubTitle>
      <HR />
      
      <Heading3>
        Self-Education on Online Coding Schools <br/>
        (<ExternalLink href='https://www.udemy.com/'>Udemy</ExternalLink>, <ExternalLink href='https://tylermcginnis.com/'>tylermcginnis</ExternalLink>, <ExternalLink href='https://wesbos.com/'>wesbos</ExternalLink>, <ExternalLink href='https://www.leveluptutorials.com/'>leveluptutorials</ExternalLink>)
      </Heading3>
      <Time>05/2017 – Present</Time>
      <UnOrderdList>
        <li>HTML - CSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Gatsby.js</li>
        <li>Git</li>
        <li>Node (work-in-progress)</li>
      </UnOrderdList>

      <Heading3>MSc in Accounting and Management - Siena (Italy)</Heading3>
      <Time>11/2014 – 02/2017</Time>
      <UnOrderdList>
        <li>International Management</li>
        <li>Corporate Valuation</li>
        <li>Statistics for Business Decision Making</li>
        <li>Consumer Behavior</li>
      </UnOrderdList>
		</Container>

		<Footer />
	</Layout>
)

export default Resume
