import React, { Fragment } from 'react'
import Img from 'gatsby-image'

import { ImageWrapper, SubTitle, ExternalLink } from '../elements'
import FadeInSection from '../utils/fadeInSection'


const ProjectCard = ({ project }) => {
  const { link, title, desc } = project
  const img = project.img.childImageSharp.fluid

  return (
    <Fragment>
      <FadeInSection>
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

        <p>{desc}</p>
      </FadeInSection>
    </Fragment>
  )
}

export default ProjectCard
