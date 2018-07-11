import React, { Component } from 'react';
import Pokedex from 'pokedex-promise-v2';

class PokeInfo extends Component {
  constructor(){
    super();

    this.state = {
      pokeInfo: {},
      flavour: ''
    };
  }
  componentDidUpdate(prevProps){
    const P = new Pokedex();
    if(this.props.pokeId !== prevProps.pokeId){
      //const pokeInfoPromise = fetch(`http://pokeapi.co/api/v2/pokemon-species/${this.props.pokeId}/`);

      P.resource(`/api/v2/pokemon-species/${this.props.pokeId}/`)
      .then(pokeInfo => {
        const pokemonInfo = pokeInfo;
        return pokemonInfo;
      }).then(pokemonInfo => {
        this.setState({pokeInfo: pokemonInfo});
      }).then(() => {
        this.ChooseFlavourText();
      }).catch(err => console.error('There was an error: '+err));
    }

  }

  ChooseFlavourText(){
    const flavourArray = this.state.pokeInfo.flavor_text_entries;
    flavourArray.map(entry => {
      if(entry.language.name === 'en'){
        var entryText = entry.flavor_text;
        this.setState({flavour: entryText});
      }
      return entryText;
    })

  }

  render(){
    const text = {
      textAlign: 'left'
    };
    return (
      <div style={text}>{this.state.flavour}</div>
    );
  
  }
}
export default PokeInfo