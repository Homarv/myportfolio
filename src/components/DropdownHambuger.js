import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const DropdownHambuger = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="dropdown-hamburger">
			<button onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
			{isOpen && (
				<div className="dropdown-hamburger__links">
					<ul>
						<li className="navbar__link">
							<Link to="/">Home</Link>
						</li>
						<li className="navbar__link">
							<a href="#skills">Skills</a>
						</li>
						<li className="navbar__link">
							<a href="#project">Projects</a>
						</li>
						<li className="navbar__link">
							<a href="#contact">Projects</a>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default DropdownHambuger;
