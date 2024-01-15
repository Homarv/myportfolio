import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import FishEye from "../assets/images/FishEye.png";
import Btn from "../components/Btn";


import react from '../assets/logo/React-icon.svg'
import javascript from '../assets/logo/javascript.svg'
import sass from '../assets/logo/Sass.svg'
import redux from '../assets/logo/redux.svg'

const FirstProject = () => {
	return (
		<div className="presentation_project">
			<img className="presentation_project__image" src={FishEye} alt="" />

			<div className="presentation_project__description">
				<p>Une plateforme de photographe codé en HTML, SASS et Javascript !</p>

        <img src={javascript} alt="logo-javascript" className="logo"/>
     
				<a href="https://github.com/Homarv/Fisheye" className="github_link">
         <FontAwesomeIcon icon={faGithub} className="icon" />
					<Btn text="View on Github"> </Btn>
				</a>
			</div>
		</div>
	);
};

export default FirstProject;
