import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import FishEye from "../assets/images/FishEye.png";
import Btn from "../components/Btn";
import javascript from "../assets/logo/javascript.svg";
import sass from "../assets/logo/Sass.svg";

const FirstProject = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="presentation_project">
			<img className="presentation_project__image" src={FishEye} alt="" />

			<div className="presentation_project__description">
				<p>A platform for photographers coded in HTML, SASS, and JavaScript!</p>

				<div className="logos">
					<img src={javascript} alt="logo-javascript" className="logo" />
					<img src={sass} alt="logo-sass" className="logo" />
				</div>

				<a href="https://github.com/Homarv/Fisheye" className="github_link">
					<FontAwesomeIcon icon={faGithub} className="icon" />
					<Btn text="View on Github" customClass="btn__git">
						{" "}
					</Btn>
				</a>
			</div>
		</div>
	);
};

export default FirstProject;
