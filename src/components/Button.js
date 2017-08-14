import React, { Component } from 'react';
import '../App.css';

class LavaButton extends Component {
  render() {
    return (
        <a href={this.props.link}><button className="hvr-grow">
          {this.props.text}
        </button></a>
    );
  }
}
export default LavaButton;
