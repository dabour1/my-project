
import React from 'react';
import Mybook from './mybooks';

function Cover({ book,moveshelf }){
  
    return(
      <div className="book">
          <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, 
        backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail :""})` }}></div>
        <Mybook book={book} moveshelf={moveshelf} />
                 </div>
               
                 <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
          </div>
        )
}
export default Cover
