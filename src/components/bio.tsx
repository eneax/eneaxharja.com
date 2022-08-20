import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const BioWrapper = styled.section`
  display: block;

  .bio-avatar,
  .gatsby-image-wrapper img {
    min-width: 50px;
    border-radius: 50%;
    margin-right: var(--spacing-8);
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
`;

const Bio = ({ showAvatar }: { showAvatar?: boolean }) => (
  <BioWrapper>
    <Link to="/about">
      {showAvatar && (
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={['auto', 'webp', 'avif']}
          src="../images/profile-pic.png"
          width={100}
          height={100}
          quality={95}
          placeholder="blurred"
          alt="Profile picture"
        />
      )}
    </Link>
    <p>
      Hey there! I'm Enea, a Web Developer at{' '}
      <a href="https://wohnvoll.com">wohnvoll</a> in Berlin. Welcome to my
      little corner of the web, where I share my personal collection of notes,
      code snippets, and resources on <Link to="/tags">topics</Link> that
      interest me.
    </p>
  </BioWrapper>
);

export default Bio;
