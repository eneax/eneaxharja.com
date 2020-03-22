import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MdLoyalty } from 'react-icons/md';

import Layout from './layout';
import SEO from './seo';
import Footer from './footer';
import { Title, BlogPostContent, TagsLink } from '../elements';
import { DateTime, formatReadingTime } from '../utils';

const PostLayout = ({
  data: {
    mdx: {
      frontmatter: { title, date, tags },
      timeToRead,
      body,
    },
  },
}) => (
  <Layout>
    <SEO title={title} />

    <Title style={{ marginBottom: '0' }}>{title}</Title>

    <BlogPostContent>
      <DateTime>
        {date}
        {` • ${formatReadingTime(timeToRead)}`}
      </DateTime>

      <MDXRenderer>{body}</MDXRenderer>
    </BlogPostContent>

    {tags.map(tag => (
      <TagsLink
        style={{ marginBottom: '1rem', marginRight: '.5rem' }}
        key={tag}
        to={`/tags/${tag}`}
      >
        <MdLoyalty />
        {tag}
      </TagsLink>
    ))}

    <Footer />
  </Layout>
);

export default PostLayout;

PostLayout.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      body: PropTypes.string.isRequired,
      timeToRead: PropTypes.number.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

// graphql query
export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        tags
      }
    }
  }
`;
