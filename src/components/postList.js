import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'


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

const PostList = () => (
  <StaticQuery 
    query={POST_LIST_QUERY}
    render={({allMarkdownRemark}) => (
      allMarkdownRemark.edges.map(({node}) => (
        <article key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link to={`/posts${node.frontmatter.slug}`}>
            Read More
          </Link>
        </article>
      ))
    )}
  />
)

export default PostList