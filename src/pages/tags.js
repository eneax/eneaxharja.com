import React from "react"
import { graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'

import { Title, Container, InternalLink, UnOrderedList } from '../elements'


const TagsPage = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout>
    <SEO title='Tags' />
    
    <Container>
      <Title>Tags</Title>
      <UnOrderedList>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <InternalLink to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </InternalLink>
          </li>
        ))}
      </UnOrderedList>
    </Container>

    <Footer />
  </Layout>
)

export default TagsPage

// query
export const query = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
