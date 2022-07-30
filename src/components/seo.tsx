import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  description?: string;
  title: string;
  children?: React.ReactNode;
}

interface SEOQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      social: {
        github: string;
      };
    };
  };
}

const Seo = ({ description, title, children }: SEOProps) => {
  const { site }: SEOQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              github
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="github:card" content="summary" />
      <meta
        name="github:creator"
        content={site.siteMetadata?.social?.github || ``}
      />
      <meta name="github:title" content={title} />
      <meta name="github:description" content={metaDescription} />
      {children}
    </>
  );
};

Seo.defaultProps = {
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Seo;
