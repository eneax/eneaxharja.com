import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Footer from '../components/footer'
import ProjectsList from '../components/projectsList'

import { Title, Container } from '../elements'


const Projects = () => {
  const response = useStaticQuery(getProjectsData)
  const projects = response.allProjectsDataJson.edges

  return (
    <Layout>
      <Title>Projects</Title>

      <Container>
        <p>Explore some of my favorite projects I've worked on over the last few months.</p>
        <ProjectsList projects={projects} />
      </Container>

      <Footer />
    </Layout>
  )
}

export default Projects


// query
const getProjectsData = graphql`
  {
    allProjectsDataJson {
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
