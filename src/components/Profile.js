import React, { Component } from 'react';
import '../App.css';

class Profile extends Component {


  render() {
    return (
      <div className="profile">
        hello
      </div>
    );
  }
}

Profile.defaultProps = {
    background: 'black',
    photoURL: 'p'
};

export default Profile;
