import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { ExternalLink } from '../utils/hyperLinks';

// styles
const Image = styled(Img)`
  margin-bottom: 1.58rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.25rem;
`;

const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "eneaxharja.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Image
      fluid={data.profileImage.childImageSharp.fluid}
      alt="My profile picture"
    />
  );
};

const About = () => (
  <Layout>
    <SEO title="About" />

    <h1>About</h1>

    <div>
      <ProfileImage />

      <p>
        I’m currently living in Berlin (Germany) and working as a Junior
        JavaScript Engineer at{' '}
        <ExternalLink href="https://eqolot.com">eqolot</ExternalLink>. Most of
        my time is spent writing{' '}
        <ExternalLink href="https://github.com/eneax">code</ExternalLink> for
        the web. I create fast, highly performing and accessible{' '}
        <ExternalLink href="https://jamstack.org">Jamstack</ExternalLink>{' '}
        websites that are responsive and can adapt the layout to a variety of
        devices and screen sizes.
      </p>
      <p>
        With my content I try to help people learn about more web development,
        enable them to start their own personal projects, and hopefully also
        inspire someone to do the same and contribute to open source.
      </p>
      <p>
        When I’m not coding, I read <Link to="/bookshelf">books</Link>, play{' '}
        <ExternalLink href="https://www.youtube.com/c/EneaXharja17">
          video games
        </ExternalLink>{' '}
        or just <Link to="/travel">travel</Link> and walk around in nature. For
        those of you who have been asking me about the software or hardware I
        use, <Link to="/uses">here</Link> is my list.
      </p>
      <p>
        I'm open to new opportunities and always looking for new projects where
        I can contribute. At the moment, I am focusing exclusively on the
        Jamstack approach, and I will not be considering projects that use a
        traditional CMS or a server-side monolith. Feel free to take a look at
        my <Link to="/resume">resume</Link>, and if you want to reach me out,
        the best way is via{' '}
        <ExternalLink href="mailto:eneaxharja@gmail.com">email</ExternalLink>.
        It just might take a few days (or weeks) for me to get back to you.
      </p>
      <p>
        One more thing! This site is ad-free and doesn’t use trackers. If you
        enjoy reading my blog or find my projects helpful to you, please
        consider supporting my work by becoming a GitHub{' '}
        <ExternalLink href="https://github.com/sponsors/eneax">
          sponsor
        </ExternalLink>
        .
      </p>
    </div>
  </Layout>
);

export default About;
