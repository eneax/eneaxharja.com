import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { darkTheme } from '../utils/colors';

// styles
const PostMetaContainer = styled.div`
  color: ${darkTheme.textLighter};
  margin-top: -0.25rem;
  margin-bottom: 0.25rem;

  a {
    margin-left: 0.25rem;
  }
`;

const PostMeta = ({ date, tags }) => (
  <PostMetaContainer>
    {date}{' '}
    {tags.map(tag => (
      <Link key={tag.toLowerCase()} to={`/tags/${tag.toLowerCase()}`}>
        #{tag}
      </Link>
    ))}
  </PostMetaContainer>
);

PostMeta.propTypes = {
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PostMeta;
