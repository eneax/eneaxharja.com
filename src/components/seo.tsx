import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
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

interface Meta {
  property?: string;
  name?: string;
  content: string;
}

const Seo = ({ description, lang, meta, title }: SEOProps) => {
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

  let typeSafeMeta: Array<Meta>;
  if (meta instanceof Array) {
    typeSafeMeta = meta;
  } else {
    typeSafeMeta = [];
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `github:card`,
          content: `summary`,
        },
        {
          name: `github:creator`,
          content: site.siteMetadata?.social?.github || ``,
        },
        {
          name: `github:title`,
          content: title,
        },
        {
          name: `github:description`,
          content: metaDescription,
        },
        ...typeSafeMeta,
      ]}
    />
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
