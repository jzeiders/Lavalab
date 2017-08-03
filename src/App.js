import React, { Component } from 'react';
import './App.css';
import YouTube from 'react-youtube';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Landing />
        <NewCohort />
      </div>
    );
  }
}

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
        <img src="lavalab.png" />
        <h1> We are innovators! swag moniez. </h1>
        <button> Apply Now </button>
        <button> Meet The New Cohort </button>
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

class NewCohort extends Component {
  render() {
    return (
      <div>
      <div className="top"></div>
      <div className="newCohort">
        <h1> Meet the New Cohort! </h1>
      </div>
      </div>
    );
  }
}


export default App;
