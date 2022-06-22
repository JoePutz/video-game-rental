import React, {useState} from "react";
import BookCard from "./BookCard";

function Search({allBooks}) {
  
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bookshelf, setBookShelf] = useState("");
  const [subject, setSubject] = useState("");
  const [booksToDisplay, setBooksToDisplay] = useState([])

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
    let totalSearchFilter = [...searchFilterTitle(t), ...searchFilterAuthor(a), ...searchFilterBookShelf(b), ...searchFilterSubject(s)]
    //console.log(totalSearchFilter);
    let toPush=[];
      totalSearchFilter.forEach((t) => {
        if(!toPush.includes(t) && t!==[]) {
          toPush.push(t)
        }})
    setBooksToDisplay(toPush);
  }

  function searchFilterTitle(t){
    let tempTitleArr =[];
    if(t!==""){
    for (let book of allBooks){
      let tempTitle = book.title.split(' ');
      for (let word of tempTitle) {
        if(word.toUpperCase().includes(t.toUpperCase())){
          tempTitleArr.push(book);
        }
      }
    }
   // console.log(tempTitleArr)
    return(tempTitleArr);
  }
  return [];
}

  function searchFilterAuthor(a){
    let tempAuthorArr =[];
    if(a!==""){
    for (let book of allBooks){
      let tempAuthor = book.authors.map((author) => author.name.split(' '))
      for (let word of tempAuthor) {
        for(let word2 of word){
        if(word2.toUpperCase().includes(a.toUpperCase())){
          tempAuthorArr.push(book);
        }
      }}
    }
   // console.log(tempAuthorArr)
    return(tempAuthorArr);
  }
  return [];
}

  function searchFilterSubject(s){
    let tempSubjectArr =[];
    if(s!==""){
    for (let book of allBooks){
      let tempSubject = book.subjects.map((subject) => subject.split(' '))
      for (let word of tempSubject) {
        for(let word2 of word){
        if(word2.toUpperCase().includes(s.toUpperCase())){
          tempSubjectArr.push(book);
        }
      }}}
   // console.log(tempSubjectArr)
    return(tempSubjectArr);
  }
  return [];
}

  function searchFilterBookShelf(b){
    let tempBookShelfArr =[];
    if(b!==""){
    for (let book of allBooks){
      let tempBookShelf = book.bookshelves.map((bookshelf) => bookshelf.split(' '))
      for (let word of tempBookShelf) {
        for(let word2 of word){
        if(word2.toUpperCase().includes(b.toUpperCase())){
          tempBookShelfArr.push(book);
        }
      }}}
   // console.log(tempBookShelfArr)
    return(tempBookShelfArr);
  }
  return [];
}

  return (
    <div>
      <h1>Search Page</h1>
      <form onSubmit={(e) => handleSearch(e,title,author,bookshelf,subject)}>
        <input onChange = {(e) => handleTitleChange(e)} className = "title" value = {(title === "" ? "" : title)} placeholder = "Search by title"/>
        <input onChange = {(e) => handleAuthorChange(e)} className = "author" value = {(author === "" ? "" : author)} placeholder = "Search by author"/>
        <input onChange = {(e) => handleBookshelfChange(e)} className = "bookshelf" value = {(bookshelf === "" ? "" : bookshelf)} placeholder = "Search by genre"/>
        <input onChange = {(e) => handleSubjectChange(e)} className = "subject" value = {(subject === "" ? "" : subject)} placeholder = "Search by subject"/>
        <button type="submit">Search</button>
      </form>
      {booksToDisplay === [] ? allBooks.map(book => <BookCard key = {book.id} book = {book}/>) : booksToDisplay.map(book => <BookCard key = {book.id} book = {book}/>)}
    </div>
  );
}

export default Search;
