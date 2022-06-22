import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Rentals from "./components/Rentals";
import Search from "./components/Search";

function App() {
  const baseURL = "https://gutendex.com/books";
  //const [booksToDisplay, SetBooksToDisplay] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [booksToDisplay, setBooksToDisplay] = useState([]);
  const [addOneBookToCart, setAddOneBookToCart] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [displayCart, setDisplayCart] = useState([]);

  //add to Cart callback function
  function addToCart(bookId) {
    fetch(`https://gutendex.com/books/${bookId}`)
      .then((response) => response.json())
      .then((book) => setAddOneBookToCart(book));
    

    fetch(`http://localhost:3000/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addOneBookToCart),
    })
      .then((response) => response.json())
      .then((data) => setDisplayCart(data));
  }
  // remove from cart callback function
  function removeFromCart(bookId) {
    console.log("removeFromCart", bookId);
    fetch(`http://localhost:3000/books/${bookId}`, {
      method: "DELETE",
    }).then(
      fetch("http://localhost:3000/books")
        .then((response) => response.json())
        .then((data) => setRefresh(!refresh))
    );
  }

  return (
    <div>
      <h3>Hello/Welcome</h3>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home
            bookstoDisplay = {booksToDisplay}
            allBooks={allBooks}
            setAddOneBookToCart={setAddOneBookToCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </Route>
        <Route path="/rentals">
          <Rentals
            setAddOneBookToCart={setAddOneBookToCart}
            addToCart={addToCart}
            setDisplayCart={setDisplayCart}
            displayCart={displayCart}
            removeFromCart={removeFromCart}
            refresh={refresh}
          />
        </Route>
        <Route path="/Search">
          <Search allBooks = {allBooks} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
