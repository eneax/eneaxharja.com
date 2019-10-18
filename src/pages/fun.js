import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import FunList from '../components/funList'

import { Title, Container, InternalLink } from '../elements'


const Fun = () => {
  const response = useStaticQuery(getFunData)
  const funResources = response.allFunResourcesDataJson.edges

  return (
    <Layout>
      <SEO title='Fun' />

      <Title>
        <span role="img" aria-label="party emoji">🥳 </span>
        Fun
      </Title>

      <Container>
        <p>This page contains podcasts, blogs and newsletters that I like to listen to and read, in addition to <InternalLink to='/library'>books</InternalLink>, during my free time.</p>
        <FunList funResources={funResources} />
      </Container>

      <Footer />
    </Layout>
  )
}

export default Fun


// query
const getFunData = graphql`
  {
    allFunResourcesDataJson {
      edges {
        node {
          link
          title
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          desc
        }
      }
    }
  }
`
