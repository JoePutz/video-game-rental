import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

function Home({ allBooks }) {

  const [shuffledBooks, setShuffledBooks] =useState([])
  const [displayedBooks, setDisplayedBooks] = useState([])

  useEffect(() => {
    console.log(allBooks.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value))
    setShuffledBooks(allBooks.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value))
    setDisplayedBooks(shuffledBooks.slice(0,5))
  }, [allBooks])

  return (
    <div className="flexbox-container">
      <h1>Featured Books!</h1>
      {displayedBooks.map((book) => <BookCard key= {book.id} book={book} />)}
    </div>
  );
}

export default Home;
