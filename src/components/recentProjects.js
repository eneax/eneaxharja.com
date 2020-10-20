import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { MdArrowForward } from 'react-icons/md';

import Card from './card';

// styles
const RecentProjectsContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;

  h2 {
    text-decoration: underline;
    margin-bottom: -1rem;
  }
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
    <RecentProjectsContainer>
      <h2>Recent Projects</h2>

      {projects.map(({ node }, index) => (
        <Card key={index} item={node} />
      ))}

      <Link to="/projects">
        View all projects <MdArrowForward size={13} />
      </Link>
    </RecentProjectsContainer>
  );
};
export default RecentProjects;
