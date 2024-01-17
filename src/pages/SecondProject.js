import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Sportsee from "../assets/images/Sportsee.png";
import Btn from "../components/Btn";
import react from "../assets/logo/React-icon.svg";
import sass from "../assets/logo/Sass.svg";

const SecondProject = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="presentation_project">
			<img className="presentation_project__image" src={Sportsee} alt="" />

			<div className="presentation_project__description">
				<p>
					Un tableau de Bord Analytique codé en React <br />
					Le projet utilise la bibliothèque graphique Rechart <br />
					La récupération de données se fait via une API
				</p>

				<div className="logos">
					<img src={react} alt="logo-react" className="logo" />
					<img src={sass} alt="logo-sass" className="logo" />
				</div>

				<a href="https://github.com/Homarv/sportsee" className="github_link">
					<FontAwesomeIcon icon={faGithub} className="icon" />
					<Btn text="View on Github" customClass="btn__git">
						{" "}
					</Btn>
				</a>
			</div>
		</div>
	);
};

export default SecondProject;
