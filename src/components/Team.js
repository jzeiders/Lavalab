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
          <Profile src="vanessaqin.png" title="Vanessa Qin" subTitle="Director of Community" />
          <Profile src="timmymalaney.jpg" title="Timmy Malaney" subTitle="Director of Operations" />
          <Profile src="baileyjames.png" title="Bailey James" subTitle="Director of Design and Brand" />
          <Profile src="justinhe.jpg" title="Justin He" subTitle="Director of Development" />
          <Profile src="will-durkee.jpg" title="Will Durkee" subTitle="Director of Recruitment" />
          <Profile src="patrickmcdonnell.jpg" title="Patrick McDonnell" subTitle="Director of Industry Relations" />
          <Profile src="mellina_silver.jpg" title="Mellina Silver" subTitle="Director of Sponsorship" />
        </div>
      </div>
      <div className="bottomReverse"></div>

      </div>
    );
  }
}
export default Team;
