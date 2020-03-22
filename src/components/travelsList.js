import React from 'react';
import PropTypes from 'prop-types';

import TravelsCard from './travelsCard';
import { fluidObject } from '../utils';

const TravelsList = ({ travelsResources }) => (
  <>
    {travelsResources.map(({ node }, index) => (
      <TravelsCard key={index} item={node} />
    ))}
  </>
);

TravelsList.propTypes = {
  travelsResources: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: fluidObject.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default TravelsList;
