import React from "react";
import BookCard from "./BookCard"

function Home({ getDetails, games }) {
  return (
    <div>
      <h1>Featured Games!</h1>
      {/* going to need a formula for top 5 or 5 random or something, 
      but for each should get <VideoGameCard game={game} getDetails={getDetails}/> */}
    </div>
  );
}

export default Home;
