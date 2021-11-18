import React from 'react';
import Cover from './cover'
function Shellf ({title ,booke , moveshelf}) {
  
        return( 
          <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {booke.map( c => ( 
                      <li  key={c.id}>
                        <Cover  book={c} moveshelf={moveshelf} />
                      
                      </li> ))}
                      
       
           
          
      </ol>
    </div>
  </div>)
}





export default Shellf
