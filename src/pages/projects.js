import React, { Component } from 'react'
import { Container, Row, Col, TitleWrapper, SubTitleWrapper, MainTextWrapper, ImageWrapper } from '../components/General'
import Footer from '../components/Footer'
import Img from 'gatsby-image'


const Projects = ({ data }) => {
  return (
    <div>
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
                  <Img sizes={data.image1.sizes} alt='eneaxharja[dot]com Pic' />
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
                  <Img sizes={data.image2.sizes} alt='Minimal Blog Pic' />
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
                  <Img sizes={data.image3.sizes} alt='Globetrotter Pic' />
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
                  <Img sizes={data.image4.sizes} alt='Portfolio Website Pic' />
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
                  <Img sizes={data.image5.sizes} alt='Thriving Cities Pic' />
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
                  <Img sizes={data.image6.sizes} alt='Weather App Pic' />
                </a>
              </ImageWrapper>
              <p>A functioning Weather app built with React and Open Weather API.</p>
            </Col>

          </Row>
        </MainTextWrapper>
      </Container>

      <Footer />
    </div>
  )
}

export default Projects


export const query = graphql`
  query imageGallery {
    image1: imageSharp(id: {regex: "/project1.png/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    image2: imageSharp(id: {regex: "/project2.png/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    image3: imageSharp(id: {regex: "/project3.png/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    image4: imageSharp(id: {regex: "/project4.png/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    image5: imageSharp(id: {regex: "/project5.png/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    image6: imageSharp(id: {regex: "/project6.png/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`
