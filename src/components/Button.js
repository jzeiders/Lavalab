import React, { Component } from 'react';
import '../App.css';

import { Button } from 'react-bootstrap';


class LavaButton extends Component {
  render() {
    return (
        <Button href={this.props.link}>
          {this.props.text}
        </Button>

    );
  }
}
export default LavaButton;
