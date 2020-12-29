import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const NotFoundHeader = styled.h1`
  font-size: 3.5rem;
  text-transform: uppercase;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <NotFoundSection>
      <NotFoundHeader>Page Not found</NotFoundHeader>
      <Link to="/">Back Home</Link>
    </NotFoundSection>
  </Layout>
);

export default NotFoundPage;
