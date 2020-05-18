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

    <ProfileImage />

    <p>
      I’m currently living in Berlin (Germany) and working as a Junior
      JavaScript Engineer at{' '}
      <ExternalLink href="https://www.blogfoster.com">blogfoster</ExternalLink>.
    </p>

    <p>
      Most of my time is spent writing{' '}
      <ExternalLink href="https://github.com/eneax">code</ExternalLink> for the
      web. I create fast, highly performing and accessible{' '}
      <ExternalLink href="https://jamstack.org">Jamstack</ExternalLink> websites
      that are responsive and can adapt the layout to a variety of devices and
      screen sizes.
    </p>
    <p>
      When I’m not coding, I read <Link to="/library">books</Link>,
      procrastinate <Link to="/fun">online</Link>, play{' '}
      <ExternalLink href="https://www.youtube.com/c/EneaXharja17">
        video games
      </ExternalLink>{' '}
      or just <Link to="/travel">travel</Link> and walk around in nature. For
      those of you who have been asking me about the software or hardware I use,
      here is my <Link to="/uses">list</Link>.
    </p>
    <p>
      I'm open to new opportunities and always looking for new projects where I
      can contribute. At the moment, I am focusing exclusively on the Jamstack
      approach, and I will not be considering projects that use a traditional
      CMS or a server-side monolith. Feel free to take a look at my complete{' '}
      <Link to="/resume">resume</Link>.
    </p>
    <p>
      One more thing! This site is ad-free and doesn’t use trackers. If you find
      my projects useful to you, please consider supporting my work by{' '}
      <ExternalLink href="https://www.buymeacoffee.com/eneaxharja">
        buying me a coffee
      </ExternalLink>
      .
    </p>
  </Layout>
);

export default About;
