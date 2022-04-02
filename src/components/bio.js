import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const TWITTER_LINK =
  'https://twitter.com/messages/compose?recipient_id=1198292145947467776&text=Hey';
const TWITTER_HANDLE = '@eneaxharja';

const BioWrapper = styled.section`
  display: block;
  margin-bottom: var(--spacing-16);

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

  p {
    margin-bottom: var(--spacing-0);
  }
`;

const Bio = () => (
  <BioWrapper>
    <a href={TWITTER_LINK} data-screen-name={TWITTER_HANDLE}>
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
      Hey there! I'm Enea, a Web Developer at{' '}
      <a href="https://eqolot.com">EQOLOT</a> in Berlin. Welcome to my little
      corner of the web, where I share my personal collection of notes, code
      snippets, and resources on <Link to="/tags">topics</Link> that interest
      me.
    </p>
  </BioWrapper>
);

export default Bio;
