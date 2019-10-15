import React, { Fragment } from 'react'
import Img from 'gatsby-image'

import { ImageWrapper, SubTitle, ExternalLink } from '../elements'
import { grey } from '../utils'


const ProjectCard = ({ project }) => {
  const { link, title, desc } = project
  const img = project.img.childImageSharp.fluid

  return (
    <Fragment>
      <ExternalLink href={link}>
        <SubTitle>
          {title}
        </SubTitle>
      </ExternalLink>

      <ImageWrapper>
        <ExternalLink href={link}>
          <Img 
            fluid={img}
            alt={`Image of '${title}' project`}
          />
        </ExternalLink>
      </ImageWrapper>

      <p style={{color: `${grey}`}}>{desc}</p>
    </Fragment>
  )
}

export default ProjectCard
