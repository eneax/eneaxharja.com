import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';

// query
const getFunData = graphql`
  {
    allFunResourcesDataJson {
      edges {
        node {
          link
          title
          desc
          author
        }
      }
    }
  }
`;

const Fun = () => {
  const response = useStaticQuery(getFunData);
  const funResources = response.allFunResourcesDataJson.edges;

  return (
    <Layout>
      <SEO title="Fun" />

      <h1>Fun</h1>

      <div>
        <p>
          This page contains podcasts, blogs and newsletters that I like to
          listen to and read, in addition to <Link to="/library">books</Link>,
          during my free time.
        </p>

        {funResources.map(({ node }, index) => (
          <Card key={index} item={node} />
        ))}
      </div>
    </Layout>
  );
};

export default Fun;
