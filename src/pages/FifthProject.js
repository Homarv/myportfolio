import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Btn from "../components/Btn";
import react from "../assets/logo/React-icon.svg";
import sass from "../assets/logo/Sass.svg";
import redux from "../assets/logo/redux.svg";

const FifthProject = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="presentation_project">
			<img className="presentation_project__image" src="" alt="" />

			<div className="presentation_project__description">
				<p>
					Un site e-commerce
					<br />
					Un back-end en Node JS <br />
					Une base de données en MongoDB
					<br />
					Un front en React <br />
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
					<FontAwesomeIcon icon={faGithub} customClass="btn__git" />
					<Btn text="View on Github"> </Btn>
				</a>
			</div>
		</div>
	);
};

export default FifthProject;
