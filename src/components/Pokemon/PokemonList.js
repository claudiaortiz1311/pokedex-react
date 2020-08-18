import React, { Component } from "react";
import axios from "axios";

import PokemonCard from "./PokemonCard";

import spinner from "../Pokemon/spinner-Dual.gif";

export default class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0",
    pokemon: null,
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <img
            src={spinner}
            style={{
              width: "10em",
              height: "10em",
              alignItems: "center",
            }}
            className="card-img-top rounded mx-auto d-block mt-2"
          />
        )}

        <div className="card-footer text-muted">
          This content belongs to The Pokémon Company, I only use it for
          educational purposes - Data From{" "}
          <a href="https://pokeapi.co/" target="_blank" className="card-link">
            PokeAPI.co
          </a>
        </div>
      </React.Fragment>
    );
  }
}
