import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MdLoyalty } from 'react-icons/md'

import Layout from './layout'
import SEO from './seo'
import Footer from './footer'
import { Title, BlogPostContent, TagsLink } from '../elements'
import { DateTime, formatReadingTime } from '../utils'


export default class PostLayout extends Component {
  render() {
    const { mdx } = this.props.data

    return (
			<Layout>
        <SEO title={mdx.frontmatter.title} />

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

        {mdx.frontmatter.tags.map(tag => (
          <TagsLink 
          style={{marginBottom: '1rem', marginRight: '.5rem'}}
            key={tag}
            to={`/tags/${tag}`}
          >
            <MdLoyalty />
            {tag}
          </TagsLink> 
        ))}

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
        tags
      }
    }
  }
`
