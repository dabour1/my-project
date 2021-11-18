
import React from 'react';
import Shellf from './myshellf'



   const Home = ({ shelf1,shelf2,shelf3,moveshelf})=>{
 
       
          return(
            <div>
            
            <Shellf moveshelf={moveshelf} title="currentlyReading" booke={shelf1}  />
            <Shellf  moveshelf={moveshelf} title="wantToRead" booke={shelf2} />
            <Shellf  moveshelf={moveshelf} title="read"  booke={shelf3}   />
            </div>
          
          
      
        )
    
}


export default Home
