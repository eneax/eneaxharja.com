import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostsList from '../components/postsList';
import Footer from '../components/footer';

const Posts = () => (
  <Layout>
    <SEO title="Blog Posts" />

    <PostsList />
    <Footer />
  </Layout>
);

export default Posts;
