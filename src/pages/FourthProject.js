import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const FourthProject = () => {
	return (
		<div>
			<a
				href="https://github.com/Homarv?tab=overview&from=2023-12-01&to=2023-12-16"
				className="contact__link"
			>
				<FontAwesomeIcon icon={faGithub} className="contact__icon" />
			</a>
		</div>
	);
};

export default FourthProject;
