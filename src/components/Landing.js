import React, { Component } from 'react';
import '../App.css';
import YouTube from 'react-youtube';

import LavaButton from './Button';

class Landing extends Component {
  render() {
    const { strings } = this.props;
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
        <img className="landing-logo" src="lavalab.png" />
        <h1>WELCOME TO LAVALAB</h1>
        <h1>F u r t h e r i n g \ (•◡•) / I n n o v a t i o n</h1>
        <h1> We are innovators! swag moniez. </h1> <br/> <br/>
        <LavaButton text="Apply" link="https://www.reddit.com/r/nba/" /> <br/><br/>
        <LavaButton text="Explore" link="https://www.reddit.com/r/nba/" /> <br/><br/>
        <LavaButton text="Check Out the New Cohort" link="https://www.reddit.com/r/nba/" /> <br/><br/>


        <img className="downarrow" src="downarrow.png" />
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
