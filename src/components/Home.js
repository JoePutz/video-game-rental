import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";


function Home() {
  // for the featured games
  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      <NavBar />
=======
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
