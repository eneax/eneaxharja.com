import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from './layout'
import SEO from './seo'
import Footer from './footer'

import { Title, Container, InternalLink, UnOrderedList } from '../elements'

const PostLinks = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-gap: 0.25rem;
`

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

      <Container style={{ minHeight: '60vh' }}>
        <InternalLink to="/tags">All tags</InternalLink>

        <PostLinks>
          {edges.map(({ node }) => {
            const { title, slug } = node.frontmatter
            return (
              <InternalLink key={slug} to={`/posts/${slug}`}>
                {title}
              </InternalLink>
            )
          })}
        </PostLinks>
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
