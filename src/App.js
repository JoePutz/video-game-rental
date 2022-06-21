import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Rentals from "./Rentals";
import Search from "./Search";

function App() {
  // useEffect(() =>
  //     fetch("baseURL")
  //     .then((r) => r.json())
  //     .then((games) => console.log(games))
  // )

  // is the callback function sent down to Search.js to retreive the Id of the game we are trying to fetch
  function searchGame(id) {}

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home getDetails={getDetails} games={games} />
        </Route>
        <Route path="/rentals">
          <Rentals />
        </Route>
        <Route path="/Search">
          <Search searchGame={searchGame} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
