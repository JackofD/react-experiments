import React, { Component } from 'react';
//import Pokedex from 'pokedex-promise-v2';
import PokeSprite from './components/PokeSprite';
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
    }).catch(err => console.error('There was an error: '+err));
  }


  render() {
    const centered = {
      width: "300px",
      margin: "0 auto",
      textAlign: "center"
    }
    return (
      <div className="App">
        <div style={centered} className="App-intro">
          Pokedata will show up here... eventually
          <br /><br />
          <PokeSprite url={this.state.pokeSprite} />
          <div>{this.state.pokemon.name}</div>
        </div>
      </div>
    );
  }
}

export default App;
