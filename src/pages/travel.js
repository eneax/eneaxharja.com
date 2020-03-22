import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';
import TravelsList from '../components/travelsList';

import { Title, Container } from '../elements';

// query
const getTravelData = graphql`
  {
    allTravelsDataJson {
      edges {
        node {
          title
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;

const Travel = () => {
  const response = useStaticQuery(getTravelData);
  const travelsResources = response.allTravelsDataJson.edges;

  return (
    <Layout>
      <SEO title="️Travel" />

      <Title>
        <span role="img" aria-label="landscape emoji">
          🏞{' '}
        </span>
        Travel
      </Title>

      <Container>
        <p style={{ marginBottom: '3rem' }}>
          This page contains some of the photos I took during my trips over the
          years.
        </p>

        <TravelsList travelsResources={travelsResources} />
      </Container>

      <Footer />
    </Layout>
  );
};

export default Travel;
