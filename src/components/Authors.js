import React from "react";

function Authors ({book}){
    
    return(
        book.authors.map((auth) => <span key={auth.name}>{auth.name}<br/></span>)
    )

}

export default Authors