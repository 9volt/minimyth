import React, { Component } from 'react';
import './Unit.css';
import armyicon from '../art/army.svg';
import heroicon from '../art/hero.svg';
import monstericon from '../art/monster.svg';
import spellicon from '../art/spell.svg';

class Unit extends Component {
  render() {
    let icon =  <span>{this.props.unit.type}</span>
    if (this.props.unit.type === "army"){
      icon = <span><img src={armyicon}></img></span>
    }
    else if( this.props.unit.type === "hero"){
        icon =  <span><img src={heroicon}></img></span>
    }
    else if( this.props.unit.type === "monster"){
        icon =  <span><img src={monstericon}></img></span>
    }

    return (
      <div className='unit'>
        <div className='name'>
          {this.props.unit.name}
        </div>
        <div className='unit_image'>
            {icon}
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
