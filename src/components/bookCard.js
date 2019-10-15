import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { ExternalLink, HeadingSix } from '../elements'
import { above } from '../utils'


const BookCard = ({ book }) => {
  const { link, title, author } = book
  const img = book.img.childImageSharp.fluid

  return (
    <Col6Medium4>
      <Thumbnail>
        <ExternalLink 
          href={`${link}`} 
          style={{textDecoration: 'none'}} 
        >
          <Img 
            fluid={img}
            alt={`${title} Pic`}
          />
          <HeadingSix>{title}</HeadingSix>
          <p>{author}</p>
        </ExternalLink>
      </Thumbnail>
    </Col6Medium4>
  )
}

export default BookCard


// styles
const Col6Medium4 = styled.div`
	position: relative;
	margin-top: 1rem;
	padding-right: 15px;
	padding-left: 15px;
  flex: 0 0 50%;
	max-width: 50%;
	width: 100%;
	min-height: 1px;
	${above.tablet`
		flex: 0 0 33.333333%;
    max-width: 33.333333%;
	`}
`

const Thumbnail = styled.div`
	background-color: #fff;
	padding: 0.25rem;
	border: 1px solid #dee2e6;
	border-radius: 0.25rem;
	max-width: 100%;
	height: auto;
	text-align: center;

	img {
		width: 100%;
		height: auto;
		margin-bottom: 0;
	}
	
	p {
		font-size: .875rem;
		font-weight: 400;
		font-style: italic;
		margin-top: .5rem;
	}
`
