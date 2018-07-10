import React, { Component } from 'react';
//import Pokedex from 'pokedex-promise-v2';
class App extends Component {

  constructor(){
    super();

    this.state = {
      pokemon: {},
      pokeSprite: ''
    };
  }

  componentDidMount(){
    let idNum = (Math.floor(Math.random() * (Math.floor(802) - Math.ceil(1)) + 1));
    const pokePromise = fetch(`http://pokeapi.co/api/v2/pokemon/${idNum}/`);
    pokePromise
    .then(pokedata => {
      const pokemonData = pokedata.json();
      return pokemonData;
    }).then(pokemonData => {
      this.setState({pokemon: pokemonData, pokeSprite: pokemonData.sprites.front_default});
    }).catch(err => console.log(err));
  }

  render() {

    return (
      <div className="App">
        <div className="App-intro">
          Pokedata will show up here... eventually
          <br /><br />
          <img src={this.state.pokeSprite} alt={this.state.pokeSprite} />
          <div>{this.state.pokemon.name}</div>
        </div>
      </div>
    );
  }
}

export default App;
