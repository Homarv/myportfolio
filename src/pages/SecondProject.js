import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Sportsee from "../assets/images/Sportsee.png";
import Btn from "../components/Btn";


import react from '../assets/logo/React-icon.svg'
import javascript from '../assets/logo/javascript.svg'
import sass from '../assets/logo/Sass.svg'
import redux from '../assets/logo/redux.svg'

const SecondProject = () => {
	return (
		<div className="presentation_project">
			<img className="presentation_project__image" src={Sportsee} alt="" />

			<div className="presentation_project__description">
				<p>
					Un tableau de Bord Analytique codé en React <br />
					Le projet utilise la bibliothèque graphique Rechart <br />
					La récupération de données se fait via une API
				</p>
				<a href="https://github.com/Homarv/sportsee" className="github_link">
					<FontAwesomeIcon icon={faGithub} className="icon" />
					<Btn text="View on Github"> </Btn>
				</a>
			</div>
		</div>
	);
};

export default SecondProject;
