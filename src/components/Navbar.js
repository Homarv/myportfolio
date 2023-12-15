import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
      <div className="logo-container">
        <img src="chemin/vers/ton/logo.png" alt="Logo de ton site" />
      </div>
			<ul>
				<li className="navbar__link">
					<Link to="/">Home</Link>
				</li>
				<li className="navbar__link">
					<Link to="/work">Work</Link>
				</li>
				<li className="navbar__link">
					<Link to="/about">About Me</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
