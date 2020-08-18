import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./components/Layout/NavBar";
import Dashboard from "./components/Layout/Dashboard";
import Pokemon from "./components/Pokemon/Pokemon";

import backgroundImage from "./patternPikachu.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div
          className="App"
          style={{
            background: `url(${backgroundImage})`,
            backgroundColor: "#DC143C",
          }}
        >
          <NavBar />
          <br></br>
          <br />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
