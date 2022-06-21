import React from "react";

function BookCard({ book }) {

    // console.log(book.formats)

    // function handleSeeDetails() {
    //     getDetails(book)
    // }

    return (
        <div>
            <h3>{book.title}</h3>
            <img src={book.formats["image/jpeg"]} />
            <p>{book.authors[0].name}</p>
            <button>Details</button>
            {/* The Details button should bring the viewer to 
            /Search/id:the books id */}
            {/* <p>{book.authors}</p> */}
            {/* <img src={book.formats[image]} />
            <p>{book.authors[0].name}</p> */}
            {/* <button onClick={handleSeeDetails}>See Details?</button> */}
        </div>
    )
}

export default BookCard;