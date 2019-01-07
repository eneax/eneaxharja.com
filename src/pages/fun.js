import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Container } from '../components/global'
import Footer from '../components/footer'
import { funResources } from '../data'
import { Title, SubTitle, ExternalLink } from '../elements'


const ImageWrapper = styled.div`
	margin-bottom: .75rem;
	img {
		border: 1px solid #e7e7e7;
		border-radius: .25rem !important;
	}
`


const Fun = ({ data }) => {

  const imageGallery = Object.values(data)
  const images = []

  imageGallery.map((img, i) => (
    images.push(<Img key={i} fluid={img.childImageSharp.fluid} alt={`Image of '${funResources[i].title}' project`} />)
  ))

  return (
    <Layout>

      <Title>Fun</Title>

      <Container>
        <p>This page contains podcasts, blogs and newsletters that I like to listen to and read, in addition to <Link to='/library'>books</Link>, during my free time.</p>
        <Fragment>
          {
            funResources.map((funResource, i) => (

              <div key={i}>
                <ExternalLink href={`${funResources[i].link}`}>
                  <SubTitle>
                    {funResources[i].title}
                  </SubTitle>
                </ExternalLink>

                <ImageWrapper>
                  <a href={`${funResources[i].link}`} target="_blank" rel="noopener noreferrer">
                    {
                      images[i]
                    }
                  </a>
                </ImageWrapper>

                <p style={{color: '#555'}}>{funResources[i].desc}</p>
              </div>

            ))
          }
        </Fragment>
      </Container>

      <Footer />
    </Layout>
  )
}

export default Fun


export const fluidsImage = graphql`
  fragment fluidsImage on File {
    childImageSharp {
      fluid(maxWidth: 1240) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query gallery {
    image1: file(relativePath: { regex: "/syntax.png/" }) {
      ...fluidsImage
    }
    image2: file(relativePath: { regex: "/danCarlin.jpg/" }) {
      ...fluidsImage
    }
    image3: file(relativePath: { regex: "/cgpGrey.png/" }) {
      ...fluidsImage
    }
    image4: file(relativePath: { regex: "/harari.jpeg/" }) {
      ...fluidsImage
    }
    image5: file(relativePath: { regex: "/newport.jpg/" }) {
      ...fluidsImage
    }
    image6: file(relativePath: { regex: "/wbw.png/" }) {
      ...fluidsImage
    }
    image7: file(relativePath: { regex: "/jsWeekly.png/" }) {
      ...fluidsImage
    }
    image8: file(relativePath: { regex: "/reactjs.png/" }) {
      ...fluidsImage
    }
  }
`
