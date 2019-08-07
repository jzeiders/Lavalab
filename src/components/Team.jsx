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
								src="ankit_m.jpg"
								title="Ankit Mukherjee"
								subTitle="Managing Director"
							/>
							<Profile
								src="gavin_bains.jpg"
								title="Gavin Bains"
								subTitle="Director of Operations"
							/>
							<Profile
								src="sahar_rohani.jpg"
								title="Sahar Rohani"
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
								src="gus_goetze.jpg"
								title="Gus Goetze"
								subTitle="Director of Recruitment"
							/>
						</div>
						<div className=".col-md-*">
							<Profile
								src="stiven_deleur.jpg"
								title="Stiven Deleur"
								subTitle="Director of Sponsorship"
							/>
							<Profile
								src="nat_redfern.jpg"
								title="Nat Redfern"
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
