import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { ImageWrapper } from '../elements';
import { DateTime, fluidObject } from '../utils';

const TravelsCard = ({ item }) => {
  const { title } = item;
  const img = item.img.childImageSharp.fluid;

  return (
    <>
      <ImageWrapper>
        <Img fluid={img} alt={`Image of ${title}`} />
      </ImageWrapper>
      <DateTime style={{ marginBottom: '3rem' }}>{title}</DateTime>
    </>
  );
};

TravelsCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: fluidObject.isRequired,
  }).isRequired,
};

export default TravelsCard;
