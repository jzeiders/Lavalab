import React, { Component } from "react";
import "../App.css";

import Profile from "./Profile";

class Team extends Component {
	render() {
		return (
			<div>
				<div className="topBlack" />
				<div className="team">
					<h1> The Lavalab Team </h1>
					<div className="row">
						<div className=".col-md-*">
							<Profile
								src="joe_turtel.jpg"
								title="Joseph Turtel"
								subTitle="Managing Director"
							/>
							<Profile
								src="ankit_m.jpg"
								title="Ankit Mukherjee"
								subTitle="Director of Operations"
							/>
							<Profile
								src="natalie_pearson.jpg"
								title="Natalie Pearson"
								subTitle="Director of Community"
							/>
						</div>
						<div className=".col-md-*">
							<Profile
								src="ali_m.jpg"
								title="Ali Malamud"
								subTitle="Director of Design and Brand"
							/>
							<Profile
								src="jack_zeiders.jpg"
								title="Jack Zeiders"
								subTitle="Director of Development"
							/>
							<Profile
								src="harry_valner.jpg"
								title="Harry Valner"
								subTitle="Director of Recruitment"
							/>
						</div>
						<div className=".col-md-*">
							<Profile
								src="ryan_roddy.jpg"
								title="Ryan Roddy"
								subTitle="Director of Sponsorship"
							/>
							<Profile
								src="arielle_smith.jpg"
								title="Arielle Smith"
								subTitle="Director of Industry Relations"
							/>
						</div>
					</div>
				</div>
				<div className="bottomReverse" />
			</div>
		);
	}
}
export default Team;
