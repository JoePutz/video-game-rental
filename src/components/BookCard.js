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
            <p>{book.authors.map((auth) => `| ${auth.name} |`)}</p>
            <button onClick={handleCheckout}>Check-out Book</button>
            {(book.rentalTime === undefined) ? null : <p>Time Left on Rental: {(10000 - (Date.parse(Date()) - Date.parse(book.rentalTime)))/1000}s</p>}
            <button onClick={handleCheckin}>Check-in</button>
        </div>
    )
}

export default BookCard;
