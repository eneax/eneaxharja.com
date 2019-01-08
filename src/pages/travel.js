import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import Footer from '../components/footer'
import { Title, Container } from '../elements'
import { DateTime } from '../utils'

import { travels } from '../data'


const ImageWrapper = styled.div`
	margin-bottom: .75rem;
	img {
		border: 1px solid #e7e7e7;
		border-radius: .25rem !important;
	}
`


const Travel = ({ data }) => {

  const travelGallery = Object.values(data)
  const images = []

  travelGallery.map((img, i) => (
    images.push(<Img key={i} fluid={img.childImageSharp.fluid} alt={`Image of '${travels[i].title}'`} />)
  ))

  return (
    <Layout>

      <Title>Travel</Title>

      <Container>
        <p style={{marginBottom: '3rem'}}>This page contains some of the photos I took during my trips over the years.</p>
        <Fragment>
          {
            travels.map((travel, i) => (
              <div key={i}>
                <ImageWrapper>
                  {
                    images[i]
                  }
                </ImageWrapper>
                <DateTime style={{marginBottom: '3rem'}}>{travel.title}</DateTime>
              </div>
            ))
          }
        </Fragment>
      </Container>

      <Footer />
    </Layout>
  )
}

export default Travel


export const fluidsImages = graphql`
  fragment fluidsImages on File {
    childImageSharp {
      fluid(maxWidth: 1240) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query travelGallery {
    image59: file(relativePath: { regex: "/59.jpeg/" }) {
      ...fluidsImages
    }
    image58: file(relativePath: { regex: "/58.jpeg/" }) {
      ...fluidsImages
    }
    image57: file(relativePath: { regex: "/57.jpeg/" }) {
      ...fluidsImages
    }
    image56: file(relativePath: { regex: "/56.jpeg/" }) {
      ...fluidsImages
    }
    image55: file(relativePath: { regex: "/55.jpeg/" }) {
      ...fluidsImages
    }
    image54: file(relativePath: { regex: "/54.jpeg/" }) {
      ...fluidsImages
    }
    image53: file(relativePath: { regex: "/53.jpeg/" }) {
      ...fluidsImages
    }
    image52: file(relativePath: { regex: "/52.jpeg/" }) {
      ...fluidsImages
    }
    image51: file(relativePath: { regex: "/51.jpeg/" }) {
      ...fluidsImages
    }
    image50: file(relativePath: { regex: "/50.jpeg/" }) {
      ...fluidsImages
    }
    image49: file(relativePath: { regex: "/49.jpeg/" }) {
      ...fluidsImages
    }
    image48: file(relativePath: { regex: "/48.jpeg/" }) {
      ...fluidsImages
    }
    image47: file(relativePath: { regex: "/47.jpeg/" }) {
      ...fluidsImages
    }
    image46: file(relativePath: { regex: "/46.jpeg/" }) {
      ...fluidsImages
    }
    image45: file(relativePath: { regex: "/45.jpeg/" }) {
      ...fluidsImages
    }
    image44: file(relativePath: { regex: "/44.jpeg/" }) {
      ...fluidsImages
    }
    image43: file(relativePath: { regex: "/43.jpeg/" }) {
      ...fluidsImages
    }
    image42: file(relativePath: { regex: "/42.jpeg/" }) {
      ...fluidsImages
    }
    image41: file(relativePath: { regex: "/41.jpeg/" }) {
      ...fluidsImages
    }
    image40: file(relativePath: { regex: "/40.jpeg/" }) {
      ...fluidsImages
    }
    image39: file(relativePath: { regex: "/39.jpeg/" }) {
      ...fluidsImages
    }
    image38: file(relativePath: { regex: "/38.jpeg/" }) {
      ...fluidsImages
    }
    image37: file(relativePath: { regex: "/37.jpeg/" }) {
      ...fluidsImages
    }
    image36: file(relativePath: { regex: "/36.jpeg/" }) {
      ...fluidsImages
    }
    image35: file(relativePath: { regex: "/35.jpeg/" }) {
      ...fluidsImages
    }
    image34: file(relativePath: { regex: "/34.jpeg/" }) {
      ...fluidsImages
    }
    image33: file(relativePath: { regex: "/33.jpeg/" }) {
      ...fluidsImages
    }
    image32: file(relativePath: { regex: "/32.jpeg/" }) {
      ...fluidsImages
    }
    image31: file(relativePath: { regex: "/31.jpeg/" }) {
      ...fluidsImages
    }
    image30: file(relativePath: { regex: "/30.jpeg/" }) {
      ...fluidsImages
    }
    image29: file(relativePath: { regex: "/29.jpeg/" }) {
      ...fluidsImages
    }
    image28: file(relativePath: { regex: "/28.jpeg/" }) {
      ...fluidsImages
    }
    image27: file(relativePath: { regex: "/27.jpeg/" }) {
      ...fluidsImages
    }
    image26: file(relativePath: { regex: "/26.jpeg/" }) {
      ...fluidsImages
    }
    image25: file(relativePath: { regex: "/25.jpeg/" }) {
      ...fluidsImages
    }
    image24: file(relativePath: { regex: "/24.jpeg/" }) {
      ...fluidsImages
    }
    image23: file(relativePath: { regex: "/23.jpeg/" }) {
      ...fluidsImages
    }
    image22: file(relativePath: { regex: "/22.jpeg/" }) {
      ...fluidsImages
    }
    image21: file(relativePath: { regex: "/21.jpeg/" }) {
      ...fluidsImages
    }
    image20: file(relativePath: { regex: "/20.jpeg/" }) {
      ...fluidsImages
    }
    image19: file(relativePath: { regex: "/19.jpeg/" }) {
      ...fluidsImages
    }
    image18: file(relativePath: { regex: "/18.jpeg/" }) {
      ...fluidsImages
    }
    image17: file(relativePath: { regex: "/17.jpeg/" }) {
      ...fluidsImages
    }
    image16: file(relativePath: { regex: "/16.jpeg/" }) {
      ...fluidsImages
    }
    image15: file(relativePath: { regex: "/15.jpeg/" }) {
      ...fluidsImages
    }
    image14: file(relativePath: { regex: "/14.jpeg/" }) {
      ...fluidsImages
    }
    image13: file(relativePath: { regex: "/13.jpeg/" }) {
      ...fluidsImages
    }
    image12: file(relativePath: { regex: "/12.jpeg/" }) {
      ...fluidsImages
    }
    image11: file(relativePath: { regex: "/11.jpeg/" }) {
      ...fluidsImages
    }
    image10: file(relativePath: { regex: "/10.jpeg/" }) {
      ...fluidsImages
    }
    image9: file(relativePath: { regex: "/9.jpeg/" }) {
      ...fluidsImages
    }
    image8: file(relativePath: { regex: "/8.jpeg/" }) {
      ...fluidsImages
    }
    image7: file(relativePath: { regex: "/7.jpeg/" }) {
      ...fluidsImages
    }
    image6: file(relativePath: { regex: "/6.jpeg/" }) {
      ...fluidsImages
    }
    image5: file(relativePath: { regex: "/5.jpeg/" }) {
      ...fluidsImages
    }
    image4: file(relativePath: { regex: "/4.jpeg/" }) {
      ...fluidsImages
    }
    image3: file(relativePath: { regex: "/3.jpeg/" }) {
      ...fluidsImages
    }
    image2: file(relativePath: { regex: "/2.jpeg/" }) {
      ...fluidsImages
    }
    image1: file(relativePath: { regex: "/1.jpeg/" }) {
      ...fluidsImages
    }
  }
`
