import React, { Component } from 'react';
import '../App.css';

class LavaButton extends Component {
  render() {
    return (
        <button href={this.props.link}>
          {this.props.text}
        </button>
    );
  }
}
export default LavaButton;