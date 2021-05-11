import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang, meta, title, schemaMarkup }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            logo
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

  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      name: site.siteMetadata.title,
      description: site.siteMetadata.description,
      url: site.siteMetadata.siteUrl,
      logo: site.siteMetadata.logo,
    },
  ];

  const schema = schemaMarkup ? [...baseSchema, schemaMarkup] : baseSchema;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
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
      ].concat(meta)}
    >
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  schemaMarkup: PropTypes.object,
};

export default SEO;
