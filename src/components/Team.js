import React, { Component } from 'react';
import '../App.css';

import Profile from './Profile';

class Team extends Component {
  render() {
    return (
      <div>
      <div className="topBlack"></div>
      <div className="team">
        <h1> The Lavalab Team </h1>
        <div className="row">
          <Profile />
          <Profile />
        </div>
      </div>
      </div>
    );
  }
}
export default Team;
