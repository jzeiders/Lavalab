import React, { Component } from 'react';
import './App.css';
import YouTube from 'react-youtube';
import scrollToComponent from 'react-scroll-to-component';
import ReacrBootstrap from 'react-bootstrap'


import Landing from './components/Landing';
import NewCohort from './components/NewCohort';
import Curriculum from './components/Curriculum';
import Team from './components/Team';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Community from './components/Community';



class App extends Component {
  render() {
    return (
      <div className="test">
        <Landing />
        <Community />
        <Curriculum />
        <Team />
        <Footer />
      </div>
    );
  }
}


export default App;
