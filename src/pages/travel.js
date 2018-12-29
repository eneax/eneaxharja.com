import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { TitleWrapper, MainTextWrapper } from '../components/xStyles'
import Footer from '../components/footer'
import travels from '../utils/travels-data'


const ImageWrapper = styled.div`
	margin-bottom: .75rem;
	img {
		border: 1px solid #e7e7e7;
		border-radius: .25rem !important;
	}
`

const PostDate = styled.h3`
  font-size: 1rem;
  font-style: italic;
  font-weight: normal;
  margin-top: .25rem;
  color: #868e96;
`


const Travel = ({ data }) => {

  const travelGallery = Object.values(data)
  const images = []

  travelGallery.map((img, i) => (
    images.push(<Img key={i} fluid={img.childImageSharp.fluid} alt={`Image of '${travels[i].title}'`} />)
  ))

  return (
    <Layout>

      <TitleWrapper>
        <h1>Travel</h1>
      </TitleWrapper>

      <MainTextWrapper>
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
                <PostDate style={{marginBottom: '3rem'}}>{travel.title}</PostDate>
              </div>
            ))
          }
        </Fragment>
      </MainTextWrapper>

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
