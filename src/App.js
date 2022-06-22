import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Rentals from "./components/Rentals";
import Search from "./components/Search";

function App() {
    const baseURL = "https://gutendex.com/books"
    //const [booksToDisplay, SetBooksToDisplay] = useState([]);
    const [allBooks, setAllBooks] = useState([]);
    const [booksToDisplay, setBooksToDisplay] = useState([]);

    useEffect(() => {flipPages(baseURL)}, [])
    async function flipPages(booksURL){
        await fetch(booksURL)
        .then(r => r.json())
        .then(booksData => setAllBooks(booksData.results))
            //{booksData.results.forEach(book => setAllBooks([...allBooks, book]))
        //     debugger})
        // if(booksData.next !== null){
        //     debugger
        //     flipPages(temp)}
        setBooksToDisplay(allBooks);
    }

    return (
        <div>
        <NavBar />
        <Switch>
            <Route exact path="/">
                <Home allBooks = {allBooks} />
            </Route>
            <Route path="/rentals">
                <Rentals />
            </Route>
            <Route path="/Search">
                <Search books = {allBooks}/>
            </Route>
        </Switch>
    </div>
    )
}


export default App;
