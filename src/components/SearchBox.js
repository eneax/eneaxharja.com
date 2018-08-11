import React from 'react'

const SearchBox = ({ searchField, searchChange }) => {
	
	return (
		<div>
			<input
				style={{outline: 'none'}}
				className='pa3 mb2 ba b--light-yellow light-yellow br4 bw1 bg-purple' 
				type='search' 
				placeholder='search books'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;