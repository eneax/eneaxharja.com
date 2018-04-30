import React from 'react';

const BookItem = ( props ) => {
  if (props.render) return props.render;
  else
    return (
      <a href="#book-link" target="_blank" rel="noopener noreferrer" className="fl w-50 w-25-l link overflow-hidden">
        <div role="img" aria-label="Book Title" className="grow aspect-ratio--4x6" style={{background: "url(book-img) no-repeat center center", backgroundSize: "cover"}} ></div>
      </a>
  )
}

export default BookItem;



 