import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const ThirdProject = () => {
	return (
		<div>
			<a
				href="https://github.com/Homarv/P11"
				className="contact__link"
			>
				<FontAwesomeIcon icon={faGithub} className="contact__icon" />
			</a>
		</div>
	);
};

export default ThirdProject;
