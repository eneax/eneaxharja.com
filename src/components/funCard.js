import React, { Fragment } from 'react'
import Img from 'gatsby-image'

import { ImageWrapper, SubTitle, ExternalLink } from '../elements'
import { grey } from '../utils'
import FadeInSection from '../utils/fadeInSection'


const FunCard = ({ item }) => {
  const { link, title, desc } = item
  const img = item.img.childImageSharp.fluid

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

      <p style={{color: `${grey}`}}>{desc}</p>
      </FadeInSection>
    </Fragment>
  )
}

export default FunCard
