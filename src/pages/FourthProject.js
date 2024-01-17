import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import BankAPI from "../assets/images/BankAPI.png";
import Btn from "../components/Btn";
import react from "../assets/logo/React-icon.svg";
import sass from "../assets/logo/Sass.svg";
import redux from "../assets/logo/redux.svg";

const FourthProject = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="presentation_project">
			<img className="presentation_project__image" src={BankAPI} alt="" />

			<div className="presentation_project__description">
				<p>
					Un site de compte utilisateur bancaire avec React
					<br />
					La récupération de données se fait via une API <br />
					Le projet utlise Redux
					<br />
				</p>

				<div className="logos">
					<img src={react} alt="logo-react" className="logo" />
					<img src={redux} alt="logo-redux" className="logo" />
					<img src={sass} alt="logo-sass" className="logo" />
				</div>

				<a
					href="https://github.com/Homarv/Project-10-Bank-API"
					className="github_link"
				>
					<FontAwesomeIcon icon={faGithub} className="icon" />
					<Btn text="View on Github" customClass="btn__git">
						{" "}
					</Btn>
				</a>
			</div>
		</div>
	);
};

export default FourthProject;
