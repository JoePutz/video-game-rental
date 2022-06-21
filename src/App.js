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
        .then(booksData => {console.log(booksData.results)
            setAllBooks(booksData.results)})
            //{booksData.results.forEach(book => setAllBooks([...allBooks, book]))
        //     debugger})
        // if(booksData.next !== null){
        //     debugger
        //     flipPages(temp)}
        setBooksToDisplay(allBooks);
    }

    function handleSearch(e) {
        e.preventDefault();
        let tempTitleArr =[]
        for (let book of allBooks){
            if(e.target.value.toUpperCase() === book.title.substring(0, e.target.value.length).toUpperCase())
            {tempTitleArr.push(book)}        
    }
        let tempAuthorArr = [];
        for (let book of allBooks){
            for (let author of book.authors){
                if(author.name === undefined){}
                else if (author.name.toUpperCase().includes(e.target.value.toUpperCase()))
                   {tempAuthorArr.push(book) }
            }
        }

        let tempSubjectArr = [];
        for (let book of allBooks){
            for (let subject in book.subjects){
                if (subject.toUpperCase().includes(e.target.value.toUpperCase()))
                   { tempAuthorArr.push(book) }
            }
        }

        let tempBookShelfArr = [];
        for (let book of allBooks){
            for (let shelf in book.bookshelves){
                if (shelf.substring(0, e.target.value.length).toUpperCase() === e.target.value.toUpperCase())
                   { tempAuthorArr.push(book) }
            }
        }
        
        let tempTotalArr = [...tempTitleArr, ...tempAuthorArr, ...tempBookShelfArr, ...tempSubjectArr];
        //console.log(tempTotalArr)
        let toPush=[];
        tempTotalArr.forEach((t) => {
          if(!toPush.includes(t)) {
            toPush.push(t)
          }})
        //setBooksToDisplay(toPush);
        console.log(toPush)
      }

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
                <Search handleSearch = {handleSearch} />
            </Route>
        </Switch>
    </div>
    )
}


export default App;
