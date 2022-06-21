import React from "react";

function BookCard({ book }) {

    function handleSeeDetails() {
        getDetails(book)
    }

    return (
        <div>
            <h3>{book.name}</h3>
            <img src={book.image} />
            <button onClick={handleSeeDetails}>See Details?</button>
        </div>
    )
}

export default BookCard;