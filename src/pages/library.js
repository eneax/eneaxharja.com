import React, { Component } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { MainTextWrapper } from '../components/global'
import Footer from '../components/footer'
import { books } from '../data'
import SearchBox from '../components/searchBox'
import { Title } from '../elements'
import { avenir } from '../utils'


// styles
const Row = styled.div`
	display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

const Col6Medium4 = styled.div`
	position: relative;
	width: 100%;
	min-height: 1px;
	padding-right: 15px;
	padding-left: 15px;
	margin-top: 1rem;
	-ms-flex: 0 0 50%;
  flex: 0 0 50%;
	max-width: 50%;
	@media (min-width: 768px) {
		-ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
	}
`

const Thumbnail = styled.div`
	padding: 0.25rem;
	background-color: #fff;
	border: 1px solid #dee2e6;
	border-radius: 0.25rem;
	max-width: 100%;
	height: auto;
	text-align: center;
	a {
		color: #000;
		text-decoration: none;
		&:hover,
		&:focus {
			h6 {
				transition: color .15s ease-in;
				color: #663399;
			}
		}
	}
	img {
		width: 100%;
		height: auto;
		margin-bottom: 0;
	}
	h6 {
		margin-bottom: 0;
		span {
			font-size: .875rem;
			font-weight: 700;
			${avenir};
		}
	}
	p {
		margin-bottom: 0;
		small {
			font-size: .875rem;
			font-weight: 400;
			${avenir};
			font-style: italic;
		}
	}
`


const BookItem = ({ link, img, title, author }) => {
  return (
    <Col6Medium4>
      <Thumbnail>
        <a href={`${link}`} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={`${title} Pic`} />
          <h6>
            <span>{title}</span>
          </h6>
          <p>
            <small>{author}</small>
          </p>
        </a>
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

				<MainTextWrapper>
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
				</MainTextWrapper>

				<Footer />
			</Layout>
    )
  }
}
