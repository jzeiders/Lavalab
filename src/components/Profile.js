import React, { Component } from 'react';
import '../App.css';

class Profile extends Component {


  render() {
    return (
      <div style={{backgroundColor: this.props.background}} className="profile">
        <img className="profile-image" src={this.props.src} />
        <h3 style={{color: this.props.textColor}}> {this.props.title} </h3>
        <h4 style={{color: this.props.textColor}}> {this.props.subTitle} </h4>
      </div>
    );
  }
}

Profile.defaultProps = {
    textColor: 'white',
    background: 'black',
    src: 'justinhe.png'
};

export default Profile;
