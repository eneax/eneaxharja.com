import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import RecentPosts from '../components/recentPosts';
import RecentProjects from '../components/recentProjects';

const HomePage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />
    <RecentPosts />
    <RecentProjects />
  </Layout>
);

export default HomePage;
