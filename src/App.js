import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Rentals from "./components/Rentals";
import Search from "./components/Search";
import LowerBanner from "./components/LowerBanner";

function App() {
    const baseURL = "https://gutendex.com/books?page="
    const ashleyURL = "https://tranquil-plains-77311.herokuapp.com/books";
    const [allBooks, setAllBooks] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const [displayCart, setDisplayCart] = useState([]);
    useEffect(() => {
      let count = 1;
      //while (count<=1){
      flipPages(`${baseURL}${count}`)
      //count++;
    //}
    //setTimeout(console.log(allBooks), 5000);
  }, [])

    async function flipPages(booksURL){
        await fetch(booksURL)
        .then(r => r.json())
        .then(booksData => { 
        setAllBooks([...allBooks, ...booksData.results])})
    }

     //add to Cart callback function
    function addToCart(book) {
      book.rentalTime = Date();
      fetch(ashleyURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    // remove from cart callback function
    function removeFromCart(bookId) {
      fetch(`${ashleyURL}/${bookId}`, {
        method: "DELETE",
      }).then(
        fetch(ashleyURL)
          .then(() => setRefresh(!refresh))
      );
    }
  
    return (
        <div>
        <NavBar />
        <Switch>
            <Route exact path="/">
                <Home 
                  allBooks={allBooks}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart} />
            </Route>
            <Route path="/rentals">
                <Rentals 
                  addToCart={addToCart}
                  setDisplayCart={setDisplayCart}
                  displayCart={displayCart}
                  removeFromCart={removeFromCart}
                  refresh={refresh}
                />
            </Route>
            <Route path="/Search">
                <Search allBooks = {allBooks}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                />
            </Route>
        </Switch>
        <div id="lowerbanner"></div>
        <LowerBanner />
    </div>
    )
}

export default App;
