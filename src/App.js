import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router ,Switch, Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Cover from './compo/cover'
import './App.css'
import Home from './compo/myhome'





function App () {


const [data, setData] = useState([])
const [idMap, setIdMap] = useState([new Map()])
const [request, setRequest] = useState("");
const [searchbook, setSearchbook] = useState([]);
const [combinebooks, setCombinebooks] = useState([]);
const currentlyReading = data.filter((bo)=> bo.shelf === "currentlyReading");
const wantToRead = data.filter((bo)=> bo.shelf === "wantToRead");
const read = data.filter((bo)=> bo.shelf === "read");


function moveshelf (book, gole)  {
        const updatel = data.filter(ar => {
            if (ar.id === book.id) {
                book.shelf = gole;
                return book
            }
            return ar
    
        })
        if(!idMap.has(book.id)){
        book.shelf=gole;
            updatel.push(book)  
        }
        setData(updatel);
        BooksAPI.update(book, gole)
    
    }
    
console.log(data)
    useEffect(function() {
        BooksAPI.getAll()
            .then( function(dt) {

                setData(dt)
                setIdMap(booksMap(dt))
            });
    },
    []);


useEffect(function() {
    let activ = true;
    if (request) {
               BooksAPI.search(request)
            .then( function(dt) {
                if (dt.error) {
                    setSearchbook([])
                } else {
                    if (activ){
                        setSearchbook(dt);
                    }
                }
            });
        return  function()  {
            activ = false;
            setSearchbook([]);
        }
    }
}, [request]);


useEffect(function() {
    const combine = searchbook.map( function(b) {
        if (idMap.has(b.id)) {
            return idMap.get(b.id)
        } else {
            return b
        }
    })
    setCombinebooks(combine);
},
[searchbook]);
function booksMap (booke)  {
const bookmap = new Map();
booke.map( function(books) {bookmap.set(books.id, books)})
return bookmap;
}

return (   
    <div className="app">
<Router>
            <Switch>
              {/* {search page} */}
            <Route path="/search">
            <div className="search-books">
    <div className="search-books-bar">
                <Link to="/">
                <button className="close-search" >Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                  
                <input type="text" placeholder="Search by title or author"
                   value={request} 
                   onChange={(ev)=>setRequest(ev.target.value)}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                {combinebooks.map(function( c) {return ( 
                    <li key={c.id}>
                    <Cover   book={c} moveshelf={moveshelf}/>
                    </li> )})}
                </ol>
            </div>
            </div>
            </Route>
            {/* {Home page} */}

            <Route path="/">

    <div className="list-books">
        
    <div className="list-books-title">
              <h1>MyReads</h1>
            </div>)
        <div className="list-books-content">
        
            <Home shelf1={currentlyReading} shelf2={wantToRead} shelf3={read}  moveshelf={moveshelf} />
        </div>
        <div className="open-search">
            <Link to="/search">
            <button >Add a book</button>
            </Link>
    </div>
</div >
</Route>
</Switch>
</Router>
</div>
)
}







export default App;




