import React, { Component } from 'react';
import './Unit.css';

class Unit extends Component {
  render() {
    return (
      <div class='unit'>
        <span>Unit</span>
        <span>{this.props.unit.type}</span>
      </div>
    );
  }
}

export default Unit;
