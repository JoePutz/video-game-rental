import React, { useEffect } from "react";

function BookCard({ book, addToCart, setAddOneBookToCart, removeFromCart }) {
  // console.log(book.formats)

  // function handleSeeDetails() {
  //     getDetails(book)
  // }

  function handleCheckout(e) {
    addToCart(book.id);
    console.log(book.id);
  }

  function handleCheckin(e) {
    removeFromCart(book.id);
    console.log(book.id);
  }

  return (
    <div>
      {/* <h3>{book.title}</h3>
      <img src={book.formats["image/jpeg"]} />
      <p>{book.authors[0].name}</p>
      <button>Details</button> */}
      {/* The Details button should bring the viewer to 
            /Search/id:the books id */}
      {/* <p>{book.authors}</p> */}
      {/* <img src={book.formats[image]} />
            <p>{book.authors[0].name}</p> */}
      {/* <button onClick={handleSeeDetails}>See Details?</button> */}
      <button onClick={handleCheckout}>Check-out Book</button>
      <button onClick={handleCheckin}>Check-in</button>
    </div>
  );
}

export default BookCard;
