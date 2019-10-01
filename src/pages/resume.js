import React from 'react'
import { FaCloudDownloadAlt } from 'react-icons/fa'

import Layout from '../components/layout'
import Footer from '../components/footer'
import { Title, SubTitle, HeadingThree, Container, ExternalLink, UnOrderedList, SocialLink, HR } from '../elements'
import { DateTime } from '../utils'


const Resume = () => (
	<Layout>
    <Title>
      Resume
        <SocialLink
          style={{marginTop: '1rem'}}
          href='https://drive.google.com/open?id=1gIoe1TdJHsEGCV07QAmBgRlRxMNeTF9t'
        >
          <FaCloudDownloadAlt />
      </SocialLink>
    </Title>

		<Container>
      <SubTitle style={{marginTop: '4rem'}}>
        WORK EXPERIENCE
      </SubTitle>
      <HR />

      <HeadingThree>
        Web Developer, Freelance
      </HeadingThree>
      <DateTime style={{marginBottom: '1.45rem'}}>
        10/2017 – Present
      </DateTime>
      <UnOrderedList>
        <li>Designed and developed a responsive <ExternalLink href='https://gatsby-landing-page-arty.netlify.com'>landing page</ExternalLink> built with Gatsby, CSS Grid, styled-components, GraphQL and Contentful</li>
        <li>Designed and implemented a responsive <ExternalLink href='https://delicious-x.netlify.com'>restaurant</ExternalLink> website using Gatsby, Contentful, GraphQL and styled-components</li>
        <li>Designed and developed a responsive <ExternalLink href='https://globetrotter.netlify.com'>travel agency</ExternalLink> website using Gatsby, Markdown, GraphQL and styled-components</li>
        <li>Created a clean and minimal <ExternalLink href='https://kristjanaxharja.netlify.com'>portfolio</ExternalLink> website using Gatsby and GraphQL and styled it with styled-components</li>
        <li>Used the static site generator Gatsby, Netlify CMS, GraphQL and Web Animations API to build a blazing-fast and <ExternalLink href='https://minimal-blog-x.netlify.com'>minimal blog</ExternalLink></li>
        <li>Designed and implemented a functioning and responsive <ExternalLink href='https://weather-app-x.firebaseapp.com'>weather app</ExternalLink> using React, Bootstrap and Open Weather API</li>
        <li>Created open-source side projects listed on my <ExternalLink href='https://github.com/eneax'>Github</ExternalLink> profile</li>
      </UnOrderedList>

      <HeadingThree>
        Front-End Developer, Fornace - San Pietro in Cariano (Italy)
      </HeadingThree>
      <DateTime style={{marginBottom: '1.45rem'}}>
        03/2019 – 09/2019
      </DateTime>
      <UnOrderedList>
        <li>Used React Native, while working on a team of developers, to build an iOS and Android app for an Italian large-scale retailer with over 100 directly managed supermarkets</li>
        <li>Utilised the latest HTML5 and CSS3 technologies to build a responsive landing page with smooth scrolling and visually interesting animations</li>
        <li>Maintained existing websites and built new ones from the ground up using Wordpress and company's custom Content Management System</li>
      </UnOrderedList>

      <HeadingThree>
        Social Media Marketing, Trattoria Porsenna - Chiusi (Italy)
      </HeadingThree>
      <DateTime style={{marginBottom: '1.45rem'}}>
        06/2013 – 09/2017
      </DateTime>
      <UnOrderedList>
        <li>Analyzed market, competitors and customer perception of the brand Trattoria Porsenna</li>
        <li>Planned, supervised, and implemented the online and offline marketing activities of the company for the next 3 years</li>
        <li>Successfully built and boosted the company's social media presence on 4 different mediums: Facebook, Instagram, Tripadvisor and Google Maps</li>
      </UnOrderedList>

      <SubTitle style={{marginTop: '5rem'}}>
        EDUCATION
      </SubTitle>
      <HR />
      
      <HeadingThree>
        Self-Education on Online Coding Schools <br/>
        (<ExternalLink href='https://www.udemy.com/'>Udemy</ExternalLink>, <ExternalLink href='https://tylermcginnis.com/'>tylermcginnis</ExternalLink>, <ExternalLink href='https://wesbos.com/'>wesbos</ExternalLink>, <ExternalLink href='https://www.leveluptutorials.com/'>leveluptutorials</ExternalLink>)
      </HeadingThree>
      <DateTime style={{marginBottom: '1.45rem'}}>
        05/2017 – Present
      </DateTime>
      <UnOrderedList>
        <li>HTML - CSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>React Native</li>
        <li>Gatsby.js</li>
        <li>GraphQL</li>
        <li>Git</li>
      </UnOrderedList>

      <HeadingThree>
        MSc with Summa Cum Laude in Accounting and Management - Siena (Italy)
      </HeadingThree>
      <DateTime style={{marginBottom: '1.45rem'}}>
        11/2014 – 02/2017
      </DateTime>
      <UnOrderedList>
        <li>International Management</li>
        <li>Corporate Valuation</li>
        <li>Statistics for Business Decision Making</li>
        <li>Consumer Behavior</li>
      </UnOrderedList>
		</Container>

		<Footer />
	</Layout>
)

export default Resume
