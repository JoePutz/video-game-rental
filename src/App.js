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
  );
}

export default App;
