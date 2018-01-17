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
          <Profile src="connor_duffy.jpg" title="Connor Duffy" subTitle="Managing Director" />
          <Profile src="will-durkee.jpg" title="Will Durkee" subTitle="Director of Operations" />
          <Profile src="vanessaqin.png" title="Vanessa Qin" subTitle="Director of Community" />
          <Profile src="baileyjames.png" title="Bailey James" subTitle="Director of Design and Brand" />
          <Profile src="justinhe.jpg" title="Justin He" subTitle="Director of Development" />
          <Profile src="harry_valner.png" title="Harry Valner" subTitle="Director of Recruitment" />
          <Profile src="mellina_silver.jpg" title="Mellina Silver" subTitle="Director of Sponsorship" />
          <Profile src="joe_turtel.jpg" title="Joe Turtel" subTitle="Director of Industry Relations" />
          <Profile src="abha_nath.jpg" title="Abha Nath" subTitle="Director of Finance" />
        </div>
      </div>
      <div className="bottomReverse"></div>

      </div>
    );
  }
}
export default Team;
