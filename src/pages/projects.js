import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

import { Container, Row, Col, TitleWrapper, SubTitleWrapper, MainTextWrapper, ImageWrapper } from '../components/general'
import Footer from '../components/footer'


const Projects = ({ data }) => {
  return (
    <Layout>
      <Container>
        <TitleWrapper>
          <h1>Projects</h1>
        </TitleWrapper>

        <MainTextWrapper>
          <p>
            Explore some of my favorite projects I've worked on over the
            last few months.
          </p>

          <Row>

            <Col>
              <SubTitleWrapper>
                <a href='https://github.com/eneax/eneax.github.io' target="_blank" rel="noopener noreferrer">
                  <h2>eneaxharja[dot]com</h2>
                </a>
              </SubTitleWrapper>
              <ImageWrapper>
                <a href='https://github.com/eneax/eneax.github.io' target="_blank" rel="noopener noreferrer">
                  <Img fluid={data.image1.childImageSharp.fluid} alt='eneaxharja[dot]com Pic' />
                </a>
              </ImageWrapper>
              <p>My Own Little Corner of the Web. Designed on a MacBook Pro in Tuscany (Italy). Built on Gatsby, the blazing-fast static site generator for React, and coded with VS Code.</p>
            </Col>


            <Col>
              <SubTitleWrapper>
                <a href='https://github.com/eneax/minimal-blog' target="_blank" rel="noopener noreferrer">
                  <h2>Minimal Blog</h2>
                </a>
              </SubTitleWrapper>
              <ImageWrapper>
                <a href='https://minimal-blog-x.netlify.com' target="_blank" rel="noopener noreferrer">
                  <Img fluid={data.image2.childImageSharp.fluid} alt='Minimal Blog Pic' />
                </a>
              </ImageWrapper>
              <p>A minimal blog built with Gatsby, Netlify CMS, GraphQL and Web Animations API.</p>
            </Col>

            <Col>
              <SubTitleWrapper>
                <a href='https://github.com/eneax/globetrotter' target="_blank" rel="noopener noreferrer">
                  <h2>Globetrotter</h2>
                </a>
              </SubTitleWrapper>
              <ImageWrapper>
                <a href='https://aqueous-badlands-68133.herokuapp.com' target="_blank" rel="noopener noreferrer">
                  <Img fluid={data.image3.childImageSharp.fluid} alt='Globetrotter Pic' />
                </a>
              </ImageWrapper>
              <p>Responsive travel agency website made using React and React Router v4.</p>
            </Col>

            <Col>
              <SubTitleWrapper>
                <a href='https://github.com/eneax/krix-portfolio' target="_blank" rel="noopener noreferrer">
                  <h2>Portfolio Website</h2>
                </a>
              </SubTitleWrapper>
              <ImageWrapper>
                <a href='https://gentle-bastion-82801.herokuapp.com' target="_blank" rel="noopener noreferrer">
                  <Img fluid={data.image4.childImageSharp.fluid} alt='Portfolio Website Pic' />
                </a>
              </ImageWrapper>
              <p>Clean and minimal portfolio website built with React and React Router v4.</p>
            </Col>

            <Col>
              <SubTitleWrapper>
                <a href='https://github.com/eneax/thriving-cities' target="_blank" rel="noopener noreferrer">
                  <h2>Thriving Cities</h2>
                </a>
              </SubTitleWrapper>
              <ImageWrapper>
                <a href='https://tranquil-shore-37678.herokuapp.com' target="_blank" rel="noopener noreferrer">
                  <Img fluid={data.image5.childImageSharp.fluid} alt='Thriving Cities Pic' />
                </a>
              </ImageWrapper>
              <p>This project represents a responsive single page company website built with React and Bootstrap.</p>
            </Col>

            <Col>
              <SubTitleWrapper>
                <a href='https://github.com/eneax/weather-app' target="_blank" rel="noopener noreferrer">
                  <h2>Weather App</h2>
                </a>
              </SubTitleWrapper>
              <ImageWrapper>
                <a href='https://weather-app-x.firebaseapp.com' target="_blank" rel="noopener noreferrer">
                  <Img fluid={data.image6.childImageSharp.fluid} alt='Weather App Pic' />
                </a>
              </ImageWrapper>
              <p>A functioning Weather app built with React and Open Weather API.</p>
            </Col>

          </Row>
        </MainTextWrapper>
      </Container>

      <Footer />
    </Layout>
  )
}

export default Projects


export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1240) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query imageGallery {
    image1: file(relativePath: { regex: "/project1.png/" }) {
      ...fluidImage
    }
    image2: file(relativePath: { regex: "/project2.png/" }) {
      ...fluidImage
    }
    image3: file(relativePath: { regex: "/project3.png/" }) {
      ...fluidImage
    }
    image4: file(relativePath: { regex: "/project4.png/" }) {
      ...fluidImage
    }
    image5: file(relativePath: { regex: "/project5.png/" }) {
      ...fluidImage
    }
    image6: file(relativePath: { regex: "/project6.png/" }) {
      ...fluidImage
    }
  }
`
