import React from "react";

function BookCard({ book, addToCart, setAddOneBookToCart, removeFromCart  }) {

  function handleCheckout(e) {
    addToCart(book);
  }


  function handleCheckin(e) {
    removeFromCart(book.id);
  }

    return (
        <div className="card">
            <h4>{book.title}</h4>
            <img src={book.formats["image/jpeg"] } />
            <p>{book.authors[0].name}</p>
            <button onClick={handleCheckout}>Check-out Book</button>
            <button onClick={handleCheckin}>Check-in</button>
        </div>
    )
}

export default BookCard;
