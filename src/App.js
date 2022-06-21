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

  useEffect(() => {
    flipPages(baseURL);
  }, []);
  async function flipPages(booksURL) {
    await fetch(booksURL)
      .then((r) => r.json())
      .then((booksData) => {
        console.log(booksData.results);
        setAllBooks(booksData.results);
      });
    //{booksData.results.forEach(book => setAllBooks([...allBooks, book]))
    //     debugger})
    // if(booksData.next !== null){
    //     debugger
    //     flipPages(temp)}
    // setBooksToDisplay(allBooks);
  }
  console.log(allBooks);
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

  function handleSearch(e) {
    e.preventDefault();
    let tempTitleArr = [];
    for (let book of allBooks) {
      if (
        e.target.value.toUpperCase() ===
        book.title.substring(0, e.target.value.length).toUpperCase()
      ) {
        tempTitleArr.push(book);
      }
    }
    let tempAuthorArr = [];
    for (let book of allBooks) {
      for (let author of book.authors) {
        if (author.name === undefined) {
        } else if (
          author.name.toUpperCase().includes(e.target.value.toUpperCase())
        ) {
          tempAuthorArr.push(book);
        }
      }
    }

    let tempSubjectArr = [];
    for (let book of allBooks) {
      for (let subject in book.subjects) {
        if (subject.toUpperCase().includes(e.target.value.toUpperCase())) {
          tempAuthorArr.push(book);
        }
      }
    }

    let tempBookShelfArr = [];
    for (let book of allBooks) {
      for (let shelf in book.bookshelves) {
        if (
          shelf.substring(0, e.target.value.length).toUpperCase() ===
          e.target.value.toUpperCase()
        ) {
          tempAuthorArr.push(book);
        }
      }
    }

    let tempTotalArr = [
      ...tempTitleArr,
      ...tempAuthorArr,
      ...tempBookShelfArr,
      ...tempSubjectArr,
    ];
    //console.log(tempTotalArr)
    let toPush = [];
    tempTotalArr.forEach((t) => {
      if (!toPush.includes(t)) {
        toPush.push(t);
      }
    });
    //setBooksToDisplay(toPush);
    console.log(toPush);
  }

  return (
    <div>
      <h3>Hello/Welcome</h3>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home
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
          <Search handleSearch={handleSearch} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
