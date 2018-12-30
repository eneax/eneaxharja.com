import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { TitleWrapper, SubTitleWrapper, MainTextWrapper } from '../components/xStyles'
import Footer from '../components/footer'
import projects from '../utils/projects-data'


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
        <p>Explore some of my favorite projects I've worked on over the last few months.</p>
        <Fragment>
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

                <p style={{color: '#555'}}>{projects[i].desc}</p>
              </div>

            ))
          }
        </Fragment>
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
    image1: file(relativePath: { regex: "/1.png/" }) {
      ...fluidImage
    }
    image2: file(relativePath: { regex: "/2.png/" }) {
      ...fluidImage
    }
    image3: file(relativePath: { regex: "/3.png/" }) {
      ...fluidImage
    }
    image4: file(relativePath: { regex: "/4.png/" }) {
      ...fluidImage
    }
    image5: file(relativePath: { regex: "/5.png/" }) {
      ...fluidImage
    }
    image6: file(relativePath: { regex: "/6.png/" }) {
      ...fluidImage
    }
    image7: file(relativePath: { regex: "/7.png/" }) {
      ...fluidImage
    }
    image8: file(relativePath: { regex: "/8.png/" }) {
      ...fluidImage
    }
    image9: file(relativePath: { regex: "/9.png/" }) {
      ...fluidImage
    }
  }
`
