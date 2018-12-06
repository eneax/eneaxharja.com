import React from 'react'
import styled from 'styled-components'

const SearchInput = styled.input`
	margin: 1rem auto;
  padding: 0.375rem 0.75rem;
	font-family: avenir,sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	
	&:focus {
		color: #495057;
		background-color: #fff;
		border-color: #663399;
		outline: 0;
		box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
	}
	&::-webkit-input-placeholder,
	&::-moz-placeholder,
	&:-ms-input-placeholder,
	&::-ms-input-placeholder,
	&::placeholder {
		color: #6c757d;
		opacity: 1;
	}
	&:disabled, 
	&[readonly] {
		background-color: #e9ecef;
		opacity: 1;
	}
`

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