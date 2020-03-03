import React, { Fragment } from 'react'

import ProjectCard from './projectCard'

const ProjectList = ({ projects }) => {
  return (
    <Fragment>
      {projects.map(({ node }, index) => (
        <ProjectCard key={index} project={node} />
      ))}
    </Fragment>
  )
}

export default ProjectList
