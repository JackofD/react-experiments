import React, { Component } from 'react';
//import Pokedex from 'pokedex-promise-v2';
import PokeSprite from './components/PokeSprite';
import PokeInfo from './components/PokeInfo';
class App extends Component {

  constructor(){
    super();

    this.state = {
      pokeId: '',
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
      this.setState({pokeId: idNum, pokemon: pokemonData, pokeSprite: pokemonData.sprites.front_default});
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
          Who's that pokemon?!
          <br /><br />
          <PokeSprite url={this.state.pokeSprite} />
          <div>{this.state.pokemon.name} - {this.state.pokeId}</div>
          <br />
          <PokeInfo pokeId={this.state.pokeId} />
        </div>
      </div>
    );
  }
}

export default App;
