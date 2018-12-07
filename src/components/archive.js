import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'


const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark {
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

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        <h3>Archive</h3>
        <ul>
          {allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/posts${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    )}
  />
)

export default Archive
