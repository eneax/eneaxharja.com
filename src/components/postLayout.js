import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from './layout'
import Footer from './footer'
import { Title, BlogPostContent } from '../elements'
import { DateTime, formatReadingTime } from '../utils'


export default class PostLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data

    return (
			<Layout>
				<Title style={{marginBottom: '0'}}>
					{markdownRemark.frontmatter.title}
        </Title>

				<BlogPostContent>
          <DateTime>
            {markdownRemark.frontmatter.date}
            {` • ${formatReadingTime(markdownRemark.timeToRead)}`}
          </DateTime>
          <div 
            dangerouslySetInnerHTML={{
						__html: markdownRemark.html
					}} />
				</BlogPostContent>
				<Footer />
			</Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
      }
    }
  }
`
