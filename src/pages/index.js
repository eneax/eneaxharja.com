import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import LatestProjects from '../components/latestProjects';
import LatestPosts from '../components/latestPosts';

const HomePage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />
    <LatestPosts />
    <LatestProjects />
  </Layout>
);

export default HomePage;
