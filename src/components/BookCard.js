import React, {useEffect, useState} from "react";

function BookCard({ book, addToCart, setAddOneBookToCart, removeFromCart  }) {
  const rentalLength = 30000;

  const [rentalRemaining, setRentalRemaining] = useState(book.rentalTime);
  useEffect(() => {
  if(rentalRemaining===0) handleCheckin()
  setInterval(()=> {
  setRentalRemaining((rentalLength - (Date.parse(Date()) - Date.parse(book.rentalTime)))/1000)}, 1000)
  }, [rentalRemaining])

  function handleCheckout() {
    addToCart(book);
    alert(`Congrats! You've checked out ${book.title}.`)
  }

  function handleCheckin() {
    removeFromCart(book.id);
    alert(`Thank you for returning ${book.title}! What book will you jump into next?`)
  }

    return (
        <div className="card">
            <h4>{book.title}</h4>
            <img src={book.formats["image/jpeg"] } />
            <p>{book.authors.map((auth) => `| ${auth.name} |`)}</p>

            {(book.rentalTime === undefined || (rentalRemaining < 0 )) ? <button onClick={handleCheckout}>Check-Out Book</button> : <button onClick={handleCheckin}>Return Book</button>}

            {(book.rentalTime === undefined || (rentalRemaining < 0 )) ? 
            null : 
            <button>Time Left on Rental: {rentalRemaining}s</button>}
        </div>
    )
}

export default BookCard;
//<button>Book is {Math.abs((rentalLength - (Date.parse(Date()) - Date.parse(book.rentalTime)))/1000)}s Overdue! Please Return Book Or You Will Be Charged!</button>