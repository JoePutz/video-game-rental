import React from "react";

function Search({ handleSearch }) {
  function handleSubmit() {}
  return (
    <div>
      <h1>Search Page</h1>
      <form onSubmit={(e) => handleSearch(e)}>
        <input onChange = {(e) => handleSearch(e)}></input>
      </form>
    </div>
  );
}

export default Search;
