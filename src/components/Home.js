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
    </div>
  );
}

export default Home;
