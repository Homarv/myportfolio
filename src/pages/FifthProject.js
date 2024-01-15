import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


import javascript from '../assets/logo/javascript.svg'
import sass from '../assets/logo/Sass.svg'




const FifthProject = () => {
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

export default FifthProject;
