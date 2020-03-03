import React from 'react'
import { graphql } from 'gatsby'

import Layout from './layout'
import SEO from './seo'
import Footer from './footer'

import { Title, Container, InternalLink, UnOrderedList } from '../elements'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`

  return (
    <Layout>
      <SEO title={`"${tag}" tag`} />

      <Title>{tagHeader}</Title>

      <Container>
        <InternalLink to="/tags">All tags</InternalLink>
        <UnOrderedList>
          {edges.map(({ node }) => {
            const { title, slug } = node.frontmatter
            return (
              <li key={slug}>
                <InternalLink to={`/posts/${slug}`}>{title}</InternalLink>
              </li>
            )
          })}
        </UnOrderedList>
      </Container>

      <Footer />
    </Layout>
  )
}

export default Tags

// graphql query
export const query = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
