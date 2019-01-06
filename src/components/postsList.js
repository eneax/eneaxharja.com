import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { MainTextWrapper } from './global'
import { Title, SubTitle, InternalLink } from '../elements'


// graphql query
const POST_LIST_QUERY = graphql`
  query BlogPostListing { 
    allMarkdownRemark(sort: {
      order: DESC
      fields:[frontmatter___date]
    }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

// styles
const PostDate = styled.h3`
  font-size: 1rem;
  font-style: italic;
  font-weight: normal;
  margin-top: .25rem;
  color: #868e96;
`

const theme = {
  marginBottom: 0
}

const PostList = () => (
  <div>
    <Title>Blog</Title>

    <StaticQuery
      query={POST_LIST_QUERY}
      render={({ allMarkdownRemark }) => (
        allMarkdownRemark.edges.map(({ node }) => (
          <Fragment key={node.frontmatter.slug}>

            <MainTextWrapper theme={theme}>

              {/* <SubTitleWrapper>
                <Link to={`/posts${node.frontmatter.slug}`} >
                  <h2>{node.frontmatter.title}</h2>
                </Link>
              </SubTitleWrapper> */}

              <InternalLink to={`/posts${node.frontmatter.slug}`}>
                <SubTitle>
                  {node.frontmatter.title}
                </SubTitle>
              </InternalLink>

              <p>{node.excerpt}</p>
              
              <PostDate>{node.frontmatter.date}</PostDate>
            
            </MainTextWrapper>

          </Fragment>
        ))
      )}
    />
  </div>
)

export default PostList
