# MyReads Project
This project aims to establish A Book Lending App

## Project Setup

- Clone the project - `https://github.com/dabour1/my-project.git`
- Install the dependencies - `npm install`
- Please install react-router-dom @5.2.0 Not subsequent versions To avoid "<switch/>" problems  


## Project requirements
-The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors. (Done)

-The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly. (Done)

-When the browser is refreshed, the same information is displayed on the page. (Done)

-The search page has a search input field. (Done)

-The search page behaves correctly:
a) As the user types into the search field, books that match the query are displayed on the page, along with their titles and authors. You can use throttle/debounce but are not required to do so.
b) Search results are not shown when all of the text is deleted out of the search input box.
c) Invalid queries are handled and prior search results are not shown.
d) The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography"). (It's fine to filter out books with missing thumbnails.)
e) The user is able to search for multiple words, such as “artificial intelligence.” (Done)

-Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.(Done)

-If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.(Done)

-When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.(Done)

-The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.(Done)

-The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.(Done)

-Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly.(Done)

-Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.(Done)

-The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.(Done)








## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
