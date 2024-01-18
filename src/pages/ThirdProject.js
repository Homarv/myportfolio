import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AlgoJS from "../assets/images/AlgoJS.png";
import javascript from "../assets/logo/javascript.svg";
import Btn from "../components/Btn";

const ThirdProject = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="presentation_project">
			<img className="presentation_project__image" src={AlgoJS} alt="" />

			<div className="presentation_project__description">
				<p>
					A search algorithm coded in Javascript!
					<br />
				</p>
				<div className="logos">
					<img src={javascript} alt="logo-javascript" className="logo" />
				</div>

				<a href="https://github.com/Homarv/P11" className="github_link">
					<FontAwesomeIcon icon={faGithub} className="icon" />
					<Btn text="View on Github" customClass="btn__git">
						{" "}
					</Btn>
				</a>
			</div>
		</div>
	);
};

export default ThirdProject;
