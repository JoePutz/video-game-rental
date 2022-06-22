import React, {useState} from "react";
import BookCard from "./BookCard";

function Search({books}) {
  
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bookshelf, setBookShelf] = useState("");
  const [subject, setSubject] = useState("");

  function handleTitleChange(e){
    setTitle(e.target.value)
    handleSearch(e, e.target.value, author, bookshelf, subject)
  }
  function handleAuthorChange(e){
    setAuthor(e.target.value)
    handleSearch(e, title, e.target.value, bookshelf, subject)
  }
  function handleBookshelfChange(e){
    setBookShelf(e.target.value)
    handleSearch(e, title, author, e.target.value, subject)
  }
  function handleSubjectChange(e){
    setSubject(e.target.value)
    handleSearch(e, title, author, bookshelf, e.target.value)
  }

  function handleSearch(e, t, a, b, s) {
    e.preventDefault();
    let tempTitleArr =[];
    for (let book of books){
      let tempTitle = book.title.split(' ');
      for (let word in tempTitle) {
        if(word.includes(t)){
          tempTitleArr.push(book);
        }
      }
    }
    console.log(tempTitleArr);
  }

  return (
    <div>
      <h1>Search Page</h1>
      <form onSubmit={(e) => handleSearch(e,title,author,bookshelf,subject)}>
        <input onChange = {(e) => handleTitleChange(e)} className = "title" value = {(title === "" ? "" : title)} placeholder = "Search by title"/>
        <input onChange = {(e) => handleAuthorChange(e)} className = "author" value = {(author === "" ? "" : author)} placeholder = "Search by author"/>
        <input onChange = {(e) => handleBookshelfChange(e)} className = "bookshelf" value = {(bookshelf === "" ? "" : bookshelf)} placeholder = "Search by 'bookshelf'"/>
        <input onChange = {(e) => handleSubjectChange(e)} className = "subject" value = {(subject === "" ? "" : subject)} placeholder = "Search by subject"/>
        <button type="submit">Search</button>
      </form>
      {books.map(book => <BookCard key = {book.id} book = {book}/>)}
    </div>
  );
}

export default Search;
