import React from "react";

function Details ({book}){
    return(
        book.subjects.map((sub) => <li key={sub}>{sub}</li>)
    )
}

export default Details