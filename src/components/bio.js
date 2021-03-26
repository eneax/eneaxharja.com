import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const BioContainer = styled.div`
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

const Bio = () => (
  <BioContainer>
    <StaticImage
      className="bio-avatar"
      layout="fixed"
      formats={['AUTO', 'WEBP', 'AVIF']}
      src="../images/profile-pic.jpg"
      width={100}
      height={100}
      quality={95}
      alt="Profile picture"
    />
    <p>
      Hey there! I'm Enea, a web developer currently working at{' '}
      <a href="https://eqolot.com">eqolot</a>. Welcome to my little corner of
      the web, where I share my open collection of notes, code snippets, and
      resources on things that interest me.
    </p>
  </BioContainer>
);

export default Bio;
