import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

    <p>Here is a list of pages that might be interesting to you:</p>
    <ul>
      <li>
        <Link to="/bookshelf">Bookshelf</Link>
      </li>
      <li>
        <Link to="/travel">Travel</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
    </ul>
  </Layout>
);

export default NotFoundPage;
