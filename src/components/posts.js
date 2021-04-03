import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { formatReadingTime } from '../utils/helpers';

const Post = styled.article`
  margin-bottom: var(--spacing-10);
  margin-top: var(--spacing-10);

  header {
    margin-bottom: var(--spacing-2);
  }

  h2 {
    font-size: var(--fontSize-4);
    color: var(--color-primary);
    margin-bottom: var(--spacing-2);
    margin-top: var(--spacing-0);
  }

  p {
    margin-bottom: var(--spacing-0);
  }
`;

const Posts = ({ posts }) => (
  <section>
    {posts.map((post) => {
      const title = post.frontmatter.title || post.fields.slug;

      return (
        <Post
          itemScope
          itemType="http://schema.org/Article"
          key={post.fields.slug}
        >
          <header>
            <h2>
              <Link to={post.fields.slug} itemProp="url">
                <span itemProp="headline">{title}</span>
              </Link>
            </h2>
            <small>
              {post.frontmatter.date}
              {` • ${formatReadingTime(post.timeToRead)}`}
            </small>
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
              itemProp="description"
            />
          </section>
        </Post>
      );
    })}
  </section>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string,
      }).isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
      timeToRead: PropTypes.number.isRequired,
      excerpt: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Posts;
