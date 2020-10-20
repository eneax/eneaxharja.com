import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { ExternalLink } from '../utils/hyperLinks';
import { darkTheme } from '../utils/colors';

// styles
const ResumeContainer = styled.div`
  margin-bottom: 3rem;

  h2 {
    margin-top: 4rem;
    text-decoration: underline;
  }

  h3 {
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

const DateTime = styled.p`
  color: ${darkTheme.textLighter};
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

const Tasks = styled.ul`
  margin-top: 0.5rem;
`;

const Resume = () => (
  <Layout>
    <SEO title="Resume" />

    <h1>Resume</h1>

    <ResumeContainer>
      <h2>Work Experience</h2>

      <h3>Junior JavaScript Engineer, eqolot - Berlin (Germany)</h3>
      <DateTime>11/2019 – Present</DateTime>
      <Tasks>
        <li>
          Using JavaScript and the React ecosystem to build technology that
          helps professional bloggers and social media influencers analyse,
          manage and effectively monetize their reach.
        </li>
      </Tasks>

      <h3>Open Source Developer - Remote</h3>
      <DateTime>10/2017 – Present</DateTime>
      <Tasks>
        <li>
          Responsive{' '}
          <ExternalLink href="https://github.com/eneax/coffee-shop">
            coffee shop
          </ExternalLink>{' '}
          website built with Gatsby, Tailwind CSS, Contentful and Snipcart
        </li>
        <li>
          Created a simple starter to get your{' '}
          <ExternalLink href="https://github.com/eneax/gatsby-dev-portfolio">
            developer portfolio
          </ExternalLink>{' '}
          up and running quickly with Gatsby and Strapi Headless CMS
        </li>
        <li>
          Designed and developed a responsive{' '}
          <ExternalLink href="https://github.com/eneax/gatsby-landing-page-arty">
            landing page
          </ExternalLink>{' '}
          built with Gatsby, CSS Grid, styled-components, GraphQL and Contentful
        </li>
        <li>
          Designed and implemented a responsive{' '}
          <ExternalLink href="https://github.com/eneax/gatsby-restaurant">
            restaurant
          </ExternalLink>{' '}
          website using Gatsby, Contentful, GraphQL and styled-components
        </li>
        <li>
          Designed and developed a responsive{' '}
          <ExternalLink href="https://github.com/eneax/globetrotter">
            travel agency
          </ExternalLink>{' '}
          website using Gatsby, Markdown, GraphQL and styled-components
        </li>
        <li>
          More open-source projects listed on my{' '}
          <ExternalLink href="https://github.com/eneax">GitHub</ExternalLink>{' '}
          profile
        </li>
      </Tasks>

      <h3>Front-End Developer, Fornace - Verona (Italy)</h3>
      <DateTime>03/2019 – 09/2019</DateTime>
      <Tasks>
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
      </Tasks>

      <h2>Education</h2>

      <h3>
        Self-Education on Online Coding Schools <br />(
        <ExternalLink href="https://www.freecodecamp.org/">
          freeCodeCamp
        </ExternalLink>
        , <ExternalLink href="https://www.udemy.com/">Udemy</ExternalLink>,{' '}
        <ExternalLink href="https://ui.dev/">ui.dev</ExternalLink>,{' '}
        <ExternalLink href="https://wesbos.com/">wesbos</ExternalLink>,{' '}
        <ExternalLink href="https://www.leveluptutorials.com/">
          leveluptutorials
        </ExternalLink>
        )
      </h3>
      <DateTime>05/2017 – Present</DateTime>
      <Tasks>
        <li>HTML - CSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Gatsby.js</li>
        <li>GraphQL</li>
        <li>styled-components</li>
        <li>Git</li>
      </Tasks>

      <h3>MSc with Honors in Accounting and Management - Siena (Italy)</h3>
      <DateTime>11/2014 – 02/2017</DateTime>
      <Tasks>
        <li>International Management</li>
        <li>Corporate Valuation</li>
        <li>Statistics for Business Decision Making</li>
        <li>Consumer Behavior</li>
      </Tasks>
    </ResumeContainer>
  </Layout>
);

export default Resume;
