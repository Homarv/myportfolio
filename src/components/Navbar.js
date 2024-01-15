import React from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";
import logo from "../assets/logo/logoo.png"

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="logo-container">
				<img src={logo} alt="Logo" className="logo-img" />
			</div>
			<div className="navbar__links">
				<ul>
					<li className="navbar__link">
						<Link to="/">Home</Link>
					</li>
					<li className="navbar__link">
						<Link to="/work">Work</Link>
					</li>
					<li className="navbar__link">
						<Link to="/">About Me</Link>
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
