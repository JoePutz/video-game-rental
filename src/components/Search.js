import React from "react";

function Search({ searchGame }) {
  function handleSubmit() {}
  return (
    <div>
      <h1>Search Page</h1>
      <form onSubmit={handleSubmit}>
        <input>Name of Game</input>
      </form>
    </div>
  );
}

export default Search;
