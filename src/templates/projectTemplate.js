import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';
import Pagination from '../components/pagination';

// query
export const getProjectsData = graphql`
  query getProjectsData($skip: Int!, $limit: Int!) {
    allProjectsDataJson(limit: $limit, skip: $skip) {
      edges {
        node {
          link
          title
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          desc
        }
      }
    }
  }
`;

const ProjectTemplate = ({ data, pageContext }) => {
  const projects = data.allProjectsDataJson.edges;

  return (
    <Layout>
      <SEO title="Projects" />

      <h1>Projects</h1>

      {projects.map(({ node }, index) => (
        <Card key={index} item={node} />
      ))}

      <Pagination page="projects" pageContext={pageContext} />
    </Layout>
  );
};

ProjectTemplate.propTypes = {
  data: PropTypes.shape({
    allProjectsDataJson: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            img: PropTypes.object.isRequired,
            desc: PropTypes.string.isRequired,
          }),
        }).isRequired
      ).isRequired,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProjectTemplate;
