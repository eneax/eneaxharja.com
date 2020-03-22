import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';

import { Title, Container, ExternalLink, InternalLink } from '../elements';

const About = () => (
  <Layout>
    <SEO title="About" />

    <Title>About</Title>

    <Container>
      <p>
        I’m currently living in Berlin (Germany) and working as a Junior
        JavaScript Engineer at{' '}
        <ExternalLink href="https://www.blogfoster.com">
          blogfoster
        </ExternalLink>
        .
      </p>
      <p>
        Most of my time is spent writing{' '}
        <ExternalLink href="https://github.com/eneax">code</ExternalLink> for
        the web. I use the{' '}
        <ExternalLink href="https://jamstack.org">JAMstack</ExternalLink> to
        create fast, highly performing and accessible websites that are
        responsive and can adapt the layout to a variety of devices and screen
        sizes.
      </p>
      <p>
        When I’m not coding, I read{' '}
        <InternalLink to="/library">books</InternalLink>, procrastinate{' '}
        <InternalLink to="/fun">online</InternalLink> (reading blogs or
        listening to podcasts) or just{' '}
        <InternalLink to="/travel">travel</InternalLink> and walk around in
        nature.
      </p>
      <p>
        For those of you who have been asking me about the software or hardware
        I use, here is my <InternalLink to="/uses">list</InternalLink>.
      </p>
      <p>
        I'm open to new opportunities and always looking for new projects where
        I can contribute.
      </p>
      <p>
        At the moment, I am focusing exclusively on the JAMstack architecture,
        and I will not be considering projects that use a traditional CMS or a
        server-side monolith.
      </p>
      <p>
        Feel free to take a look at my complete{' '}
        <InternalLink to="/resume">resume</InternalLink>.
      </p>
    </Container>

    <Footer />
  </Layout>
);

export default About;
