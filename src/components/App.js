import React, { Component } from 'react';
import './App.css';
import Unit from './Unit';
import units from '../api/units'

class App extends Component {
  render() {
 let test = [];
 Object.keys(units).forEach(function(key){
      test.push(<Unit unit={units[key]} />);
   });
   return (
     <div>
        {test}
     </div>
    );
  }
}

export default App;
