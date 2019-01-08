import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Footer from '../components/footer'
import SearchBox from '../components/searchBox'
import { Title, Container, ExternalLink, HeadingSix } from '../elements'
import { above } from '../utils'
import { books } from '../data'


const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

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


const BookItem = ({ link, img, title, author }) => {
  return (
    <Col6Medium4>
      <Thumbnail>
        <ExternalLink href={`${link}`} style={{textDecoration: 'none'}} >
          <img src={img} alt={`${title} Pic`} />
          <HeadingSix>{title}</HeadingSix>
          <p>{author}</p>
        </ExternalLink>
      </Thumbnail>
    </Col6Medium4>
  )
}

export default class Library extends Component {
  state = {
    books,
    searchField: ''
  }
  onSearchChange = (event) => {
		this.setState({ searchField: event.target.value })
	}

  render() {
    const { searchField, books } = this.state
		const filteredBooks = books.filter( book => {
			return (
				book.title.toLowerCase().includes(searchField.toLowerCase())
				|| book.author.toLowerCase().includes(searchField.toLowerCase())
			)
    })
    
    return (
			<Layout>
				<Title>Library</Title>

				<Container>
					<p>
						The reading list below contains the books (at least the ones
						it is worth mentioning) I've read over the years.
            </p>
					<p>
						Some of these taught me important life lessons and
						completely changed the way I think and live my life today.
						Check it out and maybe you will find your next book!
            </p>

					<SearchBox searchChange={this.onSearchChange} />

					<Row>
						{
							filteredBooks.map((filteredBook, i) => (
								<BookItem
									key={i}
									link={filteredBooks[i].link}
									img={filteredBooks[i].img}
									title={filteredBooks[i].title}
									author={filteredBooks[i].author}
								/>
							))
						}
					</Row>
				</Container>

				<Footer />
			</Layout>
    )
  }
}
