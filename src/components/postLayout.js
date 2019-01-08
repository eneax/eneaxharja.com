import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from './layout'
import Footer from './footer'
import { Title, BlogPostContent } from '../elements'


export default class PostLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data

    return (
			<Layout>
				<Title>
					{markdownRemark.frontmatter.title}
        </Title>

				<BlogPostContent>
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
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
