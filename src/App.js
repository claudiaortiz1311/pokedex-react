import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom;";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./components/Layout/NavBar";
import Dashboard from "./components/Layout/Dashboard";
import Pokemon from "./components/Pokemon/Pokemon";

// Hacer la imagen con ninja pattern y guardarla en src
//import backgroundImage from './imagedefondo.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
            <Dashboard />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
//<div className="App" style={{ background: `url(${backgroundImage})` }}>
