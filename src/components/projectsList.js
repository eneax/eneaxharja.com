import React from 'react';
import PropTypes from 'prop-types';

import ProjectCard from './projectCard';
import { fluidObject } from '../utils';

const ProjectList = ({ projects }) => (
  <>
    {projects.map(({ node }, index) => (
      <ProjectCard key={index} project={node} />
    ))}
  </>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        link: PropTypes.string.isRequired,
        img: fluidObject.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default ProjectList;
