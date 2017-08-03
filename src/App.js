import React, { Component } from 'react';
import './App.css';
import YouTube from 'react-youtube';

import Landing from './components/Landing';
import NewCohort from './components/NewCohort';

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


export default App;
