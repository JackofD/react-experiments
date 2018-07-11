import React, { Component } from 'react';

class PokeSprite extends Component {
  render(){

    return <img src={this.props.url} alt={this.props.url} />;
  
  }
}
export default PokeSprite