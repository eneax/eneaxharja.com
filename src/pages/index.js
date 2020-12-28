import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomeDirectory from '../components/homeDirectory';

// styles
const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40rem;

  h1 {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    color: var(--textLighter);
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
      I work at{' '}
      <a href="https://eqolot.com" target="_blank" rel="noreferrer">
        eqolot
      </a>{' '}
      during the day and spend most of my time writing{' '}
      <a href="https://github.com/eneax" target="_blank" rel="noreferrer">
        code
      </a>{' '}
      for the web. I create fast, highly performing and accessible{' '}
      <a href="https://jamstack.org" target="_blank" rel="noreferrer">
        Jamstack
      </a>{' '}
      websites that are responsive and can adapt the layout to a variety of
      devices and screen sizes.
    </p>

    <HomeDirectory />

    <p>
      I'm open to new opportunities and always looking for new projects where I
      can contribute (anything built on Jamstack). You can find me on the good
      old-fashioned{' '}
      <a href="mailto:eneaxharja@gmail.com" target="_blank" rel="noreferrer">
        email
      </a>
      . It just might take a few days for me to get back to you.
    </p>
  </Layout>
);

export default HomePage;
