import React, { Component } from 'react';
import '../App.css';

class Curriculum extends Component {
  render() {
    return (
      <div>
      <div className="topReverse"></div>
          <div className="curriculum" onclick="window.location.hash='back'">
            <h1> Join a Fullfilling Community. </h1>
                  <br/>
                  <div className="row">
                      <div className="col-md-4">
                        <h1>Work.</h1>
                        <p>
                          The LavaLab network is incredibly strong and grows every graduating semester. We have members and alumni in all areas of industry, and actively maintain resume books and relationships with our industry partners and recruiters (including Apple, Snapchat, Electronic Arts, and more).
                        </p>
                      </div>
                      <div className="col-md-4">
                        <h1>Learn.</h1>
                        <p>
                          The LavaLab community is an inspiring and exciting academic enviroment. We'll host study nights, workshops, company tours, and many of your cohort members are also your classmates.
                        </p>
                      </div>
                      <div className="col-md-4">
                        <h1>Belong.</h1>
                        <p>
                          Our primary goal is to build a fun, safe community made of passionate and energetic friends. As an organization, we host select social events and retreats, tailgates, hackathons, recruiting events and more.
                        </p>
                      </div>
                  </div>
          </div>
      <div className="bottom"></div>
      </div>
    );
  }
}
export default Curriculum;
