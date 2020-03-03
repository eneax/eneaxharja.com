import React, { Fragment } from 'react'
import Img from 'gatsby-image'

import { ImageWrapper } from '../elements'
import { DateTime } from '../utils'

const TravelsCard = ({ item }) => {
  const { title } = item
  const img = item.img.childImageSharp.fluid

  return (
    <Fragment>
      <ImageWrapper>
        <Img fluid={img} alt={`Image of ${title}`} />
      </ImageWrapper>
      <DateTime style={{ marginBottom: '3rem' }}>{title}</DateTime>
    </Fragment>
  )
}

export default TravelsCard
