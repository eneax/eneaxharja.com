import React, { Component } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Footer from '../components/Footer'
import books from '../utils/books-data'
import SearchBox from '../components/SearchBox'


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
			font-weight: 500;
			font-family: avenir,sans-serif;
		}
	}
	p {
		margin-bottom: 0;
		small {
			font-size: .875rem;
			font-weight: 100;
			font-family: avenir,sans-serif;
			font-style: italic;
		}
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
        <Container>
          <TitleWrapper>
            <h1>Library</h1>
          </TitleWrapper>

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

            <SearchBox searchChange={this.onSearchChange}/>

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
        </Container>

        <Footer />
      </Layout>
    )
  }
}
