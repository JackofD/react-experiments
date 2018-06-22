import React, { Component } from 'react';
import Howzit from './components/Howzit';

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="">
          <h1 className="">Welcome to React</h1>
        </header>
        <p className="">
          <Howzit />
        </p>

      </div>
    );
  }
}

export default App;
