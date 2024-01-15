import React from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";
import logo from "../assets/logo/logoo.png"

const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to ="/" className="logo-container">
				<img src={logo} alt="Logo" className="logo-img" />
			</Link>
			<div className="navbar__links">
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
				</ul>
				<a href="#contact">
					<Btn text="Contact"/>
				</a>

			</div>
		</nav>
	);
};

export default Navbar;
