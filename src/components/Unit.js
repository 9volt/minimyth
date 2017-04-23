import React, { Component } from 'react';
import './Unit.css';

class Unit extends Component {
  render() {
    return (
      <div className='unit'>
        <div className='name'>
          {this.props.unit.name}
        </div>
        <div className='unit_image'>
          <span>{this.props.unit.type}</span>
        </div>
        <div className='status_row'>
          {this.props.unit.swim === 'y' &&
            <div className='boat'>
              <span>SWIM</span>
            </div>
          }
          {this.props.unit.fly === 'y' &&
            <div className='wings'>
              <span>FLY</span>
            </div>
          }
          {this.props.unit.ability !== null &&
            <div className='special'>
              <span>{this.props.unit.ability}</span>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Unit;
