import React from 'react'
import styled from 'styled-components'

import BookCard from './bookCard'


const BookList = ({ books }) => {
  return (
    <Row>
      {books.map(({ node }, index) => (
        <BookCard 
          key={index}
          book={node}
        />
      ))}
    </Row>
  )
}

export default BookList


// styles
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-top: 1rem;
`
