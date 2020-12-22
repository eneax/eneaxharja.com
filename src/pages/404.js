import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundSection = styled.section`
  text-align: center;
`;

const NotFoundHeader = styled.h1`
  font-size: 1.75rem;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <NotFoundSection>
      <NotFoundHeader>NOT FOUND</NotFoundHeader>
      <Link to="/">Back Home</Link>
    </NotFoundSection>
  </Layout>
);

export default NotFoundPage;
