import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const DropdownHambuger = () => {
	const [isOpen, setIsOpen] = useState(false);

	const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/myportfolio") {
      window.scrollTo(0, 0);
    }
  };

	return (
		<div className="dropdown-hamburger">
			<div
				className="dropdown-hamburger__btn"
				onClick={() => setIsOpen(!isOpen)}
			>
				<FontAwesomeIcon icon={faBars} />
			</div>
			{isOpen && (
				<div className="dropdown-hamburger__links">
					<ul>
						<li className="dropdown-hamburger__link">
							<Link to="/myportfolio" onClick={handleHomeClick}>
								Home
							</Link>
						</li>
						<li className="dropdown-hamburger__link">
							<a href="#skills">Skills</a>
						</li>
						<li className="dropdown-hamburger__link">
							<a href="#project">Projects</a>
						</li>
						<li className="dropdown-hamburger__link border-bottom">
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default DropdownHambuger;
