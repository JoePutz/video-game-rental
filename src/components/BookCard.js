import React from "react";

function BookCard({ book }) {

    // console.log(book.formats)

    // function handleSeeDetails() {
    //     getDetails(book)
    // }

    return (
        <div className="card">
            <h4>{book.title}</h4>
            <img src={book.formats["image/jpeg"] } />
            <p>{book.authors[0].name}</p>
            <button>Details</button>
            <button>Add to Cart</button>
        </div>
    )
}

export default BookCard;