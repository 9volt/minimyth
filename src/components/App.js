import React, { Component } from 'react';
import './App.css';
import Unit from './Unit';

class App extends Component {
  render() {
    let unit = {type:'test'};
    return (
      <Unit unit={unit} />
    );
  }
}

export default App;
