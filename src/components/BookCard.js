import React, {useEffect, useState} from "react";
import Details from "./Details.js"
import Bookshelf from "./Bookshelf.js";
import Authors from "./Authors.js";

function BookCard({ book, addToCart, removeFromCart  }) {
  const rentalLength = 31000;
  const [displayDetails, setDisplayDetails] = useState(false);

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

  function handleDisplayDetails(){
    setDisplayDetails(!displayDetails)
  }

    return (
        <div className="card">
            <h4>{book.title}</h4>
            <img src={book.formats["image/jpeg"] } />
            <span>Author(s): <Authors book={book}/></span>
            
            <div>
            <button onClick={handleDisplayDetails}>{displayDetails? "Hide Details" : "Display Details" }</button>
            {displayDetails? <div>
              <p>This book has these subject tags: </p><ul>
                <Details book={book}/></ul> 
              <p>And is featured in these 'Bookshelves'</p><ul>  
                <Bookshelf book={book}/></ul>
            </div>: null} 
            </div>
            
            {(book.rentalTime === undefined || (rentalRemaining < 0 )) ? <button onClick={handleCheckout}>Check-Out Book</button> : <button onClick={handleCheckin}>Return Book</button>}

            {(book.rentalTime === undefined || (rentalRemaining < 0 )) ? 
            null : 
            <button>Time Left on Rental: {rentalRemaining}s</button>}
        </div>
    )
}

export default BookCard;
//<button>Book is {Math.abs((rentalLength - (Date.parse(Date()) - Date.parse(book.rentalTime)))/1000)}s Overdue! Please Return Book Or You Will Be Charged!</button>

//: <button type="button" onClick={setDisplayDetails(!displayDetails)}>Display Details</button>