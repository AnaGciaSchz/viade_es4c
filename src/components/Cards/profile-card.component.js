import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt, faRoute, faUserFriends} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import "./cards.css";

/**
 * Cards with the notification info to display on the lists of routes
 * @param props
 * @returns {*}
 * @constructor
 */
export const ProfileCardComponent = (props) => {

	return (
		<div className={"route-card"}>
			{/* Left side of the card, contains the image and hidden fields */}
			<div className="route-card-left profile-card-left">
				{props.image}
				{/* Hidden fields, we should the same as visible and the a spn the mark it is a link */}
				<div className="route-card-extra">
					<h1>
						{props.name}
						<a href={props.webId}>
							<FontAwesomeIcon icon={faExternalLinkAlt} data-toggle="tooltip" title="My POD"/>
						</a>
					</h1>
					<div className="stats">
						<div>
							<Link to={"/myRoutes"}>
								<FontAwesomeIcon icon={faRoute}/>
								<div className="title">My Routes</div>
								<div className="value">{props.nMyRoutes ? props.nMyRoutes : "?"}</div>
							</Link>
						</div>
						<div>
							<Link to={"/friendsRoutes"}>
								<FontAwesomeIcon icon={faUserFriends}/>
								<div className="title">Friend Routes</div>
								<div className="value">{props.nFriendsRoutes ? props.nFriendsRoutes : "?"}</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* Right side of the card, with the visible info */}
			<div className={"route-card-right"}>
				<h1>{props.name}</h1>
				<p className="profile-card-webid">{props.user}</p>
				{/* Maybe putting a non clickable link is not a good idea*/}
			</div>
		</div>
	);
};