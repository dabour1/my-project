# MyReads Project
This project aims to establish A Book Lending App.
The project offers a wide range of books,You can search for these books on the search page then add any book you want to custom shelves

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

## Resources
*The entire project is designed with The singular developer effort, which used some of the videos and explanations  on YouTube Network for give methods  and Solutions for problems.

-https://www.youtube.com/watch?v=WLc6hFXmc7w

-https://www.youtube.com/watch?v=bpKI3R0nf7E

-https://www.youtube.com/watch?v=DNdZ3-MiF1E


## Developed by 
*Ahmed Dabour
