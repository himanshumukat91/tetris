import React, { Component } from 'react';
import PlayArea from './components/PlayArea.js';
import Leaderboard from './components/Leaderboard.js';
import GameStatus from './components/GameStatus.js';
import './Container.css';


class Container extends Component {
  render() {
    return (
      <div className="Container">
      
    
      <img className="headLogo" src="https://img00.deviantart.net/ce88/i/2015/038/f/7/tetris_logo_by_jmk_prime-d8h1sf0.png" alt="logo" />
     
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
        
        <Leaderboard/>
        <PlayArea/>
        <GameStatus/>
      </div>
      
      </div>
    );
  }
}

export default Container;
