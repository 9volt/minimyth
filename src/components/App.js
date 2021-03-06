import React, { Component } from 'react';
import './App.css';
import Unit from './Unit';
import units from '../api/units';
import GridMap from './GridMap';




class App extends Component {
  render() {
   let unit_test = [];
   Object.keys(units).forEach(function(key){
      unit_test.push(<Unit key={key} unit={units[key]} />);
   });
   return (
     <div id="play_area">
       <div id="enemy_status"></div>
       <div id="hover"></div>
       <div id="map">
         <GridMap />
       </div>
       <div className="grid_test">
          {unit_test}
       </div>
     </div>
    );
  }
}

export default App;
