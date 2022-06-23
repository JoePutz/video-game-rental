import React from "react";

function BookCard({ book, addToCart, setAddOneBookToCart, removeFromCart  }) {
  const rentalLength = 30000;
  function handleCheckout() {
    addToCart(book);
    alert(`Congrats! You've checked out ${book.title}`)
  }

  function handleCheckin() {
    removeFromCart(book.id);
    alert(`Thanks you for returning ${book.title}! What book will you jump into next?`)
  }

    return (
        <div className="card">
            <h4>{book.title}</h4>
            <img src={book.formats["image/jpeg"] } />
            <p>{book.authors.map((auth) => `| ${auth.name} |`)}</p>
            {(book.rentalTime === undefined || (rentalLength - (Date.parse(Date()) - Date.parse(book.rentalTime))) <= 0 ) ? <button onClick={handleCheckout}>Check-out Book</button> : <button>Time Left on Rental: {(rentalLength - (Date.parse(Date()) - Date.parse(book.rentalTime)))/1000}s</button>}
            <button onClick={handleCheckin}>Check-in</button>
        </div>
    )
}

export default BookCard;
