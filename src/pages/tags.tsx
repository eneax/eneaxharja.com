import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql, PageProps } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import styled from 'styled-components';

import Layout from '@/components/layout';
import Seo from '@/components/seo';
import CustomLink from '@/components/customLink';

const LinkWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
`;

interface Group {
  fieldValue: string;
  totalCount: number;
}

interface TagsPageProps {
  allMarkdownRemark: {
    group: Group[];
  };
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const TagsPage = ({
  location,
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}: PageProps<TagsPageProps>) => (
  <Layout location={location} title={title}>
    <section>
      <h1>All Tags</h1>

      {group.map((tag) => (
        <LinkWrapper>
          <CustomLink
            key={tag.fieldValue}
            path={`/tags/${kebabCase(tag.fieldValue)}/`}
          >
            {tag.fieldValue} ({tag.totalCount})
          </CustomLink>
        </LinkWrapper>
      ))}
    </section>
  </Layout>
);

TagsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export const Head = () => <Seo title="All Tags" />;

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
