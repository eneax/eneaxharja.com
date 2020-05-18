import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { formatReadingTime } from '../utils/formatReadingTime';
import { darkTheme } from '../utils/colors';

// styles
const PostMetaContainer = styled.p`
  color: ${darkTheme.textLighter};
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
`;

const PostMeta = ({ date, timeToRead, tags }) => (
  <PostMetaContainer>
    {date}
    {` | ${formatReadingTime(timeToRead)} | `}
    <span>Tag: </span>
    {tags.map(tag => (
      <Link key={tag.toLowerCase()} to={`/tags/${tag.toLowerCase()}`}>
        {tag}
      </Link>
    ))}
  </PostMetaContainer>
);

PostMeta.propTypes = {
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PostMeta;
