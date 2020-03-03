import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { MdLoyalty } from 'react-icons/md'

import { Title, Container, SubTitle, InternalLink, TagsLink } from '../elements'
import { DateTime, formatReadingTime } from '../utils'

const PostList = () => (
  <div>
    <Title>Blog</Title>

    <StaticQuery
      query={POST_LIST_QUERY}
      render={({ allMdx }) =>
        allMdx.edges.map(({ node }) => (
          <Fragment key={node.frontmatter.slug}>
            <Container>
              <InternalLink to={`/posts${node.frontmatter.slug}`}>
                <SubTitle>{node.frontmatter.title}</SubTitle>
              </InternalLink>

              <DateTime>
                {node.frontmatter.date}
                {` • ${formatReadingTime(node.timeToRead)}`}
              </DateTime>

              <p>{node.excerpt}</p>

              {node.frontmatter.tags.map(tag => (
                <TagsLink key={tag} to={`/tags/${tag}`}>
                  <MdLoyalty />
                  {tag}
                </TagsLink>
              ))}
            </Container>
          </Fragment>
        ))
      }
    />
  </div>
)

export default PostList

// graphql query
const POST_LIST_QUERY = graphql`
  query BlogPostListing {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`
