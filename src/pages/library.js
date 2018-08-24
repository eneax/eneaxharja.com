import React, { Component } from 'react'
import { Container, Row, Col6Medium4, Thumbnail, TitleWrapper, MainTextWrapper } from '../components/General'
import Footer from '../components/Footer'
import books from '../utils/books-data'
import SearchBox from '../components/SearchBox'


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
      <div>
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
      </div>
    )
  }
}
