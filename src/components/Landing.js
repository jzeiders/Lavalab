import React, { Component } from 'react';
import '../App.css';
import YouTube from 'react-youtube';

import LavaButton from './Button';
import NavBar from './NavBar';
import Typewriter from '../scripts/Typewriter';

class Landing extends Component {
  render() {

    // for youtube player
    const opts = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 0,
        loop: 1,
        fs: 0,
        cc_load_policy: 0,
        iv_load_policy: 3,
        autohide: 0,
        rel: 0,
        start: 41,
      }
    }

    return (
      <div className="landing">
        <div className="video-background">
          <div className="video-foreground">
            <YouTube
              videoId="gox_wSvIFtY"
              opts={opts}
              onReady={this._onReady}
              onStateChange={this._onStateChange}
            />
          </div>
        </div>
        <img alt="landing logo" id="landing-logo" className="hidden-mobile" src="LavaLabLogo_Splash.png" />
        <img alt="landing logo" id="landing-logo-mobile" className="visible-mobile" src="LavalabLogo_Orange.png" />
        <h1> We are <Typewriter
    speed={88}
    tag="span"
    className="typewriter"
    text={["innovators", "disruptors", "designers", "entrepreneurs", "creators", "developers", "risk-takers",
           "thinkers", "ideators", "visionaries", "Lavalab."]}
    randomSpeed={true} />
        </h1>
     <br/> <br/>
        <div className="row">
          <LavaButton text="Apply" link="https://f17lavalab.typeform.com/to/jhcnR4" />
          <LavaButton text="Explore" link="#curriculum" />
        </div>
      </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();
  }
  _onStateChange(event){
      if (event.data === 0) {
        event.target.playVideo();
      }
  }
}

export default Landing;
