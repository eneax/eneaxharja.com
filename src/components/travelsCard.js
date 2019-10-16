import React, { Fragment } from 'react'
import Img from 'gatsby-image'

import { ImageWrapper } from '../elements'
import { DateTime } from '../utils'
import FadeInSection from '../utils/fadeInSection'


const TravelsCard = ({ item }) => {
  const { title } = item
  const img = item.img.childImageSharp.fluid

  return (
    <Fragment>
      <FadeInSection>
        <ImageWrapper>
          <Img 
            fluid={img}
            alt={`Image of ${title}`}
          />
        </ImageWrapper>
        <DateTime style={{marginBottom: '3rem'}}>{title}</DateTime>
      </FadeInSection>
    </Fragment>
  )
}

export default TravelsCard
