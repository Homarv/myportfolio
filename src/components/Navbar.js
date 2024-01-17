import React from "react";
import { Link, useLocation } from "react-router-dom";
import Btn from "./Btn";
import logo from "../assets/logo/logoMvp.png";
import DropdownHambuger from "./DropdownHambuger";

const Navbar = () => {
	const location = useLocation();

	const handleHomeClick = () => {
		if (location.pathname === "/myportfolio") {
			window.scrollTo(0, 0);
		}
	};

	return (
		<nav className="navbar">
			<Link to="/myportfolio" className="logo-container">
				<img src={logo} alt="Logo" className="logo-img" />
			</Link>
			<div className="navbar__links">
				<ul>
					<li className="navbar__link">
						<Link to="/myportfolio" onClick={handleHomeClick}>
							Home
						</Link>{" "}
					</li>
					<li className="navbar__link">
						<a href="#skills">Skills</a>
					</li>
					<li className="navbar__link">
						<a href="#project">Projects</a>
					</li>
				</ul>
				<a href="#contact">
					<Btn text="Contact" />
				</a>
			</div>
			<DropdownHambuger />
		</nav>
	);
};

export default Navbar;
