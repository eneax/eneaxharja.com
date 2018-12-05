import React from 'react'
import { SearchInput } from './general'

const SearchBox = ({ searchChange }) => {
	
	return (
		<div style={{display: 'flex'}}>
      <SearchInput
        type='search' 
        placeholder='Search books...'
        aria-label="Search books"
        onChange={searchChange}
      >
      </SearchInput>
		</div>
	);
}

export default SearchBox