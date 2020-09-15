import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { darkTheme } from '../utils/colors';
import { fluidObject } from '../utils/proptypes';
import { ExternalLink } from '../utils/hyperLinks';

// styles
const CardWrapper = styled.div`
  h3 {
    margin-bottom: 0.75rem;
  }

  a {
    h3 {
      transition: color 0.2s;
      &:hover {
        color: ${darkTheme.primaryDarkerHover};
      }
    }
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 0.75rem;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  img {
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.25rem !important;
  }
`;

const Card = ({ item: { link, title, img, desc } }) => (
  <CardWrapper>
    {link ? (
      <ExternalLink href={link}>
        <h3>{title}</h3>
      </ExternalLink>
    ) : (
      <h3>{title}</h3>
    )}

    <ImageContainer>
      <ExternalLink href={link}>
        <Img
          fluid={img.childImageSharp.fluid}
          alt={`Image of '${title}' project`}
        />
      </ExternalLink>
    </ImageContainer>

    <p>{desc}</p>
  </CardWrapper>
);

Card.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string,
    img: fluidObject,
    desc: PropTypes.string,
  }).isRequired,
};

export default Card;
