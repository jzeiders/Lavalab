import React, { Component } from 'react';
import '../App.css';

class Button extends Component {
  render() {
    return (
      <div>
        <a href={this.props.link}>
          {this.props.text}
        </a>
      </div>

    );
  }
}
export default Button;
