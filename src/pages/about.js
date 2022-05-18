import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />

      <section>
        <h1>About</h1>

        <Bio />

        <p>
          This site has no ads, no affiliate links, no tracking, no sponsored
          posts, and no paywall. My only motivation is to share with the world
          what I have learned, to document notes for myself, and hopefully to
          connect with a few people.
        </p>

        <p>
          Most of my projects focus on helping people learn more about
          programming, enabling them to start their own personal projects, and
          hopefully also inspire someone to do the same and contribute to open
          source. Check out the <Link to="/tags/projects">projects</Link> page
          and my <a href="https://github.com/eneax">GitHub</a> profile to see
          everything I have build so far.
        </p>

        <h3>What I'm doing now</h3>
        <small>
          <i>Updated on May 18, 2022</i>
        </small>

        <ul>
          <li>
            Leading the development and maintenance of{' '}
            <a href="https://eqolot.com">eqolot.com</a>
          </li>
          <li>
            Building the EQOLOT mobile app for{' '}
            <a href="https://testflight.apple.com/join/522e096B">iOS</a> and{' '}
            <a href="https://expo.dev/@eqolot/mobile-app?release-channel=prod">
              Android
            </a>
          </li>
          <li>
            Focusing on improving my skills and knowledge in{' '}
            <a href="https://ui.dev/react-hooks">React</a>
          </li>
          <li>
            Reading{' '}
            <a href="https://claytonchristensen.com/books/how-will-you-measure-your-life">
              How Will You Measure Your Life?
            </a>{' '}
            by Clayton Christensen
          </li>
        </ul>

        <h3>Connect</h3>
        <p>
          I love hearing from readers - praise, criticism, suggestions, feedback
          or thoughts on any of my notes. Emails are always welcome. I really do
          read all my emails, but if I don't respond, or do so only after an
          unreasonable amount of time has passed, don't take it personally.
        </p>

        <p>
          Here's how to reach me:{' '}
          <span style={{ color: 'var(--color-primary)' }}>
            eneaxharja [at] gmail [dot] com
          </span>
          .
        </p>
      </section>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
