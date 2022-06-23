import React, { useEffect } from "react";
import BookCard from "./BookCard";

function Rentals({  
  allBooks,
  setDisplayCart,
  displayCart,
  removeFromCart,
  setAddOneBookToCart,
  addToCart,
  refresh, }) {
    const ashleyURL = "http://localhost:4000/books";
    const rentalLength = 30000;
  useEffect(() => {
    fetch(ashleyURL)
      .then((response) => response.json())
      .then((data) => setDisplayCart(data));
  }, [refresh]);

  return (
    <div className="flexbox-container">
      <h1>Your Books!</h1>
      {displayCart.map((book) => {
        if(Date.parse(Date()) - Date.parse(book.rentalTime) < rentalLength || book.rentalTime === undefined){
        return (
          <BookCard
            book={book}
            setAddOneBookToCart={setAddOneBookToCart}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
            key = {book.id}
          />
        )}
        else {removeFromCart(book.id)}
      })}
    </div>
  );
}

export default Rentals;
