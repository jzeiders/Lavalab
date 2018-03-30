import React, { Component } from 'react';
import '../App.css';

import Scroll from 'react-scroll';
var scroll = Scroll.animateScroll;


class LavaButton extends Component {

  scrollTo() {
    scroll.scrollTo(500);
  }

  render() {
      if (this.props.scrollButton === "1") {
        return ( <a onClick={this.scrollTo}><button className="hvr-grow">
          {this.props.text}
        </button></a>
        );
      }
      else if (this.props.scrollButton === "2") {
        return (
        <a className="buttonLink" href={this.props.link}><button className="hvr-grow curriculumButton">
          {this.props.text}
        </button></a>
        );
      }
      else {
        return (
        <a href={this.props.link}><button className="hvr-grow">
          {this.props.text}
        </button></a>
        );
    }
  }
}

export default LavaButton;
