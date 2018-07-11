import React, { Component } from 'react';

class PokeInfo extends Component {
  constructor(){
    super();

    this.state = {
      pokeInfo: {},
      flavour: ''
    };
  }
  componentDidUpdate(prevProps){
    if(this.props.pokeId !== prevProps.pokeId){
      const pokeInfoPromise = fetch(`http://pokeapi.co/api/v2/pokemon-species/${this.props.pokeId}/`);

      pokeInfoPromise
      .then(pokeInfo => {
        const pokemonInfo = pokeInfo.json();
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
        console.log(entryText);
        this.setState({flavour: entryText});
      }
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