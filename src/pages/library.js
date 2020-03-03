import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import BookList from '../components/bookList'

import { Title, Container } from '../elements'

// query
const getLibraryData = graphql`
  {
    allBookLibraryDataJson {
      edges {
        node {
          link
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          title
          author
        }
      }
    }
  }
`

const Library = () => {
  const response = useStaticQuery(getLibraryData)
  const books = response.allBookLibraryDataJson.edges

  return (
    <Layout>
      <SEO title="Library" />

      <Title>
        <span role="img" aria-label="books emoji">
          📚{' '}
        </span>
        Library
      </Title>

      <Container>
        <p>
          The reading list below contains the books (at least the ones it is
          worth mentioning) I've read over the years.
        </p>
        <p>
          Some of these taught me important life lessons and completely changed
          the way I think and live my life today. Check it out and maybe you
          will find your next book!
        </p>

        <BookList books={books} />
      </Container>

      <Footer />
    </Layout>
  )
}

export default Library
