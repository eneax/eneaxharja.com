import PropTypes from 'prop-types';

/*
  * gatsbyjs 
  https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/src/index.js
*/

export const fixedObject = PropTypes.shape({
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  base64: PropTypes.string,
  tracedSVG: PropTypes.string,
  srcWebp: PropTypes.string,
  srcSetWebp: PropTypes.string,
  media: PropTypes.string,
});
// fixed: PropTypes.oneOfType([fixedObject, PropTypes.arrayOf(fixedObject)])

export const fluidObject = PropTypes.shape({
  aspectRatio: PropTypes.number,
  src: PropTypes.string,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  base64: PropTypes.string,
  tracedSVG: PropTypes.string,
  srcWebp: PropTypes.string,
  srcSetWebp: PropTypes.string,
  media: PropTypes.string,
});
// fluid: PropTypes.oneOfType([fluidObject, PropTypes.arrayOf(fluidObject)])
