import * as React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Bio from '@/components/bio';

interface AboutPageProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const AboutPage = ({ data, location }: PageProps<AboutPageProps>) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
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
          Most of my open source projects focus on helping people learn more
          about programming, enabling them to start their own personal projects,
          and hopefully also inspire someone to do the same and contribute to
          open source communities. Check out the{' '}
          <Link to="/tags/projects">projects</Link> page and my{' '}
          <a href="https://github.com/eneax">GitHub</a> profile to see
          everything I have build so far.
        </p>

        <h3>What I'm doing now</h3>
        <small>
          <i>Updated on August 21, 2022</i>
        </small>

        <ul>
          <li>
            Focusing on improving my skills and knowledge in{' '}
            <a href="https://ui.dev/typescript">TypeScript</a>
          </li>
          <li>
            Rebuilding this website with Next.js, MDX, Tailwind and Vercel
          </li>
          <li>
            Reading{' '}
            <a href="https://jilljonnes.com/empires-of-light">
              Empires of Light
            </a>{' '}
            by Jill Jonnes
          </li>
          <li>
            Listening to the{' '}
            <a href="https://www.ridehome.info/show/techmeme-ride-home">
              Techmeme Ride Home
            </a>{' '}
            podcast
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

export const Head = () => <Seo title="About" />;

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
