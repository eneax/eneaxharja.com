import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Posts from '../components/posts';

const Bio = styled.section`
  display: block;
  margin-bottom: var(--spacing-16);

  .bio-avatar,
  .gatsby-image-wrapper img {
    min-width: 50px;
    border-radius: 50%;
    margin-right: var(--spacing-4);
    margin-bottom: var(--spacing-0);
    float: left;
    clip-path: circle();
    shape-outside: circle();
  }

  p {
    margin-bottom: var(--spacing-0);
  }
`;

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />

      <Bio>
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={['AUTO', 'WEBP', 'AVIF']}
          src="../images/profile-pic.png"
          width={100}
          height={100}
          quality={95}
          placeholder="blurred"
          alt="Profile picture"
        />
        <p>
          Hey there! I'm Enea, a web developer currently working at{' '}
          <a href="https://eqolot.com">eqolot</a>. Welcome to my little corner
          of the web, where I share my open collection of notes, code snippets,
          and resources on <Link to="/tags">topics</Link> that interest me.
        </p>
      </Bio>

      <Posts posts={posts} />
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    allMarkdownRemark: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          description
        }
        excerpt
      }
    }
  }
`;
