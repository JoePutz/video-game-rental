import React from "react";

function Bookshelf ({book}){
    
    function determine() {
        let send = book.bookshelves.map((sub) => <li key={sub}>{sub}</li>)
        if (send.length == 0) send = [...send , <li key = {"none"}>None *sad face*</li>]
        return send
    }
    return(
        determine()
    )

}

export default Bookshelf