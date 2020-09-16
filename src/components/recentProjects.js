import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Card from './card';

// styles
const ProjectsContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

// query
const getRecentProjects = graphql`
  {
    allProjectsDataJson(limit: 3) {
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

const RecentProjects = () => {
  const response = useStaticQuery(getRecentProjects);
  const projects = response.allProjectsDataJson.edges;

  return (
    <ProjectsContainer>
      <h2>Recent Projects</h2>
      <p>
        I am passionate about open source software and giving back to others.
      </p>

      {projects.map(({ node }, index) => (
        <Card key={index} item={node} />
      ))}

      <Link to="/projects">View all projects</Link>
    </ProjectsContainer>
  );
};
export default RecentProjects;
