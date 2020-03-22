import React from 'react';
import PropTypes from 'prop-types';

import FunCard from './funCard';
import { fluidObject } from '../utils';

const FunList = ({ funResources }) => (
  <>
    {funResources.map(({ node }, index) => (
      <FunCard key={index} item={node} />
    ))}
  </>
);

FunList.propTypes = {
  funResources: PropTypes.arrayOf(
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

export default FunList;
