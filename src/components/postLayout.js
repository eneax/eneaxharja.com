import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from './layout'
import Footer from './footer'
import { Title, BlogPostContent } from '../elements'
import { DateTime, formatReadingTime } from '../utils'


export default class PostLayout extends Component {
  render() {
    const { mdx } = this.props.data

    return (
			<Layout>
				<Title style={{marginBottom: '0'}}>
					{mdx.frontmatter.title}
        </Title>

				<BlogPostContent>
          <DateTime>
            {mdx.frontmatter.date}
              {` • ${formatReadingTime(mdx.timeToRead)}`}
          </DateTime>

          <MDXRenderer>{mdx.body}</MDXRenderer>
				</BlogPostContent>
				<Footer />
			</Layout>
    )
  }
}

// graphql query
export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
      }
    }
  }
`
