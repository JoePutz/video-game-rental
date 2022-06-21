import React from "react";
import BookCard from "./BookCard";

// function Home({ getDetails, allBooks }) {
function Home({ allBooks }) {
  // console.log(allBooks[0])
  const shuffledBooks = allBooks.map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  console.log(shuffledBooks[0].formats["image/jpeg"])

  return (
    <div>
      <h1>Featured Books!</h1>

      <BookCard book={shuffledBooks[0]}/>
      <BookCard book={shuffledBooks[1]}/>
      <BookCard book={shuffledBooks[2]}/>
      <BookCard book={shuffledBooks[3]}/>
      <BookCard book={shuffledBooks[4]}/>
      {/* <BookCard book={allBooks[0]} /> */}

      {/* going to need a formula for top 5 or 5 random or something, 
      but for each should get <VideoGameCard game={game} getDetails={getDetails}/> */}
    </div>
  );
}

export default Home;
