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
					An e-commerce website
					<br />
					A Node.js back-end
					<br />
					A MongoDB database
					<br />
					A React front-end
					<br />
					The project uses Redux
					<br />
				</p>

				<div className="logos">
					<img src={react} alt="logo-react" className="logo" />
					<img src={redux} alt="logo-redux" className="logo" />
					<img src={sass} alt="logo-sass" className="logo" />
				</div>

				<a
					href="https://github.com/Homarv/ProjectPerso"
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

export default FifthProject;
