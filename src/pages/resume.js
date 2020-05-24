import React from 'react';
import styled from 'styled-components';
import { MdCloudDownload } from 'react-icons/md';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { ExternalLink, SocialIconLink } from '../utils/hyperLinks';
import { darkTheme } from '../utils/colors';

// styles
const DownloadIconLink = styled(SocialIconLink)`
  svg {
    margin-bottom: -0.35rem;
  }
`;

const Subtitle = styled.h2`
  margin-top: '4rem';
  text-transform: uppercase;
`;

const DateTime = styled.p`
  color: ${darkTheme.textLighter};
  margin-top: -1rem;
`;

const Resume = () => (
  <Layout>
    <SEO title="Resume" />

    <h1>
      Resume
      <DownloadIconLink href="https://drive.google.com/open?id=1gIoe1TdJHsEGCV07QAmBgRlRxMNeTF9t">
        <MdCloudDownload />
      </DownloadIconLink>
    </h1>

    <div>
      <Subtitle>Work Experience</Subtitle>

      <h3>Junior JavaScript Engineer, blogfoster - Berlin (Germany)</h3>
      <DateTime>11/2019 – Present</DateTime>
      <ul>
        <li>
          Using JavaScript and the React ecosystem to build technology that
          helps professional bloggers and social media influencers analyse,
          manage and effectively monetize their reach.
        </li>
      </ul>

      <h3>Open Source Web Developer, Freelance - Remote</h3>
      <DateTime>10/2017 – Present</DateTime>
      <ul>
        <li>
          Designed and developed a responsive{' '}
          <ExternalLink href="https://gatsby-landing-page-arty.netlify.com">
            landing page
          </ExternalLink>{' '}
          built with Gatsby, CSS Grid, styled-components, GraphQL and Contentful
        </li>
        <li>
          Designed and implemented a responsive{' '}
          <ExternalLink href="https://delicious-x.netlify.com">
            restaurant
          </ExternalLink>{' '}
          website using Gatsby, Contentful, GraphQL and styled-components
        </li>
        <li>
          Designed and developed a responsive{' '}
          <ExternalLink href="https://globetrotter.netlify.com">
            travel agency
          </ExternalLink>{' '}
          website using Gatsby, Markdown, GraphQL and styled-components
        </li>
        <li>
          Created a clean and minimal{' '}
          <ExternalLink href="https://kristjanaxharja.netlify.com">
            portfolio
          </ExternalLink>{' '}
          website using Gatsby and GraphQL and styled it with styled-components
        </li>
        <li>
          Used the static site generator Gatsby, Netlify CMS, GraphQL and Web
          Animations API to build a blazing-fast and{' '}
          <ExternalLink href="https://minimal-blog-x.netlify.com">
            minimal blog
          </ExternalLink>
        </li>
        <li>
          Designed and implemented a functioning and responsive{' '}
          <ExternalLink href="https://weather-app-x.firebaseapp.com">
            weather app
          </ExternalLink>{' '}
          using React, Bootstrap and Open Weather API
        </li>
        <li>
          Created open-source side projects listed on my{' '}
          <ExternalLink href="https://github.com/eneax">GitHub</ExternalLink>{' '}
          profile
        </li>
      </ul>

      <h3>Front-End Developer, Fornace - San Pietro in Cariano (Italy)</h3>
      <DateTime>03/2019 – 09/2019</DateTime>
      <ul>
        <li>
          Used React Native, while working on a team of developers, to build an
          iOS and Android app for an Italian large-scale retailer with over 100
          directly managed supermarkets
        </li>
        <li>
          Utilised the latest HTML5 and CSS3 technologies to build a responsive
          landing page with smooth scrolling and visually interesting animations
        </li>
        <li>
          Maintained existing websites and built new ones from the ground up
          using Wordpress and company's custom Content Management System
        </li>
      </ul>

      <h3>Social Media Marketing, Trattoria Porsenna - Chiusi (Italy)</h3>
      <DateTime>06/2013 – 09/2017</DateTime>
      <ul>
        <li>
          Analyzed market, competitors and customer perception of the brand
          Trattoria Porsenna
        </li>
        <li>
          Planned, supervised, and implemented the online and offline marketing
          activities of the company for the next 3 years
        </li>
        <li>
          Successfully built and boosted the company's social media presence on
          4 different mediums: Facebook, Instagram, Tripadvisor and Google Maps
        </li>
      </ul>

      <Subtitle>Education</Subtitle>

      <h3>
        Self-Education on Online Coding Schools <br />(
        <ExternalLink href="https://www.freecodecamp.org/">
          freeCodeCamp
        </ExternalLink>
        , <ExternalLink href="https://www.udemy.com/">Udemy</ExternalLink>,{' '}
        <ExternalLink href="https://tylermcginnis.com/">
          tylermcginnis
        </ExternalLink>
        , <ExternalLink href="https://wesbos.com/">wesbos</ExternalLink>,{' '}
        <ExternalLink href="https://www.leveluptutorials.com/">
          leveluptutorials
        </ExternalLink>
        )
      </h3>
      <DateTime>05/2017 – Present</DateTime>
      <ul>
        <li>HTML - CSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>React Native</li>
        <li>Gatsby.js</li>
        <li>GraphQL</li>
        <li>Git</li>
      </ul>

      <h3>
        MSc with Summa Cum Laude in Accounting and Management - Siena (Italy)
      </h3>
      <DateTime>11/2014 – 02/2017</DateTime>
      <ul>
        <li>International Management</li>
        <li>Corporate Valuation</li>
        <li>Statistics for Business Decision Making</li>
        <li>Consumer Behavior</li>
      </ul>
    </div>
  </Layout>
);

export default Resume;
