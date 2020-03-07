import React from 'react'
import { graphql } from 'gatsby'
import { MdLoyalty } from 'react-icons/md'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'

import { Title, Container, TagsLink } from '../elements'

// query
export const query = graphql`
  query {
    allMdx(limit: 2000, filter: { frontmatter: { published: { eq: true } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
    }
  }
`

// styles
const Paragraph = styled.p`
  margin-top: 1rem;
  margin-bottom: 2rem !important;
`

const TagsLinkWrapper = styled(TagsLink)`
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  margin-left: 0 !important;
`

const TagsPage = ({
  data: {
    allMdx: { group, totalCount },
  },
}) => (
  <Layout>
    <SEO title="Tags" />

    <Container style={{ minHeight: '68vh' }}>
      <Title>Tags</Title>

      <Paragraph>
        {totalCount} posts are listed in {group.length} categories
      </Paragraph>

      {group.map(({ fieldValue, totalCount }) => (
        <TagsLinkWrapper
          key={fieldValue}
          to={`/tags/${kebabCase(fieldValue)}/`}
        >
          <MdLoyalty />
          {fieldValue} ({totalCount})
        </TagsLinkWrapper>
      ))}
    </Container>

    <Footer />
  </Layout>
)

export default TagsPage
