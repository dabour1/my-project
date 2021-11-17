
import React from 'react';
import Shellf from './myshellf'



   const Home = ({ books,moveshelf})=>{
      const currentlyReading = books.filter((bo)=> bo.shelf === "currentlyReading");
      const wantToRead = books.filter((bo)=> bo.shelf === "wantToRead");
      const read = books.filter((bo)=> bo.shelf === "read");
       
          return(
            <div>
            
            <Shellf title="currentlyReading"booke={currentlyReading} moveshelf={moveshelf} />
            <Shellf title="wantToRead" booke={wantToRead} moveshelf={moveshelf} />
            <Shellf title="read" booke={read} moveshelf={moveshelf} />
            </div>
          
          
      
        )
    
}


export default Home