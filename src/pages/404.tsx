import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql, PageProps } from 'gatsby';

import Layout from '@/components/layout';
import Seo from '@/components/seo';

interface NotFoundPageProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const NotFoundPage = ({ data, location }: PageProps<NotFoundPageProps>) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

NotFoundPage.propTypes = {
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

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
