import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Grid from '../components/grid';

import { ExternalLink } from '../utils/hyperLinks';

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <p>
      I work at <ExternalLink href="https://eqolot.com">eqolot</ExternalLink>{' '}
      during the day and spend most of my time writing{' '}
      <ExternalLink href="https://github.com/eneax">code</ExternalLink> for the
      web. I create fast, highly performing and accessible{' '}
      <ExternalLink href="https://jamstack.org">Jamstack</ExternalLink> websites
      that are responsive and can adapt the layout to a variety of devices and
      screen sizes.
    </p>

    <Grid />

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
