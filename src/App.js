import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router ,Switch, Route, Link } from 'react-router-dom'
import Myhead from './compo/myhead'
import * as BooksAPI from './BooksAPI'
import Mybook from './compo/mybooks'
import './App.css'
import Home from './compo/myhome'




function App () {


const [data, setData] = useState([])
const [idMap, setIdMap] = useState([new Map()])
const [request, setRequest] = useState("");
const [searchbook, setSearchbook] = useState([]);
const [combinebooks, setCombinebooks] = useState([]);

useEffect(() => {
        BooksAPI.getAll()
            .then(dt => {

                setData(dt)
                setIdMap(booksMap(dt))
            });
    },
    []);
useEffect(() => {
    let activ = true;
    if (request) {
        BooksAPI.search(request)
            .then(dt => {
                if (dt.error) {
                    setSearchbook([])
                } else {
                    if (activ) {


                        setSearchbook(dt);
                    }
                }
            });
        return () => {
            activ = false;
            setSearchbook([]);
        }
    }
}, [request]);

useEffect(() => {
        const combine = searchbook.map(b => {
            if (idMap.has(b.id)) {
                return idMap.get(b.id)
            } else {
                return b
            }
        })
        setCombinebooks(combine);
    },
    [searchbook]);
const booksMap = (booke) => {
    const map = new Map();
    booke.map(books => map.set(books.id, books))
    return map;
}

const moveshelf = (book, gole) => {
    const updatel = data.map(ar => {
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
                {combinebooks.map( c => ( 
                    <li key={c.id}>
                    <Mybook   book={c} moveshelf={moveshelf}/>
                    </li> ))}
                </ol>
            </div>
            </div>
            </Route>
            {/* {Home page} */}

            <Route path="/">

    <div className="list-books">
        <Myhead />
        <div className="list-books-content">
        
            <Home books={data} moveshelf={moveshelf} />
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



