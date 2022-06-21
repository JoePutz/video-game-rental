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
    const [booksToDisplay, SetBooksToDisplay] = useState([]);
    let allBooks = [];
    useEffect(() => {flipPages(baseURL)}, [])

    async function flipPages(booksURL){
        await fetch(booksURL)
        .then(r => r.json())
        .then(booksData => {
            booksData.results.forEach(book => {
                allBooks.push(book)
            });
            console.log(allBooks)
            //if(booksData.next !== null){
                //flipPages(booksData.next)}
    })}

    return (
        <div>
        <NavBar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/rentals">
                <Rentals />
            </Route>
            <Route path="/Search">
                <Search />
            </Route>
        </Switch>
    </div>
    )
}


export default App;
