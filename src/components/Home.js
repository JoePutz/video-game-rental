import React from "react";
import BookCard from "./BookCard";

function Home({ allBooks, setAddOneBookToCart, addToCart, removeFromCart }) {

  function theHome () {
      let shuffledBooks = allBooks.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)

      return (
        shuffledBooks.slice(0,8).map((book) => <BookCard key= {book.id} book={book} addToCart={addToCart} removeFromCart={removeFromCart} />)
      )
    }

  return (
    <div className="flexbox-container">
      <h1>Featured Books!</h1>
      {theHome()}
    </div>
  );
}

export default Home;