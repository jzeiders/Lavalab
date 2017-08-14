import React, { Component } from 'react';
import '../App.css';

import MediaQuery from 'react-responsive';

class NavBar extends Component {

  render() {
    return (
      <nav>
      //   <MediaQuery query='(min-width: 480px)'>
      //     <h1>Computer</h1>
      //     <div className="navWide">
  				// 	<div className="wideDiv">
  				// 		<a href="#">About Us</a>
      //         <a href="#">Portfolio</a>
      //         <a href="#">Sponsors</a>
  				// 		<a href="#">Contact Us</a>
  				// 	</div>
  				// </div>
      //   </MediaQuery>
      //   <MediaQuery query='(max-width: 480px)'>
      //     <h1>Phone</h1>
      //     <div className="navNarrow">
  				// 	<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
  				// 	<div className="narrowLinks">
      //         <a href="#">About Us</a>
      //         <a href="#">Portfolio</a>
      //         <a href="#">Sponsors</a>
  				// 		<a href="#">Contact Us</a>
  				// 	</div>
  				// </div>
      //   </MediaQuery>



			</nav>
    );
  };
  burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}

}

export default NavBar;
