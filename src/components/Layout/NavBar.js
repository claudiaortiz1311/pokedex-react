import React, { Component } from "react";
import PokemonLogo from "../../pokemon_logo_PNG9.png";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a
            href=""
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
          >
            <div className="header-logo-pokemon">
              <img src={PokemonLogo} alt="Pokedex" />
            </div>
          </a>
        </nav>
      </div>
    );
  }
}
