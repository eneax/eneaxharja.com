import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { TitleWrapper, MainTextWrapper } from '../components/xStyles'
import Layout from '../components/layout'
import Footer from '../components/footer'


export default class postLayout extends Component {
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
