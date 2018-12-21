import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Footer from '../components/footer'
import projects from '../utils/projects-data'


const Col = styled.div`
	> p {
		color: #555;
	}
`

const TitleWrapper = styled.div`
	h1 {
		font-family: avenir,sans-serif;
	}
`

const SubTitleWrapper = styled.div`
	font-family: avenir,sans-serif;
	margin-top: 2rem;
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
	margin-bottom: 4rem;
	font-size: 1.2rem;
	text-align: justify;
	background-color: #fff;
	font-weight: 100;
	p {
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
  p + p {
    text-indent: 1rem;
  }
`

const ImageWrapper = styled.div`
	margin-bottom: .75rem;
	img {
		border: 1px solid #e7e7e7;
		border-radius: .25rem !important;
	}
`


const Projects = ({ data }) => {

  const imageGallery = Object.values(data)
  const images = []

  imageGallery.map((img, i) => (
    images.push(<Img key={i} fluid={img.childImageSharp.fluid} alt={`Image of '${projects[i].title}' project`} />)
  ))

  return (
    <Layout>
      
        <TitleWrapper>
          <h1>Projects</h1>
        </TitleWrapper>

        <MainTextWrapper>
          <p>
            Explore some of my favorite projects I've worked on over the
            last few months.
          </p>

          <Col>

            {
              projects.map((project, i) => (

                <div key={i}>
                  <SubTitleWrapper>
                    <a href={`${projects[i].link}`} target="_blank" rel="noopener noreferrer">
                      <h2>{projects[i].title}</h2>
                    </a>
                  </SubTitleWrapper>

                  <ImageWrapper>
                    <a href={`${projects[i].link}`} target="_blank" rel="noopener noreferrer">
                      {
                        images[i]
                      }
                    </a>
                  </ImageWrapper>

                  <p>{projects[i].desc}</p>
                </div>

              ))
            }
            
          </Col>

        </MainTextWrapper>
      

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
