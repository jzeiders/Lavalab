import React, { Component } from 'react';
import './App.css';
import YouTube from 'react-youtube';
import scrollToComponent from 'react-scroll-to-component';

import Landing from './components/Landing';
import NewCohort from './components/NewCohort';
import Curriculum from './components/Curriculum';
import Team from './components/Team';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="test">
        <Landing />
        <Curriculum />
        <Team />
      </div>
    );
  }
}


export default App;
