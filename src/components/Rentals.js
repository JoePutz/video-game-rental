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

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((data) => setDisplayCart(data));
  }, [refresh]);

  return (
    <div className="flexbox-container">
      <h1>Checked Out Books Page</h1>
      {displayCart.map((book) => {
        return (
          <BookCard
            book={book}
            setAddOneBookToCart={setAddOneBookToCart}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
          />
        );
      })}
    </div>
  );
}

export default Rentals;
