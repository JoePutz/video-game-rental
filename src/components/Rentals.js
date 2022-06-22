import React, { useEffect } from "react";
import BookCard from "./BookCard";

function Rentals() {
  useEffect(() => {
    fetch("http://localhost:3000/checkedOutBooks")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  function renderBook() {}

  return (
    <div>
      <h1>Checked Out Books Page</h1>
    </div>
  );
}

export default Rentals;
