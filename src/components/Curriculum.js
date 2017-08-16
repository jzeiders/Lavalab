import React, { Component } from 'react';
import '../App.css';

class Curriculum extends Component {
  render() {
    return (
      <div>
      <div className="topReverse"></div>
      <div className="curriculum" onclick="window.location.hash='back'">
        <h1> What do we do? </h1>
        <p> Founded in 2013, <b>LAVALAB</b> is <b>USC's premier product incubator</b>. Every semester, Lavalab
        admits a cohort of approximately 25 students from USC’s top talent in engineering, business, and design.
        Each cohort goes through a <b>comprehensive and iterative curriculum</b> on developing a product, 
        accompanied by <b>informative fireside chats</b> with industry leaders, including the likes of Elon Musk,
        Nathan Patterson, and Arielle Zuckerburg. The 8-week program culminates in <b>Demo Night</b>, a
        professional showcase of entirely student-created products, judged by experienced industry figures. 
        Click <a href="/curriculum.jpg"><b>here</b></a> for a more detailed explanation.
        </p>
      </div>
      <div className="bottom"></div>
      </div>
    );
  }
}
export default Curriculum;
