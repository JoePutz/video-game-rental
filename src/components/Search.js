import React from "react";
import BookCard from "./BookCard";

function Search({ handleSearch, booksToDisplay}) {
  
  return (
    <div>
      <h1>Search Page</h1>
      <form>
        <input onChange = {(e) => handleSearch(e)} className = "title" placeholder = "Search by title"/>
        <input onChange = {(e) => handleSearch(e)} className = "author" placeholder = "Search by author"/>
        <input onChange = {(e) => handleSearch(e)} className = "bookshelf" placeholder = "Search by 'bookshelf'"/>
        <input onChange = {(e) => handleSearch(e)} className = "subject" placeholder = "Search by subject"/>
      </form>
      {booksToDisplay.map(book => <BookCard key = {book.id} book = {book}/>)}
    </div>
  );
}

export default Search;
