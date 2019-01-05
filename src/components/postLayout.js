import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { TitleWrapper, MainTextWrapper } from './global'
import Layout from './layout'
import Footer from './footer'


export default class PostLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data

    return (
			<Layout>
				<TitleWrapper>
					<h1>{markdownRemark.frontmatter.title}</h1>
				</TitleWrapper>

				<MainTextWrapper>
					<div dangerouslySetInnerHTML={{
						__html: markdownRemark.html
					}} />
				</MainTextWrapper>
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
