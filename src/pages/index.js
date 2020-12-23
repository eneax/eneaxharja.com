import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Directory from '../components/directory';

import { darkTheme } from '../utils/colors';
import { ExternalLink } from '../utils/hyperLinks';

// styles
const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35vh;
  text-align: center;

  h1 {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    color: ${darkTheme.textLighter};
  }
`;

// ui
const HomePage = () => (
  <Layout>
    <SEO title="Home" />

    <HeroContainer>
      <h1>Hi, I'm Enea!</h1>
      <h2>Welcome to my own little corner of the web.</h2>
    </HeroContainer>

    <p>
      I work at <ExternalLink href="https://eqolot.com">eqolot</ExternalLink>{' '}
      during the day and spend most of my time writing{' '}
      <ExternalLink href="https://github.com/eneax">code</ExternalLink> for the
      web. I create fast, highly performing and accessible{' '}
      <ExternalLink href="https://jamstack.org">Jamstack</ExternalLink> websites
      that are responsive and can adapt the layout to a variety of devices and
      screen sizes.
    </p>

    <Directory />

    <p>
      I'm open to new opportunities and always looking for new projects where I
      can contribute (anything built on Jamstack). You can find me on the good
      old-fashioned{' '}
      <ExternalLink href="mailto:eneaxharja@gmail.com">email</ExternalLink>. It
      just might take a few days for me to get back to you.
    </p>
  </Layout>
);

export default HomePage;
