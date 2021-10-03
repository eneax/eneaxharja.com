import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const BioWrapper = styled.section`
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

  .bio-avatar {
    border: 1px dashed var(--color-primary);
    transition: all 0.25s ease;
    &:hover {
      border: 1px solid;
      transform: scale(1.05);
    }
  }

  p {
    margin-bottom: var(--spacing-0);
  }
`;

const Bio = () => (
  <BioWrapper>
    <a
      href="mailto:tasters_00zillion@icloud.com"
      target="_blank"
      rel="noopener noreferrer"
    >
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
    </a>
    <p>
      Hey there! I'm Enea, a web developer currently working at{' '}
      <a href="https://eqolot.com">eqolot</a>. Welcome to my little corner of
      the web, where I share my open collection of notes, code snippets, and
      resources on <Link to="/tags">topics</Link> that interest me.
    </p>
  </BioWrapper>
);

export default Bio;
