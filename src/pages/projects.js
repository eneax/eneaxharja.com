import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Footer from '../components/Footer'

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
	@media (min-width: 576px) {
    max-width: 540px;
	}
	@media (min-width: 768px) {
    max-width: 720px;
	}
	@media (min-width: 992px) {
    max-width: 960px;
	}
	@media (min-width: 1200px) {
    max-width: 1140px;
	}
`

const Row = styled.div`
	display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

const Col = styled.div`
	position: relative;
	width: 100%;
	min-height: 1px;
	padding-right: 15px;
	padding-left: 15px;
	> p {
		margin-bottom: 2rem;
		color: #555;
		font-family: avenir,sans-serif;
	}
`

const TitleWrapper = styled.div`
  padding: 1rem 1rem;
  margin-bottom: 2rem;
	border-radius: 0.3rem;
	h1 {
		font-family: avenir,sans-serif;
		text-align: center;
		margin-bottom: 0;
	}
`

const SubTitleWrapper = styled.div`
	font-family: avenir,sans-serif;
	text-align: left;
	margin-top: 1rem;
	a {
		text-decoration: none;
		color: #000;
		&:hover,
		&:focus {
			h2 {
				transition: color .15s ease-in;
				color: #663399;
			}
		}
	}
	h2 {
		margin-bottom: .5rem;
		font-weight: 500;
	}
`

const MainTextWrapper = styled.div`
	max-width: 30em;
	margin-right: auto;
	margin-left: auto;
	margin-bottom: 4rem;
	margin-top: 0;
	font-size: 1.2rem;
	text-align: justify;
	background-color: #fff;
	font-weight: 100;
	> p {
		font-family: avenir,sans-serif;
		@media screen and (min-width: 48em) {
			font-size: 1.5rem;
		}
		line-height: 1.2;
  	margin-top: 0;
		margin-bottom: 0;
		a {
			color: #000;
			text-decoration: underline;
			transition: color .15s ease-in;
			transition: background-color .15s ease-in-out;
			&:link,
			&:visited {
				transition: color .15s ease-in;
			}
			&:hover {
				transition: color .15s ease-in;
				transition: background-color .15s ease-in-out;
				background-color: #000000;
				color: #fff;
			}
			&:active {
				transition: color .15s ease-in;
			}
			&:focus {
				transition: color .15s ease-in;
				transition: background-color .15s ease-in-out;
				outline: 1px dotted #000000;
				background-color: #000000;
				color: #fff;
			}
		}
	}
`

const ImageWrapper = styled.div`
	width: 100%;
	height: auto;
	margin-bottom: .75rem;
	img {
		margin-bottom: .75rem;
		border: 1px solid #e7e7e7;
		border-radius: 0.25rem !important;
	}
`


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
